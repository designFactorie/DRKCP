import { useEffect } from 'react'
import { trackEvent } from '../lib/analytics.mjs'

export default function ConversionTracking() {
  useEffect(() => {
    const onClick = event => {
      const link = event.target.closest?.('a[href]')
      if (!link) return
      const url = new URL(link.href, window.location.origin)
      if (url.protocol === 'tel:') trackEvent('phone_click')
      else if (url.origin === window.location.origin && url.pathname === '/documents/NDRK-Pharma-Updated_flyer.pdf') trackEvent('brochure_download')
      else if (url.hostname === 'maps.app.goo.gl' || (url.hostname === 'www.google.com' && url.pathname.startsWith('/maps'))) trackEvent('directions_click')
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  return null
}
