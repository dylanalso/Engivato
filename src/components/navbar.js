'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../img/logoIdea2.svg'; 

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
            <div className={`hidden md:flex items-center text-sm font-semibold text-slate-700 transition-all duration-300 ${isScrolled ? 'space-x-7' : 'space-x-8'}`}>
                <Link href="/" className="hover:text-corporate-blue transition-colors duration-300">Home</Link>
                <Link href="/about" className="hover:text-corporate-blue transition-colors duration-300">About</Link>
                <Link href="/projects" className="hover:text-corporate-blue transition-colors duration-300">Projects</Link>
                <Link href="/services" className="hover:text-corporate-blue transition-colors duration-300">Services</Link>
                <Link href="/whoWeServe" className="pr-5 hover:text-corporate-blue transition-colors duration-300">Who We Serve</Link>
            </div>

            {/* CTA and mobile toggle */}
            <div className="flex items-center gap-4">
                <Link
                    href="/contact"
                    className={`bg-orange/20 text-orange border border-orange rounded-full font-semibold hover:bg-orange hover:text-white transition-all duration-300 inline-block text-center ${
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
                <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg py-4 px-6 flex flex-col gap-4 md:hidden text-base font-semibold text-slate-700 border-t border-slate-100">
                    <Link href="/" className="hover:text-corporate-blue transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link href="/about" className="hover:text-corporate-blue transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                    <Link href="/projects" className="hover:text-corporate-blue transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
                    <Link href="/services" className="hover:text-corporate-blue transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                    <Link href="/whoWeServe" className="hover:text-corporate-blue transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>Who We Serve</Link>
                </div>
            )}
        </nav>
    );
}