const base = import.meta.env.BASE_URL

const documents = [
  {
    icon: 'apartment',
    title: 'RGUHS Approval Letter',
    description: 'Official approval letter from Rajiv Gandhi University of Health Sciences for the college and its programs.',
    file: 'rguhs-approval-letter.pdf',
  },
  {
    icon: 'verified',
    title: 'PCI Decision Letter 2025–26',
    description: 'Pharmacy Council of India decision letter granting approval for the academic year 2025–26.',
    file: 'pci-decision-letter-2025-26.pdf',
  },
  {
    icon: 'person',
    title: "Principal's Resume",
    description: 'Curriculum vitae of the Principal as required under mandatory disclosure norms.',
    file: 'principals-resume.pdf',
  },
]

export default function MandatoryDisclosuresPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[614px] flex items-center overflow-hidden bg-primary-container">
        <div className="absolute inset-0 medical-pattern opacity-10"></div>
        <div className="absolute inset-0 clinical-gradient opacity-90"></div>
        <div className="relative max-w-screen-2xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-secondary text-white text-xs font-bold tracking-widest uppercase mb-6 rounded-full">
              Transparency {"&"} Compliance
            </span>
            <h1 className="text-5xl md:text-7xl font-headline text-white leading-tight mb-6">
              Mandatory Disclosures
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-xl leading-relaxed">
              Official approval letters and documents as required by regulatory and statutory authorities.
            </p>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-24 px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-secondary font-semibold tracking-widest text-sm uppercase mb-4">Official Documents</h2>
            <h3 className="font-headline text-4xl md:text-5xl text-primary-container leading-tight">
              Regulatory {"&"} <span className="italic">Approval Documents</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {documents.map((doc) => (
              <div
                key={doc.file}
                className="bg-surface-container-lowest p-8 rounded-xl border-l-4 border-transparent hover:border-secondary transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
              >
                <div className="bg-surface-container-low p-4 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-white transition-colors inline-block mb-6">
                  <span className="material-symbols-outlined text-3xl">{doc.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{doc.title}</h4>
                <p className="text-outline text-sm leading-relaxed mb-8">{doc.description}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`${base}documents/${doc.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-lg font-medium hover:bg-primary-container transition-all active:scale-95 text-sm"
                  >
                    <span className="material-symbols-outlined text-sm">visibility</span>
                    View
                  </a>
                  <a
                    href={`${base}documents/${doc.file}`}
                    download
                    className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-5 py-2.5 rounded-lg font-medium hover:bg-primary hover:text-on-primary transition-all active:scale-95 text-sm"
                  >
                    <span className="material-symbols-outlined text-sm">download</span>
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 clinical-gradient overflow-hidden">
        <div className="absolute inset-0 medical-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
          <h2 className="font-headline text-4xl md:text-5xl text-white mb-8">Need <span className="italic">Assistance?</span></h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            For queries regarding regulatory approvals or mandatory disclosures, please contact the college administrative office.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="mailto:drkcph@gmail.com" className="bg-secondary text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-secondary/50 transition-all active:scale-95">
              Contact Administration
            </a>
            <a className="text-white/80 hover:text-white border-b border-white/30 pb-1 font-medium flex items-center gap-2 transition-all" href="tel:+919945914800">
              <span className="material-symbols-outlined text-sm">call</span>
              +91 9945914800
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
