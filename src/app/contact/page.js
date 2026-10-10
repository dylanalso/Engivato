export const metadata = {
    title: 'Contact Us | Engivato PLLC',
    description: 'Contact us today for mechanical, electrical, and plumbing engineering solutions.',
    alternates: {
        canonical: '/contact',
    },
};

export default function Contact() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-corporate-blue selection:text-white">
            <main>
                <section id="contact">
                    <div className="max-w-6xl mx-auto py-24 px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h2>
                            <p className="text-slate-600 max-w-xl mx-auto">Send us a message and we'll get back to you as soon as possible.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

