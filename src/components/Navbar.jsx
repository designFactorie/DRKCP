import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()

  const links = [
    { to: '/', label: 'Home' },
    { to: '/faculty', label: 'Faculty & Leadership' },
    { to: '/academics', label: 'Academics & Careers' },
    { to: '/campus-life', label: 'Campus Life & Support' },
    { to: '/disclosures', label: 'Disclosures' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-3">
          <Link to="/" className="font-headline italic text-xl font-bold text-primary-container tracking-tight">
            D.R.K.C.P.
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={
                pathname === to
                  ? 'text-secondary border-b-2 border-secondary pb-1 font-medium transition-all'
                  : 'text-outline hover:text-primary-container transition-colors'
              }
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-medium hover:bg-primary-container transition-all active:scale-95 shadow-lg shadow-primary/20">
            Apply Now
          </button>
        </div>
      </div>
    </nav>
  )
}
