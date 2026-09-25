import { loadEnv } from 'vite'
import { createNodeHandler } from './enquiry.mjs'

export function enquiryApi() {
  let env
  const install = server => {
    const handler = createNodeHandler({ env })
    server.middlewares.use((req, res, next) => {
      if (req.url?.split('?')[0] === '/api/enquiry') return handler(req, res)
      next()
    })
  }
  return {
    name: 'drkcp-enquiry-api',
    configResolved(config) { env = { ...loadEnv(config.mode, config.envDir, 'ENQUIRY_'), ...process.env } },
    configureServer: install,
    configurePreviewServer: install,
  }
}
