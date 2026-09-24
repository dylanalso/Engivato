import Image from 'next/image';
import logo from '../img/engivato_mobile_nav_logo.svg';


export default function Navbar() {
    return (
        <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-50">

            {/* logo */}
            <div className="text-2xl font-bold tracking-tighter text-white">
                <a href="/">
                    {/*<Image className="w-48" src={logo} alt="ENGIVATO" />*/}
                    <span>Engivato</span>
                </a>
            </div>

            {/* nav links */}
            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
                <a href="/#services" className="hover:text-white transition-colors duration-300">Services</a>
                <a href="/about" className="hover:text-white transition-colors duration-300">About Us</a>
                <a href="/portfolio" className="hover:text-white transition-colors duration-300">Portfolio</a>
            </div>

            {/* CTA */}
            <button className="bg-orange/10 text-orange border border-orange/20 px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange hover:text-white transition-all duration-300">
                <a href="/contact">Contact Us</a>
            </button>
        </nav>
    );
}
