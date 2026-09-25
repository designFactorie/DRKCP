import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { createApp } from '../server/index.mjs'
import { pages, SITE_URL } from '../src/lib/seo.mjs'
import { seoPreview } from '../server/seo-preview.mjs'

test('every public page ships meaningful HTML, unique metadata and consistent schema before JavaScript', async () => {
  const titles = new Set(), descriptions = new Set()
  for (const [path, page] of Object.entries(pages)) {
    const html = await readFile(`dist${path}index.html`, 'utf8')
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, path)
    assert.equal((html.match(/<main[ >]/g) || []).length, 1, path)
    assert.equal((html.match(/<title>/g) || []).length, 1, path)
    assert.equal((html.match(/name="description"/g) || []).length, 1, path)
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1, path)
    assert.ok(html.includes(`rel="canonical" href="${SITE_URL}${path}"`), path)
    assert.ok(html.includes('<main id="main-content"'), path)
    assert.ok(!html.includes('href="#/'), path)
    assert.ok(!html.includes('noindex'), path)
    const schema = JSON.parse(html.match(/id="college-schema">([\s\S]*?)<\/script>/)[1])
    assert.equal(schema['@graph'][0]['@type'], 'CollegeOrUniversity')
    assert.equal(schema['@graph'][0].address.addressLocality, 'Hassan')
    if (path !== '/') assert.equal(schema['@graph'].at(-1).itemListElement.at(-1).item, SITE_URL + path)
    titles.add(page.title); descriptions.add(page.description)
    assert.ok(html.includes('name="fullName"'), 'Enquiry dialog must remain in the rendered app')
    for (const form of html.match(/<form\b[^>]*>/g) || []) {
      assert.match(form, /method="post"/, 'Without JavaScript, personal data must never enter a GET URL')
      assert.match(form, /action="\/api\/enquiry"/)
    }
    assert.ok(!html.includes('ENQUIRY_SCRIPT_SECRET'))
  }
  assert.equal(titles.size, Object.keys(pages).length)
  assert.equal(descriptions.size, Object.keys(pages).length)
})

test('Vite preview uses generated pages and production 404 handling', async () => {
  const { preview } = await import('vite')
  const { enquiryApi } = await import('../server/vite-plugin.mjs')
  const server = await preview({ configFile: false, plugins: [enquiryApi(), seoPreview()], preview: { host: '127.0.0.1', port: 0 }, logLevel: 'silent' })
  const origin = `http://127.0.0.1:${server.httpServer.address().port}`
  try {
    const page = await fetch(origin + '/admissions/')
    assert.equal(page.status, 200); assert.match(await page.text(), /Choose your program/)
    assert.equal((await fetch(origin + '/does-not-exist/')).status, 404)
    const api = await fetch(origin + '/api/enquiry')
    assert.equal(api.status, 405); assert.equal((await api.json()).code, 'METHOD')
  } finally { server.httpServer.closeAllConnections(); await new Promise(resolve => server.httpServer.close(resolve)) }
})

test('production routes, canonical redirects, crawl files, assets and real 404 responses', async () => {
  const server = createApp({ env: {} })
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve))
  const origin = `http://127.0.0.1:${server.address().port}`
  try {
    const links = new Set()
    for (const path of Object.keys(pages)) {
      const result = await fetch(origin + path)
      assert.equal(result.status, 200, path)
      const html = await result.text()
      for (const match of html.matchAll(/(?:href|src)="(\/(?!\/)[^"#?]*)/g)) links.add(match[1])
      if (path !== '/') {
        const redirect = await fetch(origin + path.slice(0, -1) + '?source=test', { redirect: 'manual' })
        assert.equal(redirect.status, 308)
        assert.equal(redirect.headers.get('location'), path + '?source=test')
      }
    }
    for (const path of links) assert.equal((await fetch(origin + path)).status, 200, `Broken internal link: ${path}`)
    const alias = await fetch(origin + '/academics/index.html', { redirect: 'manual' })
    assert.equal(alias.headers.get('location'), '/academics/')
    for (const path of ['/missing/', '/courses/unknown/', '/404.html', '/.env.local']) {
      assert.equal((await fetch(origin + path)).status, 404, path)
    }
    const missing = await fetch(origin + '/missing/')
    assert.match(await missing.text(), /noindex, follow/)
    const head = await fetch(origin + '/courses/b-pharm/', { method: 'HEAD' })
    assert.equal(head.status, 200); assert.equal(await head.text(), '')
    const sitemap = await fetch(origin + '/sitemap.xml')
    assert.match(sitemap.headers.get('content-type'), /application\/xml/)
    const xml = await sitemap.text()
    assert.equal((xml.match(/<loc>/g) || []).length, Object.keys(pages).length)
    for (const path of Object.keys(pages)) assert.ok(xml.includes(`<loc>${SITE_URL}${path}</loc>`))
    assert.ok(!xml.includes('404'))
    assert.match(await (await fetch(origin + '/robots.txt')).text(), /Sitemap: https:\/\/drkpharma.edu.in\/sitemap.xml/)
    const api = await fetch(origin + '/api/enquiry')
    assert.equal(api.status, 405); assert.equal((await api.json()).code, 'METHOD')
  } finally { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)) }
})
