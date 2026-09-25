import { useId, useRef, useState } from 'react'
import { getEnquiryReceipt, normalizeEnquiry, submitEnquiry } from '../lib/enquiry.mjs'
import { trackEvent } from '../lib/analytics.mjs'

export default function EnquiryForm({ admissions = false }) {
  const id = useId()
  const [notice, setNotice] = useState(null)
  const [sending, setSending] = useState(false)
  const pending = useRef(false)

  async function handleSubmit(event) {
    event.preventDefault()
    if (pending.current) return
    const form = event.currentTarget
    const fields = new FormData(form)
    const data = normalizeEnquiry({ name: fields.get('fullName'), phone: fields.get('phone'), email: fields.get('email'), subject: fields.get('subject'), message: fields.get('message') })
    if (!data) {
      setNotice({ ok: false, text: 'Please check all fields. Enter a 10-digit Indian phone number (or +91), a valid email, and a message of up to 3,000 characters.' })
      return
    }
    pending.current = true
    setSending(true)
    setNotice(null)
    try {
      const receipt = await getEnquiryReceipt(data)
      const result = await submitEnquiry(data, receipt)
      if (result.ok) {
        trackEvent('enquiry_saved')
        form.reset()
        setNotice({ ok: true, text: 'Thank you. Your enquiry has been received by D.R. Karigowda College of Pharmacy.' })
      } else {
        const messages = {
          RATE_LIMIT: 'An enquiry from this phone number was received recently. Please wait one minute before sending a different enquiry.',
          CONFIG: 'Online enquiries are temporarily unavailable. Please call +91 9945914800 or email drkcph@gmail.com. Your entries have been kept.',
          VALIDATION: 'Please check your details and try again. Your entries have been kept.',
          INVALID_RECEIPT: 'Please check your details and try again. Your entries have been kept.',
          ORIGIN: 'This website address is not configured for enquiries. Please contact the college directly.',
        }
        setNotice({ ok: false, text: messages[result.code] || 'We could not confirm whether your enquiry was received. Your entries have been kept. Please retry with the same details so we can check without creating a duplicate.' })
      }
    } catch {
      setNotice({ ok: false, text: 'We could not prepare your enquiry. Please try again using a secure connection, or call +91 9945914800.' })
    } finally {
      pending.current = false
      setSending(false)
    }
  }

  return (
    <form className="enquiry-form" method="post" action="/api/enquiry" onSubmit={handleSubmit} aria-busy={sending}>
      <fieldset disabled={sending} className="grid gap-4 min-w-0">
      <p className="text-sm text-on-surface-variant">All fields are required. For immediate assistance, call <a className="underline text-secondary" href="tel:+919945914800">+91 9945914800</a>.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${id}-name`}>Full Name</label>
          <input id={`${id}-name`} name="fullName" autoComplete="name" placeholder="Your full name" required maxLength={120} pattern=".*\S.*" />
        </div>
        <div>
          <label htmlFor={`${id}-phone`}>Phone Number</label>
          <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" required title="Enter a 10-digit phone number, optionally prefixed with +91" maxLength={20} />
        </div>
      </div>
      <div>
        <label htmlFor={`${id}-email`}>Email Address</label>
        <input id={`${id}-email`} name="email" type="email" autoComplete="email" placeholder="Your email address" required maxLength={254} />
      </div>
      <div>
        <label htmlFor={`${id}-subject`}>Subject</label>
        <select id={`${id}-subject`} name="subject" defaultValue={admissions ? 'admissions' : ''} required>
          <option value="" disabled>Select a topic</option>
          <option value="admissions">Admissions Inquiry</option>
          <option value="academics">Academic Programs</option>
          <option value="campus">Campus Visit</option>
          <option value="placement">Placement &amp; Careers</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor={`${id}-message`}>Message</label>
        <textarea id={`${id}-message`} name="message" rows={3} placeholder="Write your message here…" required maxLength={3000} />
      </div>
      <button type="submit" disabled={sending} className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold w-full sm:w-auto disabled:opacity-60">{sending ? 'Sending?' : 'Send Message'}</button>
      </fieldset>
      <div role="status" aria-live="polite" aria-atomic="true">{notice && <p className={`rounded-lg p-4 text-sm ${notice.ok ? 'bg-secondary/10 text-primary' : 'bg-error-container text-on-error-container'}`}>{notice.text}</p>}</div>
    </form>
  )
}
