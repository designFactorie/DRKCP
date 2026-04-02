import { useState } from 'react'

export default function Academics() {
  const [activePathway, setActivePathway] = useState('bpharm')
  const [activeAdmission, setActiveAdmission] = useState('bpharm')

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[614px] flex items-center overflow-hidden bg-primary-container">
        <div className="absolute inset-0 opacity-40">
          <img
            alt=""
            className="w-full h-full object-cover"
            data-alt="Wide angle view of a prestigious pharmacy college building with modern architectural glass facade and manicured clinical gardens under bright sunlight"
            src={`${import.meta.env.BASE_URL}images/img-04.jpg`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container to-transparent"></div>
        </div>
        <div className="relative max-w-screen-2xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-secondary text-white text-xs font-bold tracking-widest uppercase mb-6 rounded-full">
              Excellence in Pharmaceutical Science
            </span>
            <h1 className="text-5xl md:text-7xl font-headline text-white leading-tight mb-6">
              Academic Programs {"&"} Regulations
            </h1>
            <p className="text-on-primary-container text-lg md:text-xl max-w-xl leading-relaxed">
              Defining the next generation of pharmacy leaders through rigorous standards and clinical precision.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Overview Table */}
      <section className="py-24 px-8 bg-surface">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-headline text-primary leading-tight mb-8">Courses Offered</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                Our curriculum is designed to meet global standards and PCI requirements, ensuring a comprehensive educational journey from diploma to masters.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="overflow-hidden bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-surface-container-low">
                    <tr>
                      <th className="px-8 py-6 text-sm font-bold text-primary uppercase tracking-wider">Program Name</th>
                      <th className="px-8 py-6 text-sm font-bold text-primary uppercase tracking-wider">Abbreviation</th>
                      <th className="px-8 py-6 text-sm font-bold text-primary uppercase tracking-wider">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-variant/30">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-8 py-6 font-semibold">Diploma in Pharmacy</td>
                      <td className="px-8 py-6 text-secondary font-medium">D.Pharm</td>
                      <td className="px-8 py-6">2 Years + 500 Hours Practical</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-8 py-6 font-semibold">Bachelor of Pharmacy</td>
                      <td className="px-8 py-6 text-secondary font-medium">B.Pharm</td>
                      <td className="px-8 py-6">4 Years (8 Semesters)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-8 py-6 font-semibold">Master of Pharmacy</td>
                      <td className="px-8 py-6 text-secondary font-medium">M.Pharm</td>
                      <td className="px-8 py-6">2 Years (4 Semesters)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Hub (Bento Grid Style) */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-headline text-primary mb-4">Admissions Hub</h2>
            <p className="text-on-surface-variant">Detailed criteria and documentation for prospective scholars.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" onMouseLeave={() => setActiveAdmission('bpharm')}>
            {/* D.Pharm Card */}
            <div
              onMouseEnter={() => setActiveAdmission('dpharm')}
              className={`p-8 rounded-xl transition-all duration-500 cursor-pointer ${
                activeAdmission === 'dpharm'
                  ? 'bg-primary-container text-white shadow-xl transform md:-translate-y-4'
                  : 'bg-surface-container-lowest border border-outline-variant/10 shadow-sm'
              }`}
            >
              <div className="flex justify-between items-start mb-8">
                <h3 className={`text-2xl font-headline font-bold transition-colors duration-500 ${activeAdmission === 'dpharm' ? 'text-secondary-fixed' : 'text-primary'}`}>D.Pharm</h3>
                <span className={`material-symbols-outlined text-3xl transition-colors duration-500 ${activeAdmission === 'dpharm' ? 'text-secondary-fixed' : 'text-secondary'}`}>medical_services</span>
              </div>
              <div className="space-y-6">
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-500 ${activeAdmission === 'dpharm' ? 'text-on-primary-container' : 'text-secondary'}`}>Duration</p>
                  <p className={`transition-colors duration-500 ${activeAdmission === 'dpharm' ? 'text-white' : 'text-on-surface'}`}>2 Years Full-Time</p>
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-500 ${activeAdmission === 'dpharm' ? 'text-on-primary-container' : 'text-secondary'}`}>Eligibility</p>
                  <p className={`text-sm leading-relaxed transition-colors duration-500 ${activeAdmission === 'dpharm' ? 'text-primary-fixed' : 'text-on-surface'}`}>Pass in 10+2 / PUC with PCM or PCB from a recognized board.</p>
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-500 ${activeAdmission === 'dpharm' ? 'text-on-primary-container' : 'text-secondary'}`}>Documents Required</p>
                  <ul className="mt-3 space-y-2">
                    <li className={`flex items-center gap-2 text-sm transition-colors duration-500 ${activeAdmission === 'dpharm' ? 'text-primary-fixed' : 'text-on-surface-variant'}`}>
                      <span className={`material-symbols-outlined text-sm transition-colors duration-500 ${activeAdmission === 'dpharm' ? '' : 'text-secondary'}`}>{activeAdmission === 'dpharm' ? 'description' : 'check_circle'}</span> SSLC/10th Marks Card
                    </li>
                    <li className={`flex items-center gap-2 text-sm transition-colors duration-500 ${activeAdmission === 'dpharm' ? 'text-primary-fixed' : 'text-on-surface-variant'}`}>
                      <span className={`material-symbols-outlined text-sm transition-colors duration-500 ${activeAdmission === 'dpharm' ? '' : 'text-secondary'}`}>{activeAdmission === 'dpharm' ? 'description' : 'check_circle'}</span> PUC/10+2 Marks Card
                    </li>
                    <li className={`flex items-center gap-2 text-sm transition-colors duration-500 ${activeAdmission === 'dpharm' ? 'text-primary-fixed' : 'text-on-surface-variant'}`}>
                      <span className={`material-symbols-outlined text-sm transition-colors duration-500 ${activeAdmission === 'dpharm' ? '' : 'text-secondary'}`}>{activeAdmission === 'dpharm' ? 'description' : 'check_circle'}</span> Transfer Certificate
                    </li>
                    <li className={`flex items-center gap-2 text-sm transition-colors duration-500 ${activeAdmission === 'dpharm' ? 'text-primary-fixed' : 'text-on-surface-variant'}`}>
                      <span className={`material-symbols-outlined text-sm transition-colors duration-500 ${activeAdmission === 'dpharm' ? '' : 'text-secondary'}`}>{activeAdmission === 'dpharm' ? 'description' : 'check_circle'}</span> Migration Certificate
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* B.Pharm Card */}
            <div
              onMouseEnter={() => setActiveAdmission('bpharm')}
              className={`p-8 rounded-xl transition-all duration-500 cursor-pointer ${
                activeAdmission === 'bpharm'
                  ? 'bg-primary-container text-white shadow-xl transform md:-translate-y-4'
                  : 'bg-surface-container-lowest border border-outline-variant/10 shadow-sm'
              }`}
            >
              <div className="flex justify-between items-start mb-8">
                <h3 className={`text-2xl font-headline font-bold transition-colors duration-500 ${activeAdmission === 'bpharm' ? 'text-secondary-fixed' : 'text-primary'}`}>B.Pharm</h3>
                <span className={`material-symbols-outlined text-3xl transition-colors duration-500 ${activeAdmission === 'bpharm' ? 'text-secondary-fixed' : 'text-secondary'}`}>science</span>
              </div>
              <div className="space-y-6">
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-500 ${activeAdmission === 'bpharm' ? 'text-on-primary-container' : 'text-secondary'}`}>Duration</p>
                  <p className={`transition-colors duration-500 ${activeAdmission === 'bpharm' ? 'text-white' : 'text-on-surface'}`}>4 Years (8 Semesters)</p>
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-500 ${activeAdmission === 'bpharm' ? 'text-on-primary-container' : 'text-secondary'}`}>Eligibility</p>
                  <p className={`text-sm leading-relaxed transition-colors duration-500 ${activeAdmission === 'bpharm' ? 'text-primary-fixed' : 'text-on-surface'}`}>PUC with 45% (40% for SC/ST) in PCM/PCB or D.Pharm for Lateral Entry.</p>
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-500 ${activeAdmission === 'bpharm' ? 'text-on-primary-container' : 'text-secondary'}`}>Documents Required</p>
                  <ul className="mt-3 space-y-2">
                    <li className={`flex items-center gap-2 text-sm transition-colors duration-500 ${activeAdmission === 'bpharm' ? 'text-primary-fixed' : 'text-on-surface-variant'}`}>
                      <span className={`material-symbols-outlined text-sm transition-colors duration-500 ${activeAdmission === 'bpharm' ? '' : 'text-secondary'}`}>{activeAdmission === 'bpharm' ? 'description' : 'check_circle'}</span> All Semesters Marks Cards
                    </li>
                    <li className={`flex items-center gap-2 text-sm transition-colors duration-500 ${activeAdmission === 'bpharm' ? 'text-primary-fixed' : 'text-on-surface-variant'}`}>
                      <span className={`material-symbols-outlined text-sm transition-colors duration-500 ${activeAdmission === 'bpharm' ? '' : 'text-secondary'}`}>{activeAdmission === 'bpharm' ? 'description' : 'check_circle'}</span> Caste {"&"} Income Certificate
                    </li>
                    <li className={`flex items-center gap-2 text-sm transition-colors duration-500 ${activeAdmission === 'bpharm' ? 'text-primary-fixed' : 'text-on-surface-variant'}`}>
                      <span className={`material-symbols-outlined text-sm transition-colors duration-500 ${activeAdmission === 'bpharm' ? '' : 'text-secondary'}`}>{activeAdmission === 'bpharm' ? 'description' : 'check_circle'}</span> 6 Passport size photos
                    </li>
                    <li className={`flex items-center gap-2 text-sm transition-colors duration-500 ${activeAdmission === 'bpharm' ? 'text-primary-fixed' : 'text-on-surface-variant'}`}>
                      <span className={`material-symbols-outlined text-sm transition-colors duration-500 ${activeAdmission === 'bpharm' ? '' : 'text-secondary'}`}>{activeAdmission === 'bpharm' ? 'description' : 'check_circle'}</span> Eligibility Certificate (Non-Karnataka)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* M.Pharm Card */}
            <div
              onMouseEnter={() => setActiveAdmission('mpharm')}
              className={`p-8 rounded-xl transition-all duration-500 cursor-pointer ${
                activeAdmission === 'mpharm'
                  ? 'bg-primary-container text-white shadow-xl transform md:-translate-y-4'
                  : 'bg-surface-container-lowest border border-outline-variant/10 shadow-sm'
              }`}
            >
              <div className="flex justify-between items-start mb-8">
                <h3 className={`text-2xl font-headline font-bold transition-colors duration-500 ${activeAdmission === 'mpharm' ? 'text-secondary-fixed' : 'text-primary'}`}>M.Pharm</h3>
                <span className={`material-symbols-outlined text-3xl transition-colors duration-500 ${activeAdmission === 'mpharm' ? 'text-secondary-fixed' : 'text-secondary'}`}>biotech</span>
              </div>
              <div className="space-y-6">
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-500 ${activeAdmission === 'mpharm' ? 'text-on-primary-container' : 'text-secondary'}`}>Duration</p>
                  <p className={`transition-colors duration-500 ${activeAdmission === 'mpharm' ? 'text-white' : 'text-on-surface'}`}>2 Years (4 Semesters)</p>
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-500 ${activeAdmission === 'mpharm' ? 'text-on-primary-container' : 'text-secondary'}`}>Eligibility</p>
                  <p className={`text-sm leading-relaxed transition-colors duration-500 ${activeAdmission === 'mpharm' ? 'text-primary-fixed' : 'text-on-surface'}`}>B.Pharm degree with minimum 55% aggregate marks (50% for SC/ST).</p>
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-500 ${activeAdmission === 'mpharm' ? 'text-on-primary-container' : 'text-secondary'}`}>Documents Required</p>
                  <ul className="mt-3 space-y-2">
                    <li className={`flex items-center gap-2 text-sm transition-colors duration-500 ${activeAdmission === 'mpharm' ? 'text-primary-fixed' : 'text-on-surface-variant'}`}>
                      <span className={`material-symbols-outlined text-sm transition-colors duration-500 ${activeAdmission === 'mpharm' ? '' : 'text-secondary'}`}>{activeAdmission === 'mpharm' ? 'description' : 'check_circle'}</span> B.Pharm Convocation Cert.
                    </li>
                    <li className={`flex items-center gap-2 text-sm transition-colors duration-500 ${activeAdmission === 'mpharm' ? 'text-primary-fixed' : 'text-on-surface-variant'}`}>
                      <span className={`material-symbols-outlined text-sm transition-colors duration-500 ${activeAdmission === 'mpharm' ? '' : 'text-secondary'}`}>{activeAdmission === 'mpharm' ? 'description' : 'check_circle'}</span> GPAT/PGCET Score Card
                    </li>
                    <li className={`flex items-center gap-2 text-sm transition-colors duration-500 ${activeAdmission === 'mpharm' ? 'text-primary-fixed' : 'text-on-surface-variant'}`}>
                      <span className={`material-symbols-outlined text-sm transition-colors duration-500 ${activeAdmission === 'mpharm' ? '' : 'text-secondary'}`}>{activeAdmission === 'mpharm' ? 'description' : 'check_circle'}</span> Professional Registration
                    </li>
                    <li className={`flex items-center gap-2 text-sm transition-colors duration-500 ${activeAdmission === 'mpharm' ? 'text-primary-fixed' : 'text-on-surface-variant'}`}>
                      <span className={`material-symbols-outlined text-sm transition-colors duration-500 ${activeAdmission === 'mpharm' ? '' : 'text-secondary'}`}>{activeAdmission === 'mpharm' ? 'description' : 'check_circle'}</span> Physical Fitness Certificate
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Structure & Regulations (Asymmetric Split) */}
      <section className="py-24 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <h2 className="text-4xl font-headline text-primary mb-16 border-l-4 border-secondary pl-6">
            Course Structure {"&"} Regulations
          </h2>
          <div className="space-y-32">
            {/* D.Pharm Detail */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <img
                  alt=""
                  className="rounded-xl shadow-lg w-full aspect-video object-cover"
                  data-alt="Pharmacy students in professional white lab coats performing titration and chemical analysis in a clean modern laboratory setting"
                  src={`${import.meta.env.BASE_URL}images/img-07.jpg`}
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-6xl font-bold text-secondary/10 font-headline">01</span>
                  <h3 className="text-3xl font-bold font-headline text-primary">Diploma in Pharmacy — D.Pharm</h3>
                </div>
                <div className="space-y-6 inter text-on-surface-variant">
                  <p>The D.Pharm curriculum is structured to provide a solid foundation in pharmaceutical sciences. It involves a rigorous 2-year academic program followed by an essential internship.</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-surface-container p-4 rounded">
                      <p className="text-xs font-bold text-primary uppercase">Practical Training</p>
                      <p className="text-xl font-bold text-secondary">500+ Hours</p>
                    </div>
                    <div className="bg-surface-container p-4 rounded">
                      <p className="text-xs font-bold text-primary uppercase">Training Span</p>
                      <p className="text-xl font-bold text-secondary">3 Months</p>
                    </div>
                  </div>
                  <ul className="space-y-3 pt-4">
                    <li className="flex gap-3">
                      <span className="text-secondary font-bold">&#8226;</span> <strong>1st Year:</strong> Pharmaceutics, Chemistry, Pharmacognosy, Physiology.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary font-bold">&#8226;</span> <strong>2nd Year:</strong> Pharmacology, Community Pharmacy, Jurisprudence.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* B.Pharm Detail */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-6xl font-bold text-secondary/10 font-headline">02</span>
                  <h3 className="text-3xl font-bold font-headline text-primary">Bachelor of Pharmacy — B.Pharm</h3>
                </div>
                <div className="space-y-6 inter text-on-surface-variant">
                  <p>Based on the PCI Choice Based Credit System (CBCS). This provides flexibility and professional depth across 8 semesters of intensive study.</p>
                  <div className="bg-secondary/5 border-l-4 border-secondary p-6 italic">
                    "A student shall be eligible for the award of B.Pharm degree only if he/she has undergone the course of study for a period of not less than 4 years and not more than 8 years."
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">208</p>
                      <p className="text-[10px] font-bold uppercase tracking-tighter">Min. Credits</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">80%</p>
                      <p className="text-[10px] font-bold uppercase tracking-tighter">Attendance</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">100</p>
                      <p className="text-[10px] font-bold uppercase tracking-tighter">Working Days</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  alt=""
                  className="rounded-xl shadow-lg w-full aspect-video object-cover"
                  data-alt="Spacious modern academic lecture hall with tiered seating and professional audiovisual equipment for pharmaceutical education"
                  src={`${import.meta.env.BASE_URL}images/img-06.jpg`}
                />
              </div>
            </div>

            {/* M.Pharm Detail */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <img
                  alt=""
                  className="rounded-xl shadow-lg w-full aspect-video object-cover"
                  data-alt="High-tech pharmaceutical research unit with advanced chromatography equipment and a researcher in sterile environment"
                  src={`${import.meta.env.BASE_URL}images/img-12.jpg`}
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-6xl font-bold text-secondary/10 font-headline">03</span>
                  <h3 className="text-3xl font-bold font-headline text-primary">Master of Pharmacy — M.Pharm</h3>
                </div>
                <div className="space-y-6 inter text-on-surface-variant">
                  <p>The Master's program focuses on specialization and research. Students engage in advanced theoretical coursework and original dissertation work.</p>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-surface-variant py-2">
                      <span className="font-medium text-primary">Minimum Credit Points</span>
                      <span className="text-secondary font-bold">95 - 100</span>
                    </div>
                    <div className="flex justify-between border-b border-surface-variant py-2">
                      <span className="font-medium text-primary">Sessional Exams</span>
                      <span className="text-secondary font-bold">2 per Semester</span>
                    </div>
                    <div className="flex justify-between border-b border-surface-variant py-2">
                      <span className="font-medium text-primary">Dissertation Work</span>
                      <span className="text-secondary font-bold">Semesters III {"&"} IV</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Horizons & Professional Pathways Section */}
      <section className="py-24 bg-surface-container-low px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline text-primary mb-6">
              Career Horizons {"&"} Professional Pathways
            </h2>
            <div className="w-24 h-1 bg-secondary rounded-full"></div>
            <p className="mt-6 text-on-surface-variant max-w-2xl text-lg inter">
              Empowering our graduates to navigate diverse and rewarding landscapes in the global pharmaceutical ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10" onMouseLeave={() => setActivePathway('bpharm')}>
            {/* D.Pharm Pathways */}
            <div
              onMouseEnter={() => setActivePathway('dpharm')}
              className={`flex flex-col p-8 rounded-2xl transition-all duration-500 cursor-pointer ${
                activePathway === 'dpharm'
                  ? 'bg-primary text-white shadow-xl transform lg:-translate-y-6'
                  : 'bg-white shadow-sm border border-outline-variant/20'
              }`}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-colors duration-500 ${
                activePathway === 'dpharm' ? 'bg-white/10 text-white' : 'bg-secondary/10 text-secondary'
              }`}>
                <span className="material-symbols-outlined text-3xl">school</span>
              </div>
              <h3 className={`text-2xl font-headline mb-6 transition-colors duration-500 ${activePathway === 'dpharm' ? 'text-white' : 'text-primary'}`}>D.Pharm Pathways</h3>
              <div className="space-y-8 flex-grow">
                <div>
                  <h4 className={`text-sm font-bold uppercase tracking-widest mb-3 transition-colors duration-500 ${activePathway === 'dpharm' ? 'text-secondary-fixed' : 'text-secondary'}`}>Higher Studies</h4>
                  <p className={`transition-colors duration-500 ${activePathway === 'dpharm' ? 'text-on-primary-container text-sm' : 'text-on-surface-variant'}`}>Pursue Bachelor of Pharmacy (B.Pharm) through lateral entry programs.</p>
                </div>
                <div>
                  <h4 className={`text-sm font-bold uppercase tracking-widest mb-3 transition-colors duration-500 ${activePathway === 'dpharm' ? 'text-secondary-fixed' : 'text-secondary'}`}>Professional Practice</h4>
                  <p className={`leading-relaxed text-sm transition-colors duration-500 ${activePathway === 'dpharm' ? 'text-on-primary-container' : 'text-on-surface-variant'}`}>
                    Diploma holders may start practicing as pharmacists in India at chemist shops, private clinics, drug stores, and retail chains. Responsibilities include reading prescriptions, checking drug interactions, advising patients, and inventory management.
                  </p>
                </div>
                <div>
                  <h4 className={`text-sm font-bold uppercase tracking-widest mb-3 transition-colors duration-500 ${activePathway === 'dpharm' ? 'text-secondary-fixed' : 'text-secondary'}`}>Entrepreneurship</h4>
                  <p className={`transition-colors duration-500 ${activePathway === 'dpharm' ? 'text-on-primary-container text-sm' : 'text-on-surface-variant'}`}>Beyond employment, diploma holders are qualified to open and operate their own retail chemist shops.</p>
                </div>
              </div>
            </div>

            {/* B.Pharm Pathways */}
            <div
              onMouseEnter={() => setActivePathway('bpharm')}
              className={`flex flex-col p-8 rounded-2xl transition-all duration-500 cursor-pointer ${
                activePathway === 'bpharm'
                  ? 'bg-primary text-white shadow-xl transform lg:-translate-y-6'
                  : 'bg-white shadow-sm border border-outline-variant/20'
              }`}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-colors duration-500 ${
                activePathway === 'bpharm' ? 'bg-white/10 text-white' : 'bg-secondary/10 text-secondary'
              }`}>
                <span className="material-symbols-outlined text-3xl">work_history</span>
              </div>
              <h3 className={`text-2xl font-headline mb-6 transition-colors duration-500 ${activePathway === 'bpharm' ? 'text-white' : 'text-primary'}`}>B.Pharm Pathways</h3>
              <div className="space-y-8 flex-grow">
                <div>
                  <h4 className={`text-sm font-bold uppercase tracking-widest mb-3 transition-colors duration-500 ${activePathway === 'bpharm' ? 'text-secondary-fixed' : 'text-secondary'}`}>Advanced Education</h4>
                  <p className={`text-sm transition-colors duration-500 ${activePathway === 'bpharm' ? 'text-on-primary-container' : 'text-on-surface-variant'}`}>
                    Options include Master of Pharmacy (M.Pharm), PGDM in Pharmacy, MBA in Pharmaceutical Management, Drug Store Management, and international studies in the USA, Canada, or UK.
                  </p>
                </div>
                <div>
                  <h4 className={`text-sm font-bold uppercase tracking-widest mb-3 transition-colors duration-500 ${activePathway === 'bpharm' ? 'text-secondary-fixed' : 'text-secondary'}`}>Business Prospects</h4>
                  <p className={`text-sm transition-colors duration-500 ${activePathway === 'bpharm' ? 'text-on-primary-container' : 'text-on-surface-variant'}`}>
                    Unique authority to establish independent ventures such as retail drugstores, wholesale distribution supply, or small-scale manufacturing units.
                  </p>
                </div>
                <div>
                  <h4 className={`text-sm font-bold uppercase tracking-widest mb-3 transition-colors duration-500 ${activePathway === 'bpharm' ? 'text-secondary-fixed' : 'text-secondary'}`}>
                    Industry {"&"} Government
                  </h4>
                  <div className={`grid grid-cols-2 gap-x-4 gap-y-2 text-xs pt-1 transition-colors duration-500 ${activePathway === 'bpharm' ? 'text-on-primary-container' : 'text-on-surface-variant'}`}>
                    <span className="flex items-center gap-1">
                      <span className={`w-1 h-1 rounded-full transition-colors duration-500 ${activePathway === 'bpharm' ? 'bg-secondary-fixed' : 'bg-secondary'}`}></span> Drug Inspector
                    </span>
                    <span className="flex items-center gap-1">
                      <span className={`w-1 h-1 rounded-full transition-colors duration-500 ${activePathway === 'bpharm' ? 'bg-secondary-fixed' : 'bg-secondary'}`}></span> R{"&"}D Scientist
                    </span>
                    <span className="flex items-center gap-1">
                      <span className={`w-1 h-1 rounded-full transition-colors duration-500 ${activePathway === 'bpharm' ? 'bg-secondary-fixed' : 'bg-secondary'}`}></span> QC Associate
                    </span>
                    <span className="flex items-center gap-1">
                      <span className={`w-1 h-1 rounded-full transition-colors duration-500 ${activePathway === 'bpharm' ? 'bg-secondary-fixed' : 'bg-secondary'}`}></span> Clinical Research
                    </span>
                    <span className="flex items-center gap-1">
                      <span className={`w-1 h-1 rounded-full transition-colors duration-500 ${activePathway === 'bpharm' ? 'bg-secondary-fixed' : 'bg-secondary'}`}></span> Health Inspector
                    </span>
                    <span className="flex items-center gap-1">
                      <span className={`w-1 h-1 rounded-full transition-colors duration-500 ${activePathway === 'bpharm' ? 'bg-secondary-fixed' : 'bg-secondary'}`}></span> Med Representative
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* M.Pharm Pathways */}
            <div
              onMouseEnter={() => setActivePathway('mpharm')}
              className={`flex flex-col p-8 rounded-2xl transition-all duration-500 cursor-pointer ${
                activePathway === 'mpharm'
                  ? 'bg-primary text-white shadow-xl transform lg:-translate-y-6'
                  : 'bg-white shadow-sm border border-outline-variant/20'
              }`}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-colors duration-500 ${
                activePathway === 'mpharm' ? 'bg-white/10 text-white' : 'bg-secondary/10 text-secondary'
              }`}>
                <span className="material-symbols-outlined text-3xl">biotech</span>
              </div>
              <h3 className={`text-2xl font-headline mb-6 transition-colors duration-500 ${activePathway === 'mpharm' ? 'text-white' : 'text-primary'}`}>M.Pharm Pathways</h3>
              <div className="space-y-8 flex-grow">
                <div>
                  <h4 className={`text-sm font-bold uppercase tracking-widest mb-3 transition-colors duration-500 ${activePathway === 'mpharm' ? 'text-secondary-fixed' : 'text-secondary'}`}>Specialist Education</h4>
                  <p className={`transition-colors duration-500 ${activePathway === 'mpharm' ? 'text-on-primary-container text-sm' : 'text-on-surface-variant'}`}>
                    Preparation for competitive exams (KAS, UPSC) and advanced PhD opportunities in India or premier international research institutions.
                  </p>
                </div>
                <div>
                  <h4 className={`text-sm font-bold uppercase tracking-widest mb-3 transition-colors duration-500 ${activePathway === 'mpharm' ? 'text-secondary-fixed' : 'text-secondary'}`}>Industrial Leadership</h4>
                  <p className={`text-sm transition-colors duration-500 ${activePathway === 'mpharm' ? 'text-on-primary-container' : 'text-on-surface-variant'}`}>
                    Strategic roles in Production, Research {"&"} Development (R{"&"}D), Pharmaceutical Marketing, QA/QC leadership, Regulatory Affairs, and Pharmacovigilance.
                  </p>
                </div>
                <div>
                  <h4 className={`text-sm font-bold uppercase tracking-widest mb-3 transition-colors duration-500 ${activePathway === 'mpharm' ? 'text-secondary-fixed' : 'text-secondary'}`}>Entrepreneurship</h4>
                  <p className={`transition-colors duration-500 ${activePathway === 'mpharm' ? 'text-on-primary-container text-sm' : 'text-on-surface-variant'}`}>
                    Leveraging advanced specialization for high-end self-employment and specialized pharmaceutical business ventures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examination Protocols (Glassmorphism Section) */}
      <section className="py-24 px-8 relative">
        <div className="absolute inset-0 bg-primary-container -z-10">
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle, #93f2f2 1px, transparent 1px)", backgroundSize: "30px 30px" }}
          ></div>
        </div>
        <div className="max-w-4xl mx-auto glass-card p-12 rounded-2xl shadow-2xl">
          <div className="text-center mb-12">
            <span className="material-symbols-outlined text-5xl text-secondary mb-4">assignment_turned_in</span>
            <h2 className="text-4xl font-headline text-primary">Examination Protocols</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">analytics</span> Evaluation System
              </h4>
              <p className="text-on-surface-variant leading-relaxed">
                Continuous assessment through internal sessional exams (Theory {"&"} Practical) and end-semester university examinations.
              </p>
              <div className="bg-surface p-4 rounded border-l-4 border-secondary">
                <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-1">Marking Scheme</p>
                <p className="text-lg font-bold text-primary">80/20 Pattern (Theory/Practical)</p>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">verified</span> Passing Criteria
              </h4>
              <p className="text-on-surface-variant leading-relaxed">
                A student must secure a specific minimum percentage to be declared successful in any subject or semester.
              </p>
              <div className="bg-surface p-4 rounded border-l-4 border-secondary">
                <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-1">Minimum Pass</p>
                <p className="text-lg font-bold text-primary">40% Aggregate Marks</p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-12 border-t border-outline-variant/30 text-center">
            <p className="text-on-surface-variant text-sm italic">
              Note: All examinations are conducted in accordance with Rajiv Gandhi University of Health Sciences (RGUHS) and Pharmacy Council of India (PCI) norms.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
