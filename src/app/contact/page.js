import Form from '../../components/form';
import { COMPANY_EMAIL } from '../../lib/constants';

export const metadata = {
  title: 'Contact Us | MEP Engineering Consultation & Proposals | Engivato PLLC',
  description: 'Connect with Engivato PLLC for expert mechanical, electrical, and plumbing engineering consulting, stamped permit drawings, and fast-track tenant fit-out proposals across Dallas-Fort Worth.',
  keywords: [
    'contact MEP engineer',
    'DFW engineering proposal',
    'Dallas mechanical electrical plumbing consulting',
    'tenant improvement engineering quote',
    'stamped permit drawings Texas',
    'Engivato PLLC contact'
  ],
  openGraph: {
    title: 'Contact Us | MEP Engineering Consultation & Proposals | Engivato PLLC',
    description: 'Get in touch with Engivato PLLC for constructible, clash-free MEP engineering solutions and rapid proposal turnaround.',
    url: 'https://dylanalso.github.io/Engivato/contact',
    siteName: 'Engivato PLLC',
    type: 'website',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function Contact() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Engivato PLLC',
    description: 'Request a proposal or schedule an engineering consultation with Engivato PLLC.',
    url: 'https://dylanalso.github.io/Engivato/contact',
    mainEntity: {
      '@type': 'EngineeringBusiness',
      name: 'Engivato PLLC',
      email: COMPANY_EMAIL,
      areaServed: {
        '@type': 'State',
        name: 'Texas',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-corporate-blue selection:text-white">
        
        {/* hero section */}
        <header className="pt-36 pb-20 bg-corporate-blue text-white px-4 relative overflow-hidden" aria-labelledby="contact-hero-title">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <span className="text-orange font-semibold tracking-wider uppercase text-sm mb-3 inline-block">
              Get In Touch
            </span>
            <h1 id="contact-hero-title" className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Let&apos;s Build Systems That Perform
            </h1>
            <p className="text-slate-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              Whether you need full MEP construction documents, a fast-track commercial tenant fit-out, or code compliance review, our team is ready to assist.
            </p>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none" />
        </header>

        {/* quick contact and credentials bar */}
        <section className="bg-white border-b border-slate-200 py-8 px-4" aria-label="Direct Communication Channels">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 p-3">
              <div className="w-12 h-12 rounded-2xl bg-corporate-light flex items-center justify-center text-corporate-blue flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Direct Inquiries</div>
                <a href={`mailto:${COMPANY_EMAIL}`} className="text-base font-bold text-corporate-blue hover:text-orange transition-colors">
                  {COMPANY_EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4 p-3">
              <div className="w-12 h-12 rounded-2xl bg-corporate-light flex items-center justify-center text-corporate-blue flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Service Coverage</div>
                <div className="text-base font-bold text-slate-900">Dallas–Fort Worth &amp; North Texas</div>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4 p-3">
              <div className="w-12 h-12 rounded-2xl bg-corporate-light flex items-center justify-center text-corporate-blue flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Response Commitment</div>
                <div className="text-base font-bold text-slate-900">&lt; 24 Hour Initial Proposal Review</div>
              </div>
            </div>
          </div>
        </section>

        {/* main form and context */}
        <main className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* left: Web3Forms */}
            <div className="lg:col-span-7">
              <Form />
            </div>

            {/* right: additional information */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* submission process */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span>How We Handle Inquiries</span>
                </h3>

                <ol className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-corporate-light text-corporate-blue font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      01
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">Scope &amp; Drawing Review</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        We analyze your architectural backgrounds, existing MEP conditions, and jurisdiction requirements to scope exact deliverables.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-corporate-light text-corporate-blue font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      02
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">Clear, Itemized Proposal</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        You receive a transparent engineering proposal outlining phases, milestones, permit coordination fees, and completion dates.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-corporate-light text-corporate-blue font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      03
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">Kick-off &amp; BIM Coordination</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Upon authorization, our engineering team initiates load calculations, equipment sizing, and clash-free 3D Revit modeling.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              {/* sending plans / RFPs */}
              <div className="bg-gradient-to-br from-corporate-light/80 to-blue-50/60 rounded-3xl p-8 border border-corporate-blue/20">
                <div className="w-10 h-10 rounded-xl bg-corporate-blue text-white flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h4 className="text-base font-bold text-corporate-blue mb-2">Have Architectural Plans Ready?</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  If you have CAD files, Revit models, or PDF architectural drawings, you can email them directly to{' '}
                  <a href={`mailto:${COMPANY_EMAIL}`} className="font-semibold text-corporate-blue hover:text-orange underline">
                    {COMPANY_EMAIL}
                  </a>{' '}
                  or include a cloud link in your message.
                </p>
                <div className="text-[11px] font-medium text-slate-500">
                  Accepted formats: .dwg, .rvt, .pdf, .zip
                </div>
              </div>

              {/* consultation faq */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
                <h4 className="text-base font-bold text-slate-900 mb-2">Frequently Asked</h4>
                
                <div>
                  <h5 className="text-xs font-bold text-corporate-blue mb-1">How fast is proposal turnaround?</h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Standard proposals are delivered within 24 to 48 business hours after receiving your scope details and architectural backgrounds.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <h5 className="text-xs font-bold text-corporate-blue mb-1">Do you handle fast-track deadlines?</h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Yes. We routinely coordinate expedited tenant improvement and renovation sets for retail, restaurant, and commercial spaces.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <h5 className="text-xs font-bold text-corporate-blue mb-1">Are all drawings stamped by a licensed P.E.?</h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Yes. All final construction documents are sealed by licensed Professional Engineers conforming to Texas municipal building codes.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </main>

      </div>
    </>
  );
}
