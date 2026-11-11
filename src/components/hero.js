import Image from 'next/image';
import blueOverlay from '../img/BlueOverlay.gif';
import Link from 'next/link';

export default function Hero({ data = {} }) {
  const {
    badge = 'Texas MEP Engineering Firm',
    headingLine1 = 'Innovating the Future of',
    headingHighlight = 'Your Infrastructure',
    subtitle = 'We provide innovative, practical, and reliable Mechanical, Electrical, and Plumbing (MEP) engineering solutions to help clients develop high-performing, efficient, and sustainable building systems.',
    primaryCtaText = 'Start Your Project',
    primaryCtaHref = '/contact',
    secondaryCtaText = 'See Who We Serve',
    secondaryCtaHref = '/who-we-serve',
  } = data;

  return (
    <section
      aria-label="Hero"
      className="relative flex flex-col justify-between items-center text-center min-h-screen pt-28 pb-10 md:pt-32 md:pb-14 px-4 overflow-hidden"
    >
      {/* Background Visual Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={blueOverlay}
          alt=""
          fill
          className="object-cover opacity-15 contrast-125"
          unoptimized
        />
      </div>

      {/* Bottom White-to-Transparent Contrast Gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 sm:h-64 md:h-72 z-10 bg-linear-to-t from-white via-white/90 to-transparent" />

      {/* Centered Headline & Call-to-Action Group */}
      <div className="relative z-20 max-w-4xl mx-auto my-auto py-8 flex flex-col items-center">
        {/* Eyebrow Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-corporate-blue/25 bg-corporate-light text-xs font-mono font-semibold text-corporate-blue uppercase tracking-widest shadow-sm">
            <span aria-hidden="true" className="text-orange font-bold">+</span>
            <span>{badge}</span>
            <span aria-hidden="true" className="text-corporate-blue/40 hidden sm:inline">// REV 01</span>
          </div>
        )}

        {/* Primary Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-10 leading-tight text-slate-900 drop-shadow-sm">
          {headingLine1} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-corporate-blue to-blue-700">
            {headingHighlight}
          </span>
        </h1>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
          {primaryCtaText && (
            <Link
              href={primaryCtaHref || '/contact'}
              className="inline-block px-8 py-4 bg-orange hover:bg-orange-dark text-white rounded-lg font-bold hover:-translate-y-1 transition-all duration-300 animate-slow-ping"
            >
              {primaryCtaText}
            </Link>
          )}

          {secondaryCtaText && (
            <Link
              href={secondaryCtaHref || '/who-we-serve'}
              className="inline-block px-8 py-4 bg-white text-corporate-blue rounded-lg font-bold border border-corporate-blue/30 hover:bg-corporate-light hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              {secondaryCtaText}
            </Link>
          )}
        </div>
      </div>

      {/* Bottom-Anchored Introductory Copy */}
      {subtitle && (
        <div className="relative z-20 max-w-3xl mx-auto pt-8 px-2">
          <p className="text-base sm:text-lg md:text-xl font-medium text-slate-800 leading-relaxed tracking-tight">
            {subtitle}
          </p>
        </div>
      )}
    </section>
  );
}
