import Link from 'next/link';
import { getServicesPage } from '../../lib/settings';
import { SITE_URL } from '../../lib/constants';
import PageUnavailable from '../../components/PageUnavailable';
import DraftingStrip from '../../components/DraftingStrip';

const DISCIPLINE_DWG_CODES = ['DWG NO. M-101', 'DWG NO. E-201', 'DWG NO. P-301', 'DWG NO. C-401'];

const DISCIPLINE_ICONS = [
  <svg key="mech" className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  <svg key="elec" className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
  <svg key="plumb" className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>,
  <svg key="consult" className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
];

const CAPABILITY_ICONS = [
  <svg key="c1" className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>,
  <svg key="c2" className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>,
  <svg key="c3" className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>,
  <svg key="c4" className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>,
  <svg key="c5" className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="c6" className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
];

const STANDARD_METADATA = {
  'autodesk revit mep': {
    href: 'https://www.autodesk.com/products/revit/mep',
    note: '3D BIM modeling, multi-discipline routing & clash detection',
  },
  autocad: {
    href: 'https://www.autodesk.com/products/autocad/overview',
    note: '2D CAD drafting, one-line schematics & permit detail sheets',
  },
  'ashrae 90.1 / 62.1': {
    href: 'https://www.ashrae.org/technical-resources/bookstore/standard-90-1',
    note: 'Commercial building energy efficiency & indoor ventilation standards',
  },
  'international building code (ibc)': {
    href: 'https://codes.iccsafe.org/codes/i-codes',
    note: 'Life-safety, occupancy classification & mechanical shaft compliance',
  },
  'international energy conservation code (iecc)': {
    href: 'https://codes.iccsafe.org/codes/i-codes',
    note: 'Texas municipal commercial & residential energy code compliance',
  },
  'national electrical code (nec / nfpa 70)': {
    href: 'https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70',
    note: 'Electrical power distribution, feeder sizing & overcurrent protection',
  },
  'uniform plumbing code (upc / ipc)': {
    href: 'https://uniformcodes.org/plumbing-codes/#ipc-vs-upc',
    note: 'Sanitary waste, vent, domestic water & grease interceptor sizing',
  },
  'nfpa 13 / 14 / 20 / 72': {
    href: 'https://www.nfpa.org/for-professionals/codes-and-standards',
    note: 'Fire protection coordination, standpipes, fire pumps & life-safety',
  },
  'comcheck & rescheck': {
    href: 'https://www.energycodes.gov/comcheck',
    note: 'U.S. DOE energy compliance documentation for city permit submittals',
  },
  'trace 3d plus': {
    href: 'https://www.trane.com/commercial/north-america/us/en/products-systems/design-and-analysis-tools/trane-design-tools/trace-3d-plus.html',
    note: 'Hourly thermal load calculations & HVAC energy simulation',
  },
};

function getStandardInfo(badge = '') {
  const key = badge.trim().toLowerCase();
  return STANDARD_METADATA[key] || null;
}

export async function generateMetadata() {
  const servicesData = await getServicesPage();
  const title =
    servicesData.seo?.metaTitle ||
    'MEP Engineering Services | Mechanical, Electrical & Plumbing | Engivato PLLC';
  const description =
    servicesData.seo?.metaDescription ||
    'Comprehensive MEP engineering solutions by Engivato PLLC. Specializing in mechanical (HVAC), electrical, plumbing, engineering consulting, energy modeling, and Revit BIM design.';

  return {
    title,
    description,
    keywords: [
      'MEP engineering services',
      'mechanical engineering HVAC',
      'electrical systems design',
      'plumbing engineering',
      'engineering consulting and project support',
      'energy modeling IECC ASHRAE',
      'Revit BIM coordination',
      'commercial MEP engineer',
      'tenant improvement engineering',
      'Engivato PLLC',
    ],
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/services`,
      siteName: 'Engivato PLLC',
      type: 'website',
    },
    alternates: {
      canonical: '/services',
    },
    ...(servicesData.pageEnabled === false ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function Services() {
  const servicesData = await getServicesPage();
  if (servicesData.pageEnabled === false) {
    return <PageUnavailable pageName="Services" />;
  }
  const { hero, valueProps, disciplines, capabilities, process: processSection, standards, faq } = servicesData;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'MEP Engineering Services',
    provider: {
      '@type': 'EngineeringBusiness',
      name: 'Engivato PLLC',
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'State',
      name: 'Texas',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Engineering Disciplines & Services',
      itemListElement: (disciplines?.items || []).map((d) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: d.title,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-corporate-blue selection:text-white">
        {/* Page Header */}
        {hero?.enabled !== false && (
          <header className="pt-36 pb-20 bg-corporate-blue text-white px-4 relative overflow-hidden" aria-labelledby="services-hero-title">
            <div className="max-w-6xl mx-auto text-center relative z-10">
              {hero.eyebrow && (
                <span className="font-mono text-orange font-semibold tracking-wider uppercase text-xs sm:text-sm mb-3 inline-block">
                  {hero.eyebrow}
                </span>
              )}
              <h1 id="services-hero-title" className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                {hero.heading}
              </h1>
              {hero.description && (
                <p className="text-slate-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8">
                  {hero.description}
                </p>
              )}
              <div className="flex flex-wrap items-center justify-center gap-4">
                {hero.primaryCtaText && (
                  <Link
                    href="/contact"
                    className="bg-orange hover:bg-orange-dark text-white px-8 py-3.5 rounded-full font-semibold text-base hover:-translate-y-0.5 transition-all duration-300 animate-slow-ping"
                  >
                    {hero.primaryCtaText}
                  </Link>
                )}
                {hero.secondaryCtaText && (
                  <a
                    href="#mep-disciplines"
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 backdrop-blur-sm"
                  >
                    {hero.secondaryCtaText}
                  </a>
                )}
              </div>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none" />
          </header>
        )}

        {/* Key Differentiators Strip */}
        {valueProps?.enabled !== false && (
          <section className="bg-white border-b border-slate-200 py-8 sm:py-12 px-4 overflow-hidden" aria-label="Key Differentiators">
            <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 text-center">
              {(valueProps.items || []).map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-4 rounded-xl bg-slate-50/70 md:bg-transparent border border-slate-100 md:border-0 flex flex-col justify-center min-w-0"
                >
                  <div className="font-heading text-sm sm:text-lg md:text-2xl lg:text-3xl font-extrabold text-corporate-blue mb-1 tracking-tight wrap-break-word">
                    {item.title}
                  </div>
                  <div className="font-mono text-[10px] sm:text-xs font-semibold text-slate-600 uppercase tracking-wider leading-snug">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <DraftingStrip
          dwg="DWG NO. MEP-100 // MASTER-SPEC"
          scale="SCALE: N.T.S."
          rev="REV 01"
          zone="STD: IBC / IECC"
        />

        {/* Core MEP Engineering Disciplines */}
        <main>
          {disciplines?.enabled !== false && (
            <section id="mep-disciplines" className="py-24 px-4 bg-slate-50 bg-drafting-grid" aria-labelledby="disciplines-heading">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  {disciplines.eyebrow && (
                    <span className="font-mono text-orange font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2 block">
                      {disciplines.eyebrow}
                    </span>
                  )}
                  <h2 id="disciplines-heading" className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                    {disciplines.heading}
                  </h2>
                  {disciplines.description && (
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                      {disciplines.description}
                    </p>
                  )}
                </div>

                <div className="space-y-12">
                  {(disciplines.items || []).map((discipline, idx) => (
                    <article
                      key={discipline.id || idx}
                      id={discipline.id}
                      className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                        <div className="lg:w-1/2">
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            <div className="p-3 bg-corporate-light rounded-xl">
                              {DISCIPLINE_ICONS[idx % DISCIPLINE_ICONS.length]}
                            </div>
                            {discipline.badge && (
                              <span className="font-mono text-xs font-bold tracking-widest text-corporate-blue uppercase px-3 py-1 bg-corporate-light rounded-full">
                                {discipline.badge}
                              </span>
                            )}
                            <span
                              aria-hidden="true"
                              className="font-mono text-[10px] font-semibold tracking-widest text-slate-400 uppercase px-2.5 py-1 border border-slate-200 rounded-md bg-slate-50"
                            >
                              {DISCIPLINE_DWG_CODES[idx % DISCIPLINE_DWG_CODES.length]} // REV 01
                            </span>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                            {discipline.title}
                          </h3>
                          {discipline.tagline && (
                            <p className="font-mono text-orange font-semibold mb-4 text-xs sm:text-sm uppercase tracking-wider">
                              {discipline.tagline}
                            </p>
                          )}
                          <p className="text-slate-600 leading-relaxed mb-6">
                            {discipline.description}
                          </p>
                          <Link
                            href="/contact"
                            className="inline-flex items-center text-corporate-blue hover:text-orange font-semibold text-sm group transition-colors"
                          >
                            Consult on {discipline.title}
                            <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>

                        <div className="lg:w-1/2 w-full bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200">
                          <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200/80">
                            <h4 className="font-mono text-xs font-bold tracking-widest text-slate-500 uppercase">
                              {disciplines.deliverablesHeading || 'Key Scope & Deliverables'}
                            </h4>
                            <span
                              aria-hidden="true"
                              className="font-mono text-[10px] font-semibold tracking-widest text-slate-400 uppercase"
                            >
                              SCALE: N.T.S.
                            </span>
                          </div>
                          <ul className="space-y-3">
                            {(discipline.features || []).map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start text-sm text-slate-700">
                                <svg className="w-5 h-5 text-orange shrink-0 mr-2.5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Specialized Engineering Capabilities */}
          {capabilities?.enabled !== false && (
            <section className="py-24 px-4 bg-white border-t border-b border-slate-200" aria-labelledby="specialized-heading">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  {capabilities.eyebrow && (
                    <span className="font-mono text-orange font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2 block">
                      {capabilities.eyebrow}
                    </span>
                  )}
                  <h2 id="specialized-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    {capabilities.heading}
                  </h2>
                  {capabilities.description && (
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                      {capabilities.description}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {(capabilities.items || []).map((service, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-corporate-blue/40 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                            {CAPABILITY_ICONS[sIdx % CAPABILITY_ICONS.length]}
                          </div>
                          <span
                            aria-hidden="true"
                            className="font-mono text-[10px] font-semibold tracking-widest text-slate-400 uppercase"
                          >
                            SPEC-{String(sIdx + 1).padStart(2, '0')} // N.T.S.
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                          {service.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Project Delivery Lifecycle */}
          {processSection?.enabled !== false && (
            <section className="py-24 px-4 bg-slate-50 bg-drafting-grid border-b border-slate-200" aria-labelledby="process-heading">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  {processSection.eyebrow && (
                    <span className="font-mono text-orange font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2 block">
                      {processSection.eyebrow}
                    </span>
                  )}
                  <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    {processSection.heading}
                  </h2>
                  {processSection.description && (
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                      {processSection.description}
                    </p>
                  )}
                </div>

                {/* Alternating Vertical Timeline */}
                <div className="relative max-w-4xl mx-auto">
                  {/* Central Spine Line (Left-aligned on mobile, centered on md+) */}
                  <div
                    aria-hidden="true"
                    className="absolute top-6 bottom-6 left-5 md:left-1/2 md:-translate-x-1/2 w-0.5 bg-slate-300"
                  />

                  <div className="space-y-8 md:space-y-0">
                    {(processSection.phases || []).map((stage, idx) => {
                      const isEven = idx % 2 === 0;
                      return (
                        <div
                          key={idx}
                          className={`relative flex items-center md:justify-between ${
                            idx > 0 ? 'md:-mt-20' : ''
                          } ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                          {/* Square Phase Card Wrapper */}
                          <div
                            className={`w-full pl-14 md:pl-0 md:w-[calc(50%-2.75rem)] flex ${
                              isEven ? 'md:justify-end' : 'md:justify-start'
                            }`}
                          >
                            <div className="group w-full max-w-[290px] aspect-square bg-white p-6 rounded-2xl border border-slate-200/90 hover:border-corporate-blue/50 shadow-sm hover:shadow-md relative flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
                              {/* Horizontal Connector Line (Mobile: Left to Spine | Desktop: Card Edge to Center Node) */}
                              <span
                                aria-hidden="true"
                                className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-0.5 w-6 bg-slate-300 group-hover:bg-orange transition-colors ${
                                  isEven ? '-right-6' : '-left-6'
                                }`}
                              />
                              <span
                                aria-hidden="true"
                                className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-orange ring-2 ring-white ${
                                  isEven ? '-right-1' : '-left-1'
                                }`}
                              />

                              <div>
                                <div className="flex items-center justify-between gap-2 mb-2">
                                  <span className="font-mono text-xs font-bold text-orange tracking-widest uppercase">
                                    {stage.step}
                                  </span>
                                  <span
                                    aria-hidden="true"
                                    className="font-mono text-[10px] font-semibold text-slate-400 tracking-widest uppercase"
                                  >
                                    DWG P-{String(idx + 1).padStart(2, '0')}
                                  </span>
                                </div>
                                <h3 className="text-base font-bold text-corporate-blue mb-2.5 leading-snug">
                                  {stage.title}
                                </h3>
                                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                                  {stage.summary}
                                </p>
                              </div>

                              <div className="pt-3 border-t border-slate-100 flex items-center justify-between font-mono text-[11px] font-semibold text-corporate-blue">
                                <span>Milestone {idx + 1}</span>
                                <span aria-hidden="true" className="text-slate-400">
                                  REV 01
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Center Spine Node + Mobile Horizontal Connector */}
                          <div
                            aria-hidden="true"
                            className="absolute left-5 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                          >
                            <div className="relative w-10 h-10 rounded-xl bg-corporate-blue text-white border-2 border-white shadow-md flex items-center justify-center font-mono text-xs font-bold tracking-wider">
                              {String(idx + 1).padStart(2, '0')}
                              <span className="md:hidden absolute left-full top-1/2 -translate-y-1/2 h-0.5 w-4 bg-slate-300" />
                            </div>
                          </div>

                          {/* Spacer for Opposite Side on Desktop */}
                          <div className="hidden md:block md:w-[calc(50%-2.75rem)]" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Codes, Standards & Design Software */}
          {standards?.enabled !== false && (
            <section className="py-16 px-4 bg-white border-b border-slate-200" aria-label="Codes & Standards">
              <div className="max-w-6xl mx-auto text-center">
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
                  {standards.heading}
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 font-mono text-xs font-semibold text-slate-700">
                  {(standards.badges || []).map((badge, bIdx) => {
                    const info = getStandardInfo(badge);
                    if (!info) {
                      return (
                        <span
                          key={bIdx}
                          className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200"
                        >
                          {badge}
                        </span>
                      );
                    }

                    return (
                      <a
                        key={bIdx}
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 hover:border-corporate-blue hover:bg-corporate-light/40 hover:text-corporate-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corporate-blue transition-all"
                      >
                        <span>{badge}</span>
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 text-slate-400 group-hover:text-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>

                        {/* Hover / Focus CAD Spec Tooltip */}
                        <span
                          role="tooltip"
                          className="pointer-events-none opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-60 p-2.5 rounded-xl bg-corporate-blue text-white font-sans text-[11px] font-normal leading-snug shadow-xl border border-white/15 z-20 text-center"
                        >
                          <span className="block font-mono text-[9px] text-orange uppercase tracking-widest font-semibold mb-0.5">
                            Official Standard / Tool ↗
                          </span>
                          {info.note}
                          <span
                            aria-hidden="true"
                            className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-corporate-blue"
                          />
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          {/* Frequently Asked Questions */}
          {faq?.enabled !== false && (
            <section className="py-24 px-4 bg-slate-50 bg-drafting-grid" aria-labelledby="faq-heading">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  {faq.eyebrow && (
                    <span className="font-mono text-orange font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2 block">
                      {faq.eyebrow}
                    </span>
                  )}
                  <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    {faq.heading}
                  </h2>
                  {faq.description && (
                    <p className="text-slate-600 text-lg">
                      {faq.description}
                    </p>
                  )}
                </div>

                <div className="space-y-6">
                  {(faq.items || []).map((item, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
                      <h3 className="text-lg font-bold text-corporate-blue mb-3">
                        {item.question}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </>
  );
}
