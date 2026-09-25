import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Hero from '../components/Hero.js';
import Services from '../components/Services.js';

{/* meta */}
export const metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-corporate-blue selection:text-white">
    <Navbar />
    <Hero />
    <Services />
    <Footer />
    </div>
  );
}
