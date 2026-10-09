import Hero from '../components/hero.js';
import Services from '../components/services.js';

{/* meta */}
export const metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-corporate-blue selection:text-white">

    <Hero />
    <Services />

    </div>
  );
}
