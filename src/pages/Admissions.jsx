import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import { courses } from '../lib/courses.mjs'
import { useEnquiry } from '../components/enquiry-context'

export default function Admissions() {
  const openEnquiry = useEnquiry()
  return <>
    <PageIntro title="Pharmacy Admissions in Hassan">Explore programs at D.R. Karigowda College of Pharmacy and speak with the college about the next step in your education.</PageIntro>
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-12 md:py-16">
      <h2 className="font-headline text-3xl text-primary mb-6">Choose your program</h2>
      <div className="grid md:grid-cols-3 gap-6">{Object.entries(courses).map(([slug, course]) => <Link key={slug} to={`/courses/${slug}/`} className="block bg-white rounded-xl p-6 shadow-sm hover:bg-surface-container-low"><h3 className="font-headline text-2xl text-primary mb-3">{course.short}</h3><p>{course.name}</p><p className="text-sm text-on-surface-variant mt-3">{course.duration}</p><span className="block mt-5 text-secondary font-semibold">Explore course →</span></Link>)}</div>
      <div className="grid lg:grid-cols-2 gap-10 mt-12">
        <div><h2 className="font-headline text-3xl text-primary mb-6">How to enquire</h2><ol className="list-decimal pl-6 space-y-5 leading-relaxed"><li>Review your preferred course and the <Link to="/academics/" className="text-secondary underline">academic information</Link>.</li><li>Contact the college to confirm current eligibility, approved intake, fees, available seats and deadlines.</li><li>Ask which documents apply to your qualifications and admission route before submitting an application.</li><li>Follow the application instructions provided by the college. The website enquiry form is an initial request for information.</li></ol></div>
        <div className="bg-surface-container-low rounded-2xl p-6 md:p-8"><h2 className="font-headline text-2xl text-primary mb-4">Prepare for your conversation</h2><p className="leading-relaxed mb-5">Have your preferred program, previous qualifications and marks information ready. Document requirements vary by course and applicant; the admissions team can confirm your checklist.</p><p className="leading-relaxed mb-6">For current fees, scholarships, hostel availability and campus visits, contact the college directly.</p><button type="button" onClick={openEnquiry} className="bg-primary text-white px-6 py-3 rounded-lg">Send an admission enquiry</button><Link to="/contact/" className="block mt-5 text-secondary underline">Contact details and directions</Link><a href="/documents/NDRK-Pharma-Updated_flyer.pdf" className="block mt-4 text-secondary underline">Download the college brochure (PDF)</a></div>
      </div>
    </section>
  </>
}
