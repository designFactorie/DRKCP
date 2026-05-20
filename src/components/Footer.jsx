import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary-fixed pt-24 pb-12 overflow-hidden relative">
      <div className="absolute inset-x-0 top-0 h-1 bg-secondary" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 max-w-7xl mx-auto mb-20">
        <div className="space-y-6">
          <Link to="/" className="mb-4 block">
            <img src={`${import.meta.env.BASE_URL}images/drkcp-logo.png`} alt="DRKCP Logo" className="h-28 brightness-0 invert" />
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            A premier institution dedicated to the pharmaceutical arts and sciences, fostering a culture of rigorous inquiry and clinical mastery.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-all text-white" href="#">
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-all text-white" href="#">
              <span className="material-symbols-outlined text-sm">groups</span>
            </a>
          </div>
        </div>
        <div>
          <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Academic Portal</h5>
          <ul className="space-y-4">
            <li><a className="text-slate-400 hover:text-secondary text-xs uppercase tracking-widest transition-colors" href="#">Academic Calendar</a></li>
            <li><a className="text-slate-400 hover:text-secondary text-xs uppercase tracking-widest transition-colors" href="#">Research Portal</a></li>
            <li><a className="text-slate-400 hover:text-secondary text-xs uppercase tracking-widest transition-colors" href="#">Student Login</a></li>
            <li><a className="text-slate-400 hover:text-secondary text-xs uppercase tracking-widest transition-colors" href="#">Career Center</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Institutional</h5>
          <ul className="space-y-4">
            <li><a className="text-slate-400 hover:text-secondary text-xs uppercase tracking-widest transition-colors" href="#">About NDRK Group</a></li>
            <li><Link className="text-slate-400 hover:text-secondary text-xs uppercase tracking-widest transition-colors" to="/faculty">Faculty Profiles</Link></li>
            <li><a className="text-slate-400 hover:text-secondary text-xs uppercase tracking-widest transition-colors" href="#">Alumni Network</a></li>
            <li><a className="text-slate-400 hover:text-secondary text-xs uppercase tracking-widest transition-colors" href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Accreditation</h5>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 rounded flex items-center justify-center">
              <span className="text-white/40 font-bold text-xs uppercase">PCI</span>
            </div>
            <div className="bg-white/5 p-4 rounded flex items-center justify-center">
              <span className="text-white/40 font-bold text-xs uppercase">RGUHS Affiliated</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-12 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 font-label text-[10px] uppercase tracking-[0.2em]">
          &copy; 2024 D.R. Karigowda College of Pharmacy. Accredited by PCI. Affiliated to RGUHS.
        </p>
        <div className="flex gap-8">
          <a className="text-slate-500 hover:text-white text-[10px] uppercase tracking-widest transition-colors" href="#">Terms</a>
          <a className="text-slate-500 hover:text-white text-[10px] uppercase tracking-widest transition-colors" href="#">Accessibility</a>
          <a className="text-slate-500 hover:text-white text-[10px] uppercase tracking-widest transition-colors" href="#">Cookies</a>
        </div>
      </div>
    </footer>
  )
}
