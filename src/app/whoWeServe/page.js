import Link from 'next/link';

export const metadata = {
  title: 'Who We Serve | Dallas-Fort Worth (DFW) MEP Engineering | Engivato PLLC',
  description: 'Engivato PLLC provides high-performance Mechanical, Electrical, and Plumbing (MEP) engineering solutions across the Dallas-Fort Worth (DFW) metroplex and North Texas.',
  keywords: [
    'DFW MEP engineering',
    'Dallas engineering firm',
    'Fort Worth mechanical electrical plumbing',
    'North Texas engineering consultants',
    'Collin County commercial MEP',
    'tenant improvement engineering Dallas',
    'commercial building MEP DFW',
    'Engivato PLLC'
  ],
  openGraph: {
    title: 'Who We Serve | Dallas-Fort Worth (DFW) MEP Engineering | Engivato PLLC',
    description: 'Engivato PLLC delivers innovative MEP engineering solutions tailored for commercial, industrial, and institutional projects throughout Dallas–Fort Worth.',
    url: 'https://dylanalso.github.io/Engivato/whoWeServe',
    siteName: 'Engivato PLLC',
    type: 'website',
  },
  alternates: {
    canonical: '/whoWeServe',
  },
};

export default function WhoWeServe() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Engivato PLLC - Dallas-Fort Worth MEP Engineering',
    description: 'Mechanical, Electrical, and Plumbing engineering services across Dallas, Fort Worth, Arlington, Plano, Frisco, and the North Texas region.',
    url: 'https://dylanalso.github.io/Engivato/whoWeServe',
    areaServed: [
      { '@type': 'City', name: 'Dallas' },
      { '@type': 'City', name: 'Fort Worth' },
      { '@type': 'City', name: 'Arlington' },
      { '@type': 'City', name: 'Plano' },
      { '@type': 'City', name: 'Frisco' },
      { '@type': 'City', name: 'Irving' },
      { '@type': 'AdministrativeArea', name: 'Dallas-Fort Worth Metroplex' },
      { '@type': 'State', name: 'Texas' }
    ]
  };

  const clientTypes = [
    {
      title: 'Architects & Design Studios',
      desc: 'Seamless MEP integration that respects architectural intent while guaranteeing code adherence, energy efficiency, and functional elegance.',
      icon: (
        <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      title: 'General Contractors & Builders',
      desc: 'Constructible, highly detailed design packages that reduce RFIs, eliminate field clashes, and keep construction schedules moving rapidly.',
      icon: (
        <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Commercial Developers & Owners',
      desc: 'Long-term value engineering, lifecycle optimization, and future-proof building systems that protect asset value and minimize operating costs.',
      icon: (
        <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Retail, Restaurants & Hospitality',
      desc: 'Specialized ventilation, kitchen grease duct systems, electrical load management, and guest comfort systems tailored for high-demand environments.',
      icon: (
        <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Industrial & Warehousing',
      desc: 'Heavy power distribution, high-bay lighting, specialized ventilation, and resilient plumbing systems engineered for high-throughput logistics hubs.',
      icon: (
        <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: 'Tenant Improvement (TI) & Retrofits',
      desc: 'Fast-track engineering design for office build-outs, space reconfigurations, and aging MEP infrastructure overhauls.',
      icon: (
        <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
    },
  ];

  const regions = [
    {
      county: 'Dallas County',
      cities: ['Dallas', 'Irving', 'Richardson', 'Garland', 'Grand Prairie'],
      desc: 'Comprehensive engineering for urban redevelopments, commercial towers, healthcare clinics, and dynamic tenant spaces across Dallas.',
    },
    {
      county: 'Tarrant County',
      cities: ['Fort Worth', 'Arlington', 'Grapevine', 'Southlake', 'Keller'],
      desc: 'Tailored MEP solutions supporting the rapid industrial, cultural, and commercial development throughout Fort Worth and the mid-cities.',
    },
    {
      county: 'Collin County',
      cities: ['Plano', 'Frisco', 'McKinney', 'Allen', 'Prosper'],
      desc: 'High-performance building systems for corporate headquarters, cutting-edge retail centers, and modern educational and mixed-use campuses.',
    },
    {
      county: 'Denton County',
      cities: ['Denton', 'Lewisville', 'Carrollton', 'Flower Mound', 'Little Elm'],
      desc: 'Scalable infrastructure consulting for booming residential corridors, distribution centers, and commercial business parks.',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-corporate-blue selection:text-white">
        
        {/* hero */}
        <section className="pt-36 pb-20 bg-white border-b border-slate-200 px-4 relative overflow-hidden" aria-labelledby="whoweserve-hero-title">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <span className="text-orange font-semibold tracking-wider uppercase text-sm mb-3 inline-block">
              Regional Engineering Leadership
            </span>
            <h1 id="whoweserve-hero-title" className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
              Serving the <span className="text-corporate-blue">Dallas–Fort Worth</span> Metroplex & Beyond
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Engivato PLLC provides specialized Mechanical, Electrical, and Plumbing (MEP) engineering solutions for architects, contractors, and owners navigating North Texas&apos;s dynamic building landscape.
            </p>
          </div>
        </section>

        {/* geographic coverage */}
        <section className="py-24 px-4 bg-slate-50 border-b border-slate-200" aria-labelledby="territory-title">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-orange font-semibold tracking-wider uppercase text-sm mb-2 block">
                Local Presence, Proven Expertise
              </span>
              <h2 id="territory-title" className="text-3xl md:text-4xl font-bold text-corporate-blue mb-4">
                Our DFW Service Coverage
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
                North Texas municipalities each maintain unique permitting processes, local amendments, and energy standards. We ensure your plans pass reviews swiftly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regions.map((region, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-4">
                    <h3 className="text-2xl font-bold text-corporate-blue">{region.county}</h3>
                    <span className="text-xs font-semibold px-3 py-1 bg-orange/10 text-orange rounded-full">
                      Active Coverage
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{region.desc}</p>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Key Municipalities</h4>
                    <div className="flex flex-wrap gap-2">
                      {region.cities.map((city, cIdx) => (
                        <span key={cIdx} className="text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-md">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* local compliance callout */}
            <div className="mt-12 bg-corporate-blue text-white rounded-2xl p-8 md:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold mb-3">Mastery of North Texas Building Codes</h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  From Dallas Energy Code amendments and IECC standards to City of Fort Worth development guidelines, our team ensures complete plan compliance to expedite plan checks and avoid costly redlines.
                </p>
              </div>
              <Link
                href="/contact"
                className="whitespace-nowrap bg-orange text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-orange/90 transition-all duration-300 shadow-md"
              >
                Inquire for Your City
              </Link>
            </div>
          </div>
        </section>

        {/* partners/clients */}
        <section className="py-24 px-4 bg-white border-b border-slate-200" aria-labelledby="clients-title">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-orange font-semibold tracking-wider uppercase text-sm mb-2 block">
                Target Industries & Partners
              </span>
              <h2 id="clients-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Tailored Solutions for Every Stakeholder
              </h2>
              <p className="text-slate-600 max-w-xl mx-auto text-base">
                We engineer customized systems matching the exact constraints and goals of your project team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clientTypes.map((client, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-corporate-blue/30 hover:bg-white transition-all duration-300 shadow-sm flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-6 flex-shrink-0">
                    {client.icon}
                  </div>
                  <h3 className="text-xl font-bold text-corporate-blue mb-3">{client.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">{client.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* why choose engivato */}
        <section className="py-24 px-4 bg-slate-50" aria-labelledby="why-dfw-title">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="why-dfw-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                The Engivato DFW Advantage
              </h2>
              <p className="text-slate-600 max-w-xl mx-auto">
                What sets our North Texas engineering practice apart from traditional consulting firms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Rapid Plan Permitting',
                  desc: 'We know local DFW plan review standards inside out, helping you secure building permits without bureaucratic delays.',
                },
                {
                  title: 'Direct Access to Principals',
                  desc: 'Work directly with experienced engineers on every project phase, from preliminary load calculations to final punch walks.',
                },
                {
                  title: 'Cost-Effective Constructibility',
                  desc: 'We design systems that are practical to install in the field, reducing contractor markups and preventing unexpected change orders.',
                },
              ].map((adv, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="text-orange text-2xl font-extrabold mb-3">0{idx + 1}</div>
                  <h3 className="text-xl font-bold text-corporate-blue mb-2">{adv.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
