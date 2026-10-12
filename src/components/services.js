import Link from 'next/link';
import { reader } from '../lib/keystatic';

const DEFAULT_SERVICES = [
  {
    title: 'Mechanical Engineering & HVAC',
    badge: 'Discipline 01',
    tagline: 'Thermal comfort & energy compliance',
    desc: 'Heating, ventilation, and air conditioning systems engineered for peak comfort, code compliance, and low lifecycle operating costs.',
    anchor: 'mechanical',
    deliverables: ['ASHRAE & Manual N Loads', 'VRF & Chilled Water', 'Kitchen Hood & DOAS'],
    order: 1,
  },
  {
    title: 'Electrical Systems Engineering',
    badge: 'Discipline 02',
    tagline: 'Power distribution & smart lighting',
    desc: 'Safe, scalable, and code-compliant electrical infrastructure from utility service entrance calculations to standby generator integration.',
    anchor: 'electrical',
    deliverables: ['Service Entrance & One-Line', 'Emergency Standby Power', 'IECC Lighting Calculations'],
    order: 2,
  },
  {
    title: 'Plumbing & Piping Design',
    badge: 'Discipline 03',
    tagline: 'Potable water & sanitary drainage',
    desc: 'Sanitary, storm, potable water, and gas distribution systems guaranteeing public health, water conservation, and code compliance.',
    anchor: 'plumbing',
    deliverables: ['Domestic Water Systems', 'Sanitary Waste & Vent', 'Grease Interceptors'],
    order: 3,
  },
  {
    title: 'Fire Protection & Life Safety',
    badge: 'Discipline 04',
    tagline: 'Sprinklers & life safety plans',
    desc: 'Comprehensive fire suppression and life safety infrastructure coordinated in strict compliance with NFPA standards and local fire marshals.',
    anchor: 'fire-protection',
    deliverables: ['Sprinkler System Criteria', 'Standpipe Risers & FDC', 'Life Safety Plan Review'],
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
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}

export default async function Services() {
  let displayServices = DEFAULT_SERVICES;

  try {
    const servicesData = await reader.collections.services.all();
    if (servicesData && servicesData.length > 0) {
      const parsed = servicesData.map((s) => s.entry);
      parsed.sort((a, b) => (a.order || 99) - (b.order || 99));
      displayServices = parsed;
    }
  } catch {
    displayServices = DEFAULT_SERVICES;
  }

  return (
    <section id="services" className="py-16 px-4 bg-slate-50 relative border-t border-slate-200 font-sans" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">

        {/* section header */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <span className="text-orange font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2 block">
            Core Engineering Disciplines
          </span>
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-corporate-blue mb-3">
            Our Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Comprehensive mechanical, electrical, and plumbing engineering solutions tailored for commercial, industrial, and institutional facilities.
          </p>
        </div>

        {/* 4-column card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {displayServices.map((service, index) => {
            const anchor = service.anchor || (
              service.title.toLowerCase().includes('mech') ? 'mechanical' :
              service.title.toLowerCase().includes('elec') ? 'electrical' :
              service.title.toLowerCase().includes('plumb') ? 'plumbing' : 'fire-protection'
            );
            const badge = service.badge || `Discipline ${String(index + 1).padStart(2, '0')}`;
            const targetUrl = `/services#${anchor}`;

            return (
              <div
                key={service.title || index}
                className="group bg-white p-6 rounded-2xl border border-slate-200/90 hover:border-corporate-blue/40 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* icon & badge header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-corporate-light flex items-center justify-center text-corporate-blue group-hover:bg-orange/10 group-hover:text-orange transition-colors flex-shrink-0">
                      {getDisciplineIcon(anchor, service.title)}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-2.5 py-1 bg-slate-100 rounded-full font-mono">
                      {badge}
                    </span>
                  </div>

                  {/* title */}
                  <h3 className="text-lg font-bold text-corporate-blue mb-1 leading-snug min-h-[3.25rem] flex items-start">
                    {service.title}
                  </h3>

                  {/* tagline */}
                  {service.tagline ? (
                    <p className="text-xs font-semibold text-orange mb-2.5 min-h-[1.25rem] flex items-center">
                      {service.tagline}
                    </p>
                  ) : (
                    <div className="mb-2.5 min-h-[1.25rem]" />
                  )}

                  {/* description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 min-h-[4.25rem]">
                    {service.desc}
                  </p>

                  {/* scope tags */}
                  {service.deliverables && service.deliverables.length > 0 && (
                    <div className="pt-3 border-t border-slate-100 mb-4 flex flex-col gap-1.5">
                      {service.deliverables.slice(0, 3).map((item, dIdx) => (
                        <span
                          key={dIdx}
                          className="text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-200/80 px-2.5 py-0.5 rounded w-fit"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* footer link */}
                <div className="pt-3 border-t border-slate-100 mt-auto flex items-center justify-between">
                  <Link
                    href={targetUrl}
                    className="inline-flex items-center text-sm font-semibold text-corporate-blue group-hover:text-orange transition-colors"
                  >
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* link to full services page */}
        <div className="mt-8 text-center">
          <p className="text-xs sm:text-sm text-slate-600">
            Need 3D Revit BIM clash detection, COMcheck energy compliance, or tenant improvements?{' '}
            <Link
              href="/services"
              className="text-corporate-blue font-semibold hover:text-orange underline underline-offset-4 ml-1 transition-colors"
            >
              Explore All Services &amp; Specialized Capabilities &rarr;
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}