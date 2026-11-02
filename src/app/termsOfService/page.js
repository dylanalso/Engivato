import { getLegalPages } from '../../lib/settings';
import PageUnavailable from '../../components/PageUnavailable';

export async function generateMetadata() {
  const { termsOfService } = await getLegalPages();
  return {
    title: termsOfService?.metaTitle || 'Terms of Service | Engivato PLLC',
    description: termsOfService?.metaDescription || 'Terms of Service.',
    alternates: {
      canonical: '/termsOfService',
    },
    ...(termsOfService?.enabled === false ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function TermsOfService() {
  const { termsOfService } = await getLegalPages();

  if (termsOfService?.enabled === false) {
    return <PageUnavailable pageName="Terms of Service" />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-corporate-blue selection:text-white">
      <main>
        <section id="termsOfService">
          <div className="max-w-6xl mx-auto py-24 px-4">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {termsOfService?.heading || 'Terms of Service'}
              </h1>
              <div className="space-y-4 max-w-xl mx-auto text-slate-600">
                {(termsOfService?.paragraphs || []).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
