import Link from 'next/link';
import { reader } from '../../lib/keystatic';
import ProjectShowcase from '../../components/projectShowcase';
import { getPageSections } from '../../lib/settings';

export const metadata = {
  title: 'Featured Projects & Case Studies | MEP Engineering | Engivato PLLC',
  description: 'Explore Engivato PLLC’s portfolio of mechanical, electrical, and plumbing engineering projects across Dallas-Fort Worth and North Texas, including commercial retail, restaurants, industrial warehouses, and healthcare facilities.',
  keywords: [
    'MEP engineering projects',
    'DFW commercial engineering portfolio',
    'Dallas restaurant MEP design',
    'Fort Worth industrial warehouse engineering',
    'tenant improvement case studies',
    'HVAC design projects',
    'electrical distribution case studies',
    'Engivato PLLC projects'
  ],
  openGraph: {
    title: 'Featured Projects & Case Studies | MEP Engineering | Engivato PLLC',
    description: 'Explore our portfolio of completed and active mechanical, electrical, and plumbing engineering projects across North Texas.',
    url: 'https://dylanalso.github.io/Engivato/projects',
    siteName: 'Engivato PLLC',
    type: 'website',
  },
  alternates: {
    canonical: '/projects',
  },
};

export default async function Projects() {
  const { projects: sections } = await getPageSections();

  // fetch projects from keystatic collection
  let projectsData = [];
  try {
    projectsData = await reader.collections.projects.all();
  } catch {
    projectsData = [];
  }

  // fallback if no projects exist in the collection yet
  let projects = projectsData.map((p) => p.entry);

  // fallback demo projects with lorem ipsum if directory is empty
  if (projects.length === 0) {
    projects = [
      {
        title: "Arby's to Wendy's Commercial Adaptive Reuse",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Complete commercial MEP engineering overhaul converting a legacy fast-food restaurant building to meet updated franchise specifications. Design included high-efficiency packaged RTU replacements, commercial kitchen hood exhaust and make-up air balancing, updated grease interceptor plumbing, and comprehensive electrical service panel upgrades.",
        category: 'Restaurant & Hospitality',
        location: 'Dallas-Fort Worth, TX',
        scope: 'Full MEP Design & Kitchen Ventilation',
        year: '2025',
      },
      {
        title: 'North Texas Logistics & Distribution Center',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phased electrical and mechanical systems design for a 125,000 sq. ft. modern high-cube distribution center. Deliverables encompassed high-bay LED photometric studies with multi-zone daylight harvesting, heavy-duty 480V/277V 3-phase power distribution, and ventilation destratification systems.',
        category: 'Industrial & Warehouse',
        location: 'Fort Worth, TX',
        scope: 'Electrical Power Distribution & High-Bay Ventilation',
        year: '2024',
      },
      {
        title: 'Summit Medical Pavilion Outpatient Clinic',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Comprehensive tenant improvement engineering for a multidisciplinary surgical and clinical healthcare suite. Designed dedicated medical gas piping runs, HEPA-filtered clean air distribution zones meeting ASHRAE 170 compliance, and emergency generator critical power circuits.',
        category: 'Healthcare & Medical',
        location: 'Plano, TX',
        scope: 'Mechanical IAQ, Medical Plumbing & Emergency Power',
        year: '2024',
      },
      {
        title: 'Uptown Plaza Retail & Dining Suites',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Architectural engineering coordination for ground-floor retail and restaurant shell spaces. Scope included dual commercial grease waste routing, natural gas demand sizing, submetering coordination, and Title 24/IECC code-compliant automated lighting controls.',
        category: 'Commercial & Retail',
        location: 'Dallas, TX',
        scope: 'Sanitary Plumbing, Gas Piping & Lighting Controls',
        year: '2025',
      },
      {
        title: 'Legacy Business Park Central Plant Modernization',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mechanical retrofit and central utility plant upgrade for a multi-story corporate headquarters campus. Replaced legacy chillers with high-efficiency variable-speed units and integrated open-protocol Building Automation Systems (BAS), delivering a 28% reduction in annual utility expenditure.',
        category: 'Corporate Office',
        location: 'Frisco, TX',
        scope: 'Central Chilled Water Plant & BAS Modernization',
        year: '2025',
      },
      {
        title: 'Trinity Heights Mixed-Use Development',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Full-scope mechanical, electrical, and plumbing engineering for a 4-story podium structure featuring ground-level boutique commercial spaces and upper-floor residential units. Designed centralized domestic hot water loops, individual tenant electrical metering, and dry-pipe garage fire suppression.',
        category: 'Multi-Family Residential',
        location: 'Arlington, TX',
        scope: 'Podium MEP Design & Fire Protection Coordination',
        year: '2025',
      },
    ];
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Featured Projects | Engivato PLLC',
    description: 'Portfolio of mechanical, electrical, and plumbing engineering projects by Engivato PLLC.',
    url: 'https://dylanalso.github.io/Engivato/projects',
    publisher: {
      '@type': 'EngineeringBusiness',
      name: 'Engivato PLLC',
      url: 'https://dylanalso.github.io/Engivato',
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projects.map((p, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        item: {
          '@type': 'CreativeWork',
          name: p.title,
          description: p.desc,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-corporate-blue selection:text-white">
        
        {/* hero section */}
        {sections.showHero && (
          <header className="pt-36 pb-20 bg-corporate-blue text-white px-4 relative overflow-hidden" aria-labelledby="projects-hero-title">
            <div className="max-w-6xl mx-auto text-center relative z-10">
              <span className="text-orange font-semibold tracking-wider uppercase text-sm mb-3 inline-block">
                Featured Projects &amp; Case Studies
              </span>
              <h1 id="projects-hero-title" className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                Engineered for Real-World Performance
              </h1>
              <p className="text-slate-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8">
                Explore our track record of constructible, clash-free mechanical, electrical, and plumbing designs across commercial, industrial, healthcare, and hospitality built environments.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-orange hover:bg-orange-dark text-white px-8 py-3.5 rounded-full font-semibold text-base shadow-lg hover:shadow-orange/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Discuss Your Project
                </Link>
                <Link
                  href="/services"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 backdrop-blur-sm"
                >
                  View Our Services
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none" />
          </header>
        )}

        {/* quick highlights strip */}
        {sections.showHighlights && (
          <section className="bg-white border-b border-slate-200 py-10 px-4" aria-label="Project Highlights">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-3">
                <div className="text-3xl font-extrabold text-corporate-blue mb-1">100%</div>
                <div className="text-xs font-medium text-slate-600 uppercase tracking-wide">Permit Approval Success</div>
              </div>
              <div className="p-3">
                <div className="text-3xl font-extrabold text-corporate-blue mb-1">North Texas</div>
                <div className="text-xs font-medium text-slate-600 uppercase tracking-wide">DFW Municipal Mastery</div>
              </div>
              <div className="p-3">
                <div className="text-3xl font-extrabold text-corporate-blue mb-1">3D BIM</div>
                <div className="text-xs font-medium text-slate-600 uppercase tracking-wide">Revit Clash Prevention</div>
              </div>
              <div className="p-3">
                <div className="text-3xl font-extrabold text-corporate-blue mb-1">Responsive</div>
                <div className="text-xs font-medium text-slate-600 uppercase tracking-wide">Fast RFI Turnaround</div>
              </div>
            </div>
          </section>
        )}

        {/* interactive projects showcase */}
        {sections.showShowcase && (
          <main className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-orange font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Filter by Industry Sector
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Selected Works &amp; Case Studies
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
                  Browse our projects across major commercial sectors. Each design reflects our commitment to code compliance, constructability, and energy efficiency.
                </p>
              </div>

              <ProjectShowcase initialProjects={projects} />
            </div>
          </main>
        )}

        {/* sectors served overview */}
        {sections.showSectors && (
          <section className="py-20 px-4 bg-white border-t border-slate-200" aria-labelledby="sectors-title">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-orange font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Broad Sector Expertise
                </span>
                <h2 id="sectors-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Engineering Across Diverse Building Types
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-base">
                  Each building typology presents distinct code requirements and spatial hurdles. We tailor our engineering strategies to match each asset type.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Restaurants & Commercial Kitchens',
                    desc: 'Specialized grease trap routing, hood exhaust airflow balance, high-demand gas distribution, and energy code compliance under rigorous continuous-operation schedules.',
                    icon: (
                      <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    ),
                  },
                  {
                    title: 'Industrial Warehouses & Distribution',
                    desc: 'High-bay photometric lighting designs, heavy 480V 3-phase machinery hookups, destratification ventilation systems, and early-suppression fast-response fire protection coordination.',
                    icon: (
                      <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    ),
                  },
                  {
                    title: 'Healthcare Clinics & Medical Suites',
                    desc: 'ASHRAE 170 infection control ventilation, positive/negative pressure isolation spaces, certified medical gas systems, and automatic transfer switch emergency backup generators.',
                    icon: (
                      <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    ),
                  },
                ].map((sector, sIdx) => (
                  <div key={sIdx} className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-corporate-blue/40 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                      {sector.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{sector.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{sector.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </div>
    </>
  );
}
