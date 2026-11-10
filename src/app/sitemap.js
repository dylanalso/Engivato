import { getNavigationVisibility } from '../lib/settings';
import { SITE_URL } from '../lib/constants';

export const dynamic = 'force-static';

const BASE_URL = SITE_URL;

export default async function sitemap() {
  const visibility = await getNavigationVisibility();
  const lastModified = new Date();

  const routes = [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
      enabled: true,
    },
    {
      url: `${BASE_URL}/services/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      enabled: visibility.services,
    },
    {
      url: `${BASE_URL}/whoWeServe/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      enabled: visibility.whoWeServe,
    },
    {
      url: `${BASE_URL}/contact/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      enabled: visibility.contact,
    },
    {
      url: `${BASE_URL}/about/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      enabled: visibility.about,
    },
    {
      url: `${BASE_URL}/projects/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      enabled: visibility.projects,
    },
    {
      url: `${BASE_URL}/sitemap/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
      enabled: visibility.sitemap !== false,
    },
    {
      url: `${BASE_URL}/privacy/`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
      enabled: visibility.privacy,
    },
    {
      url: `${BASE_URL}/termsOfService/`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
      enabled: visibility.termsOfService,
    },
    {
      url: `${BASE_URL}/accessibility/`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
      enabled: visibility.accessibility,
    },
  ];

  return routes
    .filter((route) => route.enabled)
    .map(({ url, lastModified: mod, changeFrequency, priority }) => ({
      url,
      lastModified: mod,
      changeFrequency,
      priority,
    }));
}

