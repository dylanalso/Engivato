import Hero from '../components/hero.js';
import Services from '../components/services.js';
import { getPageSections } from '../lib/settings.js';

export const metadata = {
  title: 'Engivato | Top-Tier Engineering & Innovation Solutions',
  description: 'Engivato delivers cutting-edge engineering, automation, and tech solutions tailored for modern businesses. We transform challenges into scalable success.',
  keywords: ['engineering consulting', 'tech innovation', 'automation', 'technical solutions', 'system design', 'Engivato PLLC'],
  openGraph: {
    title: 'Engivato | Top-Tier Engineering & Innovation Solutions',
    description: 'Engivato delivers cutting-edge engineering, automation, and tech solutions tailored for modern businesses.',
    url: 'https://dylanalso.github.io/Engivato',
    siteName: 'Engivato PLLC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engivato | Engineering & Innovation',
    description: 'Cutting-edge engineering and technical solutions.',
  },
  alternates: {
    canonical: '/',
  },
};

export default async function Home() {
  const { home: sections } = await getPageSections();
  
  // JSON-LD data for SEO results
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EngineeringBusiness',
    name: 'Engivato PLLC',
    description: 'Engivato delivers cutting-edge engineering, automation, and tech solutions tailored for modern businesses.',
    url: 'https://dylanalso.github.io/Engivato',
    // logo: 'https://dylanalso.github.io/Engivato/logoIdea2.svg', // Uncomment once logo URL is live
    sameAs: [
      // add social links here when available
      'https://www.linkedin.com/company/engivato' 
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {sections.showHero && <Hero />}

      {/* company overview section */}
      {sections.showOverview && (
        <section className="bg-white py-24 font-sans selection:bg-corporate-blue selection:text-white" aria-labelledby="overview-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 id="overview-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-corporate-blue mb-6">
                  Driving Innovation Through Intelligent Engineering
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel egestas sapien, 
                  eu tristique risus. Pellentesque habitant morbi tristique senectus et netus et malesuada 
                  fames ac turpis egestas. Donec euismod nisi nec purus aliquam.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Nullam tristique sem in odio euismod, nec laoreet urna fermentum. Vestibulum id est ac velit 
                  pharetra posuere. Aenean sollicitudin, magna eget convallis aliquet, magna lectus sodales.
                </p>
              </div>
              <div className="md:w-1/2 w-full h-80 bg-slate-200 rounded-2xl flex items-center justify-center border border-slate-300">
                 <span className="text-slate-500">[Company Overview Image]</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {sections.showServices && <Services />}

      {/* our process section */}
      {sections.showProcess && (
        <section className="py-24 bg-white text-slate-900 font-sans border-t border-slate-100" aria-labelledby="process-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center md:text-left max-w-3xl">
              <h2 id="process-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-corporate-blue">
                How We Work
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate, sem sed rhoncus vehicula, est leo eleifend justo.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                { title: '1. Discovery & Analysis', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                { title: '2. Design & Strategy', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
                { title: '3. Execution & Delivery', desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' }
              ].map((step, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* why choose us section */}
      {sections.showWhyUs && (
        <section className="py-24 bg-corporate-blue text-white font-sans" aria-labelledby="why-us-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 id="why-us-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Why Partner With Engivato?
                </h2>
                <p className="text-lg text-slate-200 leading-relaxed mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Praesent 
                  bibendum, justo quis rhoncus cursus, enim urna volutpat purus, eget tempus sem erat 
                  vel odio. Suspendisse potenti, aenean imperdiet ex in tellus.
                </p>
                <ul className="space-y-4">
                  {[
                    'Industry-Leading Expertise',
                    'Custom-Tailored Solutions',
                    'Uncompromising Commitment to Quality',
                    'Scalable and Future-Proof Systems'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-slate-100">
                      <svg className="w-6 h-6 text-orange mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-96 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center overflow-hidden shadow-xl">
                  <span className="text-slate-400 font-medium">[Engineering Visualization Graphic]</span>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* testimonials section */}
      {sections.showTestimonials && (
        <section className="py-24 bg-slate-50 font-sans border-b border-slate-200" aria-labelledby="testimonials-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="testimonials-heading" className="text-3xl font-bold text-slate-900 mb-12">
              Trusted by Industry Leaders
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Logos placeholders */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                   <span className="text-slate-400 font-bold text-xl">Client {i}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </>
  );
}
