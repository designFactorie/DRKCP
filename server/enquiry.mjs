import { createHash } from 'node:crypto'
import { INSTITUTION, PROTOCOL, RECEIPT_PATTERN, normalizeEnquiry, enquiryFingerprint, withDeadline } from '../src/lib/enquiry.mjs'

const MAX_BYTES = 24000
const json = (code, status = 200) => Response.json({ ok: code === 'SAVED', code }, { status, headers: { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' } })
export function createEnquiryEndpoint({ env = process.env, fetchImpl = fetch, timeoutMs = 15000 } = {}) {
  return async request => {
    if (request.method !== 'POST') return json('METHOD', 405)
    const expected = env.ENQUIRY_ALLOWED_ORIGIN || new URL(request.url).origin
    if (request.headers.get('origin') !== expected) return json('ORIGIN', 403)
    if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) return json('VALIDATION', 400)
    let payload
    try {
      const text = await request.text()
      if (Buffer.byteLength(text) > MAX_BYTES) return json('SIZE', 413)
      payload = JSON.parse(text)
    } catch { return json('VALIDATION', 400) }
    if (!payload || typeof payload !== 'object' || !['submit', 'status'].includes(payload.action) || typeof payload.receipt !== 'string' || !RECEIPT_PATTERN.test(payload.receipt)) return json('VALIDATION', 400)
    let data = {}
    if (payload.action === 'submit') {
      data = normalizeEnquiry(payload)
      if (!data) return json('VALIDATION', 400)
      const hash = createHash('sha256').update(enquiryFingerprint(data)).digest('base64url')
      if (hash !== payload.receipt.split(':')[1]) return json('INVALID_RECEIPT', 400)
    }
    if (!/^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(env.ENQUIRY_SCRIPT_URL || '') || !env.ENQUIRY_SCRIPT_SECRET) return json('CONFIG', 503)
    try {
      const result = await withDeadline(async signal => {
        const response = await fetchImpl(env.ENQUIRY_SCRIPT_URL, { method: 'POST', redirect: 'follow', signal, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...data, action: payload.action, receipt: payload.receipt, institution: INSTITUTION, secret: env.ENQUIRY_SCRIPT_SECRET }) })
        if (!response.ok) throw new Error('upstream')
        return response.json()
      }, timeoutMs)
      if (!result || result.protocol !== PROTOCOL || result.institution !== INSTITUTION || result.ok !== (result.code === 'SAVED')) return json('UNKNOWN', 502)
      if (result.code === 'SAVED') return json('SAVED')
      if (result.code === 'NOT_FOUND' && payload.action === 'status') return json('NOT_FOUND')
      if (result.code === 'RATE_LIMIT') return json('RATE_LIMIT', 429)
      if (['AUTH', 'SHEET', 'HEADERS', 'INSTITUTION'].includes(result.code)) return json('CONFIG', 503)
      if (['VALIDATION', 'INVALID_RECEIPT', 'ACTION'].includes(result.code)) return json('VALIDATION', 400)
      return json('UNKNOWN', 502)
    } catch { return json('UNKNOWN', 502) }
  }
}
export function createNodeHandler(options = {}) {
  const endpoint = createEnquiryEndpoint(options)
  return async (req, res) => {
    const send = async response => {
      res.writeHead(response.status, Object.fromEntries(response.headers))
      res.end(await response.text())
    }
    try {
      if (req.method !== 'POST') return await send(json('METHOD', 405))
      if (Number(req.headers['content-length']) > MAX_BYTES) { req.resume(); return await send(json('SIZE', 413)) }
      const chunks = []
      let size = 0
      const body = await new Promise((resolve, reject) => {
        const timer = setTimeout(() => finish(new Error('deadline')), 10000)
        const finish = (error, result) => {
          clearTimeout(timer); req.off('data', onData); req.off('end', onEnd); req.off('error', onError); req.off('aborted', onAborted)
          if (error) { req.resume(); reject(error) } else resolve(result)
        }
        const onData = chunk => { size += chunk.length; if (size > MAX_BYTES) finish(new Error('size')); else chunks.push(chunk) }
        const onEnd = () => finish(null, Buffer.concat(chunks))
        const onError = () => finish(new Error('body'))
        const onAborted = () => finish(new Error('body'))
        req.on('data', onData); req.on('end', onEnd); req.on('error', onError); req.on('aborted', onAborted)
      })
      const url = `http://${req.headers.host || 'localhost'}/api/enquiry`
      await send(await endpoint(new Request(url, { method: 'POST', headers: req.headers, body })))
    } catch (error) { if (!res.headersSent) await send(json(error.message === 'size' ? 'SIZE' : 'VALIDATION', error.message === 'size' ? 413 : 400)) }
  }
}
