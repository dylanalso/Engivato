import Link from 'next/link';

export default function PageUnavailable({ pageName = 'This Page' }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex items-center justify-center px-4 pt-24 pb-16">
      <div className="max-w-lg w-full bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm text-center">
        <div className="w-14 h-14 rounded-2xl bg-corporate-light text-corporate-blue flex items-center justify-center mx-auto mb-6">
          <svg className="w-7 h-7 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <span className="text-orange font-semibold tracking-wider uppercase text-xs mb-2 block">
          Section Temporarily Offline
        </span>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
          {pageName} Is Currently Unavailable
        </h1>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
          We are currently updating this page. Please return to our home page to explore Engivato PLLC&apos;s Mechanical, Electrical, and Plumbing engineering services.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-corporate-blue hover:bg-blue-900 text-white px-7 py-3.5 rounded-full font-semibold text-sm shadow-md transition-all duration-200"
        >
          <span>Return to Home Page</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

