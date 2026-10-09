import Link from 'next/link';

export default function Footer() {
    return (
      <footer className="bg-corporate-blue/100 py-12 px-4 border-t border-corporate-blue">
        
        <div className="max-w-6xl mx-auto flex md:flex-row md:items-end justify-end text-slate-200 text-sm gap-6 md:gap-4">
    
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">

            {/* request for action */}
            <div className="text-2xl font-bold tracking-tighter text-white">
                <Link href="/contact">
                    <span className="hover:text-orange transition-colors">Ready to start your project?</span>
                </Link>
            </div>

            {/* CTA */}
            <button className="bg-orange/20 text-orange border border-orange px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange hover:text-white transition-all duration-300">
              <Link href="/contact">Contact Us</Link>
            </button>
                  
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-orange transition-colors">Privacy Policy</Link>
              <Link href="/terms_of_service" className="hover:text-orange transition-colors">Terms of Service</Link>
              <Link href="/accessibility" className="hover:text-orange transition-colors">Accessibility</Link>
            </div>
          
          </div>
          <p>© {new Date().getFullYear()} Engivato PLLC. All rights reserved.</p>
        
        </div>
      </footer>
    );
}