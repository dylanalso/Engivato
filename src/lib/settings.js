import { reader } from './keystatic';
import defaultHome from '../content/pages/home.json';
import defaultAbout from '../content/pages/about.json';
import defaultServices from '../content/pages/services.json';
import defaultProjects from '../content/pages/projects.json';
import defaultWhoWeServe from '../content/pages/who-we-serve.json';
import defaultContact from '../content/pages/contact.json';
import defaultLegal from '../content/pages/legal.json';
import defaultFooter from '../content/settings/footer.json';
import defaultSite from '../content/settings/site.json';

export const DEFAULT_SITE_SETTINGS = defaultSite;
export const DEFAULT_HOME_PAGE = defaultHome;
export const DEFAULT_ABOUT_PAGE = defaultAbout;
export const DEFAULT_SERVICES_PAGE = defaultServices;
export const DEFAULT_PROJECTS_PAGE = defaultProjects;
export const DEFAULT_WHO_WE_SERVE_PAGE = defaultWhoWeServe;
export const DEFAULT_CONTACT_PAGE = defaultContact;
export const DEFAULT_LEGAL_PAGES = defaultLegal;
export const DEFAULT_FOOTER_SETTINGS = defaultFooter;

// Merge Keystatic singleton data with default fallbacks so missing fields never break rendering
function mergeSectionDefaults(defaults, data) {
  if (!data || typeof data !== 'object') return defaults;
  const result = { ...defaults };

  for (const key of Object.keys(defaults)) {
    const defVal = defaults[key];
    const curVal = data[key];

    if (curVal === undefined || curVal === null) {
      result[key] = defVal;
    } else if (Array.isArray(defVal)) {
      result[key] = Array.isArray(curVal) ? curVal : defVal;
    } else if (typeof defVal === 'object' && defVal !== null) {
      result[key] = { ...defVal, ...curVal };
    } else {
      result[key] = curVal;
    }
  }

  return result;
}

export async function getSiteSettings() {
  try {
    const data = await reader.singletons.siteSettings.read();
    return mergeSectionDefaults(DEFAULT_SITE_SETTINGS, data);
  } catch (error) {
    console.error('Error loading siteSettings singleton:', error);
    return DEFAULT_SITE_SETTINGS;
  }
}

export async function getHomePage() {
  try {
    const data = await reader.singletons.homePage.read();
    return mergeSectionDefaults(DEFAULT_HOME_PAGE, data);
  } catch (error) {
    console.error('Error loading homePage singleton:', error);
    return DEFAULT_HOME_PAGE;
  }
}

export async function getAboutPage() {
  try {
    const data = await reader.singletons.aboutPage.read();
    return mergeSectionDefaults(DEFAULT_ABOUT_PAGE, data);
  } catch (error) {
    console.error('Error loading aboutPage singleton:', error);
    return DEFAULT_ABOUT_PAGE;
  }
}

export async function getServicesPage() {
  try {
    const data = await reader.singletons.servicesPage.read();
    return mergeSectionDefaults(DEFAULT_SERVICES_PAGE, data);
  } catch (error) {
    console.error('Error loading servicesPage singleton:', error);
    return DEFAULT_SERVICES_PAGE;
  }
}

export async function getProjectsPage() {
  try {
    const data = await reader.singletons.projectsPage.read();
    return mergeSectionDefaults(DEFAULT_PROJECTS_PAGE, data);
  } catch (error) {
    console.error('Error loading projectsPage singleton:', error);
    return DEFAULT_PROJECTS_PAGE;
  }
}

export async function getWhoWeServePage() {
  try {
    const data = await reader.singletons.whoWeServePage.read();
    return mergeSectionDefaults(DEFAULT_WHO_WE_SERVE_PAGE, data);
  } catch (error) {
    console.error('Error loading whoWeServePage singleton:', error);
    return DEFAULT_WHO_WE_SERVE_PAGE;
  }
}

export async function getContactPage() {
  try {
    const data = await reader.singletons.contactPage.read();
    return mergeSectionDefaults(DEFAULT_CONTACT_PAGE, data);
  } catch (error) {
    console.error('Error loading contactPage singleton:', error);
    return DEFAULT_CONTACT_PAGE;
  }
}

export async function getLegalPages() {
  try {
    const data = await reader.singletons.legalPages.read();
    return mergeSectionDefaults(DEFAULT_LEGAL_PAGES, data);
  } catch (error) {
    console.error('Error loading legalPages singleton:', error);
    return DEFAULT_LEGAL_PAGES;
  }
}

export async function getFooterSettings() {
  try {
    const data = await reader.singletons.footerSettings.read();
    return mergeSectionDefaults(DEFAULT_FOOTER_SETTINGS, data);
  } catch (error) {
    console.error('Error loading footerSettings singleton:', error);
    return DEFAULT_FOOTER_SETTINGS;
  }
}

// Resolve top-level page visibility flags for the navigation bar and footer
export async function getNavigationVisibility() {
  const [about, services, projects, whoWeServe, contact, legal] = await Promise.all([
    getAboutPage(),
    getServicesPage(),
    getProjectsPage(),
    getWhoWeServePage(),
    getContactPage(),
    getLegalPages(),
  ]);

  return {
    about: about.pageEnabled !== false,
    services: services.pageEnabled !== false,
    projects: projects.pageEnabled !== false,
    whoWeServe: whoWeServe.pageEnabled !== false,
    contact: contact.pageEnabled !== false,
    privacy: legal.privacy?.enabled !== false,
    termsOfService: legal.termsOfService?.enabled !== false,
    accessibility: legal.accessibility?.enabled !== false,
    sitemap: legal.sitemap?.enabled !== false,
  };
}

// Aggregate section-level visibility flags across all primary pages
export async function getPageSections() {
  const [home, about, services, projects, whoWeServe, contact] = await Promise.all([
    getHomePage(),
    getAboutPage(),
    getServicesPage(),
    getProjectsPage(),
    getWhoWeServePage(),
    getContactPage(),
  ]);

  return {
    home: {
      showHero: home.hero?.enabled ?? true,
      showOverview: home.overview?.enabled ?? true,
      showServices: home.servicesSection?.enabled ?? true,
      showProcess: home.process?.enabled ?? true,
      showWhyUs: home.whyUs?.enabled ?? true,
      showTestimonials: home.partners?.enabled ?? true,
    },
    about: {
      showHero: about.hero?.enabled ?? true,
      showHighlights: about.highlights?.enabled ?? true,
      showStory: about.story?.enabled ?? true,
      showDisciplines: about.disciplines?.enabled ?? true,
      showValues: about.values?.enabled ?? true,
      showTeam: about.team?.enabled ?? true,
    },
    services: {
      showHero: services.hero?.enabled ?? true,
      showValueProps: services.valueProps?.enabled ?? true,
      showDisciplines: services.disciplines?.enabled ?? true,
      showCapabilities: services.capabilities?.enabled ?? true,
      showProcess: services.process?.enabled ?? true,
      showStandards: services.standards?.enabled ?? true,
      showFaq: services.faq?.enabled ?? true,
    },
    projects: {
      showHero: projects.hero?.enabled ?? true,
      showHighlights: projects.highlights?.enabled ?? true,
      showShowcase: projects.showcase?.enabled ?? false,
      showSectors: projects.sectors?.enabled ?? true,
      showConfidentialityCallout: projects.confidentialityCallout?.enabled ?? true,
    },
    whoWeServe: {
      showHero: whoWeServe.hero?.enabled ?? true,
      showCoverage: whoWeServe.coverage?.enabled ?? true,
      showComplianceCallout: whoWeServe.complianceCallout?.enabled ?? true,
      showClientTypes: whoWeServe.clientTypes?.enabled ?? true,
      showAdvantage: whoWeServe.advantage?.enabled ?? true,
    },
    contact: {
      showHero: contact.hero?.enabled ?? true,
      showChannels: contact.channels?.enabled ?? true,
      showForm: contact.formSection?.enabled ?? true,
      showSidebar: contact.sidebar?.enabled ?? true,
    },
  };
}
