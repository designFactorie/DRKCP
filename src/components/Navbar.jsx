import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { to: '/', label: 'Home' },
    { to: '/faculty', label: 'Faculty & Leadership' },
    { to: '/academics', label: 'Academics & Careers' },
    { to: '/campus-life', label: 'Campus Life & Support' },
    { to: '/important-links', label: 'Important Links' },
    { to: '/disclosures', label: 'Disclosures' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-3">
          <Link to="/" className="font-headline italic text-xl font-bold text-primary-container tracking-tight">
            D.R.K.C.P.
          </Link>
        </div>
        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
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
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-primary text-on-primary px-6 py-2.5 rounded-lg font-medium hover:bg-primary-container transition-all active:scale-95 shadow-lg shadow-primary/20">
            Apply Now
          </button>
          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-primary-container transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-primary-container transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-primary-container transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-6 pb-6 pt-2 flex flex-col gap-1 bg-white/95 backdrop-blur-md border-t border-outline-variant/10">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={`py-3 px-4 rounded-lg transition-colors ${
                pathname === to
                  ? 'text-secondary bg-secondary/5 font-medium'
                  : 'text-outline hover:text-primary-container hover:bg-surface-container-low'
              }`}
            >
              {label}
            </Link>
          ))}
          <button className="mt-2 bg-primary text-on-primary px-6 py-3 rounded-lg font-medium hover:bg-primary-container transition-all active:scale-95 shadow-lg shadow-primary/20 md:hidden">
            Apply Now
          </button>
        </div>
      </div>
    </nav>
  )
}
