import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { resolve, extname, sep } from 'node:path'
import { createNodeHandler } from './enquiry.mjs'
import { loadLocalEnv } from './env.mjs'
import { pathToFileURL } from 'node:url'
import { pages, normalizePath } from '../src/lib/seo.mjs'

export function createApp({ env = process.env, fetchImpl, root = resolve('dist') } = {}) {
  root = resolve(root)
  const api = createNodeHandler({ env, fetchImpl })
  const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.pdf': 'application/pdf', '.woff2': 'font/woff2' }
  return createServer(async (req, res) => {
    if (req.url?.split('?')[0] === '/api/enquiry') return api(req, res)
    try {
      if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405); return res.end() }
      const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname)
      if (pathname.includes('\\') || pathname.split('/').some(part => part.startsWith('.'))) { res.writeHead(404); return res.end() }
      const cleanPath = pathname.replace(/\/index\.html$/, '/')
      const canonicalPath = normalizePath(cleanPath)
      if (Object.hasOwn(pages, canonicalPath) && pathname !== canonicalPath) {
        res.writeHead(308, { Location: canonicalPath + new URL(req.url, 'http://localhost').search })
        return res.end()
      }
      const isPage = Object.hasOwn(pages, canonicalPath)
      const target = resolve(root, '.' + (isPage ? canonicalPath + 'index.html' : pathname))
      if (!target.startsWith(root + sep) || !(await stat(target)).isFile()) { res.writeHead(404); return res.end() }
      res.writeHead(pathname === '/404.html' ? 404 : 200, { 'Content-Type': ({ '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8' })[extname(target)] || types[extname(target)] || 'application/octet-stream', 'X-Content-Type-Options': 'nosniff', 'Cache-Control': pathname.startsWith('/assets/') ? 'public, max-age=31536000, immutable' : 'no-cache' })
      res.end(req.method === 'HEAD' ? undefined : await readFile(target))
    } catch {
      if (res.headersSent) return res.end()
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8', 'X-Robots-Tag': 'noindex' })
      try { res.end(req.method === 'HEAD' ? undefined : await readFile(resolve(root, '404.html'))) }
      catch { res.end('Page not found') }
    }
  })
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  loadLocalEnv()
  if (!process.env.ENQUIRY_ALLOWED_ORIGIN) throw new Error('Set ENQUIRY_ALLOWED_ORIGIN to the public website origin before starting production.')
  const app = createApp()
  app.requestTimeout = 30000
  app.listen(Number(process.env.PORT || 3000), process.env.HOST || '127.0.0.1', () => console.log(`DRKCP server listening on port ${process.env.PORT || 3000}`))
}
