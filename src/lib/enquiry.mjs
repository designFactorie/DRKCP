export const INSTITUTION = 'DRKCP'
export const PROTOCOL = 2
export const FIELDS = ['name', 'phone', 'email', 'subject', 'message']
export const SUBJECTS = { admissions: 'Admissions Inquiry', academics: 'Academic Programs', campus: 'Campus Visit', placement: 'Placement & Careers', other: 'Other' }
export const RECEIPT_PATTERN = /^[a-f0-9]{8}-(?:[a-f0-9]{4}-){3}[a-f0-9]{12}:[A-Za-z0-9_-]{43}$/
export function normalizeEnquiry(input) {
  if (!input || FIELDS.some(key => typeof input[key] !== 'string')) return null
  if (!/^\+?[0-9\s()-]+$/.test(input.phone)) return null
  let phone = input.phone.replace(/[\s()-]/g, '')
  if (phone.startsWith('+91')) phone = phone.slice(3)
  const data = Object.fromEntries(FIELDS.map(key => [key, input[key].trim()]))
  data.phone = phone
  if (!data.name || data.name.length > 120 || !/^\d{10}$/.test(phone) || data.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || !Object.hasOwn(SUBJECTS, data.subject) || !data.message || data.message.length > 3000) return null
  return data
}
export const enquiryFingerprint = data => JSON.stringify(FIELDS.map(key => data[key]))
const memory = new Map()
export async function getEnquiryReceipt(data, storage) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(enquiryFingerprint(data)))
  const hash = btoa(String.fromCharCode(...new Uint8Array(digest))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
  const key = `drkcp-enquiry-v2:${hash}`
  let previous = memory.get(key)
  try { storage ??= globalThis.sessionStorage; previous = storage?.getItem(key) || previous } catch { /* Private browsing may block storage. */ }
  if (RECEIPT_PATTERN.test(previous || '') && previous.split(':')[1] === hash) return previous
  const receipt = `${crypto.randomUUID()}:${hash}`
  memory.set(key, receipt)
  if (memory.size > 100) memory.delete(memory.keys().next().value)
  try { storage?.setItem(key, receipt) } catch { /* Keep the receipt in memory. */ }
  return receipt
}
export async function withDeadline(operation, timeoutMs) {
  const controller = new AbortController()
  let timer
  try {
    return await Promise.race([Promise.resolve().then(() => operation(controller.signal)), new Promise((_, reject) => {
      timer = setTimeout(() => { controller.abort(); reject(new Error('deadline')) }, timeoutMs)
    })])
  } finally { clearTimeout(timer) }
}
export async function submitEnquiry(data, receipt, fetchImpl = fetch, timeoutMs = 20000) {
  const request = async action => {
    try {
      return await withDeadline(async signal => {
        const response = await fetchImpl('/api/enquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, signal, body: JSON.stringify(action === 'submit' ? { ...data, receipt, action } : { receipt, action }) })
        const result = await response.json()
        if (response.ok && result.ok === true && result.code === 'SAVED') return { ok: true, code: 'SAVED' }
        return { ok: false, code: typeof result.code === 'string' && result.code !== 'SAVED' ? result.code : 'UNKNOWN' }
      }, timeoutMs)
    } catch { return { ok: false, code: 'UNKNOWN' } }
  }
  const result = await request('submit')
  if (result.ok || !['UNKNOWN', 'NOT_FOUND'].includes(result.code)) return result
  const status = await request('status')
  return status.ok ? status : { ok: false, code: 'UNKNOWN' }
}
