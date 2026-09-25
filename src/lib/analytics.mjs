import { pages, normalizePath } from './seo.mjs'

const allowed = new Set(['enquiry_open', 'enquiry_saved', 'phone_click', 'directions_click', 'brochure_download'])
// A local event queue for a future analytics integration. This loads no vendor
// scripts and sends no network requests. Never accept form data or arbitrary URLs.
export function trackEvent(event) {
  if (!allowed.has(event) || typeof window === 'undefined') return
  const path = normalizePath(window.location.pathname)
  const page_path = Object.hasOwn(pages, path) ? path : '/404/'
  try {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event, page_path })
  } catch { /* Analytics must never interrupt navigation or a confirmed enquiry. */ }
}
