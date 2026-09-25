# DRKCP enquiry setup

The popup and Contact Us share five fields: Full Name, Phone Number, Email Address, Subject, Message. All are required. This integration uses protocol 2 and ten columns. Do not use the FGC fifteen-column script or edit another college's tab/project.

## 1. Spreadsheet

Spreadsheet: `12j_Rs6qbmOdJ_YgvaNf9gChZbgCbBUzm-mG-0EtNHTM`.
Tab: **DRKCP** (exact spelling, no extra spaces).

Paste into A1; split on `|` so the result occupies A1:J1:

```text
Date & Time|Institution|Name|Email Address|Phone Number|Subject|Message|Submission Receipt|Status|Notes
```

- A: automatic timestamp (set the spreadsheet timezone to India Standard Time).
- B: automatic `D.R. Karigowda College of Pharmacy`.
- C/D/E: name/email/phone. Phone normalizes +91 to ten digits.
- F: Admissions Inquiry, Academic Programs, Campus Visit, Placement & Careers, or Other.
- G: required message, maximum 3,000 characters.
- H: generated submission receipt. You may hide H, but never delete or reorder it.
- I/J: Status/Notes left blank for staff.

Do not clear existing rows or change another school's headings. If the DRKCP headings differ, the script refuses to append until they match.

## 2. Complete Apps Script

Open the separate **DRKCP Enquiries** standalone project at https://script.google.com/.
Open `docs/enquiry-google-apps-script.gs` from this repository, copy its **entire contents**, and replace **only that project's Code.gs**. Do not paste tests or server JavaScript into Apps Script.

The script already contains the spreadsheet ID, DRKCP tab, correct institution, subject mappings, and exact A:J column order.

In Project Settings > Script properties, add `ENQUIRY_SCRIPT_SECRET` with a unique private random secret. If you already set a DRKCP secret, keep it and use that same value locally. Do not share this secret in chat or commit it.

Deploy > New deployment > Web app:

- Execute as: Me (the account must be able to edit the spreadsheet).
- Access: Anyone, if permitted by your Workspace policy.
- Authorize and deploy. Copy the URL ending in `/exec`, not `/dev`.

If a DRKCP deployment already exists: Manage deployments > Edit > New version > Deploy. Keep its existing URL and secret. Saving Code.gs alone does not update the deployed version. Running doPost from the editor without a request is not a connection test.

Official deployment instructions: https://developers.google.com/apps-script/guides/web

## 3. Local environment

An empty `.env.local` template is created if none existed. Fill it privately:

```dotenv
ENQUIRY_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DRKCP_DEPLOYMENT_ID/exec
ENQUIRY_SCRIPT_SECRET=THE_SAME_SECRET_AS_DRKCP_SCRIPT_PROPERTIES
```

Leave `ENQUIRY_ALLOWED_ORIGIN` unset for local Vite use. Never prefix credentials with `VITE_`. `.env.local` is Git-ignored. `.env.example` contains empty placeholders only.

Restart the existing development server after saving the configuration:

```powershell
cd C:\DRKCP
npm.cmd run dev
```

Both development and `npm.cmd run preview` provide `/api/enquiry`. Only this server endpoint attaches the secret and institution; the browser never receives those credentials.

## 4. Verify the deployment

```powershell
npm.cmd run build
npm.cmd test
npm.cmd run lint
npm.cmd run check:enquiry
```

The tests use a simulated Sheet and do not contact your real spreadsheet. The production-server test requires `dist`, so build before running the suite in a fresh checkout.

`check:enquiry` makes an authenticated **status-only** request with a fresh receipt. Expected: `Connected: DRKCP protocol and A:J headers verified. No row was added.`

It checks the configured Apps Script deployment, institution, protocol and headings. It does not prove that a live append or the deployed website's API works.

Then submit one clearly labelled test through Apply Now using a phone number you control. Confirm a row appears only in DRKCP, with Subject = Admissions Inquiry, the correct institution, and blank I/J. Test Contact Us with Campus Visit separately after the one-minute phone cooldown. Staff can remove labelled test rows after verification.

## 5. Production hosting

A static `dist` upload or GitHub Pages alone cannot run this API. The repository's existing GitHub Pages workflow still publishes static files only; it does not deploy the Node server. This implementation changes no hosting, DNS or live deployment.

For a Node host, use Node 22.12+ and configure these private environment variables:

```dotenv
ENQUIRY_SCRIPT_URL=YOUR_DRKCP_EXEC_URL
ENQUIRY_SCRIPT_SECRET=YOUR_PRIVATE_DRKCP_SECRET
ENQUIRY_ALLOWED_ORIGIN=https://drkpharma.edu.in
PORT=3000
HOST=0.0.0.0
```

Use your host's HTTPS reverse proxy for the website and `/api/enquiry` on the same public origin. The Node server defaults to 127.0.0.1 unless HOST is set; PORT is configurable. ENQUIRY_ALLOWED_ORIGIN is mandatory for `npm start` and must match the exact browser origin, without a trailing slash. Redirect alternate www domains to the configured canonical domain.

```powershell
npm.cmd run build
npm.cmd start
```

Deploy `dist`, `server`, `src/lib/enquiry.mjs`, and `package.json` (or the full repository with private environment variables supplied by the host). Only dist is publicly served; never upload a secret file into dist/public. A serverless or PHP-only host needs a compatible server-side API deployment before the live form will work.

## Behaviour

- Whitespace is trimmed; name has a 120-character limit, email 254, message 3,000. Unsupported subjects and malformed phones are rejected.
- A SHA-256 field fingerprint and UUID form a receipt. Session storage contains receipts/hashes only, with an in-memory fallback; no raw form values or secrets are persisted there.
- Identical normalized details reuse the receipt. The script locks the append and checks for that receipt before writing.
- Distinct enquiries from a phone have a 60-second cooldown. Staff must retain receipt cells to preserve deduplication.
- On an uncertain response the browser checks the same receipt's status. Only confirmed SAVED clears the form. Errors and unknown results retain the entered fields.
- Every submitted string is written as literal cell text, including formula-like input.
- Origin validation is not authentication or bot protection; public production traffic may warrant host-level rate limiting.

## Troubleshooting

- Apps Script HTTP 404: copy the current web-app /exec URL from the DRKCP deployment and update ENQUIRY_SCRIPT_URL. A script editor URL, deleted deployment or placeholder deployment ID will not work.
- CONFIG: verify both environment variables, the /exec URL, deployment access, DRKCP script property, exact tab and A:J headings. Redeploy a new script version after changes.
- ORIGIN: correct ENQUIRY_ALLOWED_ORIGIN in production; leave unset for local Vite.
- RATE_LIMIT: wait one minute before sending different details from the same phone.
- UNKNOWN: check the DRKCP sheet and retry with unchanged details; the same receipt avoids duplicate writes.
- HTML or a 404 at /api/enquiry: the host is serving only static files, or the server endpoint has not been deployed.
