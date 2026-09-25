export default function MandatoryDisclosures() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[300px] md:min-h-[360px] pt-28 pb-12 flex items-center overflow-hidden bg-primary-container">
        <div className="absolute inset-0 medical-pattern opacity-10"></div>
        <div className="absolute inset-0 clinical-gradient opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-secondary text-white text-xs font-bold tracking-widest uppercase mb-6 rounded-full">
              Transparency {"&"} Compliance
            </span>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-headline text-white leading-tight mb-6">
              Important Links
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-xl leading-relaxed">
              Access regulatory portals, university services, scholarship resources, and official disclosures as required by regulatory authorities.
            </p>
          </div>
        </div>
      </section>

      {/* RGUHS Services */}
      <section className="py-12 md:py-16 px-5 sm:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 lg:mb-10">
            <h2 className="text-secondary font-semibold tracking-widest text-sm uppercase mb-4">University Services</h2>
            <h3 className="font-headline text-3xl md:text-4xl text-primary-container leading-tight">
              RGUHS {"&"} <span className="italic">Examination Portals</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <LinkCard
              icon="description"
              title="Migration Certificate, PDC, NOC"
              description="Apply for Migration Certificate, PDC, NOC for transfer certificate, NOC for migration certificate"
              href="http://www.rguhs.ac.in/forms/sakala/sakala%20webpage%20New.html"
            />
            <LinkCard
              icon="verified"
              title="Online Eligibility Certificate"
              description="Apply for Online Eligibility Certificate through the RGUHS Karnataka portal"
              href="https://rguhs.karnataka.gov.in/rguhsec/"
            />
            <LinkCard
              icon="school"
              title="RGUHS Result"
              description="View examination results published by Rajiv Gandhi University of Health Sciences"
              href="https://gnanasangama.karnataka.gov.in/rguresult/"
            />
            <LinkCard
              icon="edit_note"
              title="Name Correction / Duplicate Marks Card"
              description="Application for name correction, consolidated marks card, duplicate marks card, or official transcript"
              href="http://www.rguhs.ac.in/forms/mainform.htm"
            />
            <LinkCard
              icon="swap_horiz"
              title="NOC for Migration Transfer"
              description="Application of NOC for non-Karnataka candidates — University to another University transfer"
              href="http://www.rguhs.ac.in/downloads_rguhs.html"
            />
            <LinkCard
              icon="celebration"
              title="RGUHS Convocation Application"
              description="Apply for the RGUHS Convocation ceremony and degree certificate"
              href="http://www.rguhs.ac.in/convocation_rguhs.html"
            />
            <LinkCard
              icon="local_library"
              title="RGUHS Digital Library"
              description="Access the RGUHS Digital Library for academic resources and research materials"
              href="http://www.rguhs.ac.in/digitallibrary/RGUHS%20Digital%20Library.htm"
            />
          </div>
        </div>
      </section>

      {/* Regulatory Bodies */}
      <section className="py-12 md:py-16 px-5 sm:px-8 bg-surface-container-low relative overflow-hidden">
        <div className="absolute inset-0 medical-pattern"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-8 lg:mb-10">
            <h2 className="text-secondary font-semibold tracking-widest text-sm uppercase mb-4">Governance</h2>
            <h3 className="font-headline text-3xl md:text-4xl text-primary-container leading-tight">
              Regulatory {"&"} <span className="italic">Statutory Bodies</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <LinkCard
              icon="assignment_turned_in"
              title="BEAD (D.Pharm) Result"
              description="Board of Examining Authority — Diploma in Pharmacy examination results"
              href="http://www.beadpharmacy.org/results/"
            />
            <LinkCard
              icon="account_balance"
              title="Drugs Control Department (BEAD)"
              description="Board of Examining Authority for D.Pharmacy under the Drugs Control Department"
              href="https://www.beadpharmacy.org/"
            />
            <LinkCard
              icon="medical_services"
              title="Pharmacy Council of India"
              description="National regulatory body for pharmacy education and practice in India"
              href="https://www.pci.nic.in/"
            />
            <LinkCard
              icon="local_pharmacy"
              title="Karnataka State Pharmacy Council"
              description="State-level pharmacy regulatory body for registration and compliance"
              href="https://www.kspcdic.com/"
            />
            <LinkCard
              icon="assured_workload"
              title="Drugs Control Department, Karnataka"
              description="Government of Karnataka — regulation and licensing of drugs and cosmetics"
              href="https://drugs.kar.nic.in/"
            />
          </div>
        </div>
      </section>

      {/* Research Resources */}
      <section className="py-12 md:py-16 px-5 sm:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 lg:mb-10">
            <h2 className="text-secondary font-semibold tracking-widest text-sm uppercase mb-4">Knowledge Base</h2>
            <h3 className="font-headline text-3xl md:text-4xl text-primary-container leading-tight">
              Research <span className="italic">Resources</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <LinkCard
              icon="biotech"
              title="PubMed"
              description="Free access to the MEDLINE database of biomedical and life sciences literature"
              href="https://pubmed.ncbi.nlm.nih.gov/"
            />
            <LinkCard
              icon="science"
              title="ScienceDirect"
              description="Leading platform for peer-reviewed scholarly literature in scientific and medical research"
              href="https://www.sciencedirect.com/"
            />
          </div>
        </div>
      </section>

      {/* Scholarships & Welfare */}
      <section className="py-12 md:py-16 px-5 sm:px-8 bg-surface-container-low relative overflow-hidden">
        <div className="absolute inset-0 medical-pattern"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-8 lg:mb-10">
            <h2 className="text-secondary font-semibold tracking-widest text-sm uppercase mb-4">Student Support</h2>
            <h3 className="font-headline text-3xl md:text-4xl text-primary-container leading-tight">
              Scholarships {"&"} <span className="italic">Welfare Portals</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <LinkCard
              icon="payments"
              title="National Scholarship Portal"
              description="Central government portal for scholarship applications across all categories"
              href="https://scholarships.gov.in/fresh/loginPage"
            />
            <LinkCard
              icon="school"
              title="SSP Post Matric Scholarship"
              description="Karnataka State Scholarship Portal for post-matric scholarship applications"
              href="https://ssp.karnataka.gov.in/"
            />
            <LinkCard
              icon="engineering"
              title="Karnataka Labour Welfare Board"
              description="Welfare schemes and benefits for labour communities in Karnataka"
              href="https://klwb.karnataka.gov.in/english"
            />
            <LinkCard
              icon="diversity_3"
              title="Minority Welfare Department"
              description="Government of Karnataka — welfare schemes for minority communities"
              href="https://dom.karnataka.gov.in/english"
            />
            <LinkCard
              icon="groups"
              title="Social Welfare Commissionerate"
              description="Educational, social and economic upliftment of Scheduled Castes in Karnataka"
              href="https://sw.kar.nic.in/index.aspx"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 md:py-16 clinical-gradient overflow-hidden">
        <div className="absolute inset-0 medical-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 text-center">
          <h2 className="font-headline text-3xl md:text-4xl text-white mb-8">Need <span className="italic">Assistance?</span></h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            For queries regarding any regulatory or scholarship applications, please contact the college administrative office.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="mailto:drkcph@gmail.com" className="bg-secondary text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-secondary/50 transition-all active:scale-95">
              Contact Administration
            </a>
            <a className="text-white/80 hover:text-white border-b border-white/30 pb-1 font-medium flex items-center gap-2 transition-all" href="tel:+919945914800">
              <span aria-hidden="true" className="material-symbols-outlined text-sm">call</span>
              +91 9945914800
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

function LinkCard({ icon, title, description, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-surface-container-lowest p-5 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-l-4 border-transparent hover:border-secondary"
    >
      <div className="flex items-start gap-3">
        <div className="bg-surface-container-low p-3 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-white transition-colors shrink-0">
          <span aria-hidden="true" className="material-symbols-outlined text-2xl">{icon}</span>
        </div>
        <div className="min-w-0">
          <h4 className="text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{title}</h4>
          <p className="text-outline text-sm leading-relaxed">{description}</p>
          <span className="inline-flex items-center gap-1 text-secondary text-xs font-semibold mt-4 opacity-100 transition-opacity uppercase tracking-wider">
            Visit Portal <span aria-hidden="true" className="material-symbols-outlined text-xs">arrow_forward</span>
          </span>
        </div>
      </div>
    </a>
  )
}
