'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer({ isUnderConstruction = false }) {
    const pathname = usePathname();
    const isHomePage = pathname === '/' || pathname === '' || pathname === '/index.html';

    if (
        pathname?.startsWith('/keystatic') ||
        pathname?.startsWith('/under-construction') ||
        (isUnderConstruction && isHomePage)
    ) {
        return null;
    }

    return (
      <footer className="bg-corporate-blue/100 pt-12 pb-8 px-4 text-slate-200 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <section className="py-20 px-4 bg-corporate-blue text-white relative overflow-hidden" aria-labelledby="cta-heading">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <span className="text-orange font-semibold tracking-wider uppercase text-sm mb-3 inline-block">
                Ready to Collaborate?
              </span>
              <h2 id="cta-heading" className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                Let&apos;s Build Systems That Perform
              </h2>
              <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
                Send us your architectural plans or RFP. Our engineering team will review your scope and provide a detailed proposal and timeline.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-orange hover:bg-orange-dark text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg hover:shadow-orange/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Contact Our Engineering Team
                </Link>
                <Link
                  href="/whoWeServe"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 backdrop-blur-sm"
                >
                  See Who We Serve
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none" />
          </section>

          {/* links and copyright section */}
          <div className="border-t border-slate-700/50 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* links section */}
            <div className="flex flex-row flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 text-slate-300"> 
              <Link href="/privacy" className="whitespace-nowrap hover:text-orange transition-colors">Privacy Policy</Link>
              <Link href="/termsOfService" className="whitespace-nowrap hover:text-orange transition-colors">Terms of Service</Link>
              <Link href="/accessibility" className="whitespace-nowrap hover:text-orange transition-colors">Accessibility</Link>
              <Link href="/sitemap" className="whitespace-nowrap hover:text-orange transition-colors">Sitemap</Link>
            </div>

            {/* copyright section */}
            <p className="text-xs text-center md:text-right text-slate-400">
              © {new Date().getFullYear()} Engivato PLLC. All rights reserved.
            </p>
          </div>
        
        </div>
      </footer>
    );
}