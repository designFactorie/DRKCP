import { useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { EnquiryContext } from './enquiry-context'
import EnquiryForm from './EnquiryForm'

export default function EnquiryProvider({ children }) {
  const dialog = useRef(null)
  const previousOverflow = useRef(null)
  const opener = useRef(null)
  const restoreScroll = () => {
    if (previousOverflow.current === null) return
    document.body.style.overflow = previousOverflow.current
    previousOverflow.current = null
  }
  const openEnquiry = useCallback(() => {
    if (dialog.current.open) return
    opener.current = document.activeElement
    previousOverflow.current = document.body.style.overflow
    dialog.current.showModal()
    document.body.style.overflow = 'hidden'
  }, [])
  const closeEnquiry = () => {
    restoreScroll()
    dialog.current.close()
  }

  useEffect(() => () => {
    if (previousOverflow.current !== null) document.body.style.overflow = previousOverflow.current
  }, [])

  return (
    <EnquiryContext.Provider value={openEnquiry}>
      {children}
      {createPortal(
        <dialog ref={dialog} className="enquiry-dialog" aria-labelledby="enquiry-title" aria-describedby="enquiry-description"
          onKeyDown={(event) => {
            if (event.key !== 'Tab') return
            const controls = [...dialog.current.querySelectorAll('a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex="0"]')].filter((element) => element.getClientRects().length)
            const first = controls[0]
            const last = controls[controls.length - 1]
            if (event.shiftKey && document.activeElement === first) {
              event.preventDefault()
              last?.focus()
            } else if (!event.shiftKey && document.activeElement === last) {
              event.preventDefault()
              first?.focus()
            }
          }}
          onCancel={(event) => { event.preventDefault(); closeEnquiry() }}
          onClose={() => {
            if (dialog.current.open) return
            restoreScroll()
            const target = opener.current?.getClientRects().length ? opener.current : document.querySelector('[aria-controls="mobile-navigation"]')
            target?.focus({ preventScroll: true })
          }}
          onClick={(event) => {
            if (event.target !== dialog.current) return
            const rect = dialog.current.getBoundingClientRect()
            if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeEnquiry()
          }}>
          <div className="enquiry-dialog-header">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-1">D.R. Karigowda College of Pharmacy</p>
              <h2 id="enquiry-title" className="font-headline text-2xl text-primary">Admission Enquiry</h2>
              <p id="enquiry-description" className="text-sm text-on-surface-variant mt-2">Tell us how we can help you begin your journey.</p>
            </div>
            <button type="button" onClick={closeEnquiry} aria-label="Close enquiry form" className="shrink-0 rounded-full w-11 h-11 grid place-items-center text-primary bg-surface-container-low hover:bg-surface-container-high">
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 6 12 12M18 6 6 18" /></svg>
            </button>
          </div>
          <div className="enquiry-dialog-body"><EnquiryForm admissions /></div>
        </dialog>, document.body)}
    </EnquiryContext.Provider>
  )
}
