import Form from '../../components/form';
import {
  SITE_URL,
  COMPANY_EMAIL,
  COMPANY_PHONE,
  COMPANY_HOURS,
  formatPhoneDisplay,
  formatPhoneHref,
  formatPhoneSchema,
} from '../../lib/constants';
import { getContactPage } from '../../lib/settings';
import PageUnavailable from '../../components/PageUnavailable';
import DraftingStrip from '../../components/DraftingStrip';

export async function generateMetadata() {
  const contactData = await getContactPage();
  const title =
    contactData.seo?.metaTitle ||
    'Contact Us | MEP Engineering Consultation & Proposals | Engivato PLLC';
  const description =
    contactData.seo?.metaDescription ||
    'Connect with Engivato PLLC for expert mechanical, electrical, and plumbing engineering consulting, stamped permit drawings, and fast-track tenant fit-out proposals across Dallas-Fort Worth.';

  return {
    title,
    description,
    keywords: [
      'contact MEP engineer',
      'DFW engineering proposal',
      'Dallas mechanical electrical plumbing consulting',
      'tenant improvement engineering quote',
      'stamped permit drawings Texas',
      'Engivato PLLC contact',
    ],
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/contact`,
      siteName: 'Engivato PLLC',
      type: 'website',
    },
    alternates: {
      canonical: '/contact',
    },
    ...(contactData.pageEnabled === false ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function Contact() {
  const contactData = await getContactPage();
  if (contactData.pageEnabled === false) {
    return <PageUnavailable pageName="Contact Us" />;
  }
  const { hero, channels, formSection, sidebar } = contactData;
  const emailAddress = channels?.emailAddress || COMPANY_EMAIL;
  const phoneNumber = channels?.phoneNumber || COMPANY_PHONE;
  const businessHours = channels?.businessHours || COMPANY_HOURS;
  const [scheduleDays, scheduleTime] = String(businessHours).split(/,\s*(.+)/);

  const showForm = formSection?.enabled !== false;
  const showSidebar = sidebar?.enabled !== false;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Engivato PLLC',
    description:
      contactData.seo?.metaDescription ||
      'Request a proposal or schedule an engineering consultation with Engivato PLLC.',
    url: `${SITE_URL}/contact`,
    mainEntity: {
      '@type': 'EngineeringBusiness',
      name: 'Engivato PLLC',
      telephone: formatPhoneSchema(phoneNumber),
      email: emailAddress,
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '17:00',
        },
      ],
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

      <div className="min-h-screen bg-slate-50 bg-drafting-grid text-slate-900 font-sans selection:bg-corporate-blue selection:text-white">
        {/* Page Header */}
        {hero?.enabled !== false && (
          <header className="pt-36 pb-20 bg-corporate-blue text-white px-4 relative overflow-hidden" aria-labelledby="contact-hero-title">
            <div className="max-w-6xl mx-auto text-center relative z-10">
              {hero.eyebrow && (
                <span className="font-mono text-orange font-semibold tracking-wider uppercase text-xs sm:text-sm mb-3 inline-block">
                  {hero.eyebrow}
                </span>
              )}
              <h1 id="contact-hero-title" className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                {hero.heading}
              </h1>
              {hero.description && (
                <p className="text-slate-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                  {hero.description}
                </p>
              )}

              {/* Hero Call Now CTA */}
              {channels?.showCallNowButton !== false && (
                <div className="mt-9 flex flex-col items-center">
                  <a
                    href={formatPhoneHref(phoneNumber)}
                    aria-label={`Call Engivato PLLC now at ${formatPhoneDisplay(phoneNumber)} for MEP engineering consultation`}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-orange hover:bg-orange-dark text-white font-extrabold text-base sm:text-lg hover:-translate-y-0.5 transition-all duration-300 animate-slow-ping focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>
                      {channels?.callNowText || 'Call Now'}: {formatPhoneDisplay(phoneNumber)}
                    </span>
                  </a>

                  <p className="font-mono mt-3.5 text-xs font-medium text-blue-100/90">
                    {channels?.callNowSubtext ||
                      `Speak directly with our engineering team | ${businessHours}`}
                  </p>
                </div>
              )}
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none" />
          </header>
        )}

        {/* Direct Contact & Coverage Bar */}
        {channels?.enabled !== false && (
          <section className="bg-white border-b border-slate-200 py-8 px-4" aria-label="Direct Communication Channels">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
              {/* Direct Phone */}
              <div className="flex items-center justify-center sm:justify-start gap-4 p-3">
                <div className="w-12 h-12 rounded-2xl bg-corporate-light flex items-center justify-center text-corporate-blue shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                    {channels.phoneLabel || 'Direct Phone'}
                  </div>
                  <a
                    href={formatPhoneHref(phoneNumber)}
                    className="text-base font-bold text-corporate-blue hover:text-orange transition-colors"
                  >
                    {formatPhoneDisplay(phoneNumber)}
                  </a>
                </div>
              </div>

              {/* Call Schedule & Hours */}
              <div className="flex items-center justify-center sm:justify-start gap-4 p-3">
                <div className="w-12 h-12 rounded-2xl bg-corporate-light flex items-center justify-center text-corporate-blue shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                    {channels.hoursLabel || 'Call Schedule & Hours'}
                  </div>
                  <div className="text-sm font-bold text-slate-900 leading-snug">
                    {scheduleTime ? (
                      <>
                        <span className="block">{scheduleDays}</span>
                        <span className="block">{scheduleTime}</span>
                      </>
                    ) : (
                      businessHours
                    )}
                  </div>
                </div>
              </div>

              {/* Direct Email Inquiries */}
              <div className="flex items-center justify-center sm:justify-start gap-4 p-3">
                <div className="w-12 h-12 rounded-2xl bg-corporate-light flex items-center justify-center text-corporate-blue shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                    {channels.emailLabel}
                  </div>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-base font-bold text-corporate-blue hover:text-orange transition-colors"
                  >
                    {emailAddress}
                  </a>
                  {channels.responseValue && (
                    <div className="font-mono text-[11px] font-medium text-slate-500 mt-0.5">
                      {channels.responseLabel ? `${channels.responseLabel}: ` : ''}
                      {channels.responseValue}
                    </div>
                  )}
                </div>
              </div>

              {/* Service Coverage */}
              <div className="flex items-center justify-center sm:justify-start gap-4 p-3">
                <div className="w-12 h-12 rounded-2xl bg-corporate-light flex items-center justify-center text-corporate-blue shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                    {channels.coverageLabel}
                  </div>
                  <div className="text-sm font-bold text-slate-900 leading-snug">
                    {channels.coverageValue}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <DraftingStrip
          dwg="DWG NO. CNT-400 // INQUIRY-SPEC"
          scale="SCALE: N.T.S."
          rev="REV 01"
          zone="GRID: DFW-NTX"
        />

        {/* Inquiry Form & Consultation Sidebar */}
        {(showForm || showSidebar) && (
          <main className="py-20 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Project Inquiry Form & Architectural Plan Submissions */}
              {showForm && (
                <div className={showSidebar ? 'lg:col-span-7 space-y-8' : 'lg:col-span-12 max-w-2xl mx-auto w-full space-y-8'}>
                  <Form
                    formConfig={formSection}
                    emailAddress={emailAddress}
                    phoneNumber={phoneNumber}
                  />

                  {/* Architectural Plan & RFP Submission Instructions */}
                  {sidebar?.plansBoxHeading && (
                    <div className="bg-linear-to-br from-corporate-light/80 to-blue-50/60 rounded-3xl p-8 border border-corporate-blue/20">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-corporate-blue text-white flex items-center justify-center">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                        </div>
                        <span
                          aria-hidden="true"
                          className="font-mono text-[10px] font-semibold tracking-widest text-corporate-blue/70 uppercase"
                        >
                          DWG UPLOAD // N.T.S.
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-corporate-blue mb-2">
                        {sidebar.plansBoxHeading}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {sidebar.plansBoxDescription}{' '}
                        <a href={`mailto:${emailAddress}`} className="font-semibold text-corporate-blue hover:text-orange underline">
                          {emailAddress}
                        </a>
                      </p>
                      {sidebar.plansBoxFormats && (
                        <div className="font-mono text-[11px] font-medium text-slate-500">
                          {sidebar.plansBoxFormats}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Right Column: Process & FAQs */}
              {showSidebar && (
                <div className={showForm ? 'lg:col-span-5 space-y-8' : 'lg:col-span-12 max-w-2xl mx-auto w-full space-y-8'}>
                  {/* Inquiry Review Process */}
                  <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between gap-2 mb-6 pb-3 border-b border-slate-100">
                      <h3 className="text-xl font-bold text-slate-900">
                        <span>{sidebar.processHeading}</span>
                      </h3>
                      <span
                        aria-hidden="true"
                        className="font-mono text-[10px] font-semibold tracking-widest text-slate-400 uppercase"
                      >
                        REV 01
                      </span>
                    </div>

                    <ol className="space-y-6">
                      {(sidebar.processSteps || []).map((step, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <div className="font-mono w-8 h-8 rounded-full bg-corporate-light text-corporate-blue font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {String(idx + 1).padStart(2, '0')}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 mb-1">{step.title}</h4>
                            <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Pre-Consultation FAQs */}
                  <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
                    <h4 className="text-base font-bold text-slate-900 mb-2">
                      {sidebar.faqHeading}
                    </h4>

                    {(sidebar.faqs || []).map((faqItem, idx) => (
                      <div key={idx} className={idx > 0 ? 'pt-3 border-t border-slate-100' : ''}>
                        <h5 className="text-xs font-bold text-corporate-blue mb-1">
                          {faqItem.question}
                        </h5>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {faqItem.answer}
                        </p>
                      </div>
                    ))}
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
