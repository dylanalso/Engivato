import Link from 'next/link';
import { getPageSections } from '../../lib/settings';

export const metadata = {
  title: 'MEP Engineering Services | Mechanical, Electrical & Plumbing | Engivato PLLC',
  description: 'Comprehensive MEP engineering solutions by Engivato PLLC. Specializing in mechanical (HVAC), electrical, plumbing, engineering consulting, energy modeling, and Revit BIM design.',
  keywords: [
    'MEP engineering services',
    'mechanical engineering HVAC',
    'electrical systems design',
    'plumbing engineering',
    'engineering consulting and project support',
    'energy modeling IECC ASHRAE',
    'Revit BIM coordination',
    'commercial MEP engineer',
    'tenant improvement engineering',
    'Engivato PLLC'
  ],
  openGraph: {
    title: 'MEP Engineering Services | Mechanical, Electrical & Plumbing | Engivato PLLC',
    description: 'High-performance mechanical, electrical, and plumbing engineering tailored for commercial, institutional, and mixed-use built environments.',
    url: 'https://dylanalso.github.io/Engivato/services',
    siteName: 'Engivato PLLC',
    type: 'website',
  },
  alternates: {
    canonical: '/services',
  },
};

export default async function Services() {
  const { services: sections } = await getPageSections();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'MEP Engineering Services',
    provider: {
      '@type': 'EngineeringBusiness',
      name: 'Engivato PLLC',
      url: 'https://dylanalso.github.io/Engivato',
    },
    areaServed: {
      '@type': 'State',
      name: 'Texas',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Engineering Disciplines & Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mechanical Engineering (HVAC & Energy Systems)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Electrical Engineering & Power Distribution',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Plumbing Engineering & Sanitary Systems',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Engineering Consulting & Project Support',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Energy Modeling & Code Compliance',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'BIM 3D Clash Coordination & Constructability Review',
          },
        },
      ],
    },
  };

  const coreDisciplines = [
    {
      id: 'mechanical',
      badge: 'Discipline 01',
      title: 'Mechanical Engineering (HVAC)',
      tagline: 'Practical HVAC design, heating & cooling load calculations, and energy optimization.',
      description:
        'We engineer heating, ventilation, and air conditioning systems that balance thermal comfort, energy efficiency, and operational constructability. From load calculations and equipment sizing to ductwork and mechanical construction documents, our designs deliver practical, long-term performance.',
      features: [
        'HVAC System Design & Engineering Layouts',
        'Heating & Cooling Load Calculations (ASHRAE / Manual N)',
        'Equipment Selection, Sizing & Performance Specification',
        'Ductwork & Hydronic Piping System Design & Routing',
        'Energy Efficiency & System Performance Considerations',
        'Mechanical Construction Document Preparation & Design Coordination',
      ],
      icon: (
        <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 'electrical',
      badge: 'Discipline 02',
      title: 'Electrical Engineering',
      tagline: 'Safe, reliable power distribution, lighting design, and cross-discipline coordination.',
      description:
        'Our electrical engineers deliver safe, scalable, and code-compliant electrical power systems. We provide comprehensive power distribution design, interior and exterior lighting, lighting controls, and thorough coordination with mechanical, plumbing, architectural, and structural building elements.',
      features: [
        'Electrical Power Distribution Design & Service Sizing',
        'Lighting Layouts & Intelligent Lighting Controls',
        'Electrical Load Calculations & Equipment Coordination',
        'Coordination with Mechanical, Plumbing, Architectural & Structural Systems',
        'Emergency Power, Standby Generators & Automatic Transfer Switches',
        'Low-Voltage Infrastructure & Code-Compliant Panelboard Schedules',
      ],
      icon: (
        <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      id: 'plumbing',
      badge: 'Discipline 03',
      title: 'Plumbing Engineering',
      tagline: 'Domestic water distribution, sanitary waste systems, and specialized piping.',
      description:
        'We design sanitary, waste, vent, and domestic water systems that ensure public health, water conservation, and long-term operating durability. Our designs cover domestic water distribution, commercial kitchen grease interceptors, natural gas piping, and multi-discipline building coordination.',
      features: [
        'Domestic Water Distribution Systems & Recirculation Loops',
        'Sanitary Waste & Vent Systems Layout & Sizing',
        'Plumbing Fixture & Commercial Equipment Selection',
        'Plumbing Hydraulic Calculations, Isometrics & Construction Documents',
        'Commercial Grease Interceptors, Sand-Oil Separators & Gas Piping',
        'Multi-Discipline Building Systems Coordination & Utility Connections',
      ],
      icon: (
        <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      id: 'consulting',
      badge: 'Discipline 04',
      title: 'Engineering Consulting & Project Support',
      tagline: 'Design reviews, MEP coordination, clash resolution, and quality assurance.',
      description:
        'We provide specialized engineering consulting, design reviews, and responsive project support to help contractors, architects, and owners solve complex technical challenges. From clash-resolution support to value engineering and quality assurance, we ensure building systems are practical, coordinated, and constructible.',
      features: [
        'Engineering Design Review & Detailed Technical Assessments',
        'MEP Coordination & 3D Clash-Resolution Support',
        'Construction Document Review & Quality Assurance (QA/QC)',
        'Design Optimization & Practical Value Engineering',
        'Project Coordination & Responsive Technical Problem-Solving',
        'Additional Design Capacity & Project-Based Partner Support',
      ],
      icon: (
        <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const specializedServices = [
    {
      title: 'Energy Modeling & Code Compliance',
      description: 'Comprehensive COMcheck and REScheck reports, ASHRAE 90.1 modeling, and IECC compliance documentation to ensure streamlined permit clearance and energy efficiency incentives.',
      icon: (
        <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'BIM & 3D Clash Detection (Revit)',
      description: 'Fully coordinated 3D Autodesk Revit models that identify system interferences before breaking ground, virtually eliminating expensive change orders and field RFIs.',
      icon: (
        <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: 'Tenant Improvements & Interior Fit-Outs',
      description: 'Agile engineering packages for fast-paced commercial retail, restaurant, medical office, and corporate tenant renovations with tight turnaround deadlines.',
      icon: (
        <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: 'Facility Condition Assessments & Peer Review',
      description: 'Thorough evaluations of existing MEP infrastructure, capital replacement forecasting, due diligence surveys, and third-party engineering plan reviews.',
      icon: (
        <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'Value Engineering & Systems Optimization',
      description: 'Strategic review of MEP equipment selections and distribution topologies to trim unnecessary capital expense without degrading building durability or code adherence.',
      icon: (
        <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Construction Administration & Field Observation',
      description: 'Continuous engineering oversight throughout buildout: submittal review, contractor RFI resolution, site walkthrough reports, and punch list verifications.',
      icon: (
        <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const projectLifecycle = [
    {
      step: 'Phase 01',
      title: 'Schematic Design & Due Diligence',
      summary: 'Establishing load benchmarks, assessing existing utilities, and validating equipment spatial footprints alongside the architectural concept.',
    },
    {
      step: 'Phase 02',
      title: 'Design Development & BIM Modeling',
      summary: 'Selecting primary equipment, routing main ductwork and piping runs, and establishing coordinated 3D BIM models to mitigate spatial conflicts early.',
    },
    {
      step: 'Phase 03',
      title: 'Construction Documents (CD)',
      summary: 'Finalizing stamped, permit-ready drawings, schedules, one-line diagrams, details, and technical specifications ready for bidding and city submission.',
    },
    {
      step: 'Phase 04',
      title: 'Plan Review & Permitting Support',
      summary: 'Proactively responding to municipal plan check comments to ensure swift, uninterrupted permit issuance across local building jurisdictions.',
    },
    {
      step: 'Phase 05',
      title: 'Construction Administration (CA)',
      summary: 'Reviewing shop drawings and submittals, answering contractor RFIs in real time, and performing milestone field inspections through final sign-off.',
    },
  ];

  const faqs = [
    {
      question: 'Do you provide stamped and sealed engineering drawings?',
      answer: 'Yes. All final construction document sets are stamped and sealed by licensed Professional Engineers (PE), meeting the legal permitting criteria for local municipal and state building departments.',
    },
    {
      question: 'Can you deliver project models in Autodesk Revit?',
      answer: 'Absolutely. We develop projects in Autodesk Revit as standard practice, providing fully coordinated 3D BIM models for clash detection alongside traditional 2D AutoCAD deliverables.',
    },
    {
      question: 'How quickly can Engivato respond to plan review comments?',
      answer: 'We treat municipal plan review comments as top priority. Most plan check revisions are addressed within 2 to 4 business days to prevent permitting delays for owners and general contractors.',
    },
    {
      question: 'What building sectors and project types do you work on?',
      answer: 'Our core project focus is on restaurants, commercial office finish-outs, and multifamily developments, alongside retail fit-outs, medical suites, and commercial facility upgrades throughout Texas.',
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
        {sections.showHero && (
          <header className="pt-36 pb-20 bg-corporate-blue text-white px-4 relative overflow-hidden" aria-labelledby="services-hero-title">
            <div className="max-w-6xl mx-auto text-center relative z-10">
              <span className="text-orange font-semibold tracking-wider uppercase text-sm mb-3 inline-block">
                Integrated Engineering Capabilities
              </span>
              <h1 id="services-hero-title" className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                Full-Spectrum MEP Engineering Solutions
              </h1>
              <p className="text-slate-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8">
                From initial load calculation through final construction administration, Engivato PLLC delivers innovative, energy-efficient, and constructible mechanical, electrical, and plumbing designs.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-orange hover:bg-orange-dark text-white px-8 py-3.5 rounded-full font-semibold text-base shadow-lg hover:shadow-orange/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Request a Proposal
                </Link>
                <a
                  href="#mep-disciplines"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 backdrop-blur-sm"
                >
                  Explore Disciplines
                </a>
              </div>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none" />
          </header>
        )}

        {/* value proposition */}
        {sections.showValueProps && (
          <section className="bg-white border-b border-slate-200 py-8 sm:py-12 px-4 overflow-hidden" aria-label="Key Differentiators">
            <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 text-center">
              {[
                { title: 'Engineering-Led', desc: 'Holistic Problem-Solving' },
                { title: 'Constructible', desc: 'Practical & Build-Ready' },
                { title: 'Modern BIM', desc: '3D Clash-Free Workflows' },
                { title: 'Responsive', desc: 'Collaborative Partnership' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-4 rounded-xl bg-slate-50/70 md:bg-transparent border border-slate-100 md:border-0 flex flex-col justify-center min-w-0"
                >
                  <div className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-extrabold text-corporate-blue mb-1 tracking-tight break-words">
                    {item.title}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm font-semibold text-slate-600 uppercase tracking-wider leading-snug">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* MEP disciplines */}
        <main>
          {sections.showDisciplines && (
            <section id="mep-disciplines" className="py-24 px-4 bg-slate-50" aria-labelledby="disciplines-heading">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-orange font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Core Engineering Services
                </span>
                <h2 id="disciplines-heading" className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                  Built on Technical Rigor & Coordination
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                  Every building system we engineer is tailored to optimize occupant comfort, life-safety protection, and operational sustainability.
                </p>
              </div>

              <div className="space-y-12">
                {coreDisciplines.map((discipline, idx) => (
                  <article
                    key={discipline.id}
                    id={discipline.id}
                    className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                      <div className="lg:w-1/2">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 bg-corporate-light rounded-xl">
                            {discipline.icon}
                          </div>
                          <span className="text-xs font-bold tracking-widest text-corporate-blue uppercase px-3 py-1 bg-corporate-light rounded-full">
                            {discipline.badge}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                          {discipline.title}
                        </h3>
                        <p className="text-orange font-medium mb-4 text-base">
                          {discipline.tagline}
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-6">
                          {discipline.description}
                        </p>
                        <Link
                          href="/contact"
                          className="inline-flex items-center text-corporate-blue hover:text-orange font-semibold text-sm group transition-colors"
                        >
                          Consult on {discipline.title}
                          <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>

                      <div className="lg:w-1/2 w-full bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200">
                        <h4 className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-4">
                          Key Scope & Deliverables
                        </h4>
                        <ul className="space-y-3">
                          {discipline.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start text-sm text-slate-700">
                              <svg className="w-5 h-5 text-orange flex-shrink-0 mr-2.5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* capabilities grid */}
        {sections.showCapabilities && (
          <section className="py-24 px-4 bg-white border-t border-b border-slate-200" aria-labelledby="specialized-heading">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-orange font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Value-Added Expertise
                </span>
                <h2 id="specialized-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Specialized Engineering Capabilities
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                  Beyond core design, we provide advanced technical evaluations and modeling tools that protect project schedules and bottom lines.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {specializedServices.map((service, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-corporate-blue/40 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* engineering workflow / delivery lifecycle */}
        {sections.showProcess && (
          <section className="py-24 px-4 bg-slate-50 border-b border-slate-200" aria-labelledby="process-heading">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-orange font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Project Delivery Process
                </span>
                <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  How We Engineer Every Project
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                  A transparent, structured workflow designed to align with architectural milestones and contractor construction schedules.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {projectLifecycle.map((stage, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div>
                      <div className="text-xs font-bold text-orange tracking-widest uppercase mb-2">
                        {stage.step}
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-3">
                        {stage.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {stage.summary}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-corporate-blue">
                      <span>Milestone {idx + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* technical standards & software badges */}
        {sections.showStandards && (
          <section className="py-16 px-4 bg-white border-b border-slate-200" aria-label="Codes & Standards">
            <div className="max-w-6xl mx-auto text-center">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
                Industry Standards, Codes & Design Tools We Master
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 text-xs md:text-sm font-semibold text-slate-700">
                {[
                  'Autodesk Revit MEP',
                  'AutoCAD',
                  'ASHRAE 90.1 / 62.1',
                  'International Building Code (IBC)',
                  'International Energy Conservation Code (IECC)',
                  'National Electrical Code (NEC / NFPA 70)',
                  'Uniform Plumbing Code (UPC / IPC)',
                  'NFPA 13 / 14 / 20 / 72',
                  'COMcheck & REScheck',
                  'Trace 3D Plus',
                ].map((badge, bIdx) => (
                  <span
                    key={bIdx}
                    className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200 hover:border-corporate-blue hover:text-corporate-blue transition-colors"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        {sections.showFaq && (
          <section className="py-24 px-4 bg-slate-50" aria-labelledby="faq-heading">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-orange font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Common Questions
                </span>
                <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-slate-600 text-lg">
                  Have questions about our engineering deliverables, licensing, or turnaround times?
                </p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-bold text-corporate-blue mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  </>
);
}
