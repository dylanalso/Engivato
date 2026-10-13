export const metadata = {
  title: 'About Us | Engivato PLLC - MEP Engineering Solutions',
  description: 'Learn about Engivato PLLC, a forward-thinking engineering firm providing mechanical, electrical, plumbing, and consulting solutions.',
  keywords: [
    'MEP engineering',
    'mechanical engineering',
    'electrical engineering',
    'plumbing engineering',
    'HVAC design',
    'building systems',
    'engineering consulting',
    'Engivato PLLC'
  ],
  openGraph: {
    title: 'About Us | Engivato PLLC - MEP Engineering Solutions',
    description: 'Learn about Engivato PLLC, a forward-thinking engineering firm providing mechanical, electrical, plumbing, and consulting solutions.',
    url: 'https://dylanalso.github.io/Engivato/about',
    siteName: 'Engivato PLLC',
    type: 'website',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function About() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Engivato PLLC',
    description: 'Learn about Engivato PLLC, our team, core values, and MEP engineering capabilities.',
    publisher: {
      '@type': 'EngineeringBusiness',
      name: 'Engivato PLLC',
      url: 'https://dylanalso.github.io/Engivato',
    },
  };

  const disciplines = [
    {
      title: 'Mechanical Engineering (HVAC)',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. High-efficiency thermal comfort, ventilation, and advanced energy modeling tailored to facility needs.',
      icon: (
        <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Electrical Systems Design',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reliable power distribution, emergency generation, intelligent lighting controls, and code-compliant infrastructure.',
      icon: (
        <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Plumbing & Fire Protection',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Comprehensive domestic water systems, sanitary and stormwater design, and life-safety fire suppression systems.',
      icon: (
        <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
  ];

  const values = [
    {
      title: 'Precision & Accuracy',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rigorous calculation and detail in every specification.',
    },
    {
      title: 'Energy & Sustainability',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Building systems optimized to minimize footprint and operational costs.',
    },
    {
      title: 'Collaborative Partnership',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seamless coordination with architects, contractors, and owners.',
    },
    {
      title: 'Code & Regulatory Mastery',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ensuring rapid approvals and strict compliance with local codes.',
    },
  ];

  const team = [
    {
      name: 'Hameed Lamy, CEO',
      role: 'Principal & Founder',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Specialist in integrated building systems, MEP engineering, and innovative project delivery.',
    },
    {
      name: 'Jane Doe, PE',
      role: 'Lead Mechanical Engineer',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Expert in commercial HVAC systems, high-efficiency ventilation, and energy auditing.',
    },
    {
      name: 'John Smith, PE',
      role: 'Senior Electrical Engineer',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Experienced in medium/low voltage distribution, renewable power, and critical facility systems.',
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

        {/* company narrative */}
        <section className="py-24 px-4 bg-white border-b border-slate-200" aria-labelledby="story-title">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="story-title" className="text-3xl md:text-4xl font-bold text-corporate-blue mb-6">
                Our Story & Commitment
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel egestas sapien, eu tristique risus. 
                Founded on the belief that modern engineering should be both resilient and forward-thinking, Engivato PLLC combines 
                decades of industry expertise with agile problem-solving.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Nullam tristique sem in odio euismod, nec laoreet urna fermentum. Vestibulum id est ac velit pharetra posuere. 
                We partner with architects, developers, and facility owners to engineer complex systems that deliver reliable long-term performance.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-orange text-slate-700 italic">
                &ldquo;Engineering is not just about meeting code—it is about designing systems that elevate building longevity and human comfort.&rdquo;
              </div>
            </div>

            {/* quick stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Projects Completed', value: '150+' },
                { label: 'Combined Experience', value: '25+ Yrs' },
                { label: 'Code Compliance', value: '100%' },
                { label: 'Client Satisfaction', value: '99%' },
              ].map((stat, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center hover:border-orange transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-extrabold text-corporate-blue mb-2">{stat.value}</div>
                  <div className="text-slate-600 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* core disciplines (MEP focus) */}
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

        {/* core values */}
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

        {/* leadership */}
        <section className="py-24 px-4 bg-slate-50 border-b border-slate-200" aria-labelledby="team-title">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="team-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Leadership & Expertise
              </h2>
              <p className="text-slate-600 max-w-xl mx-auto">
                Meet the experienced professionals behind Engivato&apos;s innovative engineering designs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
                  <div className="h-48 bg-slate-200 flex items-center justify-center text-slate-400 font-medium">
                    [Photo Placeholder]
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                    <span className="text-orange text-sm font-semibold mb-4 block">{member.role}</span>
                    <p className="text-slate-600 text-sm leading-relaxed flex-grow">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}