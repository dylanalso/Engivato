'use client';

import { useState } from 'react';
import Image from 'next/image';
import logo from '../img/logoIdea2.svg'; 

import Link from 'next/link';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="absolute top-0 w-full p-6 flex items-center z-50 hover:backdrop-blur-md hover:bg-white/60 transition-all duration-300">

            {/* logo */}
            <div className="text-2xl font-bold tracking-tighter justify-start flex-grow text-corporate-blue">
                <Link href="/">
                    <Image className="w-10" src={logo} alt="ENGIVATO" />
                    {/* <span>Engivato</span> */}
                </Link>
            </div>

            {/* nav links */}
            <div className="hidden md:flex  space-x-8 p-4 text-sm font-medium text-slate-600">
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
                    className="md:hidden p-2 text-slate-600 hover:text-corporate-blue focus:outline-none"
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
                <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col gap-4 md:hidden text-base font-medium text-slate-600 border-t border-slate-100">
                    <Link href="/src" className="hover:text-corporate-blue transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link href="/about" className="hover:text-corporate-blue transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                    <Link href="/projects" className="hover:text-corporate-blue transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
                    <Link href="/services" className="hover:text-corporate-blue transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                    <Link href="/whoWeServe" className="hover:text-corporate-blue transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>Who We Serve</Link>
                </div>
            )}
        </nav>
    );
}