import Link from 'next/link';
import { reader } from '../lib/keystatic';

const DEFAULT_SERVICES = [
  {
    enabled: true,
    title: 'Mechanical Engineering (HVAC)',
    badge: 'Discipline 01',
    tagline: 'HVAC design & load calculations',
    desc: 'Heating and cooling load calculations, equipment selection and sizing, ductwork and piping design, energy efficiency, and mechanical construction documents.',
    anchor: 'mechanical',
    deliverables: ['HVAC Design & Sizing', 'Heating & Cooling Loads', 'Ductwork & Piping Layouts'],
    order: 1,
  },
  {
    enabled: true,
    title: 'Electrical Engineering',
    badge: 'Discipline 02',
    tagline: 'Power & lighting via licensed partners',
    desc: 'Coordinated and delivered through trusted licensed electrical engineering partners, covering power distribution design, lighting and controls, load calculations, and cross-system equipment coordination.',
    anchor: 'electrical',
    deliverables: ['Power Distribution Design', 'Lighting & Controls', 'Load Calculations & Coordination'],
    order: 2,
  },
  {
    enabled: true,
    title: 'Plumbing Engineering',
    badge: 'Discipline 03',
    tagline: 'Water & sanitary via licensed partners',
    desc: 'Coordinated and delivered through trusted licensed plumbing engineering partners, covering domestic water distribution, sanitary waste and vent systems, fixture selection, and construction documents.',
    anchor: 'plumbing',
    deliverables: ['Domestic Water Systems', 'Sanitary Waste & Vent', 'Plumbing Calculations & Layouts'],
    order: 3,
  },
  {
    enabled: true,
    title: 'Engineering Consulting & Project Support',
    badge: 'Discipline 04',
    tagline: 'Design review & clash coordination',
    desc: 'Engineering design review, MEP coordination, clash-resolution support, construction document QA, design optimization, and value engineering.',
    anchor: 'consulting',
    deliverables: ['Design Review & Assessments', 'MEP Clash-Resolution Support', 'QA & Value Engineering'],
    order: 4,
  },
];

function getDisciplineIcon(anchor = '', title = '') {
  const normalized = (anchor || title).toLowerCase();

  if (normalized.includes('mech') || normalized.includes('hvac')) {
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    );
  }
  if (normalized.includes('elec') || normalized.includes('power')) {
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    );
  }
  if (normalized.includes('plumb') || normalized.includes('pip')) {
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    );
  }
  if (normalized.includes('consult') || normalized.includes('support') || normalized.includes('review') || normalized.includes('coord')) {
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}

function getDisciplineLinkLabel(anchor = '', title = '') {
  const normalized = (anchor || title).toLowerCase();
  if (normalized.includes('mech') || normalized.includes('hvac')) {
    return 'Explore Mechanical Services';
  }
  if (normalized.includes('elec') || normalized.includes('power')) {
    return 'Explore Electrical Services';
  }
  if (normalized.includes('plumb') || normalized.includes('pip')) {
    return 'Explore Plumbing Services';
  }
  if (normalized.includes('consult') || normalized.includes('support') || normalized.includes('review') || normalized.includes('coord')) {
    return 'Explore Consulting Services';
  }
  return `Explore ${title}`;
}

function getDisciplineDwgCode(anchor = '', index = 0) {
  const normalized = anchor.toLowerCase();
  if (normalized.includes('mech') || normalized.includes('hvac')) return 'DWG NO. M-101';
  if (normalized.includes('elec') || normalized.includes('power')) return 'DWG NO. E-201';
  if (normalized.includes('plumb') || normalized.includes('pip')) return 'DWG NO. P-301';
  if (normalized.includes('consult')) return 'DWG NO. C-401';
  return `DWG NO. S-${index + 1}01`;
}

export default async function Services({ sectionData = {} }) {
  const {
    eyebrow = 'Core Engineering Disciplines',
    heading = 'Our Services',
    description = 'Innovative, practical, and reliable mechanical, electrical, and plumbing engineering solutions along with dedicated project consulting support.',
    bottomCalloutText = 'Need 3D Revit BIM clash detection, COMcheck energy compliance, or tenant improvements?',
    bottomCalloutLinkText = 'Explore All Services & Specialized Capabilities →',
  } = sectionData;

  let displayServices = DEFAULT_SERVICES;

  try {
    const servicesData = await reader.collections.services.all();
    if (servicesData && servicesData.length > 0) {
      const parsed = servicesData
        .map((s) => s.entry)
        .filter((s) => s.enabled !== false);
      parsed.sort((a, b) => (a.order || 99) - (b.order || 99));
      displayServices = parsed;
    }
  } catch {
    displayServices = DEFAULT_SERVICES;
  }

  return (
    <section id="services" className="py-16 px-4 bg-white relative border-t border-slate-200 font-sans" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          {eyebrow && (
            <span className="text-orange font-mono font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2 block">
              {eyebrow}
            </span>
          )}
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-corporate-blue mb-3">
            {heading}
          </h2>
          {description && (
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Discipline Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {displayServices.map((service, index) => {
            const anchor =
              service.anchor ||
              (service.title.toLowerCase().includes('mech')
                ? 'mechanical'
                : service.title.toLowerCase().includes('elec')
                ? 'electrical'
                : service.title.toLowerCase().includes('plumb')
                ? 'plumbing'
                : 'consulting');
            const badge = service.badge || `Discipline ${String(index + 1).padStart(2, '0')}`;
            const dwgCode = getDisciplineDwgCode(anchor, index);
            const targetUrl = `/services#${anchor}`;

            return (
              <div
                key={service.title || index}
                className="group bg-slate-50 bg-drafting-grid px-5 py-6 rounded-2xl border border-slate-200/90 hover:border-corporate-blue/40 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between relative"
              >
                <div>
                  {/* Card Header: Icon & Discipline Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-corporate-light flex items-center justify-center text-corporate-blue group-hover:bg-orange/10 group-hover:text-orange transition-colors shrink-0">
                      {getDisciplineIcon(anchor, service.title)}
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-2.5 py-1 bg-white border border-slate-200/80 rounded-full font-mono block">
                        {badge}
                      </span>
                      <span aria-hidden="true" className="text-[9px] font-mono text-slate-400 tracking-widest uppercase mt-1 block">
                        {dwgCode}
                      </span>
                    </div>
                  </div>

                  {/* Discipline Title */}
                  <h3 className="text-lg font-bold text-corporate-blue mb-1 leading-snug min-h-13 flex items-start">
                    {service.title}
                  </h3>

                  {/* Discipline Tagline */}
                  {service.tagline ? (
                    <p className="text-xs font-mono font-semibold text-orange mb-2.5 min-h-8 flex items-start">
                      {service.tagline}
                    </p>
                  ) : (
                    <div className="mb-2.5 min-h-8" />
                  )}

                  {/* Discipline Summary */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-auto">
                  {/* Key Deliverable Tags */}
                  {service.deliverables && service.deliverables.length > 0 && (
                    <div className="pt-3 border-t border-slate-200/70 mb-4 flex flex-col gap-1.5">
                      {service.deliverables.slice(0, 3).map((item, dIdx) => (
                        <span
                          key={dIdx}
                          className="text-[10.5px] tracking-tight font-mono font-medium text-slate-600 bg-white border border-slate-200/80 px-2 py-0.5 rounded w-fit whitespace-nowrap"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Section Anchor Link */}
                  <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between">
                    <Link
                      href={targetUrl}
                      className="inline-flex items-center text-sm font-semibold text-corporate-blue group-hover:text-orange transition-colors whitespace-nowrap"
                    >
                      <span>{getDisciplineLinkLabel(anchor, service.title)}</span>
                      <svg className="w-4 h-4 ml-1 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full Services Page Callout */}
        {(bottomCalloutText || bottomCalloutLinkText) && (
          <div className="mt-8 text-center">
            <p className="text-xs sm:text-sm text-slate-600">
              {bottomCalloutText}{' '}
              {bottomCalloutLinkText && (
                <Link
                  href="/services"
                  className="text-corporate-blue font-semibold hover:text-orange underline underline-offset-4 ml-1 transition-colors"
                >
                  {bottomCalloutLinkText}
                </Link>
              )}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
