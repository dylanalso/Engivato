'use client';

import { useState, useRef, useEffect } from 'react';
import {
  COMPANY_EMAIL,
  COMPANY_PHONE,
  formatPhoneDisplay,
  formatPhoneHref,
} from '../lib/constants';

const MIN_SUBMIT_TIME_MS = 2500;

export default function Form({
  formConfig = {},
  emailAddress = COMPANY_EMAIL,
  phoneNumber = COMPANY_PHONE,
}) {
  const {
    eyebrow = 'Fast-Track Consultation',
    heading = 'Request an Engineering Proposal',
    description = 'Fill out the details below to discuss your project scope, turnaround timeline, or stamped plan requirements.',
    submitButtonText = 'Send Project Inquiry',
    privacyNote = 'Submissions are transmitted securely and routed to our principal engineering team.',
    successHeading = 'Message Sent Successfully!',
    successMessage = 'Thank you for reaching out to Engivato PLLC. We have received your inquiry and will review your project requirements within 1 business day.',
  } = formConfig;

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const loadedAtRef = useRef(0);
  const hasInteractedRef = useRef(false);

  useEffect(() => {
    loadedAtRef.current = Date.now();
  }, []);

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '';

  const markInteracted = () => {
    hasInteractedRef.current = true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Evaluate honeypots, minimum fill duration, and human interaction gate
    const elapsedMs = Date.now() - (loadedAtRef.current || 0);
    const decoyWebsite = String(formData.get('company_website') || '').trim();
    const botCheckbox = formData.get('botcheck');

    if (
      decoyWebsite ||
      botCheckbox ||
      !hasInteractedRef.current ||
      elapsedMs < MIN_SUBMIT_TIME_MS
    ) {
      setStatus('success');
      form.reset();
      return;
    }

    // Strip decoy field so it does not appear in the email notification
    formData.delete('company_website');

    // Configure Web3Forms access key and submission metadata
    formData.set('access_key', accessKey);
    formData.set('subject', `New Project Inquiry from ${formData.get('name') || 'Engivato Site'}`);
    formData.set('from_name', 'Engivato PLLC Website');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMessage(
          data.message || 'Unable to submit the form. Please check your information or try again.'
        );
      }
    } catch {
      setStatus('error');
      setErrorMessage(
        `Network error submitting form. Please call us at ${formatPhoneDisplay(phoneNumber)} or email us directly at ${emailAddress}.`
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm text-center">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5 text-2xl border border-emerald-200">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{successHeading}</h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
          {successMessage} (Direct contact:{' '}
          <a href={formatPhoneHref(phoneNumber)} className="font-bold text-corporate-blue hover:text-orange">
            {formatPhoneDisplay(phoneNumber)}
          </a>{' '}
          | <strong className="text-slate-800">{emailAddress}</strong>)
        </p>
        <button
          type="button"
          onClick={() => {
            loadedAtRef.current = Date.now();
            hasInteractedRef.current = false;
            setStatus('idle');
          }}
          className="inline-flex items-center justify-center px-6 py-2.5 bg-corporate-blue hover:bg-blue-900 text-white text-xs font-semibold rounded-full transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
      <div className="mb-8">
        <div className="flex items-center justify-between gap-2 mb-2">
          {eyebrow && (
            <span className="font-mono text-orange font-semibold tracking-wider uppercase text-xs block">
              {eyebrow}
            </span>
          )}
          <span
            aria-hidden="true"
            className="font-mono text-[10px] font-semibold tracking-widest text-slate-400 uppercase"
          >
            DWG NO. RFP-01 // REV 01
          </span>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{heading}</h3>
        {description && (
          <p className="text-slate-600 text-sm">
            {description}
          </p>
        )}
      </div>

      {status === 'error' && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
          <div className="font-bold mb-1">Submission Notice:</div>
          {errorMessage}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        onFocus={markInteracted}
        onInput={markInteracted}
        className="space-y-5 relative"
      >
        {/* Primary Checkbox Honeypot */}
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          style={{ display: 'none' }}
        />

        {/* Secondary Off-Screen Text Honeypot */}
        <div
          aria-hidden="true"
          className="absolute -left-full w-px h-px overflow-hidden opacity-0 pointer-events-none"
        >
          <label htmlFor="company_website">Company Website</label>
          <input
            type="text"
            id="company_website"
            name="company_website"
            tabIndex={-1}
            autoComplete="new-password"
          />
        </div>

        {/* Contact Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Full Name <span className="text-orange">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="e.g. Alex Morgan"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-corporate-blue/30 focus:border-corporate-blue transition-all text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Email Address <span className="text-orange">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="alex@company.com"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-corporate-blue/30 focus:border-corporate-blue transition-all text-sm"
            />
          </div>
        </div>

        {/* Phone Number & Organization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="(214) 555-0192"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-corporate-blue/30 focus:border-corporate-blue transition-all text-sm"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Company / Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Architecture Studio / GC Firm"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-corporate-blue/30 focus:border-corporate-blue transition-all text-sm"
            />
          </div>
        </div>

        {/* Engineering Discipline & Project Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Discipline Needed
            </label>
            <select
              id="service"
              name="service"
              defaultValue="Full MEP Engineering Package"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-corporate-blue/30 focus:border-corporate-blue transition-all text-sm"
            >
              <option value="Full MEP Engineering Package">Full MEP Engineering Package</option>
              <option value="Mechanical (HVAC & Ventilation)">Mechanical (HVAC & Ventilation)</option>
              <option value="Electrical Power & Lighting">Electrical Power & Lighting</option>
              <option value="Plumbing & Natural Gas Piping">Plumbing & Natural Gas Piping</option>
              <option value="Tenant Improvement / Interior Fit-Out">Tenant Improvement / Interior Fit-Out</option>
              <option value="Energy Modeling (COMcheck / REScheck)">Energy Modeling (COMcheck / REScheck)</option>
              <option value="Municipal Plan Review & Revisions">Municipal Plan Review & Revisions</option>
              <option value="Other / General Consultation">Other / General Consultation</option>
            </select>
          </div>

          <div>
            <label htmlFor="location" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Project Location / City
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="e.g. Dallas, Fort Worth, Plano"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-corporate-blue/30 focus:border-corporate-blue transition-all text-sm"
            />
          </div>
        </div>

        {/* Project Scope & Details */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Project Overview & Scope Details <span className="text-orange">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about the facility square footage, project type (retail, restaurant, warehouse, medical), expected milestones, or whether you have architectural plans ready for review..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-corporate-blue/30 focus:border-corporate-blue transition-all text-sm resize-y"
          ></textarea>
        </div>

        {/* Submit Action */}
        <div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-orange hover:bg-orange-dark text-white font-semibold py-3.5 px-6 rounded-xl hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 text-sm animate-slow-ping disabled:animate-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {status === 'loading' ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Submitting Your Request...</span>
              </>
            ) : (
              <>
                <span>{submitButtonText}</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>
          {privacyNote && (
            <p className="text-center text-[11px] text-slate-500 mt-3">
              {privacyNote}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
