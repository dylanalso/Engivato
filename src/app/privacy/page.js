import { getLegalPages } from '../../lib/settings';
import PageUnavailable from '../../components/PageUnavailable';

export async function generateMetadata() {
  const { privacy } = await getLegalPages();
  return {
    title: privacy?.metaTitle || 'Privacy Policy | Engivato PLLC',
    description: privacy?.metaDescription || 'Our privacy policy.',
    alternates: {
      canonical: '/privacy',
    },
    ...(privacy?.enabled === false ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function Privacy() {
  const { privacy } = await getLegalPages();

  if (privacy?.enabled === false) {
    return <PageUnavailable pageName="Privacy Policy" />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-corporate-blue selection:text-white flex flex-col">
      <main className="flex-grow pt-32 pb-24 px-4">
        <section id="privacy" className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
          <div className="mb-10 border-b border-slate-100 pb-8 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              {privacy?.heading || 'Privacy Policy'}
            </h1>
          </div>

          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            {(privacy?.paragraphs || []).map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
