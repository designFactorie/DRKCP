export default function ContactUs() {
  return (
    <main className="bg-surface">
      {/* Hero Header */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            data-alt="aerial view of D.R. Karigowda College of Pharmacy campus with lush green surroundings"
            src={`${import.meta.env.BASE_URL}images/img-08.jpg`}
          />
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl text-center">
          <p className="text-secondary-fixed font-medium tracking-widest uppercase text-sm mb-6">Get in Touch</p>
          <h1 className="text-5xl md:text-7xl text-white mb-4 leading-tight font-headline">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            We'd love to hear from you. Reach out for admissions, campus visits, or any queries.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-8"></div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-24 px-8 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Phone */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-b-4 border-secondary transition-all hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center rounded-lg mb-6 group-hover:bg-secondary/20 transition-colors">
              <span className="material-symbols-outlined text-secondary text-2xl">call</span>
            </div>
            <h3 className="text-lg font-bold text-primary font-headline mb-4">Phone</h3>
            <div className="space-y-2 text-on-surface-variant text-sm">
              <a href="tel:+919945914800" className="block hover:text-secondary transition-colors">+91-9945914800</a>
              <a href="tel:+919035990218" className="block hover:text-secondary transition-colors">+91-9035990218</a>
              <a href="tel:+917760585096" className="block hover:text-secondary transition-colors">+91-7760585096</a>
              <a href="tel:+917899599188" className="block hover:text-secondary transition-colors">+91-7899599188</a>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-b-4 border-primary transition-all hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-lg mb-6 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary text-2xl">mail</span>
            </div>
            <h3 className="text-lg font-bold text-primary font-headline mb-4">Email</h3>
            <div className="space-y-2 text-on-surface-variant text-sm">
              <a href="mailto:drkcph@gmail.com" className="block hover:text-primary transition-colors">drkcph@gmail.com</a>
            </div>
          </div>

          {/* Address */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-b-4 border-secondary transition-all hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center rounded-lg mb-6 group-hover:bg-secondary/20 transition-colors">
              <span className="material-symbols-outlined text-secondary text-2xl">location_on</span>
            </div>
            <h3 className="text-lg font-bold text-primary font-headline mb-4">Address</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              D.R. Karigowda College of Pharmacy, Udayagiri, Kuvempunagar, Hassan 573201, Karnataka, India.
            </p>
          </div>

          {/* Office Hours */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-b-4 border-primary transition-all hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-lg mb-6 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary text-2xl">schedule</span>
            </div>
            <h3 className="text-lg font-bold text-primary font-headline mb-4">Office Hours</h3>
            <div className="space-y-2 text-on-surface-variant text-sm">
              <p>Mon – Sat: 9:00 AM – 5:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section id="enquiry-form" className="py-24 px-8 md:px-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <div className="flex items-center gap-4 text-secondary mb-2">
              <span className="material-symbols-outlined">edit_note</span>
              <span className="uppercase tracking-widest text-xs font-bold">Send a Message</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary italic leading-tight mb-4">We're Here to Help</h2>
            <p className="text-on-surface-variant leading-relaxed mb-10">
              Have a question about admissions, programs, or campus life? Fill out the form and our team will get back to you promptly.
            </p>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-outline uppercase tracking-widest mb-2 block">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-5 py-4 bg-white rounded-lg text-sm text-on-surface placeholder:text-outline/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all shadow-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-outline uppercase tracking-widest mb-2 block">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full px-5 py-4 bg-white rounded-lg text-sm text-on-surface placeholder:text-outline/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all shadow-sm"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-outline uppercase tracking-widest mb-2 block">Email Address</label>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-5 py-4 bg-white rounded-lg text-sm text-on-surface placeholder:text-outline/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all shadow-sm"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-outline uppercase tracking-widest mb-2 block">Subject</label>
                <select className="w-full px-5 py-4 bg-white rounded-lg text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all shadow-sm">
                  <option value="">Select a topic</option>
                  <option value="admissions">Admissions Inquiry</option>
                  <option value="academics">Academic Programs</option>
                  <option value="campus">Campus Visit</option>
                  <option value="placement">Placement & Careers</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-outline uppercase tracking-widest mb-2 block">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full px-5 py-4 bg-white rounded-lg text-sm text-on-surface placeholder:text-outline/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all shadow-sm resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-secondary text-white px-10 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-secondary/30 transition-all active:scale-95 flex items-center gap-3"
              >
                Send Message
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="flex flex-col gap-8">
            <div className="flex-1 rounded-xl overflow-hidden shadow-xl min-h-[400px]">
              <iframe
                title="D.R.Karigowda College of Pharmacy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.5!2d76.1151033!3d13.0109542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5482e5d5013b3%3A0xf802216f959a8e20!2sD.%20R.%20Karigowda%20College%20of%20Pharmacy!5e0!3m2!1sen!2sin!4v1700000000000"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/HGg8sPH5DPnLkbg48"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border-2 border-primary text-primary font-bold py-4 rounded-lg hover:bg-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined">directions</span>
              Get Directions on Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Quick Connect */}
      <section className="py-24 px-8 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4 italic">Quick Connect</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-on-surface-variant text-lg">Reach the right department directly for faster assistance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-secondary">
              <div className="flex items-center gap-3 mb-6 text-secondary">
                <span className="material-symbols-outlined">school</span>
                <h3 className="text-xl font-bold font-headline text-primary">Admissions Office</h3>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">For admission inquiries, eligibility criteria, and application process.</p>
              <a href="tel:+919945914800" className="flex items-center gap-2 text-secondary font-bold text-sm hover:gap-4 transition-all">
                <span className="material-symbols-outlined text-sm">call</span>
                +91-9945914800
              </a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary">
              <div className="flex items-center gap-3 mb-6 text-primary">
                <span className="material-symbols-outlined">admin_panel_settings</span>
                <h3 className="text-xl font-bold font-headline text-primary">Administration</h3>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">General administration, documentation, and institutional queries.</p>
              <a href="tel:+919035990218" className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-4 transition-all">
                <span className="material-symbols-outlined text-sm">call</span>
                +91-9035990218
              </a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-secondary">
              <div className="flex items-center gap-3 mb-6 text-secondary">
                <span className="material-symbols-outlined">support_agent</span>
                <h3 className="text-xl font-bold font-headline text-primary">General Enquiry</h3>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">For campus visits, events, and any other information.</p>
              <a href="tel:+917760585096" className="flex items-center gap-2 text-secondary font-bold text-sm hover:gap-4 transition-all">
                <span className="material-symbols-outlined text-sm">call</span>
                +91-7760585096
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 md:px-20 bg-primary text-on-primary overflow-hidden relative">
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4">
          <span className="material-symbols-outlined text-[400px]">school</span>
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="uppercase tracking-[0.4em] text-xs font-bold text-secondary-fixed-dim mb-6 block">Begin Your Journey</span>
          <h2 className="text-4xl md:text-6xl font-headline font-bold mb-8 italic">Ready to Shape Your Future?</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-10"></div>
          <p className="text-xl leading-relaxed text-primary-fixed-dim max-w-2xl mx-auto">
            Take the first step towards a rewarding career in pharmaceutical sciences. Apply now and join a legacy of clinical excellence at D.R. Karigowda College of Pharmacy.
          </p>
          <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
            <a href="#enquiry-form" className="bg-secondary text-white px-10 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-secondary/30 transition-all active:scale-95">
              Apply Now
            </a>
            <a
              href="tel:+919945914800"
              className="border border-white/30 backdrop-blur-md text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined">call</span>
              Call Us Directly
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
