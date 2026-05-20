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
    { to: '/contact', label: 'Contact Us' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm h-16">
      <div className="flex justify-between items-center px-6 md:px-8 h-16 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-3">
          <Link to="/" className="block -my-6">
            <img src={`${import.meta.env.BASE_URL}images/drkcp-logo.png`} alt="DRKCP Logo" className="h-28 drop-shadow-lg" />
          </Link>
        </div>
        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={
                pathname === to
                  ? 'text-secondary border-b-2 border-secondary pb-1 font-medium transition-all text-sm'
                  : 'text-outline hover:text-primary-container transition-colors text-sm'
              }
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link to="/contact#enquiry-form" className="hidden md:block bg-primary text-on-primary px-6 py-2.5 rounded-lg font-medium hover:bg-primary-container transition-all active:scale-95 shadow-lg shadow-primary/20">
            Apply Now
          </Link>
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
          <Link to="/contact#enquiry-form" className="mt-2 bg-primary text-on-primary px-6 py-3 rounded-lg font-medium hover:bg-primary-container transition-all active:scale-95 shadow-lg shadow-primary/20 md:hidden text-center" onClick={() => setMenuOpen(false)}>
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  )
}
