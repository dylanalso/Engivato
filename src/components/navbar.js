'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../img/logoIdea2.svg';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  COMPANY_PHONE,
  formatPhoneDisplay,
  formatPhoneHref,
} from '../lib/constants';

const NAV_LINKS = [
  { href: '/', label: 'Home', key: 'home' },
  { href: '/about', label: 'About', key: 'about' },
  { href: '/projects', label: 'Projects', key: 'projects' },
  { href: '/services', label: 'Services', key: 'services' },
  { href: '/who-we-serve', label: 'Who We Serve', key: 'whoWeServe' },
];

export default function Navbar({ isUnderConstruction = false, pageVisibility = {} }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = pathname === '/' || pathname === '' || pathname === '/index.html';

  if (
    pathname?.startsWith('/keystatic') ||
    pathname?.startsWith('/under-construction') ||
    (isUnderConstruction && isHomePage)
  ) {
    return null;
  }

  const normalizedPath = pathname?.replace(/\/$/, '') || '/';
  const isActiveLink = (href) => {
    if (href === '/') {
      return normalizedPath === '/';
    }
    return normalizedPath === href || normalizedPath.startsWith(`${href}/`);
  };

  const visibleNavLinks = NAV_LINKS.filter(
    (link) => link.key === 'home' || pageVisibility[link.key] !== false
  );
  const showContactButton = pageVisibility.contact !== false;
  const isContactActive = isActiveLink('/contact');

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 flex items-center transition-all duration-300 border-b ${
        isScrolled
          ? 'py-2.5 px-6 bg-white/95 backdrop-blur-md shadow-md border-slate-200/80'
          : 'py-4 px-6 bg-white/90 backdrop-blur-md shadow-sm border-slate-200/60'
      }`}
    >
      {/* Brand Logo */}
      <div className="font-bold tracking-tighter justify-start grow text-corporate-blue">
        <Link href="/" className="inline-flex items-center gap-2.5 group">
          <Image
            className={`h-auto transition-all duration-300 ${isScrolled ? 'w-8' : 'w-10'}`}
            src={logo}
            alt="Company Logo"
            width={40}
            height={40}
            priority
          />
          <span
            className={`font-extrabold tracking-tighter text-corporate-blue transition-all duration-300 ${
              isScrolled ? 'text-xl' : 'text-2xl'
            }`}
          >
            Engivato
          </span>
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div
        className={`hidden min-[900px]:flex items-center text-sm font-semibold transition-all duration-300 ${
          isScrolled ? 'space-x-5 xl:space-x-7' : 'space-x-5 xl:space-x-8'
        }`}
      >
        {visibleNavLinks.map((link, idx) => {
          const active = isActiveLink(link.href);
          const isLast = idx === visibleNavLinks.length - 1 && showContactButton;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-1 whitespace-nowrap transition-colors duration-300 ${isLast ? 'pr-4 xl:pr-5' : ''} ${
                active
                  ? 'text-corporate-blue font-bold'
                  : 'text-slate-700 hover:text-corporate-blue'
              }`}
            >
              {link.label}
              {active && (
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-orange rounded-full ${
                    isLast ? 'right-4 xl:right-5' : 'right-0'
                  }`}
                />
              )}
            </Link>
          );
        })}
      </div>

      {/* Contact CTA, Quick-Call Button & Mobile Menu Toggle */}
      <div className="flex items-center gap-2.5 min-[900px]:gap-3 shrink-0">
        {showContactButton && (
          <Link
            href="/contact"
            aria-label="Contact Us"
            title="Contact Us"
            className={`rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center text-center whitespace-nowrap shrink-0 border ${
              isContactActive
                ? 'bg-orange text-white border-orange shadow-md shadow-orange/30'
                : 'bg-orange/20 text-orange border-orange hover:bg-orange hover:text-white'
            } ${
              isScrolled
                ? 'w-8 h-8 min-[900px]:w-auto min-[900px]:h-auto min-[900px]:px-4 min-[900px]:py-1.5 text-xs min-[900px]:text-sm'
                : 'w-9 h-9 min-[900px]:w-auto min-[900px]:h-auto min-[900px]:px-5 min-[900px]:py-2 text-sm'
            }`}
          >
            <svg
              aria-hidden="true"
              className="w-4 h-4 min-[900px]:hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="hidden min-[900px]:inline">Contact Us</span>
          </Link>
        )}

        {/* Quick-Call Phone Icon Button */}
        <a
          href={formatPhoneHref(COMPANY_PHONE)}
          aria-label={`Call Engivato PLLC now at ${formatPhoneDisplay(COMPANY_PHONE)}`}
          title={`Call Now: ${formatPhoneDisplay(COMPANY_PHONE)}`}
          className={`relative inline-flex items-center justify-center rounded-full bg-orange hover:bg-orange-dark text-white hover:-translate-y-0.5 transition-all duration-300 animate-slow-ping focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corporate-blue focus-visible:ring-offset-2 shrink-0 ${
            isScrolled ? 'w-8 h-8' : 'w-9 h-9 min-[900px]:w-10 min-[900px]:h-10'
          }`}
        >
          <svg
            aria-hidden="true"
            className={isScrolled ? 'w-4 h-4' : 'w-4 h-4 min-[900px]:w-4.5 min-[900px]:h-4.5'}
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
          <span className="sr-only">
            Call Engivato PLLC at {formatPhoneDisplay(COMPANY_PHONE)}
          </span>
        </a>

        {/* Mobile Menu Toggle Button */}
        <button
          className="min-[900px]:hidden p-2 text-slate-700 hover:text-corporate-blue focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg py-4 px-6 flex flex-col gap-3 min-[900px]:hidden text-base font-semibold text-slate-700 border-t border-slate-100">
          {visibleNavLinks.map((link) => {
            const active = isActiveLink(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between py-1 transition-colors duration-300 ${
                  active
                    ? 'text-corporate-blue font-bold'
                    : 'text-slate-700 hover:text-corporate-blue'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{link.label}</span>
                {active && <span className="w-2 h-2 rounded-full bg-orange" />}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
