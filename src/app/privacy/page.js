import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
    title: 'Privacy Policy | Engivato PLLC',
    description: 'Our privacy policy.',
    alternates: {
        canonical: '/privacy',
    },
};

export default function Privacy() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-corporate-blue selection:text-white flex flex-col">
            <Navbar />
            
            <main className="flex-grow pt-32 pb-24 px-4">
                <section id="privacy" className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
                    <div className="mb-10 border-b border-slate-100 pb-8 text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Privacy Policy</h1>
                    </div>
                    
                    <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                        <p>
                        At Engivato, we are committed to protecting your privacy and handling your data responsibly. This Privacy Policy describes how we collect, use, disclose, and protect your personal information when you visit our website, engivato.com. 
                        </p>
                        
                        <p>
                        By using our website, you agree to the terms of this Privacy Policy. We may update this policy from time to time, and we will notify you of any changes by posting the new policy on this page with an updated effective date. 
                        </p>
                        
                        <p>
                        For the purposes of this policy, “personal information” means any information that identifies you, directly or indirectly, as an individual.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}