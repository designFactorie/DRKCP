import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { seoHead } from '../lib/seo.mjs'

export default function Seo() {
  const { pathname } = useLocation()
  useEffect(() => {
    const template = document.createElement('template')
    template.innerHTML = seoHead(pathname)
    document.head.querySelectorAll('title, meta[name="description"], meta[name="robots"], meta[property^="og:"], meta[name^="twitter:"], link[rel="canonical"], #college-schema').forEach(node => node.remove())
    document.head.append(template.content)
  }, [pathname])
  return null
}
