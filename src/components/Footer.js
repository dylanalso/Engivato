export default function Footer() {
    return (
      <footer className="bg-blue-900 py-12 px-4 border-t border-corporate-blue">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-200 text-sm">
          <p>© {new Date().getFullYear()} Engivato PLLC. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-orange transition-colors">Privacy Policy</a>
            <a href="" className="hover:text-orange transition-colors">Terms of Service</a>
            <a href="/accessibility" className="hover:text-orange transition-colors">Accessibility</a>
          </div>
        </div>
      </footer>      
    );
}