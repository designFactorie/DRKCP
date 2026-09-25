import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import vm from 'node:vm'
import { createHash, randomUUID } from 'node:crypto'
import { createServer } from 'node:http'
import { normalizeEnquiry, enquiryFingerprint, getEnquiryReceipt, RECEIPT_PATTERN, submitEnquiry } from '../src/lib/enquiry.mjs'
import { createEnquiryEndpoint, createNodeHandler } from '../server/enquiry.mjs'
import { createApp } from '../server/index.mjs'

const fields = { name: '=Test Applicant', phone: '9000000000', email: 'applicant@example.com', subject: 'admissions', message: '=Labelled test enquiry' }
const headers = ['Date & Time', 'Institution', 'Name', 'Email Address', 'Phone Number', 'Subject', 'Message', 'Submission Receipt', 'Status', 'Notes']
const hash = data => createHash('sha256').update(enquiryFingerprint(data)).digest('base64url')
const submission = (changes = {}) => { const data = { ...fields, ...changes }; return { ...data, receipt: `${randomUUID()}:${hash(data)}`, action: 'submit' } }
const env = { ENQUIRY_SCRIPT_URL: 'https://script.google.com/macros/s/test/exec', ENQUIRY_SCRIPT_SECRET: 'test-secret' }
const saved = { ok: true, code: 'SAVED', protocol: 2, institution: 'DRKCP' }
const request = data => new Request('http://college.example/api/enquiry', { method: 'POST', headers: { Origin: 'http://college.example', 'Content-Type': 'application/json' }, body: JSON.stringify(data) })

function harness(options = {}) {
  const rows = [[...headers]]
  let held = false, lost = false, changeHeaders = false, capacity = options.capacity || 1000
  const plain = value => typeof value === 'string' && value.startsWith("'") ? value.slice(1) : value
  const sheet = {
    getMaxColumns: () => 10, getLastRow: () => rows.length, getMaxRows: () => capacity,
    insertRowsAfter: (after, count) => { assert(held); assert.equal(after, capacity); capacity += count },
    getRange(row, column, height = 1, width = 1) {
      const range = {
        getDisplayValues: () => rows.slice(row - 1, row - 1 + height).map(values => values.slice(column - 1, column - 1 + width).map(value => String(plain(value)))),
        getValues: () => rows.slice(row - 1, row - 1 + height).map(values => values.slice(column - 1, column - 1 + width).map(plain)),
        setNumberFormat: format => { assert.equal(format, 'yyyy-mm-dd hh:mm:ss'); return range },
        setValues: values => { assert(held); assert(row <= capacity); assert.equal(width, 10); rows[row - 1] = values[0] },
        createTextFinder: receipt => ({ matchEntireCell(value) { assert(value); return this }, useRegularExpression(value) { assert.equal(value, false); return this }, findNext: () => rows.slice(1).find(values => values[column - 1] === receipt) || null }),
      }
      return range
    },
  }
  const sandbox = {
    Date,
    ContentService: { MimeType: { JSON: 'json' }, createTextOutput: text => ({ setMimeType: () => JSON.parse(text) }) },
    PropertiesService: { getScriptProperties: () => ({ getProperty: key => { assert.equal(key, 'ENQUIRY_SCRIPT_SECRET'); return 'test-secret' } }) },
    SpreadsheetApp: {
      openById: id => { assert.equal(id, '12j_Rs6qbmOdJ_YgvaNf9gChZbgCbBUzm-mG-0EtNHTM'); return { getSheetByName: tab => { assert.equal(tab, 'DRKCP'); return options.missingSheet ? null : sheet } } },
      flush: () => { if (lost) { lost = false; throw Error('lost acknowledgement') } },
    },
    LockService: { getScriptLock: () => ({ waitLock: () => { if (options.lockTimeout) throw Error('busy'); assert.equal(held, false); held = true; if (changeHeaders) rows[0][5] = 'Wrong' }, hasLock: () => held, releaseLock: () => { held = false } }) },
    Utilities: { Charset: { UTF_8: 'utf8' }, DigestAlgorithm: { SHA_256: 'sha256' }, computeDigest: (_, value) => createHash('sha256').update(value).digest(), base64EncodeWebSafe: value => value.toString('base64url') },
  }
  vm.createContext(sandbox)
  vm.runInContext(readFileSync('docs/enquiry-google-apps-script.gs', 'utf8'), sandbox)
  return { rows, isLocked: () => held, loseNext: () => { lost = true }, changeHeaders: () => { changeHeaders = true }, raw: e => sandbox.doPost(e), send: data => sandbox.doPost({ postData: { contents: JSON.stringify({ secret: 'test-secret', institution: 'DRKCP', ...data }) } }) }
}

test('normalizes current five fields and +91; rejects invalid input', () => {
  assert.equal(normalizeEnquiry({ ...fields, phone: '+91 (90000) 00000' }).phone, fields.phone)
  for (const change of [{ name: ' ' }, { name: 'a'.repeat(121) }, { phone: '90000x00000' }, { phone: '+1 9000000000' }, { phone: '123' }, { email: 'bad' }, { subject: 'BCA' }, { subject: '__proto__' }, { message: '' }, { message: 'a'.repeat(3001) }, { message: null }]) assert.equal(normalizeEnquiry({ ...fields, ...change }), null)
})

test('script writes exact A:J, literal cells, automatic institution and blank staff fields', () => {
  const s = harness({ capacity: 1 }), data = submission()
  assert.deepEqual(s.send(data), saved)
  assert.equal(s.rows.length, 2)
  assert(s.rows[1][0] instanceof Date)
  assert.deepEqual(Array.from(s.rows[1].slice(1)), ["'D.R. Karigowda College of Pharmacy", "'=Test Applicant", "'applicant@example.com", "'9000000000", "'Admissions Inquiry", "'=Labelled test enquiry", data.receipt, '', ''])
  assert.equal(s.isLocked(), false)
  for (const [subject, label] of Object.entries({ admissions: 'Admissions Inquiry', academics: 'Academic Programs', campus: 'Campus Visit', placement: 'Placement & Careers', other: 'Other' })) { const script = harness(); assert.equal(script.send(submission({ subject })).code, 'SAVED'); assert.equal(script.rows[1][5], "'" + label) }
})

test('status is read-only, duplicate receipts are idempotent, cooldown is persistent', () => {
  const s = harness(), data = submission()
  assert.equal(s.send({ action: 'status', receipt: data.receipt }).code, 'NOT_FOUND')
  assert.equal(s.rows.length, 1)
  assert.equal(s.send(data).code, 'SAVED'); assert.equal(s.send(data).code, 'SAVED')
  assert.equal(s.send({ action: 'status', receipt: data.receipt }).code, 'SAVED')
  assert.equal(s.send(submission({ message: 'Another enquiry' })).code, 'RATE_LIMIT')
  assert.equal(s.rows.length, 2)
  s.rows[1][0] = new Date(Date.now() - 61000)
  assert.equal(s.send(submission({ message: 'Another enquiry' })).code, 'SAVED')
})

test('script rejects wrong college, credentials, headers, receipts and invalid fields', () => {
  const s = harness()
  assert.equal(s.send({ ...submission(), secret: 'wrong' }).code, 'AUTH')
  assert.equal(s.send({ ...submission(), institution: 'NDRK FGC' }).code, 'INSTITUTION')
  assert.equal(harness({ missingSheet: true }).send(submission()).code, 'SHEET')
  for (const key of ['name', 'phone', 'email', 'subject', 'message']) { const data = submission(); data[key] = ({ name: 'Other', phone: '9111111111', email: 'other@example.com', subject: 'campus', message: 'Changed' })[key]; assert.equal(s.send(data).code, 'INVALID_RECEIPT') }
  for (const change of [{ name: ' ' }, { phone: '1' }, { email: 'bad' }, { subject: 'BCA' }, { message: null }, { message: '' }, { message: 'a'.repeat(3001) }]) assert.equal(s.send(submission(change)).code, 'VALIDATION')
  s.changeHeaders(); assert.equal(s.send(submission()).code, 'HEADERS'); assert.equal(s.isLocked(), false); assert.equal(s.rows.length, 1)
  const changed = harness(); changed.rows[0][0] = 'Changed'; assert.equal(changed.send(submission()).code, 'HEADERS')
  assert.equal(harness({ lockTimeout: true }).send(submission()).code, 'UNKNOWN')
  for (const contents of ['null', '[]', '{broken', 'x'.repeat(24001)]) assert.equal(harness().raw({ postData: { contents } }).code, 'VALIDATION')
})

test('endpoint overrides client identity and secret; verifies protocol/institution', async () => {
  const post = createEnquiryEndpoint({ env, fetchImpl: async (url, options) => {
    assert.equal(url, env.ENQUIRY_SCRIPT_URL); const data = JSON.parse(options.body); assert.equal(data.secret, 'test-secret'); assert.equal(data.institution, 'DRKCP'); return Response.json(saved)
  } })
  const result = await post(request({ ...submission(), secret: 'evil', institution: 'NDRK FGC' }))
  assert.deepEqual(await result.json(), { ok: true, code: 'SAVED' }); assert.equal(result.headers.get('cache-control'), 'no-store')
  for (const result of [{ ...saved, institution: 'NDRK FGC' }, { ...saved, protocol: 1 }, { ...saved, ok: false }, { ...saved, code: 'UNKNOWN' }]) assert.equal((await createEnquiryEndpoint({ env, fetchImpl: async () => Response.json(result) })(request(submission()))).status, 502)
})

test('endpoint rejects bad method, origin, config, body and receipt before contacting Google', async () => {
  const noFetch = async () => assert.fail('must not contact Google')
  const post = createEnquiryEndpoint({ env, fetchImpl: noFetch })
  assert.equal((await post(new Request('http://college.example/api/enquiry'))).status, 405)
  for (const origin of ['', 'http://other.example', 'null']) { const r = request(submission()); r.headers.set('origin', origin); assert.equal((await post(r)).status, 403) }
  for (const data of [null, {}, { ...submission(), phone: '1' }, { ...submission(), receipt: [] }, { ...submission(), message: 'tampered' }]) assert.equal((await post(request(data))).status, 400)
  assert.equal((await post(request({ ...submission(), pad: 'x'.repeat(25000) }))).status, 413)
  for (const config of [{}, { ...env, ENQUIRY_SCRIPT_URL: 'https://example.com/exec' }]) assert.equal((await createEnquiryEndpoint({ env: config, fetchImpl: noFetch })(request(submission()))).status, 503)
  const prod = createEnquiryEndpoint({ env: { ...env, ENQUIRY_ALLOWED_ORIGIN: 'https://drkpharma.edu.in' }, fetchImpl: async () => Response.json(saved) })
  assert.equal((await prod(request(submission()))).status, 403)
  const valid = request(submission()); valid.headers.set('origin', 'https://drkpharma.edu.in'); assert.equal((await prod(valid)).status, 200)
})

test('rate limits, status and configuration errors have explicit HTTP responses', async () => {
  for (const [code, status] of [['RATE_LIMIT', 429], ['HEADERS', 503], ['AUTH', 503], ['SHEET', 503], ['UNKNOWN', 502], ['VALIDATION', 400]]) {
    const result = await createEnquiryEndpoint({ env, fetchImpl: async () => Response.json({ ...saved, ok: false, code }) })(request(submission()))
    assert.equal(result.status, status)
  }
  const response = await createEnquiryEndpoint({ env, fetchImpl: async () => Response.json({ ...saved, ok: false, code: 'NOT_FOUND' }) })(request({ action: 'status', receipt: submission().receipt }))
  assert.deepEqual(await response.json(), { ok: false, code: 'NOT_FOUND' })
})

test('receipt storage reuses identical data, includes every field, stores no raw personal data', async () => {
  const map = new Map(), storage = { getItem: key => map.get(key), setItem: (key, value) => map.set(key, value) }
  const receipt = await getEnquiryReceipt(fields, storage)
  assert(RECEIPT_PATTERN.test(receipt)); assert.equal(receipt.split(':')[1], hash(fields)); assert.equal(await getEnquiryReceipt(fields, storage), receipt)
  for (const key of ['name', 'phone', 'email', 'subject', 'message']) assert.notEqual(await getEnquiryReceipt({ ...fields, [key]: fields[key] + 'different' }, storage), receipt)
  assert(!JSON.stringify([...map]).includes(fields.email))
  const blocked = { getItem() { throw Error('blocked') }, setItem() { throw Error('blocked') } }
  assert.equal(await getEnquiryReceipt(fields, blocked), receipt)
})

test('complete browser/API/script pipeline recovers lost acknowledgement without duplicate rows', async () => {
  const script = harness(), actions = []
  script.loseNext()
  const endpoint = createEnquiryEndpoint({ env, fetchImpl: async (_, options) => Response.json(script.send(JSON.parse(options.body))) })
  const browserFetch = async (_, options) => { const data = JSON.parse(options.body); actions.push(data.action); return endpoint(request(data)) }
  const receipt = await getEnquiryReceipt(fields)
  assert.deepEqual(await submitEnquiry(fields, receipt, browserFetch), { ok: true, code: 'SAVED' })
  assert.deepEqual(actions, ['submit', 'status']); assert.equal(script.rows.length, 2)
  assert.equal((await submitEnquiry(fields, receipt, browserFetch)).ok, true); assert.equal(script.rows.length, 2)
})

test('maximum Unicode message survives the pipeline and uncertain saves never claim success', async () => {
  const script = harness(), data = submission({ message: '\u0905'.repeat(3000) })
  const endpoint = createEnquiryEndpoint({ env, fetchImpl: async (_, options) => Response.json(script.send(JSON.parse(options.body))) })
  assert.equal((await endpoint(request(data))).status, 200)
  for (const fakeFetch of [async () => { throw Error('offline') }, async () => new Response('<html>Sign in</html>'), async () => Response.json({ ok: false, code: 'NOT_FOUND' }), async () => Response.json({ ok: true, code: 'SAVED' }, { status: 500 })]) assert.equal((await submitEnquiry(fields, data.receipt, fakeFetch)).ok, false)
})

test('hung upstream, response body and browser requests hit deadlines', async () => {
  const never = () => new Promise(() => {})
  for (const fetchImpl of [never, async () => ({ ok: true, json: never })]) assert.equal((await createEnquiryEndpoint({ env, fetchImpl, timeoutMs: 10 })(request(submission()))).status, 502)
  assert.equal((await submitEnquiry(fields, submission().receipt, never, 10)).ok, false)
})

async function listen(server) { await new Promise(resolve => server.listen(0, '127.0.0.1', resolve)); return `http://127.0.0.1:${server.address().port}` }
async function close(server) { server.closeAllConnections?.(); await new Promise(resolve => server.close(resolve)) }
test('real HTTP adapter handles submit, unsupported method and streamed oversized body', async () => {
  const server = createServer(createNodeHandler({ env, fetchImpl: async () => Response.json(saved) })), origin = await listen(server)
  try {
    const options = { method: 'POST', headers: { Origin: origin, 'Content-Type': 'application/json' } }
    assert.equal((await fetch(`${origin}/api/enquiry`, { ...options, body: JSON.stringify(submission()) })).status, 200)
    assert.equal((await fetch(`${origin}/api/enquiry`)).status, 405)
    assert.equal((await fetch(`${origin}/api/enquiry`, { ...options, body: 'x'.repeat(25000) })).status, 413)
    const stream = new ReadableStream({ start(controller) { controller.enqueue(new TextEncoder().encode('x'.repeat(25000))); controller.close() } })
    assert.equal((await fetch(`${origin}/api/enquiry`, { ...options, body: stream, duplex: 'half' })).status, 413)
  } finally { await close(server) }
})

test('Vite dev and preview intercept API requests before HTML fallback', async () => {
  const { createServer: createViteServer, preview } = await import('vite')
  const { enquiryApi } = await import('../server/vite-plugin.mjs')
  const dev = await createViteServer({ configFile: false, cacheDir: mkdtempSync(join(tmpdir(), 'drkcp-vite-test-')), optimizeDeps: { noDiscovery: true, include: [] }, plugins: [enquiryApi()], server: { host: '127.0.0.1', port: 0 }, logLevel: 'silent' })
  await dev.listen()
  const previewServer = await preview({ configFile: false, plugins: [enquiryApi()], build: { outDir: '.' }, preview: { host: '127.0.0.1', port: 0 }, logLevel: 'silent' })
  try {
    for (const server of [dev.httpServer, previewServer.httpServer]) {
      const origin = `http://127.0.0.1:${server.address().port}`
      assert.equal((await fetch(`${origin}/api/enquiry`)).status, 405)
      const r = await fetch(`${origin}/api/enquiry`, { method: 'POST', headers: { Origin: origin, 'Content-Type': 'application/json' }, body: '{}' })
      assert.equal(r.status, 400); assert.equal((await r.json()).code, 'VALIDATION')
    }
  } finally { await dev.close(); await close(previewServer.httpServer) }
})

test('production server serves only dist and keeps API failures JSON', async () => {
  const server = createApp({ env: {} }), origin = await listen(server)
  try {
    assert.equal((await fetch(origin)).status, 200)
    for (const path of ['/.env.local', '/server/enquiry.mjs', '/missing.js', '/%2eenv.local']) assert.equal((await fetch(origin + path)).status, 404)
    const result = await fetch(origin + '/api/enquiry', { method: 'POST', headers: { Origin: origin, 'Content-Type': 'application/json' }, body: JSON.stringify(submission()) })
    assert.equal(result.status, 503); assert.equal((await result.json()).code, 'CONFIG')
  } finally { await close(server) }
})
