import { getPageSections } from '../../lib/settings';

export const metadata = {
  title: 'About Us | Engivato PLLC - Texas MEP Engineering',
  description: 'Learn about Engivato PLLC, a Texas-based engineering firm providing innovative, practical, and reliable Mechanical, Electrical, and Plumbing (MEP) solutions.',
  keywords: [
    'MEP engineering firm Texas',
    'MEP engineering services Dallas-Fort Worth',
    'Mechanical engineering consulting',
    'HVAC design engineering',
    'Electrical engineering services',
    'Plumbing engineering design',
    'Building systems engineering',
    'MEP design and coordination',
    'Engivato PLLC'
  ],
  openGraph: {
    title: 'About Us | Engivato PLLC - Texas MEP Engineering',
    description: 'Learn about Engivato PLLC, a Texas-based engineering firm providing innovative, practical, and reliable Mechanical, Electrical, and Plumbing (MEP) solutions.',
    url: 'https://dylanalso.github.io/Engivato/about',
    siteName: 'Engivato PLLC',
    type: 'website',
  },
  alternates: {
    canonical: '/about',
  },
};

export default async function About() {
  const { about: sections } = await getPageSections();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Engivato PLLC',
    description: 'Learn about Engivato PLLC, our principal-led practice, core values, and MEP engineering capabilities.',
    publisher: {
      '@type': 'EngineeringBusiness',
      name: 'Engivato PLLC',
      url: 'https://dylanalso.github.io/Engivato',
    },
  };

  const disciplines = [
    {
      title: 'Mechanical Engineering (HVAC)',
      desc: 'HVAC system design, heating and cooling load calculations, equipment selection and sizing, ductwork and piping design, energy efficiency, and coordinated mechanical construction documents.',
      icon: (
        <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Electrical Engineering',
      desc: 'Electrical power distribution design, lighting and lighting controls, load calculations, equipment coordination, and cross-discipline integration with architectural and structural systems.',
      icon: (
        <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Plumbing Engineering',
      desc: 'Domestic water distribution, sanitary waste and vent systems, fixture and equipment selection, plumbing calculations, layouts, and construction documents.',
      icon: (
        <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: 'Consulting & Project Support',
      desc: 'Engineering design review, MEP coordination and clash-resolution support, construction document QA, design optimization, and value engineering.',
      icon: (
        <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const values = [
    {
      title: 'Engineering-Led Solutions',
      desc: 'We look beyond individual systems to understand how engineering decisions affect the overall project performance, constructability, and longevity.',
    },
    {
      title: 'Practical & Constructible Design',
      desc: 'We emphasize solutions that are technically sound, well-coordinated, and realistic to implement in the field.',
    },
    {
      title: 'Technology & Innovation',
      desc: 'We leverage modern engineering tools, digital workflows, and data-driven methods to enhance project quality and efficiency.',
    },
    {
      title: 'Responsive Relationships',
      desc: 'We value clear communication, accountability, collaboration, and an understanding of each client’s specific schedule and operational needs.',
    },
  ];


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-corporate-blue selection:text-white">
        
        {/* header */}
        {sections.showHero && (
          <section className="pt-36 pb-20 bg-corporate-blue text-white px-4 relative overflow-hidden" aria-labelledby="about-hero-title">
            <div className="max-w-6xl mx-auto text-center relative z-10">
              <span className="text-orange font-semibold tracking-wider uppercase text-sm mb-3 inline-block">
                About Engivato PLLC
              </span>
              <h1 id="about-hero-title" className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                Engineering Innovation for Built Environments
              </h1>
              <p className="text-slate-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                We provide cutting-edge Mechanical, Electrical, and Plumbing (MEP) engineering solutions that balance functionality, efficiency, and architectural vision.
              </p>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none" />
          </section>
        )}

        {/* practice highlights trust bar */}
        <section className="bg-white border-b border-slate-200 py-8 px-4" aria-label="Practice Highlights">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0 text-orange">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">1-on-1 Principal Access</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Collaborate directly with the founder on every design phase without junior handoffs.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0 text-orange">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">Integrated M • E • P</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Mechanical, electrical, and plumbing engineered cohesively under single accountability.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0 text-orange">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">100% Code &amp; Permit Focus</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Rigorous adherence to Texas and DFW municipal codes to minimize plan-check redlines.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0 text-orange">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">Agile &amp; Responsive</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Direct communication and rapid turnaround on contractor RFIs and design adjustments.</p>
              </div>
            </div>
          </div>
        </section>

        {/* company narrative */}
        {sections.showStory && (
          <section className="py-24 px-4 bg-white border-b border-slate-200" aria-labelledby="story-title">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 id="story-title" className="text-3xl md:text-4xl font-bold text-corporate-blue mb-6">
                  Our Story &amp; Commitment
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                  Engivato PLLC is a Texas-based engineering firm focused on providing innovative, practical, and reliable Mechanical, Electrical, and Plumbing (MEP) engineering solutions. Our goal is to help clients develop high-performing, efficient, and sustainable building systems through technical expertise, thoughtful design, and effective project coordination.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Our company name reflects our commitment to combining engineering expertise with innovation and modern technology. We partner with general contractors, commercial developers, architects, and property managers to deliver forward-thinking engineering that solves real-world operational and construction challenges.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-orange text-slate-700 italic">
                  &ldquo;Engineering is not just about meeting code—it is about designing systems that elevate building longevity and human comfort.&rdquo;
                </div>
              </div>

              {/* practice manifesto card */}
              <div className="relative rounded-3xl bg-gradient-to-br from-corporate-blue to-blue-950 text-white p-8 md:p-10 shadow-lg border border-blue-900/40 overflow-hidden">
                <div className="relative z-10">
                  <span className="text-orange font-semibold tracking-wider uppercase text-xs mb-3 inline-block">
                    The Engivato Standard
                  </span>
                  <h3 className="text-2xl font-bold mb-4">
                    Practical Engineering Driven by Modern Delivery
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                    We believe engineering consulting should be direct, transparent, and aligned with constructibility. Every calculation and layout is designed to help contractors build efficiently and owners maximize operational value.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-white/10 text-xs md:text-sm text-slate-200">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-orange flex-shrink-0" />
                      <span>Coordinated 3-in-1 MEP design under single accountability</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-orange flex-shrink-0" />
                      <span>Hands-on Texas municipal permit reviews &amp; RFI support</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-orange flex-shrink-0" />
                      <span>Commercial restaurants, office finish-outs &amp; multifamily focus</span>
                    </div>
                  </div>
                </div>

                {/* subtle architectural schematic grid watermark */}
                <div className="absolute -right-8 -bottom-8 w-48 h-48 opacity-10 pointer-events-none">
                  <svg className="w-full h-full text-white" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M0 0h20v20H0zm40 0h20v20H40zm40 0h20v20H80zM20 20h20v20H20zm40 0h20v20H60zm-60 20h20v20H0zm40 0h20v20H40zm40 0h20v20H80z" />
                  </svg>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* core disciplines (MEP focus) */}
        {sections.showDisciplines && (
          <section className="py-24 px-4 bg-slate-50 border-b border-slate-200" aria-labelledby="disciplines-title">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 id="disciplines-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Core Engineering Disciplines
                </h2>
                <p className="text-slate-600 max-w-xl mx-auto">
                  Comprehensive, cross-disciplinary design designed to integrate seamlessly into modern construction.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {disciplines.map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-corporate-blue mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* core values */}
        {sections.showValues && (
          <section className="py-24 px-4 bg-white border-b border-slate-200" aria-labelledby="values-title">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 id="values-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Our Guiding Principles
                </h2>
                <p className="text-slate-600 max-w-xl mx-auto">
                  The standards and values that inform every drawing, calculation, and site inspection we perform.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((val, idx) => (
                  <div key={idx} className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-orange font-mono text-sm font-bold block mb-2">0{idx + 1}</span>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{val.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* leadership / principal spotlight */}
        {sections.showTeam && (
          <section className="py-24 px-4 bg-slate-50 border-b border-slate-200" aria-labelledby="team-title">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-orange font-semibold tracking-wider uppercase text-sm mb-3 inline-block">
                  Principal Leadership
                </span>
                <h2 id="team-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Direct Principal Engagement
                </h2>
                <p className="text-slate-600 max-w-xl mx-auto">
                  Work directly with the founding engineer on every phase of your project, from preliminary design to final permit approval.
                </p>
              </div>

              <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-slate-100 border-2 border-corporate-blue/20 flex flex-col items-center justify-center flex-shrink-0 text-center p-4">
                    <div className="w-14 h-14 rounded-full bg-corporate-blue text-white flex items-center justify-center font-bold text-xl mb-2 shadow-inner">
                      HL
                    </div>
                    <span className="text-xs font-bold text-corporate-blue">Hameed Lamy</span>
                    <span className="text-[11px] text-slate-500 font-medium">Founder &amp; Principal</span>
                  </div>

                  <div className="flex-grow text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">Hameed Lamy</h3>
                        <p className="text-orange font-semibold text-sm">Founder &amp; Principal Engineer</p>
                      </div>
                      <span className="inline-flex items-center self-center md:self-auto px-3.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Principal-Led Practice
                      </span>
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-4 text-sm md:text-base">
                      Hameed founded Engivato PLLC with a clear commitment: delivering practical, constructible, and technically rigorous Mechanical, Electrical, and Plumbing (MEP) engineering solutions with direct principal accountability.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">
                      Rather than passing drawings through junior staff or corporate bureaucracy, clients work directly with Hameed from project kickoff through permit submittal and construction administration.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100 text-sm text-slate-700">
                      <div className="flex items-center gap-2.5">
                        <svg className="w-5 h-5 text-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Direct 1-on-1 principal collaboration</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <svg className="w-5 h-5 text-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Coordinated Mechanical, Electrical &amp; Plumbing</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <svg className="w-5 h-5 text-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Texas &amp; DFW local code compliance</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <svg className="w-5 h-5 text-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Agile turnaround on RFIs and revisions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

      </div>
    </>
  );
}