import { resolve } from 'node:path'
import { createApp } from './index.mjs'

// Preview uses the production file routing, including real 404 responses.
// The enquiry plugin is installed first and owns /api/enquiry with its loaded env.
export function seoPreview() {
  let root
  return {
    name: 'drkcp-seo-preview',
    configResolved(config) { root = resolve(config.root, config.build.outDir) },
    configurePreviewServer(server) {
      const app = createApp({ root, env: {} })
      server.middlewares.use(app.listeners('request')[0])
    },
  }
}
