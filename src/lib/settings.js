import { reader } from './keystatic';

export const DEFAULT_SITE_SETTINGS = {
  underConstruction: false,
  previewInDev: false,
  heading: 'Engineering High-Performance Solutions That Perform',
  subheading: 'Website Under Construction • Launching Soon',
  description:
    'We are currently building our full digital platform. Engivato PLLC delivers licensed Mechanical, Electrical, and Plumbing (MEP) consulting, stamped permit drawings, and fast-track tenant fit-out engineering across Texas.',
  showFeatureCards: true,
  showContactCard: true,
};

export const DEFAULT_PAGE_SECTIONS = {
  home: {
    showHero: true,
    showOverview: true,
    showServices: true,
    showProcess: true,
    showWhyUs: true,
    showTestimonials: true,
  },
  about: {
    showHero: true,
    showStory: true,
    showDisciplines: true,
    showValues: true,
    showTeam: true,
  },
  services: {
    showHero: true,
    showValueProps: true,
    showDisciplines: true,
    showCapabilities: true,
    showProcess: true,
    showStandards: true,
    showFaq: true,
  },
  projects: {
    showHero: true,
    showHighlights: true,
    showShowcase: true,
    showSectors: true,
  },
  whoWeServe: {
    showHero: true,
    showCoverage: true,
    showComplianceCallout: true,
    showClientTypes: true,
    showAdvantage: true,
  },
  contact: {
    showHero: true,
    showChannels: true,
    showForm: true,
    showSidebar: true,
  },
};

/**
 * Retrieves site settings from Keystatic singleton with safe fallback defaults.
 */
export async function getSiteSettings() {
  try {
    const data = await reader.singletons.siteSettings.read();
    if (!data) return DEFAULT_SITE_SETTINGS;
    return {
      ...DEFAULT_SITE_SETTINGS,
      ...data,
    };
  } catch (error) {
    console.error('Error loading siteSettings singleton:', error);
    return DEFAULT_SITE_SETTINGS;
  }
}

/**
 * Retrieves page sections visibility settings from Keystatic singleton with safe fallback defaults.
 */
export async function getPageSections() {
  try {
    const data = await reader.singletons.pageSections.read();
    if (!data) return DEFAULT_PAGE_SECTIONS;

    return {
      home: { ...DEFAULT_PAGE_SECTIONS.home, ...(data.home || {}) },
      about: { ...DEFAULT_PAGE_SECTIONS.about, ...(data.about || {}) },
      services: { ...DEFAULT_PAGE_SECTIONS.services, ...(data.services || {}) },
      projects: { ...DEFAULT_PAGE_SECTIONS.projects, ...(data.projects || {}) },
      whoWeServe: { ...DEFAULT_PAGE_SECTIONS.whoWeServe, ...(data.whoWeServe || {}) },
      contact: { ...DEFAULT_PAGE_SECTIONS.contact, ...(data.contact || {}) },
    };
  } catch (error) {
    console.error('Error loading pageSections singleton:', error);
    return DEFAULT_PAGE_SECTIONS;
  }
}
