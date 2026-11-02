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
    secondaryCtaHref = '/whoWeServe',
  } = data;

  return (
    <main className="relative flex flex-col justify-center items-center text-center min-h-screen px-4 overflow-hidden">
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

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Eyebrow Badge */}
        {badge && (
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-corporate-blue/20 bg-corporate-light text-xs font-medium text-corporate-blue uppercase tracking-widest shadow-sm">
            {badge}
          </div>
        )}

        {/* Primary Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-slate-900 drop-shadow-sm">
          {headingLine1} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-corporate-blue to-blue-700">
            {headingHighlight}
          </span>
        </h1>

        {/* Introductory Copy */}
        {subtitle && (
          <p className="text-lg md:text-xl font-medium text-slate-900 mb-10 max-w-2xl leading-relaxed tracking-tight">
            {subtitle}
          </p>
        )}

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
          {primaryCtaText && (
            <Link
              href={primaryCtaHref || '/contact'}
              className="inline-block px-8 py-4 bg-orange hover:bg-orange-dark text-white rounded-lg font-bold shadow-lg shadow-orange/30 hover:shadow-orange/50 hover:-translate-y-1 transition-all duration-300"
            >
              {primaryCtaText}
            </Link>
          )}

          {secondaryCtaText && (
            <Link
              href={secondaryCtaHref || '/whoWeServe'}
              className="inline-block px-8 py-4 bg-white text-corporate-blue rounded-lg font-bold border border-corporate-blue/30 hover:bg-corporate-light hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              {secondaryCtaText}
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
