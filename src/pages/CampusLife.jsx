export default function CampusLife() {
  return (
    <main className="bg-surface">
      {/* Hero Header */}
      <section className="relative min-h-[300px] md:min-h-[360px] pt-28 pb-12 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="College campus"
            className="w-full h-full object-cover"
            src={`${import.meta.env.BASE_URL}images/img-08.jpg`}
          />
          <div className="absolute inset-0 bg-primary/50 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl px-5 text-center">
          <h1 className="text-4xl md:text-5xl xl:text-6xl text-white mb-4 leading-tight font-headline">Institutional Infrastructure</h1>
          <p className="text-secondary-fixed font-medium tracking-widest uppercase text-sm mb-8">World-Class Facilities for Clinical Excellence</p>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
      </section>

      {/* Library Section */}
      <section className="py-12 md:py-16 px-5 sm:px-8 lg:px-10 max-w-7xl mx-auto" id="library">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-4 text-secondary mb-2">
              <span aria-hidden="true" className="material-symbols-outlined">auto_stories</span>
              <span className="uppercase tracking-widest text-xs font-bold">The Knowledge Repository</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary italic leading-tight">The College Library: A Sanctuary for Pharmaceutical Inquiry</h2>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              College library is located on the third floor of the college building. The library is well furnished with separate seating cabinets for reading. The library has huge collection of about <span className="text-primary font-bold">5000 books</span> including references and text books, national and international pharmaceutical journals, periodicals, Pharma newspapers and encyclopaedias.
            </p>
            <p className="text-on-surface-variant leading-relaxed text-lg italic">
              Extensive library services together with systematic use of audio-visual aids are available to help the students in the learning process.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-4">
              <div className="flex flex-col gap-2 p-4 bg-surface-container-low rounded-xl">
                <span aria-hidden="true" className="material-symbols-outlined text-secondary text-3xl">schedule</span>
                <span className="text-primary font-bold text-xl">9.00 AM — 6.00 PM</span>
                <span className="text-xs uppercase tracking-tighter text-outline">Operating Hours</span>
              </div>
              <div className="flex flex-col gap-2 p-4 bg-surface-container-low rounded-xl">
                <span aria-hidden="true" className="material-symbols-outlined text-secondary text-3xl">groups</span>
                <span className="text-primary font-bold text-xl">100 Seats</span>
                <span className="text-xs uppercase tracking-tighter text-outline">Quiet Study Capacity</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="h-[280px] sm:h-[360px] lg:h-[380px] overflow-hidden rounded-xl shadow-xl rotate-3 hover:rotate-0 transition-transform duration-700">
              <img loading="lazy" decoding="async" alt="College library"
                className="w-full h-full object-cover"
                src={`${import.meta.env.BASE_URL}images/img-18.jpg`}
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Laboratories Section */}
      <section className="py-12 md:py-16 bg-surface-container-low relative overflow-hidden" id="laboratories">
        <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none">
          <svg fill="currentColor" height="400" viewBox="0 0 100 100" width="400">
            <path d="M10 10 L90 10 L90 90 L10 90 Z" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
          </svg>
        </div>
        <div className="px-5 sm:px-8 lg:px-10 max-w-7xl mx-auto">
          <div className="mb-8 lg:mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-6">Scientific Laboratories</h2>
            <p className="max-w-3xl mx-auto text-on-surface-variant leading-relaxed text-lg">
              The institution have completely equipped laboratories for all the subjects with enough equipment's, instruments, glassware's and chemicals is made available to help the students of this college.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Industrial Tech */}
            <div className="bg-surface-container-lowest p-5 lg:p-8 flex flex-col gap-6 shadow-sm border-b-4 border-secondary transition-all hover:-translate-y-2">
              <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded">
                <span aria-hidden="true" className="material-symbols-outlined text-secondary">precision_manufacturing</span>
              </div>
              <h3 className="text-xl font-bold text-primary font-headline">Production Scale</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Equipment used in pharmaceutical industries: tableting machines, coating pans, and capsule filling systems for real-world production training.</p>
            </div>
            {/* Analytical Hub */}
            <div className="bg-surface-container-lowest p-5 lg:p-8 flex flex-col gap-6 shadow-sm border-b-4 border-primary transition-all hover:-translate-y-2">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded">
                <span aria-hidden="true" className="material-symbols-outlined text-primary">biotech</span>
              </div>
              <h3 className="text-xl font-bold text-primary font-headline">Analytical Precision</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Featuring Double beam UV-Visible spectrophotometers, flame photometers, nephlometers, and fluorimeters for rigorous quality control.</p>
            </div>
            {/* Clinical Space */}
            <div className="relative group overflow-hidden rounded-xl">
              <img loading="lazy" decoding="async" alt="Pharmaceutical laboratory"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src={`${import.meta.env.BASE_URL}images/img-16.jpg`}
              />
              <div className="absolute inset-0 bg-primary/40 flex items-end p-6">
                <span className="text-white font-bold text-lg">Industry-Standard Gear</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Computer Lab & Classrooms */}
      <section className="py-12 md:py-16 px-5 sm:px-8 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Learning Environment Hero */}
          <div className="min-w-0 overflow-hidden bg-primary text-on-primary p-6 lg:p-8 flex flex-col justify-between rounded-xl">
            <div>
              <h2 className="text-3xl sm:text-4xl font-headline font-bold mb-4 italic">Learning Ecosystem</h2>
              <div className="w-12 h-1 bg-secondary-fixed mb-8"></div>
              <p className="text-primary-fixed/80 text-sm leading-relaxed">Merging digital infrastructure with expansive, ventilated physical spaces to foster a holistic academic atmosphere.</p>
            </div>
            <div className="pt-12">
              <span className="text-3xl xl:text-4xl font-bold text-white/10 italic">ACADEMIC</span>
            </div>
          </div>
          <div className="lg:col-span-2 min-w-0 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Computer Lab Card */}
            <div className="p-5 lg:p-8 bg-surface-container-high relative overflow-hidden group rounded-xl">
              <span aria-hidden="true" className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl text-on-surface/5 group-hover:scale-110 transition-transform">desktop_windows</span>
              <h4 className="text-secondary font-bold uppercase tracking-widest text-xs mb-4">Digital Hub</h4>
              <h3 className="text-2xl font-headline font-bold text-primary mb-4">Computer Laboratory</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">Well equipped with latest Core I3 desktops, providing high-speed computational power for research.</p>
              <div className="flex items-center gap-2 text-primary font-bold">
                <span className="text-3xl">60</span>
                <span className="text-xs uppercase">Student Stations</span>
              </div>
            </div>
            {/* Classrooms Card */}
            <div className="p-5 lg:p-8 bg-white border border-outline-variant/20 relative overflow-hidden group rounded-xl">
              <span aria-hidden="true" className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl text-on-surface/5 group-hover:scale-110 transition-transform">co_present</span>
              <h4 className="text-secondary font-bold uppercase tracking-widest text-xs mb-4">Instructional Space</h4>
              <h3 className="text-2xl font-headline font-bold text-primary mb-4">Lecture Halls</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">Spacious halls with modern teaching facilities and natural ventilation for a focused environment.</p>
              <div className="flex items-center gap-2 text-primary font-bold">
                <span className="text-3xl">950</span>
                <span className="text-xs uppercase">Sq. Meters Area</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Botanical/Medicinal Garden */}
      <section className="py-12 md:py-16 relative">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 h-[280px] md:h-[360px] lg:h-auto relative">
            <img loading="lazy" decoding="async" alt="Medicinal plants in the campus garden"
              className="w-full h-full object-cover lg:absolute lg:inset-0"
              src={`${import.meta.env.BASE_URL}images/img-20.jpg`}
            />
          </div>
          <div className="lg:w-1/2 bg-secondary text-on-secondary p-6 lg:p-8 xl:p-12 flex flex-col justify-center">
            <div className="max-w-lg">
              <span className="text-sm font-bold tracking-[0.3em] uppercase opacity-70 mb-4 block">Pharmacognosy in Nature</span>
              <h2 className="text-3xl xl:text-4xl font-headline font-bold mb-6 break-words">The Living Pharmacopoeia</h2>
              <p className="text-lg leading-relaxed mb-10 opacity-90">
                The medicinal garden exhibits plants with medicinal value such as vasaka, cinnamon, shatavari, betel, clove and many more. These plants are integral part of study of pharmacy course, providing hands-on botanical research.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 border border-white/30 rounded-full text-xs font-bold uppercase">Vasaka</span>
                <span className="px-4 py-2 border border-white/30 rounded-full text-xs font-bold uppercase">Cinnamon</span>
                <span className="px-4 py-2 border border-white/30 rounded-full text-xs font-bold uppercase">Shatavari</span>
                <span className="px-4 py-2 border border-white/30 rounded-full text-xs font-bold uppercase">Clove</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hostel Facility */}
      <section className="py-12 md:py-16 px-5 sm:px-8 lg:px-10 bg-surface" id="hostel">
        <div className="max-w-7xl mx-auto text-center mb-8 lg:mb-10">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4 italic">Student Residency {"&"} Comfort</h2>
          <div className="w-16 h-1 bg-secondary mx-auto"></div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="flex flex-col gap-6">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <img loading="lazy" decoding="async" alt="Student hostel accommodation"
                className="w-full h-full object-cover"
                src={`${import.meta.env.BASE_URL}images/img-15.jpg`}
              />
            </div>
            <div className="bg-white p-6 lg:p-8 shadow-sm border-l-8 border-primary rounded-r-xl">
              <h3 className="text-2xl font-bold text-primary mb-4">A Home Away From Home</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Separate hostels are available for boys and girls, with good accommodation and pleasant environment. We prioritize student well-being through structured living spaces and supportive facilities.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:mt-12">
            <div className="bg-white p-6 lg:p-8 shadow-sm border-l-8 border-secondary rounded-r-xl">
              <h3 className="text-2xl font-bold text-primary mb-4">Nutritional Excellence</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Hostel mess expenses are calculated according to a transparent dividing system. Our dining services provide fresh, pleasant food served in a communal atmosphere.
              </p>
              <div className="mt-8 flex items-center gap-4 p-4 bg-secondary/5 rounded">
                <span aria-hidden="true" className="material-symbols-outlined text-secondary">restaurant_menu</span>
                <span className="text-xs font-bold text-secondary uppercase tracking-widest">Balanced Dietary Planning</span>
              </div>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <img loading="lazy" decoding="async" alt="Campus dining facilities"
                className="w-full h-full object-cover"
                src={`${import.meta.env.BASE_URL}images/img-13.jpg`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-12 md:py-16 px-5 sm:px-8 lg:px-10 bg-surface-container-low" id="extracurricular">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 lg:mb-10">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-6">Extracurricular Activities</h2>
            <p className="max-w-2xl text-on-surface-variant text-lg">Beyond the laboratory, we foster a vibrant community through diverse events and initiatives.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-5 lg:p-8 rounded-xl shadow-sm border-t-4 border-secondary">
              <div className="flex items-center gap-3 mb-6 text-secondary">
                <span aria-hidden="true" className="material-symbols-outlined">theater_comedy</span>
                <h3 className="text-xl font-bold font-headline text-primary">Cultural Events</h3>
              </div>
              <ul className="space-y-3 text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Fresher's Day</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Farewell Day</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Food Festival</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> College Fest</li>
              </ul>
            </div>
            <div className="bg-white p-5 lg:p-8 rounded-xl shadow-sm border-t-4 border-primary">
              <div className="flex items-center gap-3 mb-6 text-primary">
                <span aria-hidden="true" className="material-symbols-outlined">sports_basketball</span>
                <h3 className="text-xl font-bold font-headline text-primary">Sports</h3>
              </div>
              <ul className="space-y-3 text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Intra-college sports competition</li>
                <li className="flex items-center gap-2 italic text-sm opacity-70">Developing teamwork and athletic excellence across various disciplines.</li>
              </ul>
            </div>
            <div className="bg-white p-5 lg:p-8 rounded-xl shadow-sm border-t-4 border-secondary">
              <div className="flex items-center gap-3 mb-6 text-secondary">
                <span aria-hidden="true" className="material-symbols-outlined">volunteer_activism</span>
                <h3 className="text-xl font-bold font-headline text-primary">Student Initiatives</h3>
              </div>
              <ul className="space-y-3 text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Pharmacy Week Celebration</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Tree Plantation</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Blood Donation Camps</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Vaccination Drive</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Support & Guidance */}
      <section className="py-12 md:py-16 px-5 sm:px-8 lg:px-10 bg-primary text-on-primary overflow-hidden relative" id="career-support">
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4">
          <span aria-hidden="true" className="material-symbols-outlined text-[400px]">work_history</span>
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="uppercase tracking-[0.4em] text-xs font-bold text-secondary-fixed-dim mb-6 block">Future Ready</span>
          <h2 className="text-3xl md:text-4xl xl:text-3xl xl:text-4xl font-headline font-bold mb-6 break-words italic">Career Support {"&"} Guidance</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-10"></div>
          <p className="text-xl leading-relaxed text-primary-fixed-dim">
            The Placement Cell provides comprehensive training for interviews, organizes campus recruitment, and assists in employment across India. We also provide specialized guidance for students pursuing higher education globally.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="material-symbols-outlined text-secondary">check_circle</span>
              <span className="font-bold text-sm uppercase tracking-widest">Interview Training</span>
            </div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="material-symbols-outlined text-secondary">check_circle</span>
              <span className="font-bold text-sm uppercase tracking-widest">Global Guidance</span>
            </div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="material-symbols-outlined text-secondary">check_circle</span>
              <span className="font-bold text-sm uppercase tracking-widest">Campus Recruitment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Assistance */}
      <section className="py-20 px-5 sm:px-8 lg:px-10 bg-surface" id="financial-assistance">
        <div className="max-w-5xl mx-auto bg-white border border-outline-variant/30 rounded-2xl p-6 lg:p-8 md:p-16 flex flex-col md:flex-row items-center gap-6 lg:p-8 shadow-xl shadow-primary/5">
          <div className="bg-secondary/10 w-24 h-24 rounded-full flex items-center justify-center shrink-0">
            <span aria-hidden="true" className="material-symbols-outlined text-secondary text-5xl">payments</span>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-headline font-bold text-primary mb-4">Financial Assistance</h3>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
              Empowering your education journey. We assist students in securing education loans from nationalized banks at competitive interest rates.
            </p>
            <a href="#/contact" className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all">
              <span>Learn about loan assistance</span>
              <span aria-hidden="true" className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
