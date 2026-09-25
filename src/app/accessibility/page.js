import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Accessibility() {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-corporate-blue selection:text-white flex flex-col">
        <Navbar />

        <main className="flex-grow pt-32 pb-24 px-4">
            <section id="accessibility" className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
                <div className="mb-10 border-b border-slate-100 pb-8 text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Accessibility</h1>
                </div>
                
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                    <p>
                      At Engivato, we are dedicated to ensuring our website is usable by people with different abilities. We are continually evaluating our platform to ensure both our current and future digital content aligns with WCAG AA accessibility standards. To achieve this, our team actively implements readable fonts, sufficient color contrast, alternative text for images, clearly labeled form fields, and keyboard-friendly navigation. 
                    </p>
                    
                    <p>
                      A key part of this accessibility effort is maintaining broad browser compatibility. The engivato.com website is optimized for viewing on:
                    </p>
                    
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 list-none m-0 p-0 text-slate-700 font-medium">
                            <li className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span>Chrome</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span>Edge</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span>Firefox</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span>Safari</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span>Opera</span>
                            </li>
                        </ul>
                    </div>
                    
                    <p>
                      We want to ensure that all visitors have an excellent experience when accessing our website, regardless of their device or any functional limitations. If you experience any difficulties accessing our content or have suggestions for improving our website's accessibility, please reach out and contact us. We appreciate your feedback and are committed to making engivato.com accessible to everyone.
                    </p>
                </div>
            </section>
        </main>
        
        <Footer />
      </div>
    );
}