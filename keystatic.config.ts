// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

const isDev = process.env.NODE_ENV === 'development';

export default config({
  storage: {
    kind: isDev ? 'local' : 'cloud',
  },
  cloud: {
    project: 'engivato/engivato',
  },

  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
    services: collection({
      label: 'Services',
      slugField: 'title',
      path: 'src/content/services/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        desc: fields.text({ label: 'Description', multiline: true }),
      },
    }),
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        desc: fields.text({ label: 'Description', multiline: true }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Commercial & Retail', value: 'Commercial & Retail' },
            { label: 'Restaurant & Hospitality', value: 'Restaurant & Hospitality' },
            { label: 'Industrial & Warehouse', value: 'Industrial & Warehouse' },
            { label: 'Healthcare & Medical', value: 'Healthcare & Medical' },
            { label: 'Corporate Office', value: 'Corporate Office' },
            { label: 'Multi-Family Residential', value: 'Multi-Family Residential' },
          ],
          defaultValue: 'Commercial & Retail',
        }),
        image: fields.image({
          label: 'Project Photo / Thumbnail',
          directory: 'public/images/projects',
          publicPath: '/images/projects/',
        }),
        location: fields.text({ label: 'Location' }),
        scope: fields.text({ label: 'Scope of Work' }),
        year: fields.text({ label: 'Year Completed / Status' }),
      },
    }),
    portfolio: collection({
      label: 'Portfolio (Legacy)',
      slugField: 'title',
      path: 'src/content/portfolio/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        desc: fields.text({ label: 'Description', multiline: true }),
      },
    }),
  },
});