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
    <div className="min-h-screen bg-navy text-slate-100 font-sans selection:bg-orange selection:text-white">
    <Navbar />
    <Hero />
    <Services />
    <Footer />
    </div>
  );
}
