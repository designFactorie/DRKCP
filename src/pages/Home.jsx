import { Link } from 'react-router-dom'
import { useEnquiry } from '../components/enquiry-context'
export default function Home() {
  const openEnquiry = useEnquiry()
  return (
    <>
      {/* Section 1: Hero Header */}
      <header className="home-hero relative w-full overflow-hidden flex flex-col justify-between">
        {/* Hero Content */}
        <div className="relative flex-grow flex items-center justify-center pt-28 pb-10 px-5 sm:px-8 text-center">
          <div className="absolute inset-0 z-0">
            <img
              alt="Laboratory focus"
              className="w-full h-full object-cover"
              src={`${import.meta.env.BASE_URL}images/img-10.jpg`}
            />
            <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-surface"></div>
          </div>
          <div className="relative z-10 max-w-4xl">
            <p className="text-secondary-fixed font-medium tracking-[0.2em] uppercase text-sm mb-6">NDRK Group of Institutions</p>
            <h1 className="font-headline text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              D.R. Karigowda College <br />of <span className="italic font-normal">Pharmacy</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Pioneering Excellence since 2004. Cultivating the next generation of clinical leaders and pharmaceutical innovators.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/academics" className="bg-secondary text-white px-5 sm:px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-secondary/30 transition-all">
                Explore Programs
              </Link>
              <Link to="/campus-life" className="border border-white/30 backdrop-blur-md text-white px-5 sm:px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all">
                Explore Campus
              </Link>
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="relative z-10 pb-12 flex justify-center">
          <div className="flex flex-col items-center gap-2">
            <span className="text-outline text-xs uppercase tracking-[0.3em]">Scroll Down</span>
            <div className="w-px h-12 bg-gradient-to-b from-secondary to-transparent animate-bounce"></div>
          </div>
        </div>
      </header>

      {/* Section 2: Brand Story */}
      <section className="py-12 md:py-16 px-5 sm:px-8 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-secondary/5 rounded-2xl transition-all group-hover:scale-105 duration-700"></div>
            <img loading="lazy" decoding="async"
              alt="Pharmacy student"
              className="relative rounded-xl shadow-2xl w-full h-[320px] sm:h-[380px] lg:h-[420px] object-cover"
              src={`${import.meta.env.BASE_URL}images/img-14.jpg`}
            />
            <div className="absolute bottom-4 left-4 right-4 sm:left-auto bg-white p-6 rounded-lg shadow-xl max-w-xs border-l-4 border-secondary">
              <p className="font-headline italic text-lg text-primary">"Education is not the learning of facts, but the training of the mind to think."</p>
            </div>
          </div>
          <div className="space-y-10">
            <div>
              <h2 className="text-secondary font-semibold tracking-widest text-sm uppercase mb-4">The Clinical Curator</h2>
              <h3 className="font-headline text-3xl md:text-4xl text-primary-container leading-tight">What Makes Us <span className="italic">Unique?</span></h3>
            </div>
            <div className="grid gap-8">
              <div className="flex gap-6 items-start">
                <div className="bg-secondary-container p-3 rounded-lg text-on-secondary-container">
                  <span aria-hidden="true" className="material-symbols-outlined text-2xl" data-icon="clinical_notes">clinical_notes</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Academic Excellence</h4>
                  <p className="text-outline leading-relaxed">Our curriculum is precision-engineered to bridge the gap between theoretical knowledge and clinical application.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-secondary-container p-3 rounded-lg text-on-secondary-container">
                  <span aria-hidden="true" className="material-symbols-outlined text-2xl" data-icon="biotech">biotech</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Research Foundation</h4>
                  <p className="text-outline leading-relaxed">State-of-the-art facilities dedicated to critical thinking and healthcare innovation through evidence-based research.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-secondary-container p-3 rounded-lg text-on-secondary-container">
                  <span aria-hidden="true" className="material-symbols-outlined text-2xl" data-icon="groups">groups</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Professional Development</h4>
                  <p className="text-outline leading-relaxed">Fostering leadership skills that prepare our students for the global pharmaceutical industry.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Academic Programs */}
      <section className="py-12 md:py-16 bg-surface-container-low relative overflow-hidden">
        <div className="absolute inset-0 medical-pattern"></div>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="text-center mb-8 lg:mb-10">
            <h2 className="font-headline text-3xl md:text-4xl text-primary-container mb-4">Academic Programs</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Program Card 1 */}
            <div className="group bg-surface-container-lowest p-6 lg:p-8 rounded-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:bg-secondary relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors">
                  <span aria-hidden="true" className="material-symbols-outlined text-3xl text-secondary group-hover:text-white" data-icon="vaccines">vaccines</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-white transition-colors">D.Pharm</h3>
                <p className="text-outline mb-8 group-hover:text-white/80 transition-colors">A robust 2-year foundation in pharmaceutical sciences for clinical practice.</p>
                <Link to="/academics#dpharm" className="inline-flex items-center gap-2 text-secondary group-hover:text-white font-semibold rounded focus-visible:outline-offset-4">View Curriculum <span aria-hidden="true" className="material-symbols-outlined">arrow_forward</span></Link>
              </div>
              <div className="absolute bottom-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span aria-hidden="true" className="material-symbols-outlined text-9xl" data-icon="medical_services">medical_services</span>
              </div>
            </div>
            {/* Program Card 2 */}
            <div className="group bg-surface-container-lowest p-6 lg:p-8 rounded-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:bg-secondary relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors">
                  <span aria-hidden="true" className="material-symbols-outlined text-3xl text-secondary group-hover:text-white" data-icon="pill">pill</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-white transition-colors">B.Pharm</h3>
                <p className="text-outline mb-8 group-hover:text-white/80 transition-colors">Comprehensive 4-year undergraduate study exploring drug discovery and delivery.</p>
                <Link to="/academics#bpharm" className="inline-flex items-center gap-2 text-secondary group-hover:text-white font-semibold rounded focus-visible:outline-offset-4">View Curriculum <span aria-hidden="true" className="material-symbols-outlined">arrow_forward</span></Link>
              </div>
              <div className="absolute bottom-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span aria-hidden="true" className="material-symbols-outlined text-9xl" data-icon="dna">genetics</span>
              </div>
            </div>
            {/* Program Card 3 */}
            <div className="group bg-surface-container-lowest p-6 lg:p-8 rounded-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:bg-secondary relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors">
                  <span aria-hidden="true" className="material-symbols-outlined text-3xl text-secondary group-hover:text-white" data-icon="science">science</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-white transition-colors">M.Pharm</h3>
                <p className="text-outline mb-8 group-hover:text-white/80 transition-colors">Advanced specialization and research-focused postgraduate studies.</p>
                <Link to="/academics#mpharm" className="inline-flex items-center gap-2 text-secondary group-hover:text-white font-semibold rounded focus-visible:outline-offset-4">View Curriculum <span aria-hidden="true" className="material-symbols-outlined">arrow_forward</span></Link>
              </div>
              <div className="absolute bottom-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span aria-hidden="true" className="material-symbols-outlined text-9xl" data-icon="experiment">experiment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Testimonials */}
      <section className="py-12 md:py-16 px-5 sm:px-8 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-8 lg:mb-10">
            <div>
              <h2 className="text-secondary font-semibold tracking-widest text-sm uppercase mb-4">Voice of DRKCP</h2>
              <h3 className="font-headline text-3xl sm:text-4xl text-primary-container leading-tight">Alumni &amp; Student <span className="italic">Success</span></h3>
            </div>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Testimonial 1 */}
            <div className="relative p-5 lg:p-8 bg-surface-container-lowest rounded-xl shadow-lg border-t-4 border-secondary">
              <div className="flex gap-1 text-secondary-fixed-dim mb-4">
                <span aria-hidden="true" className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span aria-hidden="true" className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span aria-hidden="true" className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span aria-hidden="true" className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span aria-hidden="true" className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="text-on-surface-variant italic leading-relaxed mb-6">"The research-centric environment at Karigowda College helped me develop the precision required for my current role at a global pharmaceutical firm."</p>
              <div>
                <p className="font-bold text-primary">Naveen</p>
                <p className="text-xs text-outline uppercase tracking-wider">Alumni</p>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="relative p-5 lg:p-8 bg-surface-container-lowest rounded-xl shadow-lg border-t-4 border-secondary">
              <div className="flex gap-1 text-secondary-fixed-dim mb-4">
                <span aria-hidden="true" className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span aria-hidden="true" className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span aria-hidden="true" className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span aria-hidden="true" className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span aria-hidden="true" className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="text-on-surface-variant italic leading-relaxed mb-6">"Pioneering excellence is not just a tagline here--it's a daily practice. The faculty's mentorship is unparalleled."</p>
              <div>
                <p className="font-bold text-primary">Bhoomika</p>
                <p className="text-xs text-outline uppercase tracking-wider">Alumni</p>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="relative p-5 lg:p-8 bg-surface-container-lowest rounded-xl shadow-lg border-t-4 border-secondary">
              <div className="flex gap-1 text-secondary-fixed-dim mb-4">
                <span aria-hidden="true" className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span aria-hidden="true" className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span aria-hidden="true" className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span aria-hidden="true" className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span aria-hidden="true" className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="text-on-surface-variant italic leading-relaxed mb-6">"The transition from college to industry was seamless thanks to the high-tech lab training we received."</p>
              <div>
                <p className="font-bold text-primary">Dhanush</p>
                <p className="text-xs text-outline uppercase tracking-wider">QA, Micro Lab</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Conversion CTA */}
      <section className="relative py-12 md:py-16 clinical-gradient overflow-hidden">
        <div className="absolute inset-0 medical-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 text-center">
          <h2 className="font-headline text-3xl md:text-4xl xl:text-5xl text-white mb-8">Shape the Future of <span className="italic">Healthcare.</span></h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
            Admissions are now open for the 2026 Academic Year. Join a community of scholars dedicated to clinical excellence and pharmaceutical innovation.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button type="button" onClick={openEnquiry} className="relative bg-secondary text-white px-10 py-5 rounded-lg font-bold text-xl hover:shadow-2xl hover:shadow-secondary/50 transition-all active:scale-95 group">
              Apply Now
            </button>
            <a className="text-white/80 hover:text-white border-b border-white/30 pb-1 font-medium flex items-center gap-2 transition-all" href={`${import.meta.env.BASE_URL}documents/NDRK-Pharma-Updated_flyer.pdf`} download>
              Download Brochure <span aria-hidden="true" className="material-symbols-outlined text-sm" data-icon="download">download</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 6: Geographic Presence */}
      <section className="campus-map relative w-full overflow-hidden bg-primary-container">
        <div className="absolute inset-0 bg-[#1A237E]/20 z-10 pointer-events-none"></div>
        <div className="campus-map-layout max-w-7xl mx-auto">
          <iframe
            title="D.R.Karigowda College of Pharmacy Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.5!2d76.1151033!3d13.0109542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5482e5d5013b3%3A0xf802216f959a8e20!2sD.%20R.%20Karigowda%20College%20of%20Pharmacy!5e0!3m2!1sen!2sin!4v1700000000000"
            className="campus-map-frame w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Campus contact details */}
          <div className="campus-map-card relative z-20 bg-white p-6 lg:p-8 rounded-xl shadow-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                <span aria-hidden="true" className="material-symbols-outlined" data-icon="location_on">location_on</span>
              </div>
              <div>
                <h4 className="font-bold text-primary text-xl">Visit Campus</h4>
                <p className="text-xs text-secondary font-bold uppercase tracking-widest">Global Outreach Hub</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span aria-hidden="true" className="material-symbols-outlined text-secondary" data-icon="home_pin">home_pin</span>
                <p className="text-outline text-sm leading-relaxed">D.R.Karigowda College of Pharmacy, Udayagiri, Kuvempunagar, Hassan 573201, Karnataka, India.</p>
              </div>
              <div className="flex gap-4">
                <span aria-hidden="true" className="material-symbols-outlined text-secondary" data-icon="call">call</span>
                <div className="text-outline text-sm font-semibold space-y-1">
                  <p>+91-9945914800, 9035990218</p>
                  <p>7760585096, 7899599188</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span aria-hidden="true" className="material-symbols-outlined text-secondary" data-icon="mail">mail</span>
                <p className="text-outline text-sm">drkcph@gmail.com</p>
              </div>
            </div>
            <a href="https://maps.app.goo.gl/HGg8sPH5DPnLkbg48" target="_blank" rel="noopener noreferrer" className="mt-8 w-full border-2 border-primary text-primary font-bold py-3 rounded-lg hover:bg-primary hover:text-white transition-all block text-center">
              Get Directions
            </a>
          </div>

        </div>
      </section>

      {/* Section 7: Accreditations & Affiliations */}
      <section className="py-12 md:py-16 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-8 lg:mb-10">
            <h2 className="font-headline text-3xl sm:text-4xl text-primary-container mb-4">Accreditations &amp; <span className="italic">Affiliations</span></h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Affiliation 1 */}
            <div className="bg-surface p-4 sm:p-6 rounded-xl border border-outline-variant/30 flex flex-col items-center text-center group hover:border-secondary transition-all duration-300">
              <div className="h-16 w-full flex items-center justify-center mb-4">
                <img loading="lazy" decoding="async"
                  alt="Government of Karnataka"
                  className="max-h-full max-w-[80%] grayscale group-hover:grayscale-0 transition-all duration-500"
                  src={`${import.meta.env.BASE_URL}images/img-22.jpg`}
                />
              </div>
              <h4 className="text-primary font-bold text-sm uppercase tracking-wider leading-relaxed">Government of Karnataka</h4>
            </div>
            {/* Affiliation 2 */}
            <div className="bg-surface p-4 sm:p-6 rounded-xl border border-outline-variant/30 flex flex-col items-center text-center group hover:border-secondary transition-all duration-300">
              <div className="h-16 w-full flex items-center justify-center mb-4">
                <img loading="lazy" decoding="async"
                  alt="Pharmacy Council of India"
                  className="max-h-full max-w-[80%] grayscale group-hover:grayscale-0 transition-all duration-500"
                  src={`${import.meta.env.BASE_URL}images/img-23.jpg`}
                />
              </div>
              <h4 className="text-primary font-bold text-sm uppercase tracking-wider leading-relaxed">Pharmacy Council of India, New Delhi</h4>
            </div>
            {/* Affiliation 3 */}
            <div className="bg-surface p-4 sm:p-6 rounded-xl border border-outline-variant/30 flex flex-col items-center text-center group hover:border-secondary transition-all duration-300">
              <div className="h-16 w-full flex items-center justify-center mb-4">
                <img loading="lazy" decoding="async"
                  alt="RGUHS"
                  className="max-h-full max-w-[80%] grayscale group-hover:grayscale-0 transition-all duration-500"
                  src={`${import.meta.env.BASE_URL}images/img-24.jpg`}
                />
              </div>
              <h4 className="text-primary font-bold text-sm uppercase tracking-wider leading-relaxed">Rajiv Gandhi University of Health Sciences (RGUHS)</h4>
            </div>
            {/* Affiliation 4 */}
            <div className="bg-surface p-4 sm:p-6 rounded-xl border border-outline-variant/30 flex flex-col items-center text-center group hover:border-secondary transition-all duration-300">
              <div className="h-16 w-full flex items-center justify-center mb-4">
                <div className="bg-primary/5 rounded-full p-4 flex items-center justify-center">
                  <span aria-hidden="true" className="material-symbols-outlined text-5xl text-primary/40 group-hover:text-secondary transition-colors" data-icon="account_balance">account_balance</span>
                </div>
              </div>
              <h4 className="text-primary font-bold text-sm uppercase tracking-wider leading-relaxed">Board of Examining Authority (BEAD)</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
