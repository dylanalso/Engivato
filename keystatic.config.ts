// keystatic.config.ts
import { config, fields, collection, singleton } from '@keystatic/core';

const isDev = process.env.NODE_ENV === 'development';

export default config({
  storage: {
    kind: isDev ? 'local' : 'cloud',
  },
  cloud: {
    project: 'engivato/engivato',
  },

  singletons: {
    siteSettings: singleton({
      label: 'Site Settings & Construction Mode',
      path: 'src/content/settings/site',
      format: { data: 'json' },
      schema: {
        underConstruction: fields.checkbox({
          label: 'Enable Under Construction Mode',
          description:
            '⚠️ CAUTION (SEO Impact): When enabled, this replaces the entire public website with the Under Construction page on production. Search engine crawlers will NOT index hidden pages while active.',
          defaultValue: false,
        }),
        previewInDev: fields.checkbox({
          label: 'Preview Under Construction on Localhost',
          description:
            'Enable this to preview the Under Construction screen on http://localhost:3000/ during local development without needing a production build.',
          defaultValue: false,
        }),
        heading: fields.text({
          label: 'Headline',
          defaultValue: 'Engineering High-Performance Solutions That Perform',
        }),
        subheading: fields.text({
          label: 'Status Pill Text',
          defaultValue: 'Website Under Construction • Launching Soon',
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          defaultValue:
            'We are currently building our full digital platform. Engivato PLLC delivers licensed Mechanical, Electrical, and Plumbing (MEP) consulting, stamped permit drawings, and fast-track tenant fit-out engineering across Texas.',
        }),
        showFeatureCards: fields.checkbox({
          label: 'Show 01-03 Feature Highlights Grid',
          defaultValue: true,
        }),
        showContactCard: fields.checkbox({
          label: 'Show Direct Email / RFP Action Box',
          defaultValue: true,
        }),
      },
    }),
    pageSections: singleton({
      label: 'Page Sections Visibility',
      path: 'src/content/settings/page-sections',
      format: { data: 'json' },
      schema: {
        home: fields.object(
          {
            showHero: fields.checkbox({
              label: 'Hero Section',
              description: '⚠️ Hiding removes H1 and primary call-to-action.',
              defaultValue: true,
            }),
            showOverview: fields.checkbox({
              label: 'Company Overview Section',
              description: '⚠️ Hiding removes company background keywords.',
              defaultValue: true,
            }),
            showServices: fields.checkbox({
              label: 'Services Grid Section',
              description: '⚠️ Hiding removes services preview grid.',
              defaultValue: true,
            }),
            showProcess: fields.checkbox({
              label: 'How We Work (Process) Section',
              description: '⚠️ Hiding removes 3-step process cards.',
              defaultValue: true,
            }),
            showWhyUs: fields.checkbox({
              label: 'Why Partner With Engivato Section',
              description: '⚠️ Hiding removes value proposition bullet points.',
              defaultValue: true,
            }),
            showTestimonials: fields.checkbox({
              label: 'Client Logos / Testimonials Section',
              description: '⚠️ Hiding removes client trust indicators.',
              defaultValue: true,
            }),
          },
          { label: 'Home Page Sections' }
        ),
        about: fields.object(
          {
            showHero: fields.checkbox({
              label: 'Hero Header',
              description: '⚠️ Hiding removes page introduction & H1.',
              defaultValue: true,
            }),
            showStory: fields.checkbox({
              label: 'Story & Quick Stats Section',
              description: '⚠️ Hiding removes company narrative and statistics.',
              defaultValue: true,
            }),
            showDisciplines: fields.checkbox({
              label: 'Core Engineering Disciplines',
              description: '⚠️ Hiding removes MEP discipline cards.',
              defaultValue: true,
            }),
            showValues: fields.checkbox({
              label: 'Our Guiding Principles (Values)',
              description: '⚠️ Hiding removes company values and principles.',
              defaultValue: true,
            }),
            showTeam: fields.checkbox({
              label: 'Leadership & Expertise Team',
              description: '⚠️ Hiding removes team bios.',
              defaultValue: true,
            }),
          },
          { label: 'About Page Sections' }
        ),
        services: fields.object(
          {
            showHero: fields.checkbox({
              label: 'Hero Header',
              description: '⚠️ Hiding removes services hero banner & CTA buttons.',
              defaultValue: true,
            }),
            showValueProps: fields.checkbox({
              label: 'Value Proposition / Differentiator Strip',
              description: '⚠️ Hiding removes PE stamped & sealed badge strip.',
              defaultValue: true,
            }),
            showDisciplines: fields.checkbox({
              label: 'MEP Core Disciplines Cards',
              description: '⚠️ Hiding removes detailed scope lists for mechanical, electrical, plumbing & engineering consulting.',
              defaultValue: true,
            }),
            showCapabilities: fields.checkbox({
              label: 'Specialized Capabilities Grid',
              description: '⚠️ Hiding removes BIM, COMcheck, TI cards.',
              defaultValue: true,
            }),
            showProcess: fields.checkbox({
              label: 'Project Delivery Lifecycle (Phases 1-5)',
              description: '⚠️ Hiding removes 5-step milestone process.',
              defaultValue: true,
            }),
            showStandards: fields.checkbox({
              label: 'Codes, Standards & Software Badges',
              description: '⚠️ Hiding removes Revit, ASHRAE, IBC code badges.',
              defaultValue: true,
            }),
            showFaq: fields.checkbox({
              label: 'Frequently Asked Questions (FAQ)',
              description: '⚠️ Hiding removes FAQ questions and answers.',
              defaultValue: true,
            }),
          },
          { label: 'Services Page Sections' }
        ),
        projects: fields.object(
          {
            showHero: fields.checkbox({
              label: 'Hero Header',
              description: '⚠️ Hiding removes projects hero banner.',
              defaultValue: true,
            }),
            showHighlights: fields.checkbox({
              label: 'Quick Highlights Strip',
              description: '⚠️ Hiding removes 100% permit approval badge strip.',
              defaultValue: true,
            }),
            showShowcase: fields.checkbox({
              label: 'Project Showcase / Case Studies',
              description: '⚠️ Hiding removes the filterable project portfolio showcase.',
              defaultValue: true,
            }),
            showSectors: fields.checkbox({
              label: 'Sectors Served Overview',
              description: '⚠️ Hiding removes restaurant, warehouse, healthcare sector cards.',
              defaultValue: true,
            }),
          },
          { label: 'Projects Page Sections' }
        ),
        whoWeServe: fields.object(
          {
            showHero: fields.checkbox({
              label: 'Hero Header',
              description: '⚠️ Hiding removes regional headline & intro.',
              defaultValue: true,
            }),
            showCoverage: fields.checkbox({
              label: 'Regional Coverage & Municipalities',
              description: '⚠️ Hiding removes DFW county breakdown and city tags.',
              defaultValue: true,
            }),
            showComplianceCallout: fields.checkbox({
              label: 'Local Code Compliance Callout Box',
              description: '⚠️ Hiding removes North Texas code compliance box.',
              defaultValue: true,
            }),
            showClientTypes: fields.checkbox({
              label: 'Target Industries & Client Types',
              description: '⚠️ Hiding removes architects, contractors, developers cards.',
              defaultValue: true,
            }),
            showAdvantage: fields.checkbox({
              label: 'The Engivato DFW Advantage',
              description: '⚠️ Hiding removes 3-point advantage section.',
              defaultValue: true,
            }),
          },
          { label: 'Who We Serve Page Sections' }
        ),
        contact: fields.object(
          {
            showHero: fields.checkbox({
              label: 'Hero Header',
              description: '⚠️ Hiding removes contact hero banner.',
              defaultValue: true,
            }),
            showChannels: fields.checkbox({
              label: 'Direct Communication Channels Strip',
              description: '⚠️ Hiding removes email & response commitment banner.',
              defaultValue: true,
            }),
            showForm: fields.checkbox({
              label: 'Inquiry Form',
              description: '⚠️ Hiding removes the interactive proposal request form.',
              defaultValue: true,
            }),
            showSidebar: fields.checkbox({
              label: 'Information Sidebar (Process, RFP upload info, FAQs)',
              description: '⚠️ Hiding removes process steps, file upload info, and FAQs.',
              defaultValue: true,
            }),
          },
          { label: 'Contact Page Sections' }
        ),
      },
    }),
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
        badge: fields.text({ label: 'Discipline Badge (e.g. Discipline 01)' }),
        tagline: fields.text({ label: 'Short Tagline' }),
        desc: fields.text({ label: 'Description', multiline: true }),
        anchor: fields.text({ label: 'Anchor ID on Services Page (e.g. mechanical, electrical, plumbing, consulting)' }),
        deliverables: fields.array(
          fields.text({ label: 'Deliverable' }),
          {
            label: 'Key Deliverables & Scope Highlights',
            itemLabel: (props) => props.value || 'Deliverable',
          }
        ),
        order: fields.integer({ label: 'Display Order (1-4)', defaultValue: 1 }),
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
  },
});