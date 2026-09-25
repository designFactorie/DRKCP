import { randomUUID, randomBytes } from 'node:crypto'
import { loadLocalEnv } from '../server/env.mjs'
import { createEnquiryEndpoint } from '../server/enquiry.mjs'
loadLocalEnv()
const origin = process.env.ENQUIRY_ALLOWED_ORIGIN || 'http://localhost:3000'
const response = await createEnquiryEndpoint()(new Request(`${origin}/api/enquiry`, {
  method: 'POST', headers: { Origin: origin, 'Content-Type': 'application/json' },
  body: JSON.stringify({ action: 'status', receipt: `${randomUUID()}:${randomBytes(32).toString('base64url')}` }),
}))
const result = await response.json()
if (response.ok && result.code === 'NOT_FOUND') console.log('Connected: DRKCP protocol and A:J headers verified. No row was added.')
else { console.error(`Connection check failed: ${result.code}. Check the DRKCP deployment, script properties, and exact A:J headings.`); process.exitCode = 1 }
