import Link from 'next/link';
import { getPageSections } from '../../lib/settings';

export const metadata = {
  title: 'Sector Capabilities & Project Typologies | MEP Engineering | Engivato PLLC',
  description: 'Explore Engivato PLLC’s MEP engineering capabilities across commercial restaurants, office finish-outs, multifamily developments, retail spaces, and HVAC modernization throughout Texas.',
  keywords: [
    'MEP engineering sector capabilities',
    'DFW restaurant MEP engineering',
    'Dallas commercial office finish-out engineering',
    'Texas multifamily MEP design',
    'commercial kitchen ventilation',
    'tenant improvement engineering Texas',
    'HVAC replacement engineering DFW',
    'Engivato PLLC'
  ],
  openGraph: {
    title: 'Sector Capabilities & Project Typologies | MEP Engineering | Engivato PLLC',
    description: 'Explore our multidisciplinary mechanical, electrical, and plumbing engineering capabilities across key built environment sectors in North Texas.',
    url: 'https://dylanalso.github.io/Engivato/projects',
    siteName: 'Engivato PLLC',
    type: 'website',
  },
  alternates: {
    canonical: '/projects',
  },
};

export default async function Projects() {
  const { projects: sections } = await getPageSections();

  const sectorCapabilities = [
    {
      id: 'restaurants',
      title: 'Restaurants & Commercial Kitchens',
      badge: 'High-Demand Systems',
      desc: 'Commercial food service environments demand intense coordination across grease exhaust, makeup air balancing, high-volume gas distribution, and continuous plumbing sanitation.',
      icon: (
        <svg className="w-7 h-7 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      scopes: [
        'Type I & Type II commercial kitchen hood exhaust systems',
        'Make-Up Air (MUA) interlocks and thermal comfort balancing',
        'Commercial grease interceptor sizing and dedicated grease waste routing',
        'High-capacity natural gas piping schematics and pressure regulation',
        'Health department and municipal fire marshal coordination'
      ],
      idealFor: 'Quick-service restaurants, fine dining, commercial ghost kitchens, brewpubs, and food hall conversions.'
    },
    {
      id: 'office-finish-outs',
      title: 'Commercial Office Finish-Outs & Tenant Improvements',
      badge: 'Fast-Track Turnaround',
      desc: 'Tenant improvements require rapid turnaround times, constructible layouts, and flexible power and HVAC zoning to meet aggressive move-in schedules and local energy codes.',
      icon: (
        <svg className="w-7 h-7 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      scopes: [
        'Complete MEP tenant improvement construction drawings',
        'Title 24 / IECC automated lighting controls and occupancy sensors',
        'Zoned VAV / VRF thermal comfort and thermostat redistribution',
        'Flexible electrical branch circuit wiring and server room power circuits',
        'Expedited municipal permit turnaround and plan check response'
      ],
      idealFor: 'Corporate headquarters finish-outs, creative agency offices, medical/dental suites, and speculative office suites.'
    },
    {
      id: 'multifamily',
      title: 'Multifamily & Mixed-Use Residential',
      badge: 'Integrated Density',
      desc: 'Multifamily and podium developments require coordinated MEP engineering balancing individual dwelling unit comfort, acoustic isolation, centralized utilities, and common amenities.',
      icon: (
        <svg className="w-7 h-7 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      scopes: [
        'Full-scope mechanical, electrical, and plumbing podium design',
        'Centralized domestic hot water generation and recirculation loops',
        'Tenant electrical submetering and utility distribution panels',
        'Amenity clubhouse, fitness center, and co-working space MEP engineering',
        'Enclosed parking garage carbon monoxide (CO) ventilation design'
      ],
      idealFor: 'Apartment communities, podium mixed-use developments, condominium complexes, and senior living facilities.'
    },
    {
      id: 'retail-shell',
      title: 'Commercial Retail & Shell Buildings',
      badge: 'Flexible Infrastructure',
      desc: 'Warm shell and vanilla box retail developments require adaptable utility stub-outs and electrical capacity that streamline future tenant fit-outs without costly structural modifications.',
      icon: (
        <svg className="w-7 h-7 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      scopes: [
        'Speculative shell electrical service entrances and switchgear sizing',
        'Rooftop unit curb coordination and roof penetration plans',
        'Sanitary waste, domestic water, and natural gas stub-out coordination',
        'Subdivision of utility metering for multi-tenant strip centers',
        'Code-compliant exterior and parking lot photometric lighting design'
      ],
      idealFor: 'Boutique shopping centers, suburban retail strips, stand-alone commercial pads, and adaptive reuse retail.'
    },
    {
      id: 'hvac-modernization',
      title: 'HVAC Replacements & Building System Modernization',
      badge: 'Efficiency & Longevity',
      desc: 'Modernizing aging mechanical equipment extends building life, lowers peak utility costs, and ensures compliance with updated local energy codes and refrigerant standards.',
      icon: (
        <svg className="w-7 h-7 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      scopes: [
        'Packaged Rooftop Unit (RTU) like-for-like and upgraded replacements',
        'Heating and cooling load calculations (Manual N / ASHRAE standards)',
        'Ductwork redistribution and static pressure re-balancing',
        'Smart programmable thermostat and basic BAS integration',
        'Energy code compliance documentation (COMcheck)'
      ],
      idealFor: 'Aging commercial buildings, schools, religious institutions, light industrial warehouses, and community facilities.'
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Sector Capabilities | Engivato PLLC',
    description: 'Mechanical, Electrical, and Plumbing engineering sector capabilities and project typologies by Engivato PLLC.',
    url: 'https://dylanalso.github.io/Engivato/projects',
    publisher: {
      '@type': 'EngineeringBusiness',
      name: 'Engivato PLLC',
      url: 'https://dylanalso.github.io/Engivato',
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
        {sections.showHero && (
          <header className="pt-36 pb-20 bg-corporate-blue text-white px-4 relative overflow-hidden" aria-labelledby="projects-hero-title">
            <div className="max-w-6xl mx-auto text-center relative z-10">
              <span className="text-orange font-semibold tracking-wider uppercase text-sm mb-3 inline-block">
                Sector Capabilities &amp; Scope Focus
              </span>
              <h1 id="projects-hero-title" className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                MEP Engineering Across Key Sectors
              </h1>
              <p className="text-slate-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8">
                Practical, code-compliant Mechanical, Electrical, and Plumbing engineering tailored to the unique operational, architectural, and schedule demands of North Texas facilities.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-orange hover:bg-orange-dark text-white px-8 py-3.5 rounded-full font-semibold text-base shadow-lg hover:shadow-orange/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Discuss Your Project Scope
                </Link>
                <Link
                  href="/services"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 backdrop-blur-sm"
                >
                  View All Services
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none" />
          </header>
        )}

        {/* quick highlights strip */}
        {sections.showHighlights && (
          <section className="bg-white border-b border-slate-200 py-8 px-4" aria-label="Engineering Strengths">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-3">
                <div className="text-2xl md:text-3xl font-extrabold text-corporate-blue mb-1">Direct</div>
                <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Principal Oversight</div>
              </div>
              <div className="p-3">
                <div className="text-2xl md:text-3xl font-extrabold text-corporate-blue mb-1">Texas</div>
                <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">DFW &amp; Municipal Mastery</div>
              </div>
              <div className="p-3">
                <div className="text-2xl md:text-3xl font-extrabold text-corporate-blue mb-1">Coordinated</div>
                <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Clash-Free MEP Design</div>
              </div>
              <div className="p-3">
                <div className="text-2xl md:text-3xl font-extrabold text-corporate-blue mb-1">Agile</div>
                <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Fast RFI Turnaround</div>
              </div>
            </div>
          </section>
        )}

        {/* sector capabilities main section */}
        {sections.showSectors && (
          <main className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-orange font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Targeted Built Environments
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Engineering Tailored to Your Asset Type
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
                  Every building sector has unique regulatory mandates, utility demands, and spatial constraints. We design constructible MEP systems aligned with contractor workflows.
                </p>
              </div>

              <div className="space-y-12">
                {sectorCapabilities.map((sector) => (
                  <article
                    key={sector.id}
                    id={sector.id}
                    className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                  >
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
                      <div className="lg:w-7/12">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                            {sector.icon}
                          </div>
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-corporate-blue px-3 py-1 bg-corporate-light rounded-full inline-block">
                              {sector.badge}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                          {sector.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-6 text-base md:text-lg">
                          {sector.desc}
                        </p>

                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 mb-6">
                          <span className="text-xs font-bold uppercase tracking-wide text-corporate-blue block mb-1">
                            Typical Applications
                          </span>
                          <p className="text-xs md:text-sm text-slate-600">
                            {sector.idealFor}
                          </p>
                        </div>
                      </div>

                      <div className="lg:w-5/12 w-full bg-slate-50 rounded-2xl p-6 border border-slate-100">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-corporate-blue mb-4 flex items-center gap-2">
                          <svg className="w-4 h-4 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Key Engineering Deliverables
                        </h4>
                        <ul className="space-y-3 mb-6">
                          {sector.scopes.map((scope, sIdx) => (
                            <li key={sIdx} className="flex items-start text-xs md:text-sm text-slate-700">
                              <span className="text-orange font-bold mr-2.5 flex-shrink-0">•</span>
                              <span>{scope}</span>
                            </li>
                          ))}
                        </ul>

                        <Link
                          href={`/contact?sector=${encodeURIComponent(sector.title)}`}
                          className="inline-flex items-center justify-center w-full bg-corporate-blue hover:bg-corporate-dark text-white px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-colors duration-200"
                        >
                          Request Scope Consultation
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* confidentiality & drawing packages callout */}
              <div className="mt-16 bg-gradient-to-br from-corporate-blue to-blue-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="max-w-3xl relative z-10">
                  <span className="text-orange font-semibold tracking-wider uppercase text-xs mb-2 block">
                    Confidentiality &amp; Deliverables
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Sample Drawing Packages &amp; Plan Sets
                  </h3>
                  <p className="text-slate-200 text-sm md:text-base leading-relaxed mb-6">
                    In accordance with client non-disclosure agreements and commercial confidentiality, complete stamped MEP drawing sets, single-line schematics, and client references are provided directly upon request during project consultations.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-orange hover:bg-orange-dark text-white px-7 py-3 rounded-full font-semibold text-sm shadow-md transition-all duration-300"
                  >
                    Request Sample Drawings For Your Sector
                  </Link>
                </div>
                <div className="absolute -right-12 -bottom-12 w-64 h-64 opacity-10 pointer-events-none">
                  <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>

            </div>
          </main>
        )}

      </div>
    </>
  );
}

