import Link from 'next/link';
import Image from 'next/image';
import Logo from '../img/logoIdea2.svg';

export default function Footer() {
    return (
      <footer className="bg-corporate-blue/100 pt-12 pb-8 px-4 text-slate-200 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          {/*
           Logo Section
          <div className="flex justify-start">
            <div className='flex shadow-white shadow-lg'>
              <Image src={Logo} alt="Logo" width={100} height={100} />
            </div>
          </div> */}

        {/* CTA Section */}
        <section className="px-4 bg-corporate-blue text-white text-center" aria-labelledby="about-cta-title">
          <div className="max-w-4xl mx-auto">
            <h2 id="about-cta-title" className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Discuss Your Next Project?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Whether you need preliminary consultation, complete MEP plans, or system renovation, our engineering team is here to help.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-orange/20 text-orange border border-orange px-8 py-3.5 rounded-full text-base font-semibold hover:bg-orange hover:text-white transition-all duration-300"
            >
              Get In Touch With Us
            </Link>
          </div>
        </section>

          {/* Links and Copyright Section */}
          <div className="border-t border-slate-700/50 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Links Section (Left) */}
            <div className="flex flex-row flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 text-slate-300"> 
              <Link href="/privacy" className="whitespace-nowrap hover:text-orange transition-colors">Privacy Policy</Link>
              <Link href="/termsOfService" className="whitespace-nowrap hover:text-orange transition-colors">Terms of Service</Link>
              <Link href="/accessibility" className="whitespace-nowrap hover:text-orange transition-colors">Accessibility</Link>
              <Link href="/sitemap" className="whitespace-nowrap hover:text-orange transition-colors">Sitemap</Link>
            </div>

            {/* Copyright Section (Right) */}
            <p className="text-xs text-center md:text-right text-slate-400">
              © {new Date().getFullYear()} Engivato PLLC. All rights reserved.
            </p>
          </div>
        
        </div>
      </footer>
    );
}