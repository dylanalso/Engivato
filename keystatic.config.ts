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
    portfolio: collection({
      label: 'Portfolio',
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