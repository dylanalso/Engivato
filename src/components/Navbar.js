import Image from 'next/image';
import logo from '../img/engivato_mobile_nav_logo.svg';

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-50 backdrop-blur-md bg-white/60">

            {/* logo */}
            <div className="text-2xl font-bold tracking-tighter text-corporate-blue">
                <Link href="/">
                    {/*<Image className="w-48" src={logo} alt="ENGIVATO" />*/}
                    <span>Engivato</span>
                </Link>
            </div>

            {/* nav links */}
            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
                <Link href="/#services" className="hover:text-corporate-blue transition-colors duration-300">Services</Link>
                <Link href="/about" className="hover:text-corporate-blue transition-colors duration-300">About Us</Link>
                <Link href="/portfolio" className="hover:text-corporate-blue transition-colors duration-300">Portfolio</Link>
            </div>

            {/* CTA */}
            <button className="bg-orange/20 text-orange border border-orange px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange hover:text-white transition-all duration-300">
                <Link href="/contact">Contact Us</Link>
            </button>
        </nav>
    );
}
