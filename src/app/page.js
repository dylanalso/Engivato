import Link from 'next/link';
import Hero from '../components/hero.js';
import Services from '../components/services.js';
import DraftingStrip from '../components/DraftingStrip.js';
import Image from 'next/image';
import UnderConstruction from '../components/UnderConstruction.js';
import { getHomePage, getSiteSettings } from '../lib/settings.js';
import { SITE_URL, COMPANY_EMAIL, COMPANY_PHONE, formatPhoneSchema } from '../lib/constants.js';
import RevitBimViewer from '../components/RevitBimViewer.js';
import workstationImage from '../img/mep_engineer_workstation.jpg';

const PARTNER_ICONS = [
  <svg key="gc" className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>,
  <svg key="arch" className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
  <svg key="dev" className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>,
  <svg key="fac" className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
];

export async function generateMetadata() {
  const homeData = await getHomePage();
  const title = homeData.seo?.metaTitle || 'Engivato PLLC | Texas MEP Engineering Firm';
  const description =
    homeData.seo?.metaDescription ||
    'Engivato PLLC is a Texas-based engineering firm providing practical, innovative, and reliable Mechanical, Electrical, and Plumbing (MEP) engineering solutions across Dallas-Fort Worth and Texas.';

  return {
    title,
    description,
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
      'Engivato PLLC',
    ],
    openGraph: {
      title,
      description,
      url: SITE_URL,
      siteName: 'Engivato PLLC',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: '/',
    },
  };
}

export default async function Home() {
  const [siteSettings, homeData] = await Promise.all([
    getSiteSettings(),
    getHomePage(),
  ]);

  const { hero, overview, servicesSection, process: processSection, whyUs, partners } = homeData;

  const isUnderConstruction =
    siteSettings.underConstruction &&
    (process.env.NODE_ENV === 'production' || siteSettings.previewInDev);

  // Structured data (Schema.org) for search engine indexing
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EngineeringBusiness',
    name: 'Engivato PLLC',
    description:
      homeData.seo?.metaDescription ||
      'Engivato PLLC is a Texas-based engineering firm providing practical, innovative, and reliable Mechanical, Electrical, and Plumbing (MEP) engineering solutions.',
    url: SITE_URL,
    telephone: formatPhoneSchema(siteSettings.contactPhone || COMPANY_PHONE),
    email: COMPANY_EMAIL,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    sameAs: ['https://www.linkedin.com/company/engivato'],
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

      {hero?.enabled !== false && <Hero data={hero} />}

      <DraftingStrip dwg="DWG NO. M-101 // MEP-OVERVIEW" scale="SCALE: N.T.S." rev="REV 01" zone="GRID: DFW-TX" />

      {/* Section 1: Company Overview Section */}
      {overview?.enabled !== false && (
        <section className="bg-slate-50 bg-drafting-grid py-24 font-sans selection:bg-corporate-blue selection:text-white" aria-labelledby="overview-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <span aria-hidden="true" className="text-orange font-mono text-xs font-semibold tracking-widest uppercase block mb-2">
                  // SEC 01 - FIRM PROFILE
                </span>
                <h2 id="overview-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-corporate-blue mb-6">
                  {overview.heading}
                </h2>
                {overview.paragraph1 && (
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    {overview.paragraph1}
                  </p>
                )}
                {overview.paragraph2 && (
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {overview.paragraph2}
                  </p>
                )}
              </div>
              <div className="md:w-1/2 w-full">
                <div className="relative h-80 sm:h-96 md:h-105 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                  <Image
                    src={workstationImage}
                    alt={overview.imageAlt || 'Engivato PLLC - MEP Engineering Design Workstation'}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between text-white text-xs z-10 backdrop-blur-md bg-slate-950/40 p-3 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
                      <span className="font-mono font-semibold text-slate-100 tracking-wide">
                        {overview.imageCaptionLeft}
                      </span>
                    </div>
                    <span className="font-mono text-slate-300 text-[11px] hidden sm:inline">
                      {overview.imageCaptionRight}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {servicesSection?.enabled !== false && <Services sectionData={servicesSection} />}

      <DraftingStrip dwg="DWG NO. G-002 // WORKFLOW-SEQ" scale="SCALE: N.T.S." rev="REV 01" zone="STD: TBPELS" />

      {/* Section 3 & 4: Engineering Workflow & Why Partner With Engivato over shared Drafting Grid */}
      {(processSection?.enabled !== false || whyUs?.enabled !== false) && (
        <div className="bg-slate-50 bg-drafting-grid border-b border-slate-200 font-sans">
          {processSection?.enabled !== false && (
            <section
              className={`pt-24 ${whyUs?.enabled !== false ? 'pb-16' : 'pb-24'} text-slate-900`}
              aria-labelledby="process-heading"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center md:text-left max-w-3xl">
                  <span aria-hidden="true" className="text-orange font-mono text-xs font-semibold tracking-widest uppercase block mb-2">
                    // SEC 03 - DELIVERY PROTOCOL
                  </span>
                  <h2 id="process-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-corporate-blue">
                    {processSection.heading}
                  </h2>
                  {processSection.description && (
                    <p className="mt-4 text-lg text-slate-600">
                      {processSection.description}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                  {(processSection.steps || []).map((step, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:border-corporate-blue/30 hover:shadow-md transition-all relative"
                    >
                      <div
                        aria-hidden="true"
                        className="flex items-center justify-between font-mono text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-4 pb-3 border-b border-slate-100"
                      >
                        <span className="text-orange font-bold">PHASE 0{idx + 1}</span>
                        <span>DWG P-0{idx + 1} // REV 01</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Section 4: Value Proposition & Differentiators Container */}
          {whyUs?.enabled !== false && (
            <section
              className={`${processSection?.enabled !== false ? 'pt-0 pb-24' : 'py-24'} relative`}
              aria-labelledby="why-us-heading"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-corporate-blue text-white rounded-3xl p-8 md:p-12 shadow-lg border border-blue-800/50">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div>
                      <span aria-hidden="true" className="text-orange font-mono text-[10px] font-semibold tracking-widest uppercase block mb-2">
                        + DWG NO. QA-104 // SCALE: N.T.S.
                      </span>
                      <h2 id="why-us-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                        {whyUs.heading}
                      </h2>
                      {whyUs.description && (
                        <p className="text-base md:text-lg text-slate-200 leading-relaxed mb-8">
                          {whyUs.description}
                        </p>
                      )}
                      <ul className="space-y-4">
                        {(whyUs.bulletPoints || []).map((item, idx) => (
                          <li key={idx} className="flex items-center text-slate-100">
                            <svg className="w-6 h-6 text-orange mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <RevitBimViewer />
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      )}

      {/* Section 5: Project Partners & Client Segments Section */}
      {partners?.enabled !== false && (
        <section className="py-24 bg-white font-sans border-b border-slate-200" aria-labelledby="partners-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              {partners.eyebrow && (
                <span className="text-orange font-mono font-semibold tracking-wider uppercase text-sm mb-2 block">
                  {partners.eyebrow}
                </span>
              )}
              <h2 id="partners-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {partners.heading}
              </h2>
              {partners.description && (
                <p className="text-lg text-slate-600 leading-relaxed">
                  {partners.description}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {(partners.cards || []).map((partner, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 bg-drafting-grid p-7 rounded-2xl shadow-sm border border-slate-200/80 hover:border-corporate-blue/40 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                        {PARTNER_ICONS[idx % PARTNER_ICONS.length]}
                      </div>
                      <span aria-hidden="true" className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                        SEC 0{idx + 1}
                      </span>
                    </div>
                    {partner.subtitle && (
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-corporate-blue px-2.5 py-0.5 bg-corporate-light rounded-full inline-block mb-3">
                        {partner.subtitle}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{partner.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{partner.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {partners.ctaText && (
              <div className="text-center">
                <Link
                  href={partners.ctaHref || '/who-we-serve'}
                  className="inline-flex items-center gap-2 text-corporate-blue hover:text-orange font-semibold text-sm transition-colors duration-200"
                >
                  <span>{partners.ctaText}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}
