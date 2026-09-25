import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import EnquiryProvider from './components/EnquiryProvider'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Faculty from './pages/Faculty'
import Academics from './pages/Academics'
import CampusLife from './pages/CampusLife'
import ImportantLinks from './pages/MandatoryDisclosures'
import MandatoryDisclosuresPage from './pages/MandatoryDisclosuresPage'
import ContactUs from './pages/ContactUs'

export default function App() {
  return (
    <HashRouter>
      <EnquiryProvider>
        <ScrollToTop />
        <a href="#main-content" className="skip-link" onClick={(event) => { event.preventDefault(); document.getElementById('main-content').focus() }}>Skip to content</a>
        <div className="bg-surface font-body text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">
          <Navbar />
          <div id="main-content" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/important-links" element={<ImportantLinks />} />
            <Route path="/disclosures" element={<MandatoryDisclosuresPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<section className="max-w-7xl mx-auto px-5 py-24"><h1 className="text-3xl font-headline text-primary">Page not found</h1><p className="my-6">The page you requested is not available.</p><Link to="/" className="text-secondary underline">Return to the homepage</Link></section>} />
          </Routes>
          </div>
          <Footer />
        </div>
      </EnquiryProvider>
    </HashRouter>
  )
}
