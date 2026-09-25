import Link from 'next/link';

export default function Footer() {
    return (
      <footer className="bg-blue-900 py-12 px-4 border-t border-corporate-blue">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-200 text-sm gap-6 md:gap-4">
          <p>© {new Date().getFullYear()} Engivato PLLC. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="hover:text-orange transition-colors">Privacy Policy</a>
              <a href="/terms_of_service" className="hover:text-orange transition-colors">Terms of Service</a>
              <a href="/accessibility" className="hover:text-orange transition-colors">Accessibility</a>
            </div>
            {/* CTA */}
            <button className="bg-orange/20 text-orange border border-orange px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange hover:text-white transition-all duration-300">
              <Link href="/contact">Contact Us</Link>
            </button>
          </div>
        </div>
      </footer>
    );
}