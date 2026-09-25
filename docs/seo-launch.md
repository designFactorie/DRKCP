# DRKCP SEO implementation and launch

## What the code now does

- Builds 11 complete public HTML pages, plus a noindex 404 page. Primary content and metadata are readable without JavaScript.
- Uses normal path URLs with a trailing slash. The production Node server redirects known unslashed and index.html aliases with HTTP 308, preserving query strings.
- Migrates old `/#/academics#bpharm` bookmarks in the browser to `/academics/#bpharm`. Fragments do not reach a server, so an HTTP redirect cannot migrate these alone.
- Generates unique titles, descriptions, canonical URLs, social metadata and CollegeOrUniversity/WebSite/BreadcrumbList JSON-LD from `src/lib/seo.mjs`. Client navigation updates that same metadata.
- Adds individual D.Pharm, B.Pharm, M.Pharm and admissions pages, linked from existing content.
- Generates `/sitemap.xml` and `/robots.txt` from the same page inventory. No fabricated last-modified dates or ranking priorities.
- Keeps the server-side enquiry API. No Google Sheets secrets enter page HTML or the client bundle.
- Reserves image dimensions, prioritizes the homepage hero, removes unused Playfair font requests and makes font stylesheets discoverable in the HTML head.
- Queues conversion events locally for a future analytics integration. This does not install GA4/GTM or send analytics requests.

## 1. Confirm college content

Existing college data has been retained. New pages reuse existing program names and durations. Before launch, the college should verify:

- Founding year: homepage says 2004, logo says ESTD. 1992. No new foundingDate schema was added without confirmation.
- Current approved programs, intake, M.Pharm specializations, eligibility, regulations, deadlines and fee structure.
- Approval/affiliation terminology and the validity of the published documents.
- Faculty records, contact details, placement claims and permission to publish testimonials.

New pages invite enquiries for unavailable current details rather than inventing figures. Admission enquiries are not seat reservations. No scholarships, placements or admissions are guaranteed.

## 2. Build and verify locally

Requires Node 22.12+:

```powershell
npm.cmd ci
npm.cmd run build
npm.cmd run lint
npm.cmd test
npm.cmd run preview -- --host 127.0.0.1
```

Build before tests: SEO tests verify generated HTML and the production HTTP server. Preview uses production file routing and the existing enquiry middleware. Open its printed URL, then test `/courses/b-pharm/`, `/admissions/`, `/contact/` and `/missing/`. Existing `.env.local` settings remain in use for local enquiries.

The build-only React renderer is written beneath ignored node_modules, never dist. `dist` contains public files only. Each future content change needs a fresh build and deployment.

## 3. Production hosting

The live audit found Apache serving an older build. Updating GitHub alone does not prove that this domain receives the new build. Identify the actual deployment job/document root first.

Recommended: run the included Node server behind the existing HTTPS reverse proxy:

```powershell
npm.cmd run build
npm.cmd start
```

Configure the existing server-side ENQUIRY_SCRIPT_URL, ENQUIRY_SCRIPT_SECRET and ENQUIRY_ALLOWED_ORIGIN=https://drkpharma.edu.in. Use a process supervisor on the host and keep secret files outside the public directory. The server binds to 127.0.0.1:3000 by default.

`docs/apache-seo.conf.example` contains reviewable Apache routing snippets; adapt them to existing virtual hosts, TLS certificates and hosting controls. It is not automatically deployed. The edge should redirect HTTP and www requests to https://drkpharma.edu.in while preserving paths and queries. Do not trust arbitrary client-supplied forwarded headers in application code to decide HTTPS redirects.

An alternative static host can serve `dist/<route>/index.html`, but it still needs the existing private `/api/enquiry` backend. Configure unknown paths to return HTTP 404, not the homepage with status 200. GitHub Pages cannot run this enquiry backend. The current GitHub workflow remains a static deployment; its Node version was updated to 22 for compatibility.

## 4. Live acceptance checks

After deployment, verify:

1. HTTPS homepage, every sitemap URL and all course/contact deep links return 200 with their own content. Refresh each deep link.
2. HTTP and www redirect to the preferred HTTPS host without loops; paths and query strings survive.
3. `/academics` redirects to `/academics/`; `/missing/` returns 404.
4. View Source includes an H1, course content, one page title, one description, one canonical and JSON-LD. Disable JavaScript and check navigation/content.
5. `/robots.txt` and `/sitemap.xml` return 200 with appropriate content types. The sitemap includes only final canonical pages.
6. Old hash links still reach the intended page and section.
7. Run `npm.cmd run check:enquiry` on the configured backend, then submit one labelled test with permission and confirm its Sheet row. Local automated tests simulate Google and do not verify live delivery.
8. Check new pages and enquiry dialogs on mobile and desktop. Test keyboard navigation.
9. Run PageSpeed Insights on homepage, course and admissions pages. Record mobile and desktop results. Compare field Core Web Vitals when sufficient real-user data exists; no numerical score is claimed by this implementation.
10. Validate markup with Schema.org Validator and Google's Rich Results Test. Organization markup does not guarantee a special search appearance.

## 5. Search Console — college account access required

1. Add or open the Domain property `drkpharma.edu.in` using a college-controlled account.
2. If unverified, add Google's exact verification TXT record to DNS. Never guess a verification token.
3. Export the baseline Performance and Page indexing reports.
4. Submit `https://drkpharma.edu.in/sitemap.xml` after deploying the working pages.
5. Inspect the homepage, each course and admissions page. Use Test live URL and inspect the rendered HTML. Request indexing after the checks pass.
6. Review indexing exclusions, canonical selections and search query performance over subsequent weeks. Neither a sitemap nor an indexing request guarantees indexing or rankings.

## 6. Analytics — measurement account configuration required

`window.dataLayer` receives only a controlled event name and an allowlisted page path; there are no outgoing analytics requests until an analytics provider is connected.

| Event | Trigger |
| --- | --- |
| enquiry_open | Enquiry dialog opens |
| enquiry_saved | API confirms SAVED, including a recovered acknowledgement |
| phone_click | Telephone link clicked |
| directions_click | Recognized Google Maps directions link clicked |
| brochure_download | College brochure PDF link clicked |

Once the owner supplies the GA4 measurement ID or GTM container and tracking preferences, configure SPA page views and event tags. Map `enquiry_saved` to GA4 `generate_lead` and mark it as a key event. Do not track every submit attempt as a lead. Do not add form fields, query strings, phone/email link targets or submission receipts to analytics. Test with DebugView and browser network inspection before enabling production collection. No placeholder measurement IDs have been deployed.

## 7. Local visibility and ongoing ownership

Claim or update the existing Google Business Profile using a college-controlled account; avoid duplicate listings. Match the published name, address, website and phone, verify the map pin/hours, and add real campus photos. Request genuine reviews without incentives. Confirm official group/university/directory links where appropriate.

Monthly: review Search Console queries and indexing, organic visits, confirmed enquiries and broken links. Before each admission cycle: verify course data, deadlines, documents and staff contacts. Publish substantive college news or student information when available rather than generic keyword pages.

## References

- https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- https://developers.google.com/search/docs/appearance/structured-data/organization
- https://support.google.com/webmasters/answer/34592
- https://support.google.com/business/answer/7091
