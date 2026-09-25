import { build } from 'vite'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { pages, SITE_URL, seoHead } from '../src/lib/seo.mjs'

await build()
// Keep the build-only renderer outside the publicly served directory.
const rendererDir = 'node_modules/.cache/drkcp-prerender'
await build({ build: { ssr: 'src/entry-server.jsx', outDir: rendererDir, emptyOutDir: true, copyPublicDir: false } })
const { render } = await import(pathToFileURL(resolve(rendererDir, 'entry-server.js')).href)
const template = await readFile('dist/index.html', 'utf8')
for (const path of [...Object.keys(pages), '/404/']) {
  const html = template.replace(/<!--seo-start-->[\s\S]*?<!--seo-end-->/, seoHead(path))
    .replace('<div id="root"></div>', () => `<div id="root">${render(path)}</div>`)
  const destination = path === '/404/' ? 'dist/404.html' : `dist${path}index.html`
  await mkdir(dirname(destination), { recursive: true })
  await writeFile(destination, html)
}
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Object.keys(pages).map(path => `  <url><loc>${SITE_URL}${path}</loc></url>`).join('\n')}\n</urlset>\n`)
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)
console.log(`Pre-rendered ${Object.keys(pages).length} public pages and a 404 page; generated sitemap.xml and robots.txt.`)
