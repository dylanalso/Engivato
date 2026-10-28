import Link from 'next/link';
import Hero from '../components/hero.js';
import Services from '../components/services.js';
import Image from 'next/image';
import UnderConstruction from '../components/UnderConstruction.js';
import { getPageSections, getSiteSettings } from '../lib/settings.js';
import partnerImage from '../img/Why_Partner_With_Engivato_Custom.jpg';
import workstationImage from '../img/mep_engineer_workstation.jpg';

export const metadata = {
  title: 'Engivato PLLC | Texas MEP Engineering Firm',
  description: 'Engivato PLLC is a Texas-based engineering firm providing practical, innovative, and reliable Mechanical, Electrical, and Plumbing (MEP) engineering solutions across Dallas-Fort Worth and Texas.',
  keywords: [
    'MEP engineering firm Texas',
    'MEP engineering services Dallas-Fort Worth',
    'Mechanical engineering consulting',
    'HVAC design engineering',
    'Electrical engineering services',
    'Plumbing engineering design',
    'Building systems engineering',
    'MEP design and coordination',
    'Commercial building engineering',
    'Engivato PLLC'
  ],
  openGraph: {
    title: 'Engivato PLLC | Texas MEP Engineering Firm',
    description: 'Practical, innovative, and reliable Mechanical, Electrical, and Plumbing (MEP) engineering solutions for commercial, restaurant, and multifamily projects.',
    url: 'https://dylanalso.github.io/Engivato',
    siteName: 'Engivato PLLC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engivato PLLC | Texas MEP Engineering Firm',
    description: 'Innovative, practical, and reliable MEP engineering solutions across Texas.',
  },
  alternates: {
    canonical: '/',
  },
};

export default async function Home() {
  const [siteSettings, { home: sections }] = await Promise.all([
    getSiteSettings(),
    getPageSections(),
  ]);

  const isUnderConstruction =
    siteSettings.underConstruction &&
    (process.env.NODE_ENV === 'production' || siteSettings.previewInDev);

  // JSON-LD data for SEO results
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EngineeringBusiness',
    name: 'Engivato PLLC',
    description: 'Engivato PLLC is a Texas-based engineering firm providing practical, innovative, and reliable Mechanical, Electrical, and Plumbing (MEP) engineering solutions.',
    url: 'https://dylanalso.github.io/Engivato',
    // logo: 'https://dylanalso.github.io/Engivato/logoIdea2.svg', // Uncomment once logo URL is live
    sameAs: [
      // add social links here when available
      'https://www.linkedin.com/company/engivato' 
    ]
  };

  if (isUnderConstruction) {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <UnderConstruction settings={siteSettings} />
      </>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {sections.showHero && <Hero />}

      {/* company overview section */}
      {sections.showOverview && (
        <section className="bg-white py-24 font-sans selection:bg-corporate-blue selection:text-white" aria-labelledby="overview-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 id="overview-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-corporate-blue mb-6">
                  Driving Innovation Through Intelligent Engineering
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Engivato PLLC is a Texas-based engineering firm focused on providing innovative, practical, and reliable Mechanical, Electrical, and Plumbing (MEP) engineering solutions. Our goal is to help clients develop high-performing, efficient, and sustainable building systems through technical expertise, thoughtful design, and effective project coordination.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our company name reflects our commitment to combining engineering expertise with innovation and modern technology. We aim to build a forward-thinking engineering practice that understands not only the technical requirements of a project but also its operational, financial, and construction challenges.
                </p>
              </div>
              <div className="md:w-1/2 w-full">
                <div className="relative h-80 sm:h-96 md:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                  <Image
                    src={workstationImage}
                    alt="Engivato PLLC - MEP Engineering Design Workstation with 3D BIM coordination and construction blueprints"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between text-white text-xs z-10 backdrop-blur-md bg-slate-950/40 p-3 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
                      <span className="font-semibold text-slate-100 tracking-wide">3D BIM &amp; Construction Documents</span>
                    </div>
                    <span className="font-mono text-slate-300 text-[11px] hidden sm:inline">PE-Stamped Precision</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {sections.showServices && <Services />}

      {/* our process section */}
      {sections.showProcess && (
        <section className="py-24 bg-white text-slate-900 font-sans border-t border-slate-100" aria-labelledby="process-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center md:text-left max-w-3xl">
              <h2 id="process-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-corporate-blue">
                How We Work
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We combine engineering knowledge, practical problem-solving, and modern digital workflows to deliver coordinated, constructible MEP designs on schedule.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                { 
                  title: '1. Technical Assessment & Discovery', 
                  desc: 'We evaluate project requirements, architectural backgrounds, and site parameters to identify technical, operational, and municipal code requirements early.' 
                },
                { 
                  title: '2. Coordinated Design & Optimization', 
                  desc: 'We develop coordinated mechanical, electrical, and plumbing engineering systems, leveraging 3D clash resolution and value engineering to optimize design.' 
                },
                { 
                  title: '3. Constructible Delivery & Support', 
                  desc: 'We produce clear, permit-ready construction documents and provide responsive engineering support, constructability reviews, and project coordination through completion.' 
                }
              ].map((step, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* why choose us section */}
      {sections.showWhyUs && (
        <section className="py-24 bg-corporate-blue text-white font-sans" aria-labelledby="why-us-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 id="why-us-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Why Partner With Engivato?
                </h2>
                <p className="text-lg text-slate-200 leading-relaxed mb-8">
                  Engivato&apos;s competitive advantage is built around the combination of engineering knowledge, practical problem-solving, business awareness, and a modern approach to project delivery. We recognize that clients must balance performance, schedule, budget, operational reliability, and long-term value.
                </p>
                <ul className="space-y-4">
                  {[
                    'Engineering-Led Problem-Solving',
                    'Practical and Constructible Design',
                    'Technology and Modern Workflows',
                    'Business-Minded Engineering',
                    'Responsive Client Relationships'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-slate-100">
                      <svg className="w-6 h-6 text-orange mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-96 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center overflow-hidden shadow-xl">
                  <Image src={partnerImage} alt="Why Partner with Engivato" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* project partners / who we collaborate with section */}
      {sections.showTestimonials && (
        <section className="py-24 bg-slate-50 font-sans border-b border-slate-200" aria-labelledby="partners-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-orange font-semibold tracking-wider uppercase text-sm mb-2 block">
                Collaboration Across Built Environments
              </span>
              <h2 id="partners-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Built for Texas Project Teams
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We deliver responsive, principal-led MEP engineering tailored to the constructability demands, operating schedules, and municipal permitting timelines of our project partners.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                {
                  title: 'General Contractors',
                  subtitle: 'Design-Build & Bid-Build',
                  desc: 'Clear, constructible 3D coordinated drawings, fast RFI turnaround, and practical engineering solutions to field conditions.',
                  icon: (
                    <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ),
                },
                {
                  title: 'Architects & Designers',
                  subtitle: 'Seamless Integration',
                  desc: 'Early MEP system coordination that respects architectural aesthetics, ceiling geometries, and stringent Texas energy codes.',
                  icon: (
                    <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                },
                {
                  title: 'Developers & Owners',
                  subtitle: 'Lifecycle Value & ROI',
                  desc: 'Cost-effective systems balancing capital investment, long-term energy efficiency, reliable performance, and expedited permit reviews.',
                  icon: (
                    <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  ),
                },
                {
                  title: 'Facility & Property Managers',
                  subtitle: 'Upgrades & Modernization',
                  desc: 'Dependable engineering for commercial tenant finish-outs, HVAC packaged RTU replacements, and building system upgrades.',
                  icon: (
                    <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                },
              ].map((partner, idx) => (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-2xl shadow-sm border border-slate-200 hover:border-corporate-blue/40 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-5">
                      {partner.icon}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-corporate-blue px-2.5 py-0.5 bg-corporate-light rounded-full inline-block mb-3">
                      {partner.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{partner.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{partner.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/whoWeServe"
                className="inline-flex items-center gap-2 text-corporate-blue hover:text-orange font-semibold text-sm transition-colors duration-200"
              >
                <span>Explore all client &amp; partner capabilities</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

    </>
  );
}
