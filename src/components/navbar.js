'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../img/logoIdea2.svg'; 

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/services', label: 'Services' },
    { href: '/whoWeServe', label: 'Who We Serve' },
];

export default function Navbar() {
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

    if (pathname?.startsWith('/keystatic')) {
        return null;
    }

    const normalizedPath = pathname?.replace(/\/$/, '') || '/';
    const isActiveLink = (href) => {
        if (href === '/') {
            return normalizedPath === '/';
        }
        return normalizedPath === href || normalizedPath.startsWith(`${href}/`);
    };

    const isContactActive = isActiveLink('/contact');

    return (
        <nav
            className={`fixed top-0 left-0 right-0 w-full z-50 flex items-center transition-all duration-300 border-b ${
                isScrolled
                    ? 'py-2.5 px-6 bg-white/95 backdrop-blur-md shadow-md border-slate-200/80'
                    : 'py-4 px-6 bg-white/90 backdrop-blur-md shadow-sm border-slate-200/60'
            }`}
        >

            {/* logo */}
            <div className="font-bold tracking-tighter justify-start flex-grow text-corporate-blue">
                <Link href="/" className="inline-flex items-center gap-2.5 group">
                    <Image
                        className={`h-auto transition-all duration-300 ${isScrolled ? 'w-8' : 'w-10'}`}
                        src={logo}
                        alt="ENGIVATO"
                        priority
                    />
                    <span className={`font-extrabold tracking-tighter text-corporate-blue transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
                        Engivato
                    </span>
                </Link>
            </div>

            {/* nav links */}
            <div className={`hidden md:flex items-center text-sm font-semibold transition-all duration-300 ${isScrolled ? 'space-x-7' : 'space-x-8'}`}>
                {NAV_LINKS.map((link, idx) => {
                    const active = isActiveLink(link.href);
                    const isLast = idx === NAV_LINKS.length - 1;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`relative py-1 transition-colors duration-300 ${isLast ? 'pr-5' : ''} ${
                                active
                                    ? 'text-corporate-blue font-bold'
                                    : 'text-slate-700 hover:text-corporate-blue'
                            }`}
                        >
                            {link.label}
                            {active && (
                                <span className={`absolute bottom-0 left-0 h-0.5 bg-orange rounded-full ${isLast ? 'right-5' : 'right-0'}`} />
                            )}
                        </Link>
                    );
                })}
            </div>

            {/* CTA and mobile toggle */}
            <div className="flex items-center gap-4">
                <Link
                    href="/contact"
                    className={`rounded-full font-semibold transition-all duration-300 inline-block text-center border ${
                        isContactActive
                            ? 'bg-orange text-white border-orange shadow-md shadow-orange/30'
                            : 'bg-orange/20 text-orange border-orange hover:bg-orange hover:text-white'
                    } ${
                        isScrolled
                            ? 'px-4 py-1.5 text-xs sm:text-sm'
                            : 'px-5 py-2 text-sm'
                    }`}
                >
                    Contact Us
                </Link>

                {/* mobile menu button */}
                <button
                    className="md:hidden p-2 text-slate-700 hover:text-corporate-blue focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        {isMobileMenuOpen ? (
                            <path d="M6 18L18 6M6 6l12 12"></path>
                        ) : (
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        )}
                    </svg>
                </button>
            </div>

            {/* mobile navigation dropdown */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg py-4 px-6 flex flex-col gap-3 md:hidden text-base font-semibold text-slate-700 border-t border-slate-100">
                    {NAV_LINKS.map((link) => {
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
                                {active && (
                                    <span className="w-2 h-2 rounded-full bg-orange" />
                                )}
                            </Link>
                        );
                    })}
                </div>
            )}
        </nav>
    );
}