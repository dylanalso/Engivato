'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
    secondaryCtaHref: '/whoWeServe',
  };

  const bottomBar = footerData.bottomBar || {
    enabled: true,
    copyrightText: 'Engivato PLLC. All rights reserved.',
  };

  if (ctaBanner.enabled === false && bottomBar.enabled === false) {
    return null;
  }

  const isHrefEnabled = (href = '') => {
    if (href.startsWith('/contact')) return pageVisibility.contact !== false;
    if (href.startsWith('/whoWeServe')) return pageVisibility.whoWeServe !== false;
    if (href.startsWith('/services')) return pageVisibility.services !== false;
    if (href.startsWith('/projects')) return pageVisibility.projects !== false;
    if (href.startsWith('/about')) return pageVisibility.about !== false;
    return true;
  };

  return (
    <footer className="bg-corporate-blue/100 pt-12 pb-8 px-4 text-slate-200 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {ctaBanner.enabled !== false && (
          <section className="py-20 px-4 bg-corporate-blue text-white relative overflow-hidden" aria-labelledby="cta-heading">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              {ctaBanner.eyebrow && (
                <span className="text-orange font-semibold tracking-wider uppercase text-sm mb-3 inline-block">
                  {ctaBanner.eyebrow}
                </span>
              )}
              <h2 id="cta-heading" className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                {ctaBanner.heading}
              </h2>
              {ctaBanner.description && (
                <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
                  {ctaBanner.description}
                </p>
              )}
              <div className="flex flex-wrap justify-center gap-4">
                {ctaBanner.primaryCtaText && isHrefEnabled(ctaBanner.primaryCtaHref || '/contact') && (
                  <Link
                    href={ctaBanner.primaryCtaHref || '/contact'}
                    className="bg-orange hover:bg-orange-dark text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg hover:shadow-orange/30 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {ctaBanner.primaryCtaText}
                  </Link>
                )}
                {ctaBanner.secondaryCtaText && isHrefEnabled(ctaBanner.secondaryCtaHref || '/whoWeServe') && (
                  <Link
                    href={ctaBanner.secondaryCtaHref || '/whoWeServe'}
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 backdrop-blur-sm"
                  >
                    {ctaBanner.secondaryCtaText}
                  </Link>
                )}
              </div>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none" />
          </section>
        )}

        {/* Bottom Legal Links & Copyright Bar */}
        {bottomBar.enabled !== false && (
          <div className="border-t border-slate-700/50 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Legal & Sitemap Navigation */}
            <div className="flex flex-row flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 text-slate-300">
              {pageVisibility.privacy !== false && (
                <Link href="/privacy" className="whitespace-nowrap hover:text-orange transition-colors">
                  Privacy Policy
                </Link>
              )}
              {pageVisibility.termsOfService !== false && (
                <Link href="/termsOfService" className="whitespace-nowrap hover:text-orange transition-colors">
                  Terms of Service
                </Link>
              )}
              {pageVisibility.accessibility !== false && (
                <Link href="/accessibility" className="whitespace-nowrap hover:text-orange transition-colors">
                  Accessibility
                </Link>
              )}
              <Link href="/sitemap" className="whitespace-nowrap hover:text-orange transition-colors">
                Sitemap
              </Link>
            </div>

            {/* Copyright Notice */}
            <p className="text-xs text-center md:text-right text-slate-400">
              © {new Date().getFullYear()} {bottomBar.copyrightText || 'Engivato PLLC. All rights reserved.'}
            </p>
          </div>
        )}
      </div>
    </footer>
  );
}
