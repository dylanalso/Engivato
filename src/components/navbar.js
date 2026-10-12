'use client';

import { useState } from 'react';
import Image from 'next/image';
import logo from '../img/logoIdea2.svg'; 

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    if (pathname?.startsWith('/keystatic')) {
        return null;
    }

    return (
        <nav className="absolute top-0 w-full px-6 py-4 flex items-center z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/60 transition-all duration-300">

            {/* logo */}
            <div className="text-2xl font-bold tracking-tighter justify-start flex-grow text-corporate-blue">
                <Link href="/" className="inline-flex items-center">
                    <Image className="w-10 h-auto" src={logo} alt="ENGIVATO" priority />
                    {/* <span>Engivato</span> */}
                </Link>
            </div>

            {/* nav links */}
            <div className="hidden md:flex space-x-8 p-4 text-sm font-semibold text-slate-700">
                <Link href="/" className="hover:text-corporate-blue transition-colors duration-300">Home</Link>
                <Link href="/about" className="hover:text-corporate-blue transition-colors duration-300">About</Link>
                <Link href="/projects" className="hover:text-corporate-blue transition-colors duration-300">Projects</Link>
                <Link href="/services" className="hover:text-corporate-blue transition-colors duration-300">Services</Link>
                <Link href="/whoWeServe" className="hover:text-corporate-blue transition-colors duration-300">Who We Serve</Link>
            </div>

            {/* CTA and mobile toggle */}
            <div className="flex items-center gap-4">
                <button className="bg-orange/20 text-orange border border-orange px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange hover:text-white transition-all duration-300">
                    <Link href="/contact">Contact Us</Link>
                </button>

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