import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
    title: 'Portfolio | Engivato PLLC',
    description: 'View our portfolio of mechanical, electrical, and plumbing engineering projects.',
    alternates: {
        canonical: '/portfolio',
    },
};

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-corporate-blue selection:text-white">
            <Navbar />
            <main>
                <section id="portfolio">
                    <div className="max-w-6xl mx-auto py-24 px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">Portfolio</h2>
                            <p className="text-slate-600 max-w-xl mx-auto">Here are some examples of our work.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}