import { useState } from 'react'

export default function Faculty() {
  const [activePhilosophy, setActivePhilosophy] = useState('vision')

  return (
    <>
      {/* Hero Section: Institutional History */}
      <header className="relative overflow-hidden pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">Institutional Heritage</span>
            <h1 className="font-headline text-5xl md:text-7xl text-primary leading-tight mb-8">
              The Legacy of <span className="italic">Boovanahally Channakeshava Swamy Vidya Samsthe</span>
            </h1>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed max-w-2xl">
              <p>
                The Boovanahally Channakeshava Swamy Vidya Samsthe (R) was established with an ambition to provide better education facilities to the Hassan City and neighbouring villages.
              </p>
              <p>
                Beginning with Primary School, this Trust has now increased its various Colleges and different courses like B. B. M., B. Com., B. Ed., D. Ed., G. N. M., B. Sc. Nursing. M. Sc. Nursing. B. Pharm, D. Pharm. etc.
              </p>
              <div className="inline-flex items-center gap-4 py-4 px-6 bg-surface-container-low rounded-xl">
                <span className="text-3xl font-bold text-secondary">5000+</span>
                <span className="text-sm font-medium text-outline leading-tight">Students benefited annually from our various trust programs</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative z-10">
              <img alt="Stately institutional architecture with white columns and manicured lawns under a clear blue sky, professional and prestigious academic setting" className="w-full h-full object-cover" src={`${import.meta.env.BASE_URL}images/drkcp-building.png`} />
            </div>
            {/* Asymmetric Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-secondary-container -z-10 rounded-xl translate-x-12 translate-y-12 opacity-30"></div>
          </div>
        </div>
      </header>

      {/* Core Philosophy: Mission, Vision & Values */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="font-headline text-4xl text-primary mb-4">Core Philosophy</h2>
              <p className="text-on-surface-variant">The Clinical Curator approach: blending traditional pharmacy ethics with contemporary medical precision.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" onMouseLeave={() => setActivePhilosophy('vision')}>
            <PhilosophyTile
              id="mission"
              active={activePhilosophy === 'mission'}
              onHover={() => setActivePhilosophy('mission')}
              icon="clinical_notes"
              title="Mission"
              description="Empowering a child-centric environment to develop socially responsible, independent, knowledgeable, lifelong learners and leaders."
            />
            <PhilosophyTile
              id="vision"
              active={activePhilosophy === 'vision'}
              onHover={() => setActivePhilosophy('vision')}
              icon="visibility"
              title="Vision"
              description="To mold our students to be compassionate, progressive, intellectual, and successful human beings prepared for the evolving medical landscape."
            />
            <PhilosophyTile
              id="values"
              active={activePhilosophy === 'values'}
              onHover={() => setActivePhilosophy('values')}
              icon="vitals"
              title="Values"
              description="To ensure the all-round development of every student in his/her own way. To nurture the right human values based on integration and social harmony."
            />
          </div>
        </div>
      </section>

      {/* Section 1.5: Our Leadership */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8 text-center mb-16">
          <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">Executive Management</span>
          <h2 className="font-headline text-4xl text-primary mb-4">Our Leadership</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Chairperson */}
          <div className="group">
            <div className="relative aspect-square overflow-hidden rounded-xl mb-6 shadow-lg border-b-4 border-secondary transition-all group-hover:shadow-xl group-hover:-translate-y-1">
              <img alt="Mrs Manjula Prasad, Chairperson" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={`${import.meta.env.BASE_URL}images/img-11.jpg`} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h3 className="font-headline text-2xl text-primary mb-1">Mrs Manjula Prasad</h3>
            <p className="text-secondary font-medium uppercase text-sm tracking-wider">Chairperson</p>
          </div>
          {/* Managing Director */}
          <div className="group">
            <div className="relative aspect-square overflow-hidden rounded-xl mb-6 shadow-lg border-b-4 border-secondary transition-all group-hover:shadow-xl group-hover:-translate-y-1">
              <img alt="Mr. Suhas Prasad, Managing Director" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={`${import.meta.env.BASE_URL}images/suhas-prasad.png`} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h3 className="font-headline text-2xl text-primary mb-1">Mr. Suhas Prasad</h3>
            <p className="text-secondary font-medium uppercase text-sm tracking-wider">Managing Director</p>
          </div>
          {/* Principal */}
          <div className="group">
            <div className="relative aspect-square overflow-hidden rounded-xl mb-6 shadow-lg border-b-4 border-secondary transition-all group-hover:shadow-xl group-hover:-translate-y-1">
              <img alt="Dr. Meena Purohit, Principal" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={`${import.meta.env.BASE_URL}images/meena-purohit.png`} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h3 className="font-headline text-2xl text-primary mb-1">Dr. Meena Purohit</h3>
            <p className="text-secondary font-medium uppercase text-sm tracking-wider">Principal</p>
          </div>
        </div>
      </section>

      {/* Section 1.6: Principal's Desk */}
      <section className="py-24 bg-surface-container-low relative">
        <div className="max-w-5xl mx-auto px-8">
          <div className="glass-card p-12 md:p-20 rounded-2xl shadow-xl border border-white/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
            <div className="relative z-10">
              <span className="text-secondary font-semibold tracking-widest uppercase text-xs mb-6 block">Academic Address</span>
              <h2 className="font-headline text-4xl text-primary mb-12">From the Principal's Desk</h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed italic">
                <p>
                  "It is my pleasure to welcome you to the D.R. Karigowda College of Pharmacy. Our institution stands as a testament to academic excellence and clinical precision in the field of pharmaceutical sciences. We are dedicated to nurturing the next generation of pharmacists who are not only technically proficient but also socially responsible leaders in the healthcare ecosystem."
                </p>
                <p>
                  "At our college, we blend traditional ethics with modern research methodologies, ensuring our students are prepared for the evolving global medical landscape. We invite you to join us in our journey of discovery, learning, and service to humanity."
                </p>
                <p className="pt-8">
                  Thank You and best wishes.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-6">
                <div className="w-16 h-[1px] bg-outline-variant"></div>
                <div>
                  <p className="font-headline text-xl text-primary">Dr. Meena Purohit</p>
                  <p className="text-secondary text-sm uppercase tracking-widest">Principal, D.R.K.C.P</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1.7: Academic Faculty */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">Expert Educators</span>
            <h2 className="font-headline text-4xl text-primary mb-4">Academic Faculty</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">Our distinguished faculty members are leaders in pharmaceutical education, dedicated to academic excellence and student success.</p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-sm border border-outline-variant/30">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-5 px-4 md:px-6 font-headline text-sm md:text-lg font-bold border-r border-white/10 w-12 text-center">Sl No</th>
                  <th className="py-5 px-4 md:px-6 font-headline text-sm md:text-lg font-bold border-r border-white/10">Name</th>
                  <th className="py-5 px-4 md:px-6 font-headline text-sm md:text-lg font-bold border-r border-white/10 hidden md:table-cell">Department</th>
                  <th className="py-5 px-4 md:px-6 font-headline text-sm md:text-lg font-bold">Designation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20 bg-white">
                {/* Pharmaceutical Chemistry */}
                <FacultyRow n={1} name="Dr. Meena Purohit" dept="Pharmaceutical Chemistry" title="Professor & HOD" />
                <FacultyRow n={2} name="Bhagya T S" dept="Pharmaceutical Chemistry" title="Associate Professor" />
                <FacultyRow n={3} name="Kerryn Joseph A Dsilva" dept="Pharmaceutical Chemistry" title="Associate Professor" />
                <FacultyRow n={4} name="Dushyanth Raj M M" dept="Pharmaceutical Chemistry" title="Assistant Professor" />
                <FacultyRow n={5} name="Jeevitha L" dept="Pharmaceutical Chemistry" title="Assistant Professor" />
                <FacultyRow n={6} name="Tanaji" dept="Pharmaceutical Chemistry" title="Assistant Professor" />
                <FacultyRow n={7} name="Sankar Nagappa" dept="Pharmaceutical Chemistry" title="Assistant Professor" />
                <FacultyRow n={8} name="Nandini H G M" dept="Pharmaceutical Chemistry" title="Assistant Professor" />
                <FacultyRow n={9} name="Amithkumar B S" dept="Pharmaceutical Chemistry" title="Assistant Professor" />
                <FacultyRow n={10} name="Devarakonda Subramanyam" dept="Pharmaceutical Chemistry" title="Assistant Professor" />
                {/* Pharmaceutics */}
                <FacultyRow n={11} name="Anil Kumar A P" dept="Pharmaceutics" title="Associate Professor" />
                <FacultyRow n={12} name="Mahaveer Singh" dept="Pharmaceutics" title="Associate Professor" />
                <FacultyRow n={13} name="Suresh N (PhD)" dept="Pharmaceutics" title="Associate Professor & HOD" />
                <FacultyRow n={14} name="Abilasha T P" dept="Pharmaceutics" title="Associate Professor" />
                <FacultyRow n={15} name="Anusha B H" dept="Pharmaceutics" title="Assistant Professor" />
                <FacultyRow n={16} name="Kavya J P" dept="Pharmaceutics" title="Assistant Professor" />
                <FacultyRow n={17} name="Rakesh B E" dept="Pharmaceutics" title="Assistant Professor" />
                <FacultyRow n={18} name="Naveen Kumar N J" dept="Pharmaceutics" title="Assistant Professor" />
                <FacultyRow n={19} name="Sinchana H J" dept="Pharmaceutics" title="Assistant Professor" />
                <FacultyRow n={20} name="Aishwarya Kini M" dept="Pharmaceutics" title="Assistant Professor" />
                <FacultyRow n={21} name="Priyanka K M (PhD)" dept="Pharmaceutics" title="Assistant Professor" />
                <FacultyRow n={22} name="Shiva Chavhan H R" dept="Pharmaceutics" title="Assistant Professor" />
                {/* Pharmacology */}
                <FacultyRow n={23} name="Preethi Fernandiz" dept="Pharmacology" title="Associate Professor & HOD" />
                <FacultyRow n={24} name="Sharadhi M" dept="Pharmacology" title="Assistant Professor" />
                <FacultyRow n={25} name="Praveen Kumar C Sajjan" dept="Pharmacology" title="Assistant Professor" />
                <FacultyRow n={26} name="Chandini B C" dept="Pharmacology" title="Assistant Professor" />
                <FacultyRow n={27} name="Sumanth N R" dept="Pharmacology" title="Assistant Professor" />
                <FacultyRow n={28} name="Vidya Banakar" dept="Pharmacology" title="Assistant Professor" />
                <FacultyRow n={29} name="Dr. Shruty Bipin" dept="Pharmacology" title="Assistant Professor" />
                {/* Pharmacognosy */}
                <FacultyRow n={30} name="Hemalatha H T (PhD)" dept="Pharmacognosy" title="Associate Professor & HOD" />
                <FacultyRow n={31} name="Rekha M" dept="Pharmacognosy" title="Assistant Professor" />
                <FacultyRow n={32} name="Dr. Najeed S M" dept="Pharmacognosy" title="Assistant Professor" />
                <FacultyRow n={33} name="Ankush D N" dept="Pharmacognosy" title="Assistant Professor" />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 3: Geographic Presence */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="w-full aspect-video rounded-xl overflow-hidden bg-surface-variant">
                {/* Simulated Map/Artistic Map */}
                <div className="w-full h-full relative" data-location="Hassan, India">
                  <img alt="Artistic aerial view of a vibrant Indian city with historical temple spires and modern educational buildings surrounded by lush greenery" className="w-full h-full object-cover" src={`${import.meta.env.BASE_URL}images/img-17.jpg`} />
                  <div className="absolute inset-0 bg-primary/20 backdrop-grayscale-[0.5]"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-white p-3 rounded-full shadow-lg">
                      <div className="w-4 h-4 bg-secondary rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-surface-container p-6 rounded-lg">
                  <p className="text-xs font-semibold text-outline tracking-widest uppercase mb-1">Distance from</p>
                  <p className="font-headline text-xl text-primary">Bangalore: 185 Kms</p>
                </div>
                <div className="bg-surface-container p-6 rounded-lg">
                  <p className="text-xs font-semibold text-outline tracking-widest uppercase mb-1">Distance from</p>
                  <p className="font-headline text-xl text-primary">Mangalore: 170 Kms</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-headline text-4xl text-primary mb-6">The Academic Aroma of Hassan City</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                Nestled in the heart of Karnataka, Hassan is a sanctuary of art and architecture. Our campus is infused with the city's unique "academic aroma," offering students a serene yet stimulating environment for high-level clinical research.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary mt-1" data-icon="architecture">architecture</span>
                  <div>
                    <h4 className="font-semibold text-primary">Rich Cultural Heritage</h4>
                    <p className="text-sm text-outline">Proximity to world-renowned Hoysala architecture and historic landmarks.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary mt-1" data-icon="forest">forest</span>
                  <div>
                    <h4 className="font-semibold text-primary">Serene Learning Environment</h4>
                    <p className="text-sm text-outline">Away from the urban chaos, providing the focus required for pharmaceutical precision.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="clinical-gradient rounded-xl p-12 md:p-20 text-center relative overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-headline text-4xl md:text-5xl text-white mb-6">Shape the Future of Healthcare</h2>
              <p className="text-primary-fixed-dim text-lg mb-10 leading-relaxed">
                Join the next cohort of clinical innovators. Our admissions for the upcoming academic year are now open for B. Pharm and D. Pharm programs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded font-bold hover:scale-[1.02] transition-transform">
                  Apply Now
                </button>
                <button className="border border-white/30 text-white px-10 py-4 rounded font-bold hover:bg-white/10 transition-colors">
                  Request Prospectus
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FacultyRow({ n, name, dept, title }) {
  return (
    <tr className="hover:bg-surface-container-low transition-colors duration-200">
      <td className="py-4 px-4 md:px-6 text-outline text-center border-r border-outline-variant/10 text-sm">{n}</td>
      <td className="py-4 px-4 md:px-6 font-medium text-primary border-r border-outline-variant/10">{name}</td>
      <td className="py-4 px-4 md:px-6 text-on-surface-variant border-r border-outline-variant/10 hidden md:table-cell">{dept}</td>
      <td className="py-4 px-4 md:px-6 text-on-surface-variant">{title}</td>
    </tr>
  )
}

function PhilosophyTile({ active, onHover, icon, title, description }) {
  return (
    <div
      onMouseEnter={onHover}
      className={`p-10 rounded-xl flex flex-col gap-6 relative overflow-hidden transition-all duration-500 cursor-pointer ${
        active
          ? 'bg-primary-container shadow-xl text-white'
          : 'bg-surface-container-lowest shadow-sm border-l-4 border-secondary'
      }`}
    >
      {active && (
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <span className="material-symbols-outlined text-8xl">{icon}</span>
        </div>
      )}
      <span className={`material-symbols-outlined text-4xl transition-colors duration-500 ${active ? 'text-secondary-fixed' : 'text-secondary'}`}>{icon}</span>
      <h3 className={`font-headline text-2xl transition-colors duration-500 ${active ? 'text-white' : 'text-primary'}`}>{title}</h3>
      <p className={`leading-relaxed transition-colors duration-500 ${active ? 'text-primary-fixed-dim' : 'text-on-surface-variant'}`}>
        {description}
      </p>
    </div>
  )
}
