import { getLegalPages } from '../../lib/settings';
import PageUnavailable from '../../components/PageUnavailable';

export async function generateMetadata() {
  const { accessibility } = await getLegalPages();
  return {
    title: accessibility?.metaTitle || 'Accessibility Statement | Engivato PLLC',
    description:
      accessibility?.metaDescription ||
      'Engivato PLLC is committed to digital accessibility and WCAG AA standards.',
    alternates: {
      canonical: '/accessibility',
    },
    ...(accessibility?.enabled === false ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function Accessibility() {
  const { accessibility } = await getLegalPages();

  if (accessibility?.enabled === false) {
    return <PageUnavailable pageName="Accessibility Statement" />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-corporate-blue selection:text-white flex flex-col">
      <main className="grow pt-32 pb-24 px-4">
        <section id="accessibility" className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
          <div className="mb-10 border-b border-slate-100 pb-8 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              {accessibility?.heading || 'Accessibility'}
            </h1>
          </div>

          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            {accessibility?.introParagraph1 && <p>{accessibility.introParagraph1}</p>}

            {accessibility?.introParagraph2 && <p>{accessibility.introParagraph2}</p>}

            {(accessibility?.supportedBrowsers || []).length > 0 && (
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 list-none m-0 p-0 text-slate-700 font-medium">
                  {accessibility.supportedBrowsers.map((browser, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{browser}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {accessibility?.closingParagraph && <p>{accessibility.closingParagraph}</p>}
          </div>
        </section>
      </main>
    </div>
  );
}
