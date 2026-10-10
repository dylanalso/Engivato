export const metadata = {
    title: 'Who We Serve | Engivato PLLC',
    description: 'Who we serve.',
    alternates: {
        canonical: '/whoWeServe',
    },
};

export default function WhoWeServe() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-corporate-blue selection:text-white">
            <main>
                <section id="whoWeServe">
                    <div className="max-w-6xl mx-auto py-24 px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">Who We Serve</h2>
                            <p className="text-slate-600 max-w-xl mx-auto">Learn more about who we serve.</p>
                    </div>
                </div>
            </section>
        </main>

      </div>
    );
}
