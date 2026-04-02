export default function Home() {
  return (
    <>
      {/* Section 1: Hero Header */}
      <header className="relative h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Hero Content */}
        <div className="relative flex-grow flex items-center justify-center pt-20 px-8 text-center">
          <div className="absolute inset-0 z-0">
            <img
              alt="Laboratory focus"
              className="w-full h-full object-cover"
              data-alt="Cinematic wide shot of a modern pharmaceutical research laboratory with soft teal lighting and focused researchers in white coats"
              src={`${import.meta.env.BASE_URL}images/img-10.jpg`}
            />
            <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-surface"></div>
          </div>
          <div className="relative z-10 max-w-4xl">
            <p className="text-secondary-fixed font-medium tracking-[0.2em] uppercase text-sm mb-6">NDRK Group of Institutions</p>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              D.R. Karigowda College <br />of <span className="italic font-normal">Pharmacy</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Pioneering Excellence since 2004. Cultivating the next generation of clinical leaders and pharmaceutical innovators.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-secondary/30 transition-all">
                Explore Programs
              </button>
              <button className="border border-white/30 backdrop-blur-md text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all">
                Virtual Tour
              </button>
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
      <section className="py-24 px-8 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-secondary/5 rounded-2xl transition-all group-hover:scale-105 duration-700"></div>
            <img
              alt="Pharmacy student"
              className="relative rounded-xl shadow-2xl w-full h-[600px] object-cover"
              data-alt="Professional close-up of a pharmacy student in a white lab coat meticulously examining a microscope slide in a brightly lit technical lab"
              src={`${import.meta.env.BASE_URL}images/img-14.jpg`}
            />
            <div className="absolute bottom-8 right-8 bg-white p-6 rounded-lg shadow-xl max-w-xs border-l-4 border-secondary">
              <p className="font-headline italic text-lg text-primary">"Education is not the learning of facts, but the training of the mind to think."</p>
            </div>
          </div>
          <div className="space-y-10">
            <div>
              <h2 className="text-secondary font-semibold tracking-widest text-sm uppercase mb-4">The Clinical Curator</h2>
              <h3 className="font-headline text-4xl md:text-5xl text-primary-container leading-tight">What Makes Us <span className="italic">Unique?</span></h3>
            </div>
            <div className="grid gap-8">
              <div className="flex gap-6 items-start">
                <div className="bg-secondary-container p-3 rounded-lg text-on-secondary-container">
                  <span className="material-symbols-outlined text-2xl" data-icon="clinical_notes">clinical_notes</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Academic Excellence</h4>
                  <p className="text-outline leading-relaxed">Our curriculum is precision-engineered to bridge the gap between theoretical knowledge and clinical application.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-secondary-container p-3 rounded-lg text-on-secondary-container">
                  <span className="material-symbols-outlined text-2xl" data-icon="biotech">biotech</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Research Foundation</h4>
                  <p className="text-outline leading-relaxed">State-of-the-art facilities dedicated to critical thinking and healthcare innovation through evidence-based research.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-secondary-container p-3 rounded-lg text-on-secondary-container">
                  <span className="material-symbols-outlined text-2xl" data-icon="groups">groups</span>
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
      <section className="py-24 bg-surface-container-low relative overflow-hidden">
        <div className="absolute inset-0 medical-pattern"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl text-primary-container mb-4">Academic Programs</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Program Card 1 */}
            <div className="group bg-surface-container-lowest p-10 rounded-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:bg-secondary relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-secondary group-hover:text-white" data-icon="vaccines">vaccines</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-white transition-colors">D.Pharm</h3>
                <p className="text-outline mb-8 group-hover:text-white/80 transition-colors">A robust 2-year foundation in pharmaceutical sciences for clinical practice.</p>
                <button className="opacity-0 group-hover:opacity-100 flex items-center gap-2 text-white font-semibold transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  View Curriculum <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </div>
              <div className="absolute bottom-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-9xl" data-icon="medical_services">medical_services</span>
              </div>
            </div>
            {/* Program Card 2 */}
            <div className="group bg-surface-container-lowest p-10 rounded-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:bg-secondary relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-secondary group-hover:text-white" data-icon="pill">pill</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-white transition-colors">B.Pharm</h3>
                <p className="text-outline mb-8 group-hover:text-white/80 transition-colors">Comprehensive 4-year undergraduate study exploring drug discovery and delivery.</p>
                <button className="opacity-0 group-hover:opacity-100 flex items-center gap-2 text-white font-semibold transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  View Curriculum <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </div>
              <div className="absolute bottom-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-9xl" data-icon="dna">genetics</span>
              </div>
            </div>
            {/* Program Card 3 */}
            <div className="group bg-surface-container-lowest p-10 rounded-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:bg-secondary relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-secondary group-hover:text-white" data-icon="science">science</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-white transition-colors">M.Pharm</h3>
                <p className="text-outline mb-8 group-hover:text-white/80 transition-colors">Advanced specialization and research-focused postgraduate studies.</p>
                <button className="opacity-0 group-hover:opacity-100 flex items-center gap-2 text-white font-semibold transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  View Curriculum <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </div>
              <div className="absolute bottom-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-9xl" data-icon="experiment">experiment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Testimonials */}
      <section className="py-24 px-8 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-secondary font-semibold tracking-widest text-sm uppercase mb-4">Voice of DRKCP</h2>
              <h3 className="font-headline text-4xl text-primary-container leading-tight">Alumni &amp; Student <span className="italic">Success</span></h3>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-outline/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
              </button>
              <button className="w-12 h-12 rounded-full border border-outline/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Testimonial 1 */}
            <div className="relative p-8 bg-surface-container-lowest rounded-xl shadow-lg border-t-4 border-secondary">
              <div className="absolute -top-6 left-8 flex items-center">
                <div className="relative">
                  <img
                    alt="Alumni Portrait"
                    className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover"
                    data-alt="Professional studio headshot of a female pharmacist with a warm smile, wearing clinical attire, circular crop"
                    src={`${import.meta.env.BASE_URL}images/img-09.jpg`}
                  />
                  <span className="absolute bottom-0 right-0 bg-secondary text-white p-1 rounded-full text-[10px] flex items-center justify-center border-2 border-white">
                    <span className="material-symbols-outlined text-[12px]" data-icon="verified" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex gap-1 text-secondary-fixed-dim mb-4">
                  <span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="text-on-surface-variant italic leading-relaxed mb-6">"The research-centric environment at Karigowda College helped me develop the precision required for my current role at a global pharmaceutical firm."</p>
                <div>
                  <p className="font-bold text-primary">Ananya Sharma</p>
                  <p className="text-xs text-outline uppercase tracking-wider">Clinical Researcher, Pfizer</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 (Active Style) */}
            <div className="relative p-8 bg-white rounded-xl shadow-2xl border-t-4 border-secondary scale-105 z-10">
              <div className="absolute -inset-2 bg-secondary/5 blur-2xl -z-10 rounded-full"></div>
              <div className="absolute -top-6 left-8 flex items-center">
                <div className="relative">
                  <img
                    alt="Alumni Portrait"
                    className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover"
                    data-alt="Candid professional portrait of a young male pharmacist in a modern pharmacy setting, smiling, circular crop"
                    src={`${import.meta.env.BASE_URL}images/img-21.jpg`}
                  />
                  <span className="absolute bottom-0 right-0 bg-secondary text-white p-1 rounded-full text-[10px] flex items-center justify-center border-2 border-white">
                    <span className="material-symbols-outlined text-[12px]" data-icon="verified" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex gap-1 text-secondary mb-4">
                  <span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="text-primary font-medium italic leading-relaxed mb-6">"Pioneering excellence is not just a tagline here--it's a daily practice. The faculty's mentorship is unparalleled."</p>
                <div>
                  <p className="font-bold text-primary">Rahul Mehta</p>
                  <p className="text-xs text-outline uppercase tracking-wider">M.Pharm Scholar, 2024</p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="relative p-8 bg-surface-container-lowest rounded-xl shadow-lg border-t-4 border-secondary">
              <div className="absolute -top-6 left-8 flex items-center">
                <div className="relative">
                  <img
                    alt="Alumni Portrait"
                    className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover"
                    data-alt="Professional studio portrait of a confident female alumni pharmacist, wearing academic graduation stole, circular crop"
                    src={`${import.meta.env.BASE_URL}images/img-03.jpg`}
                  />
                  <span className="absolute bottom-0 right-0 bg-secondary text-white p-1 rounded-full text-[10px] flex items-center justify-center border-2 border-white">
                    <span className="material-symbols-outlined text-[12px]" data-icon="verified" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex gap-1 text-secondary-fixed-dim mb-4">
                  <span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="text-on-surface-variant italic leading-relaxed mb-6">"The transition from college to industry was seamless thanks to the high-tech lab training we received."</p>
                <div>
                  <p className="font-bold text-primary">Sanya Iyer</p>
                  <p className="text-xs text-outline uppercase tracking-wider">Quality Control Head, Biocon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Conversion CTA */}
      <section className="relative py-24 clinical-gradient overflow-hidden">
        <div className="absolute inset-0 medical-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
          <h2 className="font-headline text-4xl md:text-6xl text-white mb-8">Shape the Future of <span className="italic">Healthcare.</span></h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
            Admissions are now open for the 2026 Academic Year. Join a community of scholars dedicated to clinical excellence and pharmaceutical innovation.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="relative bg-secondary text-white px-10 py-5 rounded-lg font-bold text-xl hover:shadow-2xl hover:shadow-secondary/50 transition-all active:scale-95 group">
              <span className="absolute inset-0 rounded-lg bg-secondary animate-ping opacity-25 group-hover:hidden"></span>
              Apply Now
            </button>
            <a className="text-white/80 hover:text-white border-b border-white/30 pb-1 font-medium flex items-center gap-2 transition-all" href="#">
              Download Brochure <span className="material-symbols-outlined text-sm" data-icon="download">download</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 6: Geographic Presence */}
      <section className="h-[600px] relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-[#1A237E]/20 z-10 pointer-events-none"></div>
        <div className="w-full h-full bg-primary-container flex items-center justify-center">
          <img
            alt="Map view"
            className="w-full h-full object-cover mix-blend-overlay opacity-30"
            data-alt="Stylized map view of Hassan city area with medical blue tint and minimal administrative details"
            data-location="Hassan, Karnataka, India"
            src={`${import.meta.env.BASE_URL}images/img-01.jpg`}
          />
          {/* Map Overlay Card */}
          <div className="absolute z-20 left-12 top-1/2 -translate-y-1/2 bg-white p-10 rounded-xl shadow-2xl max-w-md">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined" data-icon="location_on">location_on</span>
              </div>
              <div>
                <h4 className="font-bold text-primary text-xl">Visit Campus</h4>
                <p className="text-xs text-secondary font-bold uppercase tracking-widest">Global Outreach Hub</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-secondary" data-icon="home_pin">home_pin</span>
                <p className="text-outline text-sm leading-relaxed">NDRK Group of Institutions, Behind Akashwani, B.M. Road, Hassan - 573201, Karnataka, India.</p>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-secondary" data-icon="call">call</span>
                <p className="text-outline text-sm font-semibold">+91 94481 05455 / +91 8172 233748</p>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-secondary" data-icon="mail">mail</span>
                <p className="text-outline text-sm">admissions@drkcp.edu.in</p>
              </div>
            </div>
            <button className="mt-8 w-full border-2 border-primary text-primary font-bold py-3 rounded-lg hover:bg-primary hover:text-white transition-all">
              Get Directions
            </button>
          </div>
          {/* Custom Marker */}
          <div className="absolute z-20 top-1/2 right-1/4">
            <div className="relative flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                <span className="material-symbols-outlined text-secondary text-3xl" data-icon="school">school</span>
              </div>
              <div className="absolute -bottom-2 w-4 h-4 bg-white rotate-45"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Accreditations & Affiliations */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl text-primary-container mb-4">Accreditations &amp; <span className="italic">Affiliations</span></h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Affiliation 1 */}
            <div className="bg-surface p-8 rounded-xl border border-outline-variant/30 flex flex-col items-center text-center group hover:border-secondary transition-all duration-300">
              <div className="h-24 w-full flex items-center justify-center mb-6">
                <img
                  alt="Government of Karnataka"
                  className="max-h-full max-w-[80%] grayscale group-hover:grayscale-0 transition-all duration-500"
                  src={`${import.meta.env.BASE_URL}images/img-22.jpg`}
                />
              </div>
              <h4 className="text-primary font-bold text-sm uppercase tracking-wider leading-relaxed">Government of Karnataka</h4>
            </div>
            {/* Affiliation 2 */}
            <div className="bg-surface p-8 rounded-xl border border-outline-variant/30 flex flex-col items-center text-center group hover:border-secondary transition-all duration-300">
              <div className="h-24 w-full flex items-center justify-center mb-6">
                <img
                  alt="Pharmacy Council of India"
                  className="max-h-full max-w-[80%] grayscale group-hover:grayscale-0 transition-all duration-500"
                  src={`${import.meta.env.BASE_URL}images/img-23.jpg`}
                />
              </div>
              <h4 className="text-primary font-bold text-sm uppercase tracking-wider leading-relaxed">Pharmacy Council of India, New Delhi</h4>
            </div>
            {/* Affiliation 3 */}
            <div className="bg-surface p-8 rounded-xl border border-outline-variant/30 flex flex-col items-center text-center group hover:border-secondary transition-all duration-300">
              <div className="h-24 w-full flex items-center justify-center mb-6">
                <img
                  alt="RGUHS"
                  className="max-h-full max-w-[80%] grayscale group-hover:grayscale-0 transition-all duration-500"
                  src={`${import.meta.env.BASE_URL}images/img-24.jpg`}
                />
              </div>
              <h4 className="text-primary font-bold text-sm uppercase tracking-wider leading-relaxed">Rajiv Gandhi University of Health Sciences (RGUHS)</h4>
            </div>
            {/* Affiliation 4 */}
            <div className="bg-surface p-8 rounded-xl border border-outline-variant/30 flex flex-col items-center text-center group hover:border-secondary transition-all duration-300">
              <div className="h-24 w-full flex items-center justify-center mb-6">
                <div className="bg-primary/5 rounded-full p-4 flex items-center justify-center">
                  <span className="material-symbols-outlined text-5xl text-primary/40 group-hover:text-secondary transition-colors" data-icon="account_balance">account_balance</span>
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
