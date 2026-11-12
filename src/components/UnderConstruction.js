'use client';

import Image from 'next/image';
import logo from '../img/logoIdea2.svg';
import {
  COMPANY_EMAIL,
  COMPANY_PHONE,
  COMPANY_HOURS,
  formatPhoneDisplay,
  formatPhoneHref,
} from '../lib/constants';

const DEFAULT_FEATURE_CARDS = [
  {
    badge: '01',
    title: 'MEP Engineering',
    desc: 'Precision mechanical, electrical, and plumbing engineering designed for constructibility.',
  },
  {
    badge: '02',
    title: 'Consulting & Review',
    desc: 'MEP coordination, 3D clash-resolution support, constructability design reviews, and quality assurance.',
  },
  {
    badge: '03',
    title: 'Commercial Fit-Outs',
    desc: 'Agile turnarounds for restaurants, commercial office finish-outs, and multifamily projects across Texas.',
  },
];

export default function UnderConstruction({ settings = {} }) {
  const {
    heading = 'Engineering High-Performance Solutions That Perform',
    subheading = 'Website Under Construction • Launching Soon',
    description = 'We are currently building our full digital platform. Engivato PLLC delivers licensed Mechanical, Electrical, and Plumbing (MEP) consulting, stamped permit drawings, and fast-track tenant fit-out engineering across Texas.',
    showFeatureCards = true,
    featureCards = DEFAULT_FEATURE_CARDS,
    showContactCard = true,
    contactCardHeading = 'Have an active project or RFP?',
    contactCardDescription = 'Our engineering team is actively accepting project inquiries and architectural drawings for review.',
    contactCardButtonText = 'Email Our Engineering Team',
    contactPhone = COMPANY_PHONE,
    businessHours = COMPANY_HOURS,
    footerNote = 'Licensed Engineering Consultation in Texas',
  } = settings;

  const cardsToDisplay =
    Array.isArray(featureCards) && featureCards.length > 0
      ? featureCards
      : DEFAULT_FEATURE_CARDS;

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between relative overflow-hidden font-sans selection:bg-orange selection:text-white">
      {/* Background Decorative Grids and Gradients */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-140 h-140 bg-corporate-blue/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange/15 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header / Branding Bar */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0 bg-white/10 rounded-xl p-1.5 backdrop-blur-md border border-white/15 shadow-inner">
            <Image
              src={logo}
              alt=""
              fill
              className="object-contain p-1"
              priority
            />
          </div>
          <div>
            <span className="text-xl md:text-2xl font-black tracking-tight text-white block">
              ENGIVATO <span className="text-orange text-sm md:text-base font-semibold">PLLC</span>
            </span>
            <span className="text-xs text-slate-400 font-medium tracking-wider uppercase block">
              Engineering & Innovation
            </span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <a
            href={formatPhoneHref(contactPhone)}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-white hover:text-orange border border-white/20 hover:border-orange bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-200 backdrop-blur-sm"
          >
            <svg className="w-3.5 h-3.5 text-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{formatPhoneDisplay(contactPhone)}</span>
          </a>

          <a
            href={`mailto:${COMPANY_EMAIL}`}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-slate-300 hover:text-white border border-white/20 hover:border-orange bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-200 backdrop-blur-sm"
          >
            <span>Direct Inquiries</span>
            <svg className="w-3.5 h-3.5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </header>

      {/* Main Center Content */}
      <main className="relative z-10 w-full max-w-4xl mx-auto px-6 py-12 text-center flex flex-col items-center my-auto">
        {/* Status Pill */}
        {subheading && (
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-corporate-blue/40 border border-blue-500/30 text-blue-200 text-xs md:text-sm font-medium mb-8 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange"></span>
            </span>
            <span className="tracking-wide">{subheading}</span>
          </div>
        )}

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
          {heading}
        </h1>

        {/* Description */}
        {description && (
          <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-10 whitespace-pre-line">
            {description}
          </p>
        )}

        {/* Feature Highlights Grid */}
        {showFeatureCards && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mb-10 text-left">
            {cardsToDisplay.map((card, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/4 border border-white/10 backdrop-blur-sm hover:border-orange/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-orange/10 border border-orange/20 flex items-center justify-center text-orange font-bold text-sm mb-3">
                  {card.badge || String(idx + 1).padStart(2, '0')}
                </div>
                <h2 className="font-semibold text-white text-base mb-1">{card.title}</h2>
                <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Action Card */}
        {showContactCard && (
          <div className="w-full max-w-xl bg-linear-to-b from-white/8 to-white/2 border border-white/15 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
              {contactCardHeading}
            </h2>
            {contactCardDescription && (
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                {contactCardDescription}
              </p>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`mailto:${COMPANY_EMAIL}?subject=Engineering%20Inquiry%20-%20Engivato%20PLLC`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:-translate-y-0.5 transition-all duration-200 animate-slow-ping"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{contactCardButtonText}</span>
              </a>

              <a
                href={formatPhoneHref(contactPhone)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-200"
              >
                <svg className="w-4 h-4 text-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{formatPhoneDisplay(contactPhone)}</span>
              </a>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-slate-400">
              <a href={`mailto:${COMPANY_EMAIL}`} className="underline hover:text-white">
                {COMPANY_EMAIL}
              </a>
              <span className="hidden sm:inline">•</span>
              <span>Call Hours: {businessHours}</span>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p>© {new Date().getFullYear()} Engivato PLLC. All rights reserved.</p>
        {footerNote && (
          <p className="flex items-center gap-2">
            <span>{footerNote}</span>
          </p>
        )}
      </footer>
    </div>
  );
}
