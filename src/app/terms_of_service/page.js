import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Terms() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-corporate-blue selection:text-white flex flex-col">
            <Navbar />
            
            <main className="flex-grow pt-32 pb-24 px-4">
                <section id="terms" className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
                    <div className="mb-10 border-b border-slate-100 pb-8 text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Terms of Service</h1>
                    </div>
                    
                    <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                        <p>
                        Welcome to Engivato PLLC. These Terms of Service govern your use of our website, engivato.com. By accessing or using our website, you agree to be bound by these terms. 
                        </p>
                        
                        <p>
                        For the purposes of these terms, “we,” “us,” and “our” refer to Engivato PLLC, and “you” refers to the user or visitor of our website. 
                        </p>
                        
                        <p>
                        Please read these terms carefully before using our website. 
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}