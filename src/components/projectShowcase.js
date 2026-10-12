'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

export default function ProjectShowcase({ initialProjects = [] }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Commercial & Retail',
    'Restaurant & Hospitality',
    'Industrial & Warehouse',
    'Healthcare & Medical',
    'Corporate Office',
    'Multi-Family Residential',
  ];

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        (project.category && project.category.toLowerCase() === selectedCategory.toLowerCase());

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        (project.title && project.title.toLowerCase().includes(query)) ||
        (project.desc && project.desc.toLowerCase().includes(query)) ||
        (project.location && project.location.toLowerCase().includes(query)) ||
        (project.scope && project.scope.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [initialProjects, selectedCategory, searchQuery]);

  return (
    
    <div className="w-full">
    {/* keystatic client notice banner
      <div className="mb-10 p-4 md:p-5 rounded-2xl bg-corporate-light/60 border border-corporate-blue/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-corporate-blue text-white flex items-center justify-center flex-shrink-0 text-lg">
            ⚡
          </div>
          <div>
            <h4 className="text-sm font-bold text-corporate-blue">
              Client Content Management Ready
            </h4>
            <p className="text-xs text-slate-600">
              All projects below are dynamically sourced from Keystatic. Add new case studies or edit existing projects in the admin panel.
            </p>
          </div>
        </div>
        <Link
          href="/keystatic"
          className="inline-flex items-center text-xs font-semibold px-4 py-2 bg-corporate-blue hover:bg-blue-900 text-white rounded-full transition-colors whitespace-nowrap"
        >
          Open Keystatic Admin
          <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </Link>
      </div>

      {/* filter tabs and search bar */}
      <div className="mb-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* category pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`text-xs md:text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-corporate-blue text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-corporate-blue/50 hover:text-corporate-blue'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* search input */}
        <div className="relative min-w-[260px] md:min-w-[320px]">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by name, city, or scope..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-xs md:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-corporate-blue/30 focus:border-corporate-blue transition-all"
          />
          <svg
            className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* results header count */}
      <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
        <span>
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
          {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
        </span>
        {searchQuery && (
          <span className="text-orange normal-case">Filtered by &ldquo;{searchQuery}&rdquo;</span>
        )}
      </div>

      {/* projects grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <article
              key={idx}
              className="group bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-corporate-blue/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* subtle architectural grid / isometric decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none overflow-hidden">
                <svg className="w-full h-full text-corporate-blue" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0 0h20v20H0zm40 0h20v20H40zm40 0h20v20H80zM20 20h20v20H20zm40 0h20v20H60zm-60 20h20v20H0zm40 0h20v20H40zm40 0h20v20H80zM20 60h20v20H20zm40 0h20v20H60zm-60 20h20v20H0zm40 0h20v20H40zm40 0h20v20H80z" />
                </svg>
              </div>

              <div>
                {/* meta badge row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-corporate-blue px-3 py-1 bg-corporate-light rounded-full">
                    {project.category || 'Engineering'}
                  </span>
                  {project.year && (
                    <span className="text-xs font-medium text-slate-500">
                      {project.year}
                    </span>
                  )}
                </div>

                {/* project image thumbnail or blueprint banner */}
                {project.image ? (
                  <div className="relative w-full h-44 mb-5 rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-28 mb-5 rounded-2xl bg-gradient-to-br from-corporate-light to-blue-50 border border-corporate-blue/15 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0033a0_1.5px,transparent_1.5px)] [background-size:12px_12px]" />
                    <div className="flex items-center gap-2 text-corporate-blue/70 text-xs font-semibold uppercase tracking-wider z-10">
                      <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span>MEP Case Study</span>
                    </div>
                  </div>
                )}

                {/* project title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-corporate-blue transition-colors mb-3 leading-snug">
                  {project.title}
                </h3>

                {/* location pill */}
                {project.location && (
                  <div className="flex items-center text-xs text-slate-500 mb-3 font-medium">
                    <svg className="w-3.5 h-3.5 mr-1 text-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{project.location}</span>
                  </div>
                )}

                {/* scope tag */}
                {project.scope && (
                  <div className="mb-4">
                    <span className="inline-block text-[11px] font-semibold text-slate-700 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                      Scope: {project.scope}
                    </span>
                  </div>
                )}

                {/* description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>

              {/* action link */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                <Link
                  href="/contact"
                  className="text-corporate-blue group-hover:text-orange inline-flex items-center transition-colors"
                >
                  Inquire on Similar Scope
                  <svg className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* empty filter state */
        <div className="text-center py-16 px-4 bg-white rounded-3xl border border-dashed border-slate-300">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-xl">
            🔍
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">No matching projects found</h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
            We couldn&apos;t find any projects matching your current filters. Try selecting another sector or clearing your search term.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-6 py-2.5 bg-corporate-blue text-white rounded-full text-xs font-semibold hover:bg-blue-900 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
