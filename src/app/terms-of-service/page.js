import Link from 'next/link';
import { getLegalPages, getNavigationVisibility } from '../../lib/settings';
import {
  SITE_URL,
  COMPANY_EMAIL,
  COMPANY_PHONE,
  COMPANY_HOURS,
  formatPhoneDisplay,
  formatPhoneHref,
} from '../../lib/constants';
import PageUnavailable from '../../components/PageUnavailable';

const DEFAULT_TERMS_SECTIONS = [
  {
    title: '1. Acceptance of Terms & Website Scope',
    body: 'By accessing or using the Engivato PLLC website, you agree to be bound by these Terms of Service and all applicable state and federal laws. All content published on this platform is provided for general informational purposes regarding our Mechanical, Electrical, and Plumbing (MEP) engineering services across Dallas-Fort Worth and the State of Texas.',
  },
  {
    title: '2. No Engineer-Client Relationship From Website Use',
    body: 'Viewing this website, requesting general information, or transmitting project details, Request for Proposal (RFP) documents, or architectural files through our online contact form or email does not create a formal Professional Engineer (P.E.)-client relationship or bind Engivato PLLC to any project schedule. A formal engineering engagement begins only upon the mutual execution of a written Engineering Services Agreement or signed proposal defining project scope, deliverables, fee structure, and Texas Board of Professional Engineers and Land Surveyors (TBPELS) compliance responsibilities.',
  },
  {
    title: '3. Engineering Drawings, BIM Models & Instruments of Service',
    body: 'All website text, graphics, branding, and layout elements are the intellectual property of Engivato PLLC. Furthermore, all engineering calculations, load analyses, CAD drawings, 3D Revit BIM models, specifications, and P.E.-sealed construction documents prepared by Engivato PLLC constitute protected Instruments of Service. Unless explicitly stated otherwise in a signed project contract, such drawings and specifications may only be utilized for the specific facility, site, and scope for which they were engineered.',
  },
  {
    title: '4. Proposals, Submittals & Client-Provided Information',
    body: 'Engineering proposals, turnaround estimates, and fee quotes are based on the architectural backgrounds, existing condition reports, and scope parameters supplied by the client at the time of inquiry. When submitting CAD (.dwg), Revit (.rvt), or PDF plans for proposal evaluation, you represent that you are authorized to share those materials with Engivato PLLC for engineering review.',
  },
  {
    title: '5. Disclaimer of Technical Warranties & Limitation of Liability',
    body: 'Information presented on this website is general in nature and does not constitute site-specific engineering advice, municipal code certification, or construction authorization without a formal project evaluation sealed by a licensed Texas Professional Engineer. Website content is provided "as is" without warranties of any kind. To the fullest extent permitted by Texas law, Engivato PLLC shall not be liable for any direct, indirect, or consequential damages arising from reliance on general website content.',
  },
  {
    title: '6. Governing Law & Venue (State of Texas)',
    body: 'These Terms of Service and any dispute arising out of your use of this website shall be governed by and construed in accordance with the laws of the State of Texas, together with applicable rules of the Texas Board of Professional Engineers and Land Surveyors (TBPELS), without regard to conflict-of-law principles.',
  },
];

export async function generateMetadata() {
  const { termsOfService } = await getLegalPages();
  const title =
    termsOfService?.metaTitle ||
    'Terms of Service | Legal & Engineering Terms | Engivato PLLC';
  const description =
    termsOfService?.metaDescription ||
    'Read the Terms of Service for Engivato PLLC covering website usage, MEP engineering proposals, intellectual property, Instruments of Service, and Texas governing law.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/terms-of-service`,
      siteName: 'Engivato PLLC',
      type: 'website',
    },
    alternates: {
      canonical: '/terms-of-service',
    },
    ...(termsOfService?.enabled === false ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function TermsOfService() {
  const [{ termsOfService }, visibility] = await Promise.all([
    getLegalPages(),
    getNavigationVisibility(),
  ]);

  if (termsOfService?.enabled === false) {
    return <PageUnavailable pageName="Terms of Service" />;
  }

  const introParagraphs =
    Array.isArray(termsOfService?.paragraphs) && termsOfService.paragraphs.length > 0
      ? termsOfService.paragraphs
      : [
          'Welcome to the digital platform of Engivato PLLC. These Terms of Service govern your access to and use of our website, inquiry forms, and informational resources regarding our Mechanical, Electrical, and Plumbing (MEP) engineering services.',
          'Please review these terms carefully before submitting project inquiries or architectural documents. For information on how we handle personal and contact data, please also review our Privacy Policy.',
        ];

  const sections =
    Array.isArray(termsOfService?.sections) && termsOfService.sections.length > 0
      ? termsOfService.sections
      : DEFAULT_TERMS_SECTIONS;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: termsOfService?.heading || 'Terms of Service | Engivato PLLC',
    description:
      termsOfService?.metaDescription ||
      'Terms of Service governing the Engivato PLLC website and engineering inquiry submissions.',
    url: `${SITE_URL}/terms-of-service`,
    publisher: {
      '@type': 'EngineeringBusiness',
      name: 'Engivato PLLC',
      telephone: `+1-${COMPANY_PHONE.slice(0, 3)}-${COMPANY_PHONE.slice(3, 6)}-${COMPANY_PHONE.slice(6)}`,
      email: COMPANY_EMAIL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-corporate-blue selection:text-white flex flex-col">
        {/* Page Header */}
        <header
          className="pt-36 pb-16 bg-corporate-blue text-white px-4 relative overflow-hidden"
          aria-labelledby="tos-hero-title"
        >
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="font-mono text-orange font-semibold tracking-wider uppercase text-xs sm:text-sm mb-3 inline-block">
              Legal & Professional Terms
            </span>
            <h1
              id="tos-hero-title"
              className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4"
            >
              {termsOfService?.heading || 'Terms of Service'}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              Governing website access, proposal inquiries, and professional MEP engineering standards for Engivato PLLC in the State of Texas.
            </p>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none" />
        </header>

        {/* Main Terms Content */}
        <main className="grow py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Overview & Introductory Clauses */}
            <section
              id="terms-of-service"
              aria-label="Terms Overview"
              className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200"
            >
              <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed mb-10 pb-8 border-b border-slate-100">
                {introParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Detailed Clauses */}
              <div className="space-y-8">
                {sections.map((sec, idx) => (
                  <article key={idx} className="space-y-2.5">
                    <h2 className="text-lg sm:text-xl font-bold text-corporate-blue tracking-tight">
                      {sec.title}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {sec.body}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            {/* Questions & Related Legal Links Card */}
            <section
              aria-labelledby="tos-contact-heading"
              className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
            >
              <div className="space-y-3 max-w-xl">
                <h2
                  id="tos-contact-heading"
                  className="text-xl font-bold text-slate-900"
                >
                  Questions Regarding These Terms?
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  If you have questions about website usage, proposal confidentiality, or engineering service agreements, reach out to our team during business hours ({COMPANY_HOURS}).
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-1 text-sm font-semibold">
                  <a
                    href={formatPhoneHref(COMPANY_PHONE)}
                    className="text-corporate-blue hover:text-orange transition-colors"
                  >
                    Call {formatPhoneDisplay(COMPANY_PHONE)}
                  </a>
                  <span className="text-slate-300">|</span>
                  <a
                    href={`mailto:${COMPANY_EMAIL}`}
                    className="text-corporate-blue hover:text-orange transition-colors"
                  >
                    {COMPANY_EMAIL}
                  </a>
                  {visibility.privacy && (
                    <>
                      <span className="text-slate-300">|</span>
                      <Link
                        href="/privacy"
                        className="text-slate-600 hover:text-corporate-blue underline"
                      >
                        Read Privacy Policy
                      </Link>
                    </>
                  )}
                </div>
              </div>

              {visibility.contact && (
                <Link
                  href="/contact"
                  className="shrink-0 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-orange hover:bg-orange-dark text-white font-bold text-sm hover:-translate-y-0.5 transition-all duration-300 animate-slow-ping"
                >
                  <span>Contact Our Engineering Team</span>
                </Link>
              )}
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

