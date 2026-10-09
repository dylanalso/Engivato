import Navbar from '../../components/navbar.js';
import Footer from '../../components/footer.js';

export const metadata = {
    title: 'About Us | Engivato PLLC',
    description: 'Learn more about our mechanical, electrical, and plumbing engineering solutions.',
    alternates: {
        canonical: '/about',
    },
};

export default function About() {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-corporate-blue selection:text-white">


        <main>
            <section id="about">
                <div className="max-w-6xl mx-auto py-24 px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">About Us</h2>
                        <p className="text-slate-600 max-w-xl mx-auto">Learn more about our mechanical, electrical, and plumbing engineering solutions.</p>
                    </div>
                </div>
            </section>
        </main>

      </div>
    );
}