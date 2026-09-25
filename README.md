# D.R. Karigowda College of Pharmacy

React/Vite website with pre-rendered public pages and a private Node enquiry API.
Requires Node 22.12 or newer.

```powershell
npm.cmd ci
npm.cmd run dev
```

Production build and checks:

```powershell
npm.cmd run build
npm.cmd run lint
npm.cmd test
npm.cmd run preview
```

`build` generates all public page HTML, sitemap.xml and robots.txt. Tests require
the generated build. `preview` serves the built pages locally; use `npm.cmd start`
for the production Node server behind an HTTPS reverse proxy.

- [Enquiry setup and Google Apps Script](docs/enquiry-setup.md)
- [SEO implementation, deployment and account setup](docs/seo-launch.md)

The enquiry API requires private environment variables. Never publish `.env.local`
or a script secret. GitHub Pages serves static pages only; the live form still
requires its backend.
