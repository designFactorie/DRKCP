import { Link } from 'react-router-dom'

const academicLinks = ['Academic Calendar', 'Research Portal', 'Student Login', 'Career Center']

export default function Footer() {
  return (
    <footer className="bg-primary text-white/80 pt-8 pb-6">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 mb-8">
        <div>
          <Link to="/" aria-label="College homepage" className="inline-block"><img src={`${import.meta.env.BASE_URL}images/drkcp-logo.png`} width="1920" height="1080" alt="D.R. Karigowda College of Pharmacy" className="h-28 w-auto max-w-none brightness-0 invert" loading="lazy" /></Link>
          <p className="text-sm leading-relaxed mt-2">A premier institution dedicated to the pharmaceutical arts and sciences, fostering a culture of rigorous inquiry and clinical mastery.</p>
          <div className="flex gap-3 mt-4" aria-hidden="true">
            <span className="w-10 h-10 rounded-full bg-white/5 grid place-items-center text-white"><span className="material-symbols-outlined text-sm">public</span></span>
            <span className="w-10 h-10 rounded-full bg-white/5 grid place-items-center text-white"><span className="material-symbols-outlined text-sm">groups</span></span>
          </div>
        </div>
        <div className="lg:pt-8">
          <h2 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Academic Portal</h2>
          <ul className="space-y-1 text-sm">{academicLinks.map((label) => <li key={label}><span className="inline-block py-2">{label}</span></li>)}</ul>
        </div>
        <div className="lg:pt-8">
          <h2 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Institutional</h2>
          <ul className="space-y-1 text-sm">
            <li><Link className="inline-block py-2 hover:text-secondary-fixed" to="/admissions/">Admissions</Link></li>
            <li><Link className="inline-block py-2 hover:text-secondary-fixed" to="/faculty/">About NDRK Group</Link></li>
            <li><Link className="inline-block py-2 hover:text-secondary-fixed" to="/faculty/">Faculty Profiles</Link></li>
            <li><span className="inline-block py-2">Alumni Network</span></li>
            <li><span className="inline-block py-2">Privacy Policy</span></li>
          </ul>
        </div>
        <div className="lg:pt-8">
          <h2 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Accreditation</h2>
          <div className="grid grid-cols-2 gap-3 text-center text-xs font-semibold uppercase">
            <div className="bg-white/5 p-4 rounded-lg flex items-center justify-center">PCI</div>
            <div className="bg-white/5 p-4 rounded-lg flex items-center justify-center">RGUHS Affiliated</div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row gap-4 justify-between text-xs text-white/70">
        <p>© 2024 D.R. Karigowda College of Pharmacy. Accredited by PCI. Affiliated to RGUHS.</p>
        <div className="flex flex-wrap gap-5"><span>Terms</span><span>Accessibility</span><span>Cookies</span></div>
      </div>
    </footer>
  )
}
