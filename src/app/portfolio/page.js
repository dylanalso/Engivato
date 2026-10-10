export const metadata = {
    title: 'Portfolio | Engivato PLLC',
    description: 'View our portfolio of mechanical, electrical, and plumbing engineering projects.',
    alternates: {
        canonical: '/portfolio',
    },
};

import { reader } from "../../lib/keystatic";

export default async function Portfolio() {
    const portfolioData = await reader.collections.portfolio.all();
    const projects = portfolioData.map(p => p.entry);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-corporate-blue selection:text-white">
            <main>
                <section id="portfolio">
                    <div className="max-w-6xl mx-auto py-24 px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">Portfolio</h2>
                            <p className="text-slate-600 max-w-xl mx-auto">Here are some examples of our work.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.length > 0 ? projects.map((project, index) => (
                                <div key={index} className="group p-8 bg-white rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    <h3 className="text-xl font-bold mb-3 text-corporate-blue">{project.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{project.desc}</p>
                                </div>
                            )) : (
                                <div className="col-span-full text-center text-slate-500 py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                                    No projects to display yet. Add some in Keystatic!
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}