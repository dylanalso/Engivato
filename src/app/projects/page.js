import Link from 'next/link';
import { reader } from '../../lib/keystatic';
import ProjectShowcase from '../../components/projectShowcase';
import { getProjectsPage } from '../../lib/settings';
import PageUnavailable from '../../components/PageUnavailable';

const SECTOR_ICONS = [
  <svg key="s1" className="w-7 h-7 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>,
  <svg key="s2" className="w-7 h-7 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>,
  <svg key="s3" className="w-7 h-7 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>,
  <svg key="s4" className="w-7 h-7 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>,
  <svg key="s5" className="w-7 h-7 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
];

export async function generateMetadata() {
  const projectsData = await getProjectsPage();
  const title =
    projectsData.seo?.metaTitle ||
    'Sector Capabilities & Project Typologies | MEP Engineering | Engivato PLLC';
  const description =
    projectsData.seo?.metaDescription ||
    'Explore Engivato PLLC’s MEP engineering capabilities across commercial restaurants, office finish-outs, multifamily developments, retail spaces, and HVAC modernization throughout Texas.';

  return {
    title,
    description,
    keywords: [
      'MEP engineering sector capabilities',
      'DFW restaurant MEP engineering',
      'Dallas commercial office finish-out engineering',
      'Texas multifamily MEP design',
      'commercial kitchen ventilation',
      'tenant improvement engineering Texas',
      'HVAC replacement engineering DFW',
      'Engivato PLLC',
    ],
    openGraph: {
      title,
      description,
      url: 'https://dylanalso.github.io/Engivato/projects',
      siteName: 'Engivato PLLC',
      type: 'website',
    },
    alternates: {
      canonical: '/projects',
    },
    ...(projectsData.pageEnabled === false ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function Projects() {
  const projectsPageData = await getProjectsPage();
  if (projectsPageData.pageEnabled === false) {
    return <PageUnavailable pageName="Projects & Sectors" />;
  }
  const { hero, highlights, showcase, sectors, confidentialityCallout } = projectsPageData;

  let projects = [];
  if (showcase?.enabled) {
    try {
      const collectionItems = await reader.collections.projects.all();
      projects = collectionItems
        .map((p) => p.entry)
        .filter((p) => p.enabled !== false);
    } catch {
      projects = [];
    }
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Sector Capabilities | Engivato PLLC',
    description:
      projectsPageData.seo?.metaDescription ||
      'Mechanical, Electrical, and Plumbing engineering sector capabilities and project typologies by Engivato PLLC.',
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
        {/* Page Header */}
        {hero?.enabled !== false && (
          <header className="pt-36 pb-20 bg-corporate-blue text-white px-4 relative overflow-hidden" aria-labelledby="projects-hero-title">
            <div className="max-w-6xl mx-auto text-center relative z-10">
              {hero.eyebrow && (
                <span className="text-orange font-semibold tracking-wider uppercase text-sm mb-3 inline-block">
                  {hero.eyebrow}
                </span>
              )}
              <h1 id="projects-hero-title" className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
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
                    className="bg-orange hover:bg-orange-dark text-white px-8 py-3.5 rounded-full font-semibold text-base shadow-lg hover:shadow-orange/30 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {hero.primaryCtaText}
                  </Link>
                )}
                {hero.secondaryCtaText && (
                  <Link
                    href="/services"
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 backdrop-blur-sm"
                  >
                    {hero.secondaryCtaText}
                  </Link>
                )}
              </div>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none" />
          </header>
        )}

        {/* Engineering Strengths Strip */}
        {highlights?.enabled !== false && (
          <section className="bg-white border-b border-slate-200 py-8 px-4" aria-label="Engineering Strengths">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {(highlights.items || []).map((item, idx) => (
                <div key={idx} className="p-3">
                  <div className="text-2xl md:text-3xl font-extrabold text-corporate-blue mb-1">
                    {item.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Interactive Project Case Studies Showcase */}
        {showcase?.enabled && (
          <section className="py-20 px-4 border-b border-slate-200" aria-labelledby="showcase-heading">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                {showcase.eyebrow && (
                  <span className="text-orange font-semibold tracking-wider uppercase text-sm mb-2 block">
                    {showcase.eyebrow}
                  </span>
                )}
                <h2 id="showcase-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {showcase.heading}
                </h2>
                {showcase.description && (
                  <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
                    {showcase.description}
                  </p>
                )}
              </div>

              <ProjectShowcase initialProjects={projects} />
            </div>
          </section>
        )}

        {/* Sector Capabilities & Scope Breakdown */}
        {(sectors?.enabled !== false || confidentialityCallout?.enabled !== false) && (
          <main className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              {sectors?.enabled !== false && (
                <>
                  <div className="text-center mb-16">
                    {sectors.eyebrow && (
                      <span className="text-orange font-semibold tracking-wider uppercase text-sm mb-2 block">
                        {sectors.eyebrow}
                      </span>
                    )}
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                      {sectors.heading}
                    </h2>
                    {sectors.description && (
                      <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
                        {sectors.description}
                      </p>
                    )}
                  </div>

                  <div className="space-y-12">
                    {(sectors.items || []).map((sector, idx) => (
                      <article
                        key={sector.id || idx}
                        id={sector.id}
                        className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                      >
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
                          <div className="lg:w-7/12">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                                {SECTOR_ICONS[idx % SECTOR_ICONS.length]}
                              </div>
                              {sector.badge && (
                                <div>
                                  <span className="text-xs font-bold uppercase tracking-wider text-corporate-blue px-3 py-1 bg-corporate-light rounded-full inline-block">
                                    {sector.badge}
                                  </span>
                                </div>
                              )}
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                              {sector.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-6 text-base md:text-lg">
                              {sector.desc}
                            </p>

                            {sector.idealFor && (
                              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 mb-6">
                                <span className="text-xs font-bold uppercase tracking-wide text-corporate-blue block mb-1">
                                  {sectors.applicationsLabel || 'Typical Applications'}
                                </span>
                                <p className="text-xs md:text-sm text-slate-600">
                                  {sector.idealFor}
                                </p>
                              </div>
                            )}
                          </div>

                          <div className="lg:w-5/12 w-full bg-slate-50 rounded-2xl p-6 border border-slate-100">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-corporate-blue mb-4 flex items-center gap-2">
                              <svg className="w-4 h-4 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {sectors.deliverablesHeading || 'Key Engineering Deliverables'}
                            </h4>
                            <ul className="space-y-3 mb-6">
                              {(sector.scopes || []).map((scope, sIdx) => (
                                <li key={sIdx} className="flex items-start text-xs md:text-sm text-slate-700">
                                  <span className="text-orange font-bold mr-2.5 shrink-0">•</span>
                                  <span>{scope}</span>
                                </li>
                              ))}
                            </ul>

                            <Link
                              href={`/contact?sector=${encodeURIComponent(sector.title || '')}`}
                              className="inline-flex items-center justify-center w-full bg-corporate-blue hover:bg-corporate-dark text-white px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-colors duration-200"
                            >
                              {sectors.ctaButtonText || 'Request Scope Consultation'}
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </>
              )}

              {/* Sample Drawing Packages & Confidentiality Callout */}
              {confidentialityCallout?.enabled !== false && (
                <div className="mt-16 bg-linear-to-br from-corporate-blue to-blue-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
                  <div className="max-w-3xl relative z-10">
                    {confidentialityCallout.eyebrow && (
                      <span className="text-orange font-semibold tracking-wider uppercase text-xs mb-2 block">
                        {confidentialityCallout.eyebrow}
                      </span>
                    )}
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {confidentialityCallout.heading}
                    </h3>
                    {confidentialityCallout.description && (
                      <p className="text-slate-200 text-sm md:text-base leading-relaxed mb-6">
                        {confidentialityCallout.description}
                      </p>
                    )}
                    {confidentialityCallout.ctaText && (
                      <Link
                        href="/contact"
                        className="inline-block bg-orange hover:bg-orange-dark text-white px-7 py-3 rounded-full font-semibold text-sm shadow-md transition-all duration-300"
                      >
                        {confidentialityCallout.ctaText}
                      </Link>
                    )}
                  </div>
                  <div className="absolute -right-12 -bottom-12 w-64 h-64 opacity-10 pointer-events-none">
                    <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </main>
        )}
      </div>
    </>
  );
}
