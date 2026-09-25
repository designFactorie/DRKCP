import { Link, useParams } from 'react-router-dom'
import { courses } from '../lib/courses.mjs'
import { useEnquiry } from '../components/enquiry-context'
import PageIntro from '../components/PageIntro'

export default function Course() {
  const { slug } = useParams()
  const course = Object.hasOwn(courses, slug) ? courses[slug] : null
  const openEnquiry = useEnquiry()
  if (!course) return <section className="max-w-7xl mx-auto px-5 py-28"><h1 className="text-3xl font-headline">Page not found</h1><Link to="/academics/" className="underline">Explore academic programs</Link></section>
  return <>
    <PageIntro title={`${course.short} in Hassan`} course>{course.intro}</PageIntro>
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-12 md:py-16 grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-10">
        <div><h2 className="text-3xl font-headline text-primary mb-4">{course.name}</h2><p className="text-lg text-secondary font-semibold">{course.duration}</p></div>
        <div><h2 className="text-2xl font-headline text-primary mb-4">What you will study</h2><ul className="list-disc pl-6 space-y-3 text-on-surface-variant">{course.study.map(item => <li key={item}>{item}</li>)}</ul></div>
        <div><h2 className="text-2xl font-headline text-primary mb-4">Course structure and training</h2><p className="leading-relaxed text-on-surface-variant">{course.training}</p><Link className="inline-block mt-4 text-secondary underline" to={`/academics/#${slug.replace('-', '')}`}>View the academic overview and regulations</Link></div>
        <div><h2 className="text-2xl font-headline text-primary mb-4">After the program</h2><p className="leading-relaxed text-on-surface-variant">{course.next}</p></div>
        <div><h2 className="text-2xl font-headline text-primary mb-4">Admission questions</h2><div className="space-y-4">
          <details className="rounded-xl bg-white p-5"><summary className="font-semibold cursor-pointer">How can I check eligibility and apply?</summary><p className="mt-3 leading-relaxed">Read the <Link to="/academics/" className="text-secondary underline">published academic information</Link> and contact the admissions team to confirm the requirements for your qualifications and admission year. An enquiry does not reserve a seat or confirm admission.</p></details>
          <details className="rounded-xl bg-white p-5"><summary className="font-semibold cursor-pointer">Where can I get fees and seat availability?</summary><p className="mt-3 leading-relaxed">Request the current official fee structure, approved intake, available seats and deadlines from the college admissions team.</p></details>
        </div></div>
      </div>
      <aside className="rounded-2xl bg-surface-container-low p-6 h-fit space-y-5">
        <h2 className="font-headline text-2xl text-primary">Plan your next step</h2><button type="button" onClick={openEnquiry} className="bg-primary text-white rounded-lg px-6 py-3 w-full">Enquire about admission</button>
        <Link to="/admissions/" className="block text-secondary underline">Admission enquiry guide</Link><Link to="/campus-life/" className="block text-secondary underline">Explore campus facilities</Link><Link to="/faculty/" className="block text-secondary underline">Meet the faculty</Link><Link to="/disclosures/" className="block text-secondary underline">Official college documents</Link>
        <h2 className="font-headline text-xl text-primary pt-3">Other programs</h2>{Object.entries(courses).filter(([key]) => key !== slug).map(([key, item]) => <Link key={key} className="block text-secondary underline" to={`/courses/${key}/`}>{item.name} ({item.short})</Link>)}
      </aside>
    </section>
  </>
}
