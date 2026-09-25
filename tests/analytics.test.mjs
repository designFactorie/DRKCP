import { test } from 'node:test'
import assert from 'node:assert/strict'
import { trackEvent } from '../src/lib/analytics.mjs'

test('conversion events expose only allowlisted names and paths, never arbitrary URLs or form fields', () => {
  const original = globalThis.window
  try {
    globalThis.window = { location: { pathname: '/contact/', search: '?email=private@example.com', hash: '#private' } }
    trackEvent('enquiry_saved')
    trackEvent('private@example.com')
    assert.deepEqual(window.dataLayer, [{ event: 'enquiry_saved', page_path: '/contact/' }])
    window.location.pathname = '/private@example.com/'
    trackEvent('phone_click')
    assert.deepEqual(window.dataLayer.at(-1), { event: 'phone_click', page_path: '/404/' })
    window.dataLayer = { push() { throw Error('vendor failed') } }
    assert.doesNotThrow(() => trackEvent('enquiry_saved'))
  } finally {
    if (original === undefined) delete globalThis.window
    else globalThis.window = original
  }
})
