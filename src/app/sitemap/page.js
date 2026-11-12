import Link from 'next/link';
import {
  getLegalPages,
  getNavigationVisibility,
  getServicesPage,
  getContactPage,
} from '../../lib/settings';
import {
  COMPANY_EMAIL,
  COMPANY_PHONE,
  COMPANY_HOURS,
  formatPhoneDisplay,
  formatPhoneHref,
} from '../../lib/constants';
import PageUnavailable from '../../components/PageUnavailable';

export async function generateMetadata() {
  const { sitemap } = await getLegalPages();
  const title =
    sitemap?.metaTitle || 'Sitemap & Website Directory | Engivato PLLC';
  const description =
    sitemap?.metaDescription ||
    'Complete directory of pages, MEP engineering disciplines, service areas, and legal resources on the Engivato PLLC website.';

  return {
    title,
    description,
    alternates: {
      canonical: '/sitemap',
    },
    ...(sitemap?.enabled === false ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function SitemapPage() {
  const [legalData, visibility, servicesData, contactData] = await Promise.all([
    getLegalPages(),
    getNavigationVisibility(),
    getServicesPage(),
    getContactPage(),
  ]);

  const sitemapConfig = legalData.sitemap || {};
  if (sitemapConfig.enabled === false) {
    return <PageUnavailable pageName="Sitemap" />;
  }

  const phoneNumber = contactData.channels?.phoneNumber || COMPANY_PHONE;
  const emailAddress = contactData.channels?.emailAddress || COMPANY_EMAIL;
  const businessHours = contactData.channels?.businessHours || COMPANY_HOURS;

  const primaryPages = [
    {
      key: 'home',
      enabled: true,
      title: 'Home',
      href: '/',
      badge: 'Main Landing',
      description:
        'Overview of Engivato PLLC, core MEP engineering capabilities, our 4-step delivery workflow, and client sectors across Texas.',
      cta: 'Visit Home Page',
    },
    {
      key: 'about',
      enabled: visibility.about,
      title: 'About Us',
      href: '/about',
      badge: 'Company Profile',
      description:
        'Learn about our engineering philosophy, Texas Professional Engineer (P.E.) standards, multidisciplinary approach, and firm values.',
      cta: 'Explore About Engivato',
    },
    {
      key: 'services',
      enabled: visibility.services,
      title: 'Engineering Services',
      href: '/services',
      badge: 'Core MEP Scope',
      description:
        'Detailed breakdown of Mechanical (HVAC), Electrical, Plumbing, and Engineering Consulting deliverables, codes, and FAQs.',
      cta: 'View All MEP Services',
    },
    {
      key: 'projects',
      enabled: visibility.projects,
      title: 'Projects & Experience',
      href: '/projects',
      badge: 'Portfolio & Sectors',
      description:
        'Representative commercial finish-outs, restaurants, retail centers, healthcare clinics, and industrial facility engineering.',
      cta: 'Browse Project Experience',
    },
    {
      key: 'whoWeServe',
      enabled: visibility.whoWeServe,
      title: 'Who We Serve',
      href: '/who-we-serve',
      badge: 'Clients & DFW Coverage',
      description:
        'How we partner with architects, general contractors, commercial developers, and franchise owners across Dallas-Fort Worth and North Texas.',
      cta: 'See Who We Serve',
    },
    {
      key: 'contact',
      enabled: visibility.contact,
      title: 'Contact & Proposals',
      href: '/contact',
      badge: 'Request a Quote',
      description:
        'Request an itemized engineering proposal, submit CAD/Revit/PDF architectural plans, or call our engineering team directly.',
      cta: 'Contact Our Engineering Team',
    },
  ].filter((page) => page.enabled);

  const disciplineLinks =
    visibility.services && Array.isArray(servicesData.disciplines?.items)
      ? servicesData.disciplines.items.map((item, idx) => {
          const anchorId = item.id || item.anchor || '';
          return {
            key: `${anchorId || 'discipline'}-${idx}`,
            title: item.title,
            href: anchorId ? `/services#${anchorId}` : '/services',
            subtitle: item.tagline || item.subtitle,
            description: item.description,
          };
        })
      : [];

  const legalLinks = [
    {
      enabled: visibility.privacy,
      title: 'Privacy Policy',
      href: '/privacy',
      description: 'How Engivato PLLC collects, uses, and safeguards visitor and client inquiry data.',
    },
    {
      enabled: visibility.termsOfService,
      title: 'Terms of Service',
      href: '/terms-of-service',
      description: 'Terms and conditions governing the use of the Engivato PLLC website and materials.',
    },
    {
      enabled: visibility.accessibility,
      title: 'Accessibility Statement',
      href: '/accessibility',
      description: 'Our commitment to WCAG AA digital accessibility and multi-browser compatibility.',
    },
  ].filter((item) => item.enabled);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-corporate-blue selection:text-white">
      {/* Page Header */}
      <header
        className="pt-36 pb-20 bg-corporate-blue text-white px-4 relative overflow-hidden"
        aria-labelledby="sitemap-hero-title"
      >
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <span className="text-orange font-semibold tracking-wider uppercase text-sm mb-3 inline-block">
            {sitemapConfig.eyebrow || 'Website Directory'}
          </span>
          <h1
            id="sitemap-hero-title"
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            {sitemapConfig.heading || 'Sitemap'}
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            {sitemapConfig.description ||
              'Navigate every page, engineering discipline, and client resource across the Engivato PLLC platform.'}
          </p>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none" />
      </header>

      <main className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Primary Pages Directory */}
        <section aria-labelledby="primary-pages-heading">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-slate-200 gap-4">
            <div>
              <span className="text-orange font-semibold tracking-wider uppercase text-xs block mb-2">
                Core Navigation
              </span>
              <h2
                id="primary-pages-heading"
                className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight"
              >
                Primary Website Pages
              </h2>
            </div>
            <p className="text-sm text-slate-500">
              Showing {primaryPages.length} active {primaryPages.length === 1 ? 'page' : 'pages'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primaryPages.map((page) => (
              <Link
                key={page.key}
                href={page.href}
                className="group bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md hover:border-corporate-blue/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-corporate-light text-corporate-blue text-xs font-semibold">
                      {page.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 group-hover:text-corporate-blue transition-colors">
                      {page.href}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-corporate-blue transition-colors mb-2.5">
                    {page.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {page.description}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange group-hover:translate-x-1 transition-transform">
                  <span>{page.cta}</span>
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Engineering Disciplines Deep Links */}
        {disciplineLinks.length > 0 && (
          <section aria-labelledby="disciplines-directory-heading">
            <div className="mb-10 pb-4 border-b border-slate-200">
              <span className="text-orange font-semibold tracking-wider uppercase text-xs block mb-2">
                Direct Section Links
              </span>
              <h2
                id="disciplines-directory-heading"
                className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight"
              >
                MEP Engineering Disciplines
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {disciplineLinks.map((disc, idx) => (
                <Link
                  key={disc.key}
                  href={disc.href}
                  className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-orange/50 hover:shadow-md transition-all duration-300 flex items-start gap-5"
                >
                  <div className="w-11 h-11 rounded-xl bg-corporate-light text-corporate-blue font-bold text-sm flex items-center justify-center shrink-0 group-hover:bg-corporate-blue group-hover:text-white transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="grow">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-corporate-blue transition-colors">
                        {disc.title}
                      </h3>
                      <span className="text-xs font-mono text-slate-400">
                        {disc.href}
                      </span>
                    </div>
                    {disc.subtitle && (
                      <div className="text-xs font-semibold text-orange mb-2">
                        {disc.subtitle}
                      </div>
                    )}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {disc.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Legal Pages & Direct Contact Summary */}
        <section
          aria-labelledby="legal-and-contact-heading"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Legal & Compliance Links */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <span className="text-orange font-semibold tracking-wider uppercase text-xs block mb-2">
              Governance & Standards
            </span>
            <h2
              id="legal-and-contact-heading"
              className="text-2xl font-bold text-slate-900 mb-6"
            >
              Legal & Compliance Resources
            </h2>

            <div className="divide-y divide-slate-100">
              {legalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group py-4 first:pt-0 last:pb-0 flex items-start justify-between gap-4"
                >
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-corporate-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-400 group-hover:text-orange shrink-0 mt-1">
                    {item.href} →
                  </span>
                </Link>
              ))}

              <a
                href="/sitemap.xml"
                className="group py-4 last:pb-0 flex items-start justify-between gap-4"
              >
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-corporate-blue transition-colors">
                    XML Sitemap (Search Engine Index)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Machine-readable XML sitemap used by Google and search engine crawlers.
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-400 group-hover:text-orange shrink-0 mt-1">
                  /sitemap.xml →
                </span>
              </a>
            </div>
          </div>

          {/* Direct Engineering Contact Box */}
          <div className="lg:col-span-5 bg-corporate-blue text-white rounded-3xl p-8 shadow-md relative overflow-hidden">
            <span className="text-orange font-semibold tracking-wider uppercase text-xs block mb-2">
              Direct Assistance
            </span>
            <h2 className="text-2xl font-bold mb-3">
              Need Engineering Support?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Connect directly with our Texas MEP engineering team for proposal requests, permit plan reviews, or tenant finish-out consultations.
            </p>

            <div className="space-y-4 text-sm mb-8">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-orange shrink-0">
                  <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                    Direct Phone
                  </div>
                  <a
                    href={formatPhoneHref(phoneNumber)}
                    className="font-bold text-white hover:text-orange transition-colors"
                  >
                    {formatPhoneDisplay(phoneNumber)}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-orange shrink-0">
                  <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                    Call Schedule & Hours
                  </div>
                  <div className="font-medium text-slate-200">
                    {businessHours}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-orange shrink-0">
                  <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="font-bold text-white hover:text-orange transition-colors"
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>
            </div>

            {visibility.contact && (
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-orange hover:bg-orange-dark text-white font-bold text-sm hover:-translate-y-0.5 transition-all duration-300 animate-slow-ping"
              >
                <span>Request an Engineering Proposal</span>
                <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

