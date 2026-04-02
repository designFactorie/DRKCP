import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Faculty from './pages/Faculty'
import Academics from './pages/Academics'
import CampusLife from './pages/CampusLife'
import ImportantLinks from './pages/MandatoryDisclosures'
import MandatoryDisclosuresPage from './pages/MandatoryDisclosuresPage'

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-surface font-body text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/important-links" element={<ImportantLinks />} />
          <Route path="/disclosures" element={<MandatoryDisclosuresPage />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  )
}
