import { Link } from 'react-router-dom'

export default function PageIntro({ title, children, course = false }) {
  return <section className="bg-primary-container text-white pt-28 pb-12 md:pb-16">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <nav aria-label="Breadcrumb" className="text-sm text-primary-fixed mb-6 flex flex-wrap gap-2">
        <Link to="/" className="underline">Home</Link><span aria-hidden="true">/</span>
        {course && <><Link to="/academics/" className="underline">Academics</Link><span aria-hidden="true">/</span></>}
        <span aria-current="page">{title}</span>
      </nav>
      <h1 className="font-headline text-3xl md:text-5xl max-w-4xl leading-tight mb-6">{title}</h1>
      <p className="text-lg text-primary-fixed max-w-3xl leading-relaxed">{children}</p>
    </div>
  </section>
}
