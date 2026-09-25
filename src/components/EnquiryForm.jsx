import { useId, useState } from 'react'

export default function EnquiryForm({ admissions = false }) {
  const id = useId()
  const [notice, setNotice] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    // Connect the submission service here when the Google Sheets integration is ready.
    setNotice(true)
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <p className="text-sm text-on-surface-variant">All fields are required. For immediate assistance, call <a className="underline text-secondary" href="tel:+919945914800">+91 9945914800</a>.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${id}-name`}>Full Name</label>
          <input id={`${id}-name`} name="fullName" autoComplete="name" placeholder="Your full name" required maxLength={120} pattern=".*\S.*" />
        </div>
        <div>
          <label htmlFor={`${id}-phone`}>Phone Number</label>
          <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" required pattern="\+?[0-9\s\-]{7,20}" maxLength={20} />
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
        <textarea id={`${id}-message`} name="message" rows={3} placeholder="Write your message here…" required maxLength={4000} />
      </div>
      <p className="text-sm text-on-surface-variant">Online submission will be available soon. You can currently reach us by phone or <a href="mailto:drkcph@gmail.com" className="underline text-secondary">email</a>.</p>
      <button type="submit" className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold w-full sm:w-auto">Send Message</button>
      {notice && <div role="status" className="rounded-lg bg-secondary/10 p-4 text-sm text-primary">Your message has not been sent. Online enquiries are not available yet. Please call <a className="underline" href="tel:+919945914800">+91 9945914800</a> or email <a className="underline" href="mailto:drkcph@gmail.com">drkcph@gmail.com</a>. Your entries are still here.</div>}
    </form>
  )
}
