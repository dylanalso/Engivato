import Link from 'next/link';
import { getWhoWeServePage } from '../../lib/settings';
import { SITE_URL, COMPANY_EMAIL, COMPANY_PHONE, formatPhoneSchema } from '../../lib/constants';
import PageUnavailable from '../../components/PageUnavailable';
import DraftingStrip from '../../components/DraftingStrip';

const CLIENT_ICONS = [
  <svg key="cl1" className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>,
  <svg key="cl2" className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>,
  <svg key="cl3" className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="cl4" className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>,
  <svg key="cl5" className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  <svg key="cl6" className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
];

export async function generateMetadata() {
  const pageData = await getWhoWeServePage();
  const title =
    pageData.seo?.metaTitle ||
    'Who We Serve | Dallas-Fort Worth (DFW) MEP Engineering | Engivato PLLC';
  const description =
    pageData.seo?.metaDescription ||
    'Engivato PLLC provides high-performance Mechanical, Electrical, and Plumbing (MEP) engineering solutions across the Dallas-Fort Worth (DFW) metroplex and North Texas.';

  return {
    title,
    description,
    keywords: [
      'DFW MEP engineering',
      'Dallas engineering firm',
      'Fort Worth mechanical electrical plumbing',
      'North Texas engineering consultants',
      'Collin County commercial MEP',
      'tenant improvement engineering Dallas',
      'commercial building MEP DFW',
      'Engivato PLLC',
    ],
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/who-we-serve`,
      siteName: 'Engivato PLLC',
      type: 'website',
    },
    alternates: {
      canonical: '/who-we-serve',
    },
    ...(pageData.pageEnabled === false ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function WhoWeServe() {
  const pageData = await getWhoWeServePage();
  if (pageData.pageEnabled === false) {
    return <PageUnavailable pageName="Who We Serve" />;
  }
  const { hero, coverage, complianceCallout, clientTypes, advantage } = pageData;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Engivato PLLC - Dallas-Fort Worth MEP Engineering',
    description:
      pageData.seo?.metaDescription ||
      'Mechanical, Electrical, and Plumbing engineering services across Dallas, Fort Worth, Arlington, Plano, Frisco, and the North Texas region.',
    url: `${SITE_URL}/who-we-serve`,
    telephone: formatPhoneSchema(COMPANY_PHONE),
    email: COMPANY_EMAIL,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Dallas' },
      { '@type': 'City', name: 'Fort Worth' },
      { '@type': 'City', name: 'Arlington' },
      { '@type': 'City', name: 'Plano' },
      { '@type': 'City', name: 'Frisco' },
      { '@type': 'City', name: 'Irving' },
      { '@type': 'AdministrativeArea', name: 'Dallas-Fort Worth Metroplex' },
      { '@type': 'State', name: 'Texas' },
    ],
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
          <header className="pt-36 pb-20 bg-corporate-blue text-white px-4 relative overflow-hidden" aria-labelledby="whoweserve-hero-title">
            <div className="max-w-6xl mx-auto text-center relative z-10">
              {hero.eyebrow && (
                <span className="font-mono text-orange font-semibold tracking-wider uppercase text-xs sm:text-sm mb-3 inline-block">
                  {hero.eyebrow}
                </span>
              )}
              <h1 id="whoweserve-hero-title" className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                {[hero.headingPrefix, hero.headingHighlight, hero.headingSuffix]
                  .filter(Boolean)
                  .join(' ')}
              </h1>
              {hero.description && (
                <p className="text-slate-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                  {hero.description}
                </p>
              )}
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none" />
          </header>
        )}

        <DraftingStrip
          dwg="DWG NO. GEO-300 // DFW-COVERAGE"
          scale="SCALE: N.T.S."
          rev="REV 01"
          zone="GRID: NORTH-TX"
        />

        {/* Regional Service Coverage & Municipalities */}
        {coverage?.enabled !== false && (
          <section className="py-24 px-4 bg-slate-50 bg-drafting-grid border-b border-slate-200" aria-labelledby="territory-title">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                {coverage.eyebrow && (
                  <span className="font-mono text-orange font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2 block">
                    {coverage.eyebrow}
                  </span>
                )}
                <h2 id="territory-title" className="text-3xl md:text-4xl font-bold text-corporate-blue mb-4">
                  {coverage.heading}
                </h2>
                {coverage.description && (
                  <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
                    {coverage.description}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {(coverage.regions || []).map((region, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-slate-100 pb-4">
                      <div>
                        <span
                          aria-hidden="true"
                          className="font-mono text-[10px] font-semibold tracking-widest text-slate-400 uppercase block mb-0.5"
                        >
                          ZONE-{String(idx + 1).padStart(2, '0')} // REV 01
                        </span>
                        <h3 className="text-2xl font-bold text-corporate-blue">{region.county}</h3>
                      </div>
                      {coverage.statusBadge && (
                        <span className="font-mono text-xs font-semibold px-3 py-1 bg-orange/10 text-orange rounded-full">
                          {coverage.statusBadge}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{region.desc}</p>
                    <div>
                      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        {coverage.municipalitiesLabel || 'Key Municipalities'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {(region.cities || []).map((city, cIdx) => (
                          <span key={cIdx} className="font-mono text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-md border border-slate-200/70">
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Municipal Code Compliance Callout */}
              {complianceCallout?.enabled !== false && (
                <div className="mt-12 bg-corporate-blue text-white rounded-2xl p-8 md:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8 border border-blue-800/50">
                  <div className="max-w-2xl">
                    <div
                      aria-hidden="true"
                      className="font-mono text-[10px] font-semibold tracking-widest text-orange uppercase mb-2"
                    >
                      + DWG NO. AHJ-101 // CODE COMPLIANCE
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{complianceCallout.heading}</h3>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                      {complianceCallout.description}
                    </p>
                  </div>
                  {complianceCallout.ctaText && (
                    <Link
                      href="/contact"
                      className="whitespace-nowrap bg-orange hover:bg-orange-dark text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-all duration-300 animate-slow-ping"
                    >
                      {complianceCallout.ctaText}
                    </Link>
                  )}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Target Industries & Project Stakeholders */}
        {clientTypes?.enabled !== false && (
          <section className="py-24 px-4 bg-white border-b border-slate-200" aria-labelledby="clients-title">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                {clientTypes.eyebrow && (
                  <span className="font-mono text-orange font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2 block">
                    {clientTypes.eyebrow}
                  </span>
                )}
                <h2 id="clients-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {clientTypes.heading}
                </h2>
                {clientTypes.description && (
                  <p className="text-slate-600 max-w-xl mx-auto text-base">
                    {clientTypes.description}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(clientTypes.items || []).map((client, idx) => (
                  <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-corporate-blue/30 hover:bg-white transition-all duration-300 shadow-sm flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                        {CLIENT_ICONS[idx % CLIENT_ICONS.length]}
                      </div>
                      <span
                        aria-hidden="true"
                        className="font-mono text-[10px] font-semibold tracking-widest text-slate-400 uppercase"
                      >
                        CL-{String(idx + 1).padStart(2, '0')} // N.T.S.
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-corporate-blue mb-3">{client.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed grow">{client.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regional Competitive Advantages */}
        {advantage?.enabled !== false && (
          <section className="py-24 px-4 bg-slate-50 bg-drafting-grid" aria-labelledby="why-dfw-title">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 id="why-dfw-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {advantage.heading}
                </h2>
                {advantage.description && (
                  <p className="text-slate-600 max-w-xl mx-auto">
                    {advantage.description}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {(advantage.items || []).map((adv, idx) => (
                  <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-mono text-orange text-2xl font-bold">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      <span
                        aria-hidden="true"
                        className="font-mono text-[10px] font-semibold tracking-widest text-slate-400 uppercase"
                      >
                        REV 01
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-corporate-blue mb-2">{adv.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{adv.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}

