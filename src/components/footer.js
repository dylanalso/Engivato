'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  COMPANY_EMAIL,
  COMPANY_PHONE,
  COMPANY_HOURS,
  formatPhoneDisplay,
  formatPhoneHref,
} from '../lib/constants';

export default function Footer({
  isUnderConstruction = false,
  footerData = {},
  pageVisibility = {},
}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/' || pathname === '' || pathname === '/index.html';

  if (
    pathname?.startsWith('/keystatic') ||
    pathname?.startsWith('/under-construction') ||
    (isUnderConstruction && isHomePage)
  ) {
    return null;
  }

  const ctaBanner = footerData.ctaBanner || {
    enabled: true,
    eyebrow: 'Ready to Collaborate?',
    heading: "Let's Build Systems That Perform",
    description:
      'Send us your architectural plans or RFP. Our engineering team will review your scope and provide a detailed proposal and timeline.',
    primaryCtaText: 'Contact Our Engineering Team',
    primaryCtaHref: '/contact',
    secondaryCtaText: 'See Who We Serve',
    secondaryCtaHref: '/who-we-serve',
  };

  const contactBar = footerData.contactBar || {
    enabled: true,
    phone: COMPANY_PHONE,
    email: COMPANY_EMAIL,
    businessHours: COMPANY_HOURS,
  };

  const bottomBar = footerData.bottomBar || {
    enabled: true,
    copyrightText: 'Engivato PLLC. All rights reserved.',
  };

  if (
    ctaBanner.enabled === false &&
    contactBar.enabled === false &&
    bottomBar.enabled === false
  ) {
    return null;
  }

  const contactPhone = contactBar.phone || COMPANY_PHONE;
  const contactEmail = contactBar.email || COMPANY_EMAIL;
  const contactHours = contactBar.businessHours || COMPANY_HOURS;
  const [scheduleDays, scheduleTime] = String(contactHours).split(/,\s*(.+)/);

  const isHrefEnabled = (href = '') => {
    if (href.startsWith('/contact')) return pageVisibility.contact !== false;
    if (href.startsWith('/who-we-serve')) return pageVisibility.whoWeServe !== false;
    if (href.startsWith('/services')) return pageVisibility.services !== false;
    if (href.startsWith('/projects')) return pageVisibility.projects !== false;
    if (href.startsWith('/about')) return pageVisibility.about !== false;
    return true;
  };

  return (
    <footer className="bg-corporate-blue pt-10 pb-6 px-4 text-slate-200 text-sm border-t border-blue-900/60">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {ctaBanner.enabled !== false && (
          <section
            className="py-12 md:py-16 px-6 md:px-10 bg-linear-to-b from-blue-900/45 to-slate-950/35 text-white relative overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-slate-950/50"
            aria-labelledby="cta-heading"
          >
            <div
              aria-hidden="true"
              className="hidden sm:flex items-center justify-between pb-4 mb-8 border-b border-white/15 font-mono text-[10px] tracking-widest uppercase text-blue-200/70 select-none"
            >
              <span>+ DWG NO. MEP-999 // FINAL-CALLOUT</span>
              <span>SCALE: N.T.S. | REV 01 +</span>
            </div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
              {ctaBanner.eyebrow && (
                <span className="font-mono text-orange font-semibold tracking-wider uppercase text-xs sm:text-sm mb-3 inline-block">
                  {ctaBanner.eyebrow}
                </span>
              )}
              <h2 id="cta-heading" className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5">
                {ctaBanner.heading}
              </h2>
              {ctaBanner.description && (
                <p className="text-slate-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                  {ctaBanner.description}
                </p>
              )}
              <div className="flex flex-wrap justify-center gap-4">
                {ctaBanner.primaryCtaText && isHrefEnabled(ctaBanner.primaryCtaHref || '/contact') && (
                  <Link
                    href={ctaBanner.primaryCtaHref || '/contact'}
                    className="bg-orange hover:bg-orange-dark text-white px-8 py-3.5 rounded-full font-semibold text-base hover:-translate-y-0.5 transition-all duration-300 animate-slow-ping"
                  >
                    {ctaBanner.primaryCtaText}
                  </Link>
                )}
                {ctaBanner.secondaryCtaText && isHrefEnabled(ctaBanner.secondaryCtaHref || '/who-we-serve') && (
                  <Link
                    href={ctaBanner.secondaryCtaHref || '/who-we-serve'}
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 backdrop-blur-sm"
                  >
                    {ctaBanner.secondaryCtaText}
                  </Link>
                )}
              </div>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none" />
          </section>
        )}

        {/* Direct Contact & Call Hours Bar */}
        {contactBar.enabled !== false && (
          <div className="border-t border-white/15 pt-4 flex flex-col md:flex-row flex-wrap justify-between items-center gap-3 md:gap-6 text-slate-200 text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-6">
              <a
                href={formatPhoneHref(contactPhone)}
                className="inline-flex items-center gap-2 font-semibold text-white hover:text-orange transition-colors"
              >
                <svg className="w-4 h-4 text-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{formatPhoneDisplay(contactPhone)}</span>
              </a>

              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-2 text-slate-200 hover:text-orange transition-colors"
              >
                <svg className="w-4 h-4 text-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{contactEmail}</span>
              </a>
            </div>

            <div className="font-mono inline-flex items-center gap-2.5 text-xs text-slate-300">
              <svg className="w-4 h-4 text-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="leading-snug text-center sm:text-left">
                {scheduleTime ? (
                  <>
                    <span className="block">Call Hours: {scheduleDays}</span>
                    <span className="block text-slate-300/90">{scheduleTime}</span>
                  </>
                ) : (
                  <span>Call Hours: {contactHours}</span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Bottom Legal Links & Copyright Bar */}
        {bottomBar.enabled !== false && (
          <div className="border-t border-white/15 pt-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
            {/* Legal & Sitemap Navigation */}
            <div className="flex flex-row flex-wrap justify-center sm:justify-start items-center gap-x-3 gap-y-1.5 text-slate-300">
              {pageVisibility.privacy !== false && (
                <Link href="/privacy" className="whitespace-nowrap hover:text-orange transition-colors">
                  Privacy Policy
                </Link>
              )}
              {pageVisibility.termsOfService !== false && (
                <>
                  <span aria-hidden="true" className="text-white/25">|</span>
                  <Link href="/terms-of-service" className="whitespace-nowrap hover:text-orange transition-colors">
                    Terms of Service
                  </Link>
                </>
              )}
              {pageVisibility.accessibility !== false && (
                <>
                  <span aria-hidden="true" className="text-white/25">|</span>
                  <Link href="/accessibility" className="whitespace-nowrap hover:text-orange transition-colors">
                    Accessibility
                  </Link>
                </>
              )}
              {pageVisibility.sitemap !== false && (
                <>
                  <span aria-hidden="true" className="text-white/25">|</span>
                  <Link href="/sitemap" className="whitespace-nowrap hover:text-orange transition-colors">
                    Sitemap
                  </Link>
                </>
              )}
            </div>

            {/* Copyright Notice */}
            <p className="font-mono text-xs text-center sm:text-right text-slate-400">
              (c) {new Date().getFullYear()} {bottomBar.copyrightText || 'Engivato PLLC. All rights reserved.'}
            </p>
          </div>
        )}
      </div>
    </footer>
  );
}
