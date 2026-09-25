export const SITE_URL = 'https://drkpharma.edu.in'
export const SITE_NAME = 'D.R. Karigowda College of Pharmacy'
export const pages = {
  '/': { title: `${SITE_NAME}, Hassan`, description: 'Explore pharmacy programs, admissions, faculty and campus facilities at D.R. Karigowda College of Pharmacy in Hassan, Karnataka.', label: 'Home' },
  '/academics/': { title: `Pharmacy Programs & Academics | DRKCP, Hassan`, description: 'Explore D.Pharm, B.Pharm and M.Pharm programs, course structures and academic information at D.R. Karigowda College of Pharmacy, Hassan.', label: 'Academics' },
  '/courses/d-pharm/': { title: 'D.Pharm in Hassan | D.R. Karigowda College of Pharmacy', description: 'Explore the Diploma in Pharmacy program at DRKCP, Hassan, including course duration, practical training and admission enquiries.', label: 'D.Pharm' },
  '/courses/b-pharm/': { title: 'B.Pharm in Hassan | D.R. Karigowda College of Pharmacy', description: 'Discover the Bachelor of Pharmacy program at DRKCP, Hassan. Read about the four-year course, curriculum and how to enquire about admissions.', label: 'B.Pharm' },
  '/courses/m-pharm/': { title: 'M.Pharm in Hassan | D.R. Karigowda College of Pharmacy', description: 'Explore postgraduate pharmacy study at DRKCP, Hassan. Enquire about M.Pharm specializations, admission requirements and research opportunities.', label: 'M.Pharm' },
  '/admissions/': { title: 'Pharmacy Admissions in Hassan | DRKCP', description: 'Plan your pharmacy admission enquiry at DRKCP, Hassan. Explore programs, prepare your documents and contact the college for current admission details.', label: 'Admissions' },
  '/faculty/': { title: 'Faculty & Leadership | DRKCP, Hassan', description: 'Meet the leadership and academic faculty of D.R. Karigowda College of Pharmacy in Hassan and explore the faculty directory.', label: 'Faculty & Leadership' },
  '/campus-life/': { title: 'Campus, Laboratories & Facilities | DRKCP, Hassan', description: 'Explore pharmacy laboratories, the library, student facilities and campus life at D.R. Karigowda College of Pharmacy in Hassan.', label: 'Campus Life' },
  '/important-links/': { title: 'University & Student Resources | DRKCP, Hassan', description: 'Find university services, academic resources and student support links from D.R. Karigowda College of Pharmacy, Hassan.', label: 'Important Links' },
  '/disclosures/': { title: 'Mandatory Disclosures & Documents | DRKCP, Hassan', description: 'Access institutional approval letters and mandatory disclosure documents published by D.R. Karigowda College of Pharmacy, Hassan.', label: 'Disclosures' },
  '/contact/': { title: 'Contact & Directions | DRKCP, Hassan', description: 'Contact D.R. Karigowda College of Pharmacy in Udayagiri, Kuvempunagar, Hassan. Find phone numbers, directions and the college enquiry form.', label: 'Contact' },
}
export const normalizePath = path => path === '/' ? '/' : path.replace(/\/+$/, '') + '/'
export const pageFor = path => pages[normalizePath(path)] || { title: 'Page not found | DRKCP', description: 'The requested page could not be found. Explore pharmacy programs and contact D.R. Karigowda College of Pharmacy.', noindex: true }
export function structuredData(path) {
  path = normalizePath(path)
  if (!pages[path]) return null
  const organization = { '@type': 'CollegeOrUniversity', '@id': `${SITE_URL}/#college`, name: SITE_NAME, alternateName: 'DRKCP', url: SITE_URL + '/', logo: SITE_URL + '/images/drkcp-logo.png', telephone: '+91-9945914800', email: 'drkcph@gmail.com', address: { '@type': 'PostalAddress', streetAddress: 'Udayagiri, Kuvempunagar', addressLocality: 'Hassan', addressRegion: 'Karnataka', postalCode: '573201', addressCountry: 'IN' } }
  const graph = [organization, { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: SITE_URL + '/', name: SITE_NAME, alternateName: 'DRKCP', publisher: { '@id': organization['@id'] } }]
  if (path !== '/') {
    const crumbs = [{ name: 'Home', item: SITE_URL + '/' }]
    if (path.startsWith('/courses/')) crumbs.push({ name: 'Academics', item: SITE_URL + '/academics/' })
    crumbs.push({ name: pages[path].label, item: SITE_URL + path })
    graph.push({ '@type': 'BreadcrumbList', itemListElement: crumbs.map((crumb, i) => ({ '@type': 'ListItem', position: i + 1, ...crumb })) })
  }
  return { '@context': 'https://schema.org', '@graph': graph }
}
export const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char])
export function seoHead(path) {
  const page = pageFor(path), url = SITE_URL + normalizePath(path), data = structuredData(path)
  return `<title>${escapeHtml(page.title)}</title>
<meta name="description" content="${escapeHtml(page.description)}" />
<meta name="robots" content="${page.noindex ? 'noindex, follow' : 'index, follow'}" />
${page.noindex ? '' : `<link rel="canonical" href="${url}" />`}
<meta property="og:type" content="website" />
<meta property="og:site_name" content="${SITE_NAME}" />
<meta property="og:title" content="${escapeHtml(page.title)}" />
<meta property="og:description" content="${escapeHtml(page.description)}" />
<meta property="og:url" content="${escapeHtml(url)}" />
<meta property="og:image" content="${SITE_URL}/images/drkcp-logo.png" />
<meta property="og:image:alt" content="${SITE_NAME}" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="${escapeHtml(page.title)}" />
<meta name="twitter:description" content="${escapeHtml(page.description)}" />
<meta name="twitter:image" content="${SITE_URL}/images/drkcp-logo.png" />
${data ? `<script type="application/ld+json" id="college-schema">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>` : ''}`
}
