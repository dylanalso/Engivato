import { config, fields, collection, singleton } from '@keystatic/core';

const isDev = process.env.NODE_ENV === 'development';

export default config({
  storage: {
    kind: isDev ? 'local' : 'cloud',
  },
  cloud: {
    project: 'engivato/engivato',
  },
  ui: {
    brand: {
      name: 'Engivato PLLC CMS',
    },
    navigation: {
      'Pages & Modular Sections': [
        'homePage',
        'aboutPage',
        'servicesPage',
        'projectsPage',
        'whoWeServePage',
        'contactPage',
        'legalPages',
      ],
      'Collections & Cards': [
        'services',
        'projects',
      ],
      'Global & Site Settings': [
        'footerSettings',
        'siteSettings',
      ],
    },
  },

  singletons: {
    // Home Page Singleton
    homePage: singleton({
      label: 'Home Page',
      path: 'src/content/pages/home',
      format: { data: 'json' },
      schema: {
        seo: fields.object(
          {
            metaTitle: fields.text({
              label: 'SEO Page Title (<title>)',
              description:
                '🔍 SEO CRITICAL (Title Tag): Shown in Google search results, browser tabs, and social previews. Ideal length: 50–60 characters. Include primary keywords ("Texas MEP Engineering Firm") and "Engivato PLLC".',
              defaultValue: 'Engivato PLLC | Texas MEP Engineering Firm',
            }),
            metaDescription: fields.text({
              label: 'SEO Meta Description',
              multiline: true,
              description:
                '🔍 SEO CRITICAL (Meta Description): Snippet displayed below your title in search results. Ideal length: 120–160 characters. Mention Mechanical, Electrical, Plumbing (MEP) and Dallas-Fort Worth / Texas.',
              defaultValue:
                'Engivato PLLC is a Texas-based engineering firm providing practical, innovative, and reliable Mechanical, Electrical, and Plumbing (MEP) engineering solutions across Dallas-Fort Worth and Texas.',
            }),
          },
          {
            label: '0. SEO & Page Metadata',
            description: 'Controls how the Home Page appears in Google search results and social link previews.',
          }
        ),

        hero: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Hero Section',
              description:
                '⚠️ SEO Impact (Critical): Hiding this section removes the primary H1 page title and main conversion call-to-action from the homepage.',
              defaultValue: true,
            }),
            badge: fields.text({
              label: 'Top Eyebrow Badge',
              description: '🔍 SEO Note: High-visibility keyword badge above the H1.',
              defaultValue: 'Texas MEP Engineering Firm',
            }),
            headingLine1: fields.text({
              label: 'Main Headline — Line 1 (H1)',
              description:
                '🔍 SEO CRITICAL (H1 Heading): First line of the main H1 heading on the Home page. Search engines weight H1 text heavily.',
              defaultValue: 'Innovating the Future of',
            }),
            headingHighlight: fields.text({
              label: 'Main Headline — Highlighted Line 2 (H1)',
              description:
                '🔍 SEO CRITICAL (H1 Heading): Gradient-highlighted second part of the H1 heading.',
              defaultValue: 'Your Infrastructure',
            }),
            subtitle: fields.text({
              label: 'Hero Subtitle / Introductory Copy',
              multiline: true,
              description:
                '🔍 SEO HIGH: Primary introductory paragraph directly beneath the H1. Keep core keywords like "Mechanical, Electrical, and Plumbing (MEP) engineering solutions" here.',
              defaultValue:
                'We provide innovative, practical, and reliable Mechanical, Electrical, and Plumbing (MEP) engineering solutions to help clients develop high-performing, efficient, and sustainable building systems.',
            }),
            primaryCtaText: fields.text({
              label: 'Primary Button Text',
              defaultValue: 'Start Your Project',
            }),
            primaryCtaHref: fields.text({
              label: 'Primary Button Link',
              defaultValue: '/contact',
            }),
            secondaryCtaText: fields.text({
              label: 'Secondary Button Text',
              description:
                '🔍 SEO Note: Use descriptive link text (e.g., "See Who We Serve") rather than generic phrases like "Learn More".',
              defaultValue: 'See Who We Serve',
            }),
            secondaryCtaHref: fields.text({
              label: 'Secondary Button Link',
              defaultValue: '/whoWeServe',
            }),
          },
          { label: '1. Hero Section' }
        ),

        overview: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Company Overview Section',
              description:
                '⚠️ SEO Impact (High): Hiding removes the H2 overview heading, company background keywords, and 3D BIM workstation image alt text.',
              defaultValue: true,
            }),
            heading: fields.text({
              label: 'Section Heading (H2)',
              description: '🔍 SEO HIGH (H2 Heading): Primary section heading introducing Engivato PLLC.',
              defaultValue: 'Driving Innovation Through Intelligent Engineering',
            }),
            paragraph1: fields.text({
              label: 'First Paragraph',
              multiline: true,
              description:
                '🔍 SEO HIGH: Core entity description used by search engines to understand who Engivato PLLC is, where it operates (Texas), and what it delivers (MEP engineering).',
              defaultValue:
                'Engivato PLLC is a Texas-based engineering firm focused on providing innovative, practical, and reliable Mechanical, Electrical, and Plumbing (MEP) engineering solutions. Our goal is to help clients develop high-performing, efficient, and sustainable building systems through technical expertise, thoughtful design, and effective project coordination.',
            }),
            paragraph2: fields.text({
              label: 'Second Paragraph',
              multiline: true,
              description: '🔍 SEO Supporting Copy: Reinforces engineering technology, constructability, and operational value.',
              defaultValue:
                'Our company name reflects our commitment to combining engineering expertise with innovation and modern technology. We aim to build a forward-thinking engineering practice that understands not only the technical requirements of a project but also its operational, financial, and construction challenges.',
            }),
            imageAlt: fields.text({
              label: 'Workstation Image Alt Text',
              description:
                '🔍 SEO & Accessibility (Image Alt Text): Describes the image for Google Image Search and screen readers.',
              defaultValue:
                'Engivato PLLC - MEP Engineering Design Workstation with 3D BIM coordination and construction blueprints',
            }),
            imageCaptionLeft: fields.text({
              label: 'Image Overlay Caption (Left)',
              defaultValue: '3D BIM & Construction Documents',
            }),
            imageCaptionRight: fields.text({
              label: 'Image Overlay Badge (Right)',
              defaultValue: 'PE-Stamped Precision',
            }),
          },
          { label: '2. Company Overview Section' }
        ),

        servicesSection: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Services Grid Section',
              description:
                '⚠️ SEO Impact (High): Hiding removes the core MEP engineering services preview grid and internal anchor links to the Services page. (Note: Individual service cards in this grid are edited in the "Home Services Cards" collection.)',
              defaultValue: true,
            }),
            eyebrow: fields.text({
              label: 'Eyebrow Label',
              defaultValue: 'Core Engineering Disciplines',
            }),
            heading: fields.text({
              label: 'Section Heading (H2)',
              description: '🔍 SEO HIGH (H2 Heading): Section heading for your core MEP engineering services.',
              defaultValue: 'Our Services',
            }),
            description: fields.text({
              label: 'Section Intro Description',
              multiline: true,
              description: '🔍 SEO Supporting Copy: Summarizes your mechanical, electrical, plumbing, and consulting offerings.',
              defaultValue:
                'Innovative, practical, and reliable mechanical, electrical, and plumbing engineering solutions along with dedicated project consulting support.',
            }),
            bottomCalloutText: fields.text({
              label: 'Bottom Callout Prompt Text',
              description: '🔍 SEO Note: Mentions secondary high-value keywords (3D Revit BIM, COMcheck, tenant improvements).',
              defaultValue:
                'Need 3D Revit BIM clash detection, COMcheck energy compliance, or tenant improvements?',
            }),
            bottomCalloutLinkText: fields.text({
              label: 'Bottom Callout Link Text',
              description: '🔍 SEO Internal Link Anchor: Descriptive anchor text pointing to the full /services page.',
              defaultValue: 'Explore All Services & Specialized Capabilities →',
            }),
          },
          { label: '3. Services Grid Section' }
        ),

        process: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show How We Work (Process) Section',
              description:
                '⚠️ SEO Impact (Medium): Hiding removes the H2 process heading and 3-step engineering workflow keywords (clash resolution, value engineering, permit-ready construction documents).',
              defaultValue: true,
            }),
            heading: fields.text({
              label: 'Section Heading (H2)',
              description: '🔍 SEO HIGH (H2 Heading): Section heading for project workflow.',
              defaultValue: 'How We Work',
            }),
            description: fields.text({
              label: 'Section Intro Description',
              multiline: true,
              defaultValue:
                'We combine engineering knowledge, practical problem-solving, and modern digital workflows to deliver coordinated, constructible MEP designs on schedule.',
            }),
            steps: fields.array(
              fields.object({
                title: fields.text({
                  label: 'Step Title (H3)',
                  description: '🔍 SEO (H3 Subheading): Renders as an H3 heading on the card.',
                }),
                desc: fields.text({
                  label: 'Step Description',
                  multiline: true,
                }),
              }),
              {
                label: 'Process Steps (1–3)',
                itemLabel: (props) => props.fields.title.value || 'Process Step',
              }
            ),
          },
          { label: '4. How We Work (Process) Section' }
        ),

        whyUs: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Why Partner With Engivato Section',
              description:
                '⚠️ SEO Impact (Medium): Hiding removes value proposition bullet points and competitive differentiators.',
              defaultValue: true,
            }),
            heading: fields.text({
              label: 'Section Heading (H2)',
              description: '🔍 SEO HIGH (H2 Heading): Section heading highlighting competitive advantages.',
              defaultValue: 'Why Partner With Engivato?',
            }),
            description: fields.text({
              label: 'Section Description',
              multiline: true,
              defaultValue:
                "Engivato's competitive advantage is built around the combination of engineering knowledge, practical problem-solving, business awareness, and a modern approach to project delivery. We recognize that clients must balance performance, schedule, budget, operational reliability, and long-term value.",
            }),
            bulletPoints: fields.array(
              fields.text({ label: 'Bullet Point' }),
              {
                label: 'Key Differentiator Bullet Points',
                itemLabel: (props) => props.value || 'Differentiator',
              }
            ),
            imageAlt: fields.text({
              label: 'Partner Image Alt Text',
              description: '🔍 SEO & Accessibility (Image Alt Text): Descriptive alt text for the section image.',
              defaultValue: 'Why Partner with Engivato',
            }),
          },
          { label: '5. Why Partner With Engivato Section' }
        ),

        partners: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Built for Texas Project Teams (Partners) Section',
              description:
                '⚠️ SEO Impact (High): Hiding removes target client segment keywords (General Contractors, Architects, Developers, Facility Managers) and internal link to Who We Serve.',
              defaultValue: true,
            }),
            eyebrow: fields.text({
              label: 'Eyebrow Label',
              defaultValue: 'Collaboration Across Built Environments',
            }),
            heading: fields.text({
              label: 'Section Heading (H2)',
              description: '🔍 SEO HIGH (H2 Heading): Regional and audience-focused H2 heading.',
              defaultValue: 'Built for Texas Project Teams',
            }),
            description: fields.text({
              label: 'Section Intro Description',
              multiline: true,
              defaultValue:
                'We deliver responsive, principal-led MEP engineering tailored to the constructability demands, operating schedules, and municipal permitting timelines of our project partners.',
            }),
            cards: fields.array(
              fields.object({
                title: fields.text({
                  label: 'Partner Group Title (H3)',
                  description: '🔍 SEO (H3 Subheading): Targets specific commercial client segments.',
                }),
                subtitle: fields.text({
                  label: 'Badge Subtitle',
                }),
                desc: fields.text({
                  label: 'Description',
                  multiline: true,
                  description: '🔍 SEO Note: Include deliverables relevant to this partner type (e.g., RFIs, energy codes, RTU replacements).',
                }),
              }),
              {
                label: 'Partner Cards',
                itemLabel: (props) => props.fields.title.value || 'Partner Card',
              }
            ),
            ctaText: fields.text({
              label: 'Bottom Link Text',
              description: '🔍 SEO Internal Link Anchor: Descriptive link text to /whoWeServe.',
              defaultValue: 'Explore all client & partner capabilities',
            }),
            ctaHref: fields.text({
              label: 'Bottom Link URL',
              defaultValue: '/whoWeServe',
            }),
          },
          { label: '6. Project Partners Section' }
        ),
      },
    }),

    // About Page Singleton
    aboutPage: singleton({
      label: 'About Page',
      path: 'src/content/pages/about',
      format: { data: 'json' },
      schema: {
        pageEnabled: fields.checkbox({
          label: 'Enable About Page (Show in Navigation & Allow Public Access)',
          description:
            '⚠️ SEO & Navigation Impact (Critical): Unchecking this hides "About" from the top navigation menu, sets "noindex" for search engines, and displays a friendly "Page Unavailable" screen if someone visits /about directly.',
          defaultValue: true,
        }),
        seo: fields.object(
          {
            metaTitle: fields.text({
              label: 'SEO Page Title (<title>)',
              description:
                '🔍 SEO CRITICAL (Title Tag): Shown in Google search results and browser tabs. Ideal length: 50–60 characters.',
              defaultValue: 'About Us | Engivato PLLC - Texas MEP Engineering',
            }),
            metaDescription: fields.text({
              label: 'SEO Meta Description',
              multiline: true,
              description:
                '🔍 SEO CRITICAL (Meta Description): Summary shown in search results. Ideal length: 120–160 characters.',
              defaultValue:
                'Learn about Engivato PLLC, a Texas-based engineering firm providing innovative, practical, and reliable Mechanical, Electrical, and Plumbing (MEP) solutions.',
            }),
          },
          { label: '0. SEO & Page Metadata' }
        ),

        hero: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Hero Header Section',
              description: '⚠️ SEO Impact (Critical): Hiding removes the About page H1 heading and introduction.',
              defaultValue: true,
            }),
            eyebrow: fields.text({
              label: 'Eyebrow Badge',
              defaultValue: 'About Engivato PLLC',
            }),
            heading: fields.text({
              label: 'Main Page Heading (H1)',
              description: '🔍 SEO CRITICAL (H1 Heading): Primary H1 heading for the About page.',
              defaultValue: 'Engineering Innovation for Built Environments',
            }),
            description: fields.text({
              label: 'Hero Description',
              multiline: true,
              description: '🔍 SEO HIGH: Introductory summary with core MEP engineering keywords.',
              defaultValue:
                'We provide cutting-edge Mechanical, Electrical, and Plumbing (MEP) engineering solutions that balance functionality, efficiency, and architectural vision.',
            }),
          },
          { label: '1. Hero Header Section' }
        ),

        highlights: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Practice Highlights Trust Bar',
              description: '⚠️ SEO Impact (Low-Medium): Hiding removes the 4 quick-highlight trust badges below the hero.',
              defaultValue: true,
            }),
            items: fields.array(
              fields.object({
                title: fields.text({
                  label: 'Highlight Title (H3)',
                }),
                desc: fields.text({
                  label: 'Highlight Description',
                  multiline: true,
                }),
              }),
              {
                label: 'Trust Bar Items (4)',
                itemLabel: (props) => props.fields.title.value || 'Highlight',
              }
            ),
          },
          { label: '2. Practice Highlights Trust Bar' }
        ),

        story: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Our Story & Commitment Section',
              description: '⚠️ SEO Impact (High): Hiding removes the company narrative H2, brand story, and core market keywords.',
              defaultValue: true,
            }),
            heading: fields.text({
              label: 'Section Heading (H2)',
              description: '🔍 SEO HIGH (H2 Heading): Primary narrative heading on the About page.',
              defaultValue: 'Our Story & Commitment',
            }),
            paragraph1: fields.text({
              label: 'First Paragraph',
              multiline: true,
              description: '🔍 SEO HIGH: Core brand and MEP service positioning.',
              defaultValue:
                'Engivato PLLC is a Texas-based engineering firm focused on providing innovative, practical, and reliable Mechanical, Electrical, and Plumbing (MEP) engineering solutions. Our goal is to help clients develop high-performing, efficient, and sustainable building systems through technical expertise, thoughtful design, and effective project coordination.',
            }),
            paragraph2: fields.text({
              label: 'Second Paragraph',
              multiline: true,
              defaultValue:
                'Our company name reflects our commitment to combining engineering expertise with innovation and modern technology. We partner with general contractors, commercial developers, architects, and property managers to deliver forward-thinking engineering that solves real-world operational and construction challenges.',
            }),
            quote: fields.text({
              label: 'Callout Quote',
              multiline: true,
              defaultValue:
                '“Engineering is not just about meeting code—it is about designing systems that elevate building longevity and human comfort.”',
            }),
            manifestoEyebrow: fields.text({
              label: 'Manifesto Card Eyebrow',
              defaultValue: 'The Engivato Standard',
            }),
            manifestoHeading: fields.text({
              label: 'Manifesto Card Heading (H3)',
              description: '🔍 SEO (H3 Subheading): Subheading inside the blue manifesto card.',
              defaultValue: 'Practical Engineering Driven by Modern Delivery',
            }),
            manifestoDescription: fields.text({
              label: 'Manifesto Card Description',
              multiline: true,
              defaultValue:
                'We believe engineering consulting should be direct, transparent, and aligned with constructibility. Every calculation and layout is designed to help contractors build efficiently and owners maximize operational value.',
            }),
            manifestoBullets: fields.array(
              fields.text({ label: 'Bullet Point' }),
              {
                label: 'Manifesto Card Bullet Points',
                itemLabel: (props) => props.value || 'Bullet Point',
              }
            ),
          },
          { label: '3. Our Story & Practice Manifesto Section' }
        ),

        disciplines: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Core Engineering Disciplines Section',
              description: '⚠️ SEO Impact (High): Hiding removes the 4 MEP discipline summary cards and technical scope keywords.',
              defaultValue: true,
            }),
            heading: fields.text({
              label: 'Section Heading (H2)',
              description: '🔍 SEO HIGH (H2 Heading): Section heading for engineering disciplines.',
              defaultValue: 'Core Engineering Disciplines',
            }),
            description: fields.text({
              label: 'Section Description',
              multiline: true,
              defaultValue:
                'Comprehensive, cross-disciplinary design designed to integrate seamlessly into modern construction.',
            }),
            items: fields.array(
              fields.object({
                title: fields.text({
                  label: 'Discipline Title (H3)',
                  description: '🔍 SEO (H3 Subheading): Core discipline keyword heading.',
                }),
                desc: fields.text({
                  label: 'Discipline Description',
                  multiline: true,
                  description: '🔍 SEO Note: Include specific engineering deliverables (load calculations, power distribution, sanitary waste, etc.).',
                }),
              }),
              {
                label: 'Discipline Cards',
                itemLabel: (props) => props.fields.title.value || 'Discipline',
              }
            ),
          },
          { label: '4. Core Engineering Disciplines Section' }
        ),

        values: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Our Guiding Principles (Values) Section',
              description: '⚠️ SEO Impact (Medium): Hiding removes company principles and constructability keywords.',
              defaultValue: true,
            }),
            heading: fields.text({
              label: 'Section Heading (H2)',
              description: '🔍 SEO HIGH (H2 Heading): Section heading for company values.',
              defaultValue: 'Our Guiding Principles',
            }),
            description: fields.text({
              label: 'Section Description',
              multiline: true,
              defaultValue:
                'The standards and values that inform every drawing, calculation, and site inspection we perform.',
            }),
            items: fields.array(
              fields.object({
                title: fields.text({
                  label: 'Principle Title (H3)',
                }),
                desc: fields.text({
                  label: 'Principle Description',
                  multiline: true,
                }),
              }),
              {
                label: 'Guiding Principles (1–4)',
                itemLabel: (props) => props.fields.title.value || 'Principle',
              }
            ),
          },
          { label: '5. Our Guiding Principles (Values) Section' }
        ),

        team: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Principal Leadership Section',
              description:
                '⚠️ SEO Impact (High - E-E-A-T): Hiding removes founder credentials and principal leadership details, which strengthen Google E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) signals.',
              defaultValue: true,
            }),
            eyebrow: fields.text({
              label: 'Eyebrow Badge',
              defaultValue: 'Principal Leadership',
            }),
            heading: fields.text({
              label: 'Section Heading (H2)',
              description: '🔍 SEO HIGH (H2 Heading): Section heading for leadership.',
              defaultValue: 'Direct Principal Engagement',
            }),
            description: fields.text({
              label: 'Section Description',
              multiline: true,
              defaultValue:
                'Work directly with the founding engineer on every phase of your project, from preliminary design to final permit approval.',
            }),
            leaderInitials: fields.text({
              label: 'Avatar Initials',
              defaultValue: 'HL',
            }),
            leaderName: fields.text({
              label: 'Principal Full Name (H3)',
              description: '🔍 SEO (Entity Recognition): Founder name associated with Engivato PLLC.',
              defaultValue: 'Hameed Lamy',
            }),
            leaderRole: fields.text({
              label: 'Principal Title / Role',
              defaultValue: 'Founder & Principal Engineer',
            }),
            leaderShortRole: fields.text({
              label: 'Avatar Subtitle Role',
              defaultValue: 'Founder & Principal',
            }),
            leaderBadge: fields.text({
              label: 'Green Status Badge',
              defaultValue: 'Principal-Led Practice',
            }),
            bioParagraph1: fields.text({
              label: 'Bio — Paragraph 1',
              multiline: true,
              defaultValue:
                'Hameed founded Engivato PLLC with a clear commitment: delivering practical, constructible, and technically rigorous Mechanical, Electrical, and Plumbing (MEP) engineering solutions with direct principal accountability.',
            }),
            bioParagraph2: fields.text({
              label: 'Bio — Paragraph 2',
              multiline: true,
              defaultValue:
                'Rather than passing drawings through junior staff or corporate bureaucracy, clients work directly with Hameed from project kickoff through permit submittal and construction administration.',
            }),
            highlights: fields.array(
              fields.text({ label: 'Checkmark Highlight' }),
              {
                label: 'Principal Engagement Highlights',
                itemLabel: (props) => props.value || 'Highlight',
              }
            ),
          },
          { label: '6. Principal Leadership Section' }
        ),
      },
    }),

    // Services Page Singleton
    servicesPage: singleton({
      label: 'Services Page',
      path: 'src/content/pages/services',
      format: { data: 'json' },
      schema: {
        pageEnabled: fields.checkbox({
          label: 'Enable Services Page (Show in Navigation & Allow Public Access)',
          description:
            '⚠️ SEO & Navigation Impact (Critical): Unchecking this hides "Services" from the top navigation menu, sets "noindex" for search engines, and displays a friendly "Page Unavailable" screen if someone visits /services directly.',
          defaultValue: true,
        }),
        seo: fields.object(
          {
            metaTitle: fields.text({
              label: 'SEO Page Title (<title>)',
              description:
                '🔍 SEO CRITICAL (Title Tag): Shown in Google search results and browser tabs. Ideal length: 50–60 characters.',
              defaultValue:
                'MEP Engineering Services | Mechanical, Electrical & Plumbing | Engivato PLLC',
            }),
            metaDescription: fields.text({
              label: 'SEO Meta Description',
              multiline: true,
              description:
                '🔍 SEO CRITICAL (Meta Description): Summary shown in search results. Ideal length: 120–160 characters.',
              defaultValue:
                'Comprehensive MEP engineering solutions by Engivato PLLC. Specializing in mechanical (HVAC), electrical, plumbing, engineering consulting, energy modeling, and Revit BIM design.',
            }),
          },
          { label: '0. SEO & Page Metadata' }
        ),

        hero: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Hero Header Section',
              description:
                '⚠️ SEO Impact (Critical): Hiding removes the primary H1 heading ("Full-Spectrum MEP Engineering Solutions") and hero conversion CTAs.',
              defaultValue: true,
            }),
            eyebrow: fields.text({
              label: 'Eyebrow Badge',
              defaultValue: 'Integrated Engineering Capabilities',
            }),
            heading: fields.text({
              label: 'Main Page Heading (H1)',
              description: '🔍 SEO CRITICAL (H1 Heading): Main H1 heading for the Services page.',
              defaultValue: 'Full-Spectrum MEP Engineering Solutions',
            }),
            description: fields.text({
              label: 'Hero Description',
              multiline: true,
              description: '🔍 SEO HIGH: Hero summary rich in MEP service keywords.',
              defaultValue:
                'From initial load calculation through final construction administration, Engivato PLLC delivers innovative, energy-efficient, and constructible mechanical, electrical, and plumbing designs.',
            }),
            primaryCtaText: fields.text({
              label: 'Primary Button Text',
              defaultValue: 'Request a Proposal',
            }),
            secondaryCtaText: fields.text({
              label: 'Secondary Button Text',
              defaultValue: 'Explore Disciplines',
            }),
          },
          { label: '1. Hero Header Section' }
        ),

        valueProps: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Value Proposition Strip',
              description: '⚠️ SEO Impact (Low-Medium): Hiding removes the 4 key differentiator badges below the hero.',
              defaultValue: true,
            }),
            items: fields.array(
              fields.object({
                title: fields.text({ label: 'Primary Title' }),
                desc: fields.text({ label: 'Subtitle Label' }),
              }),
              {
                label: 'Value Proposition Items (4)',
                itemLabel: (props) => props.fields.title.value || 'Value Prop',
              }
            ),
          },
          { label: '2. Value Proposition Strip' }
        ),

        disciplines: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Core MEP Disciplines Section',
              description:
                '⚠️ SEO Impact (Critical): Hiding removes the detailed Mechanical, Electrical, Plumbing, and Consulting scope breakdowns—the highest-ranking keyword content on this page.',
              defaultValue: true,
            }),
            eyebrow: fields.text({
              label: 'Eyebrow Badge',
              defaultValue: 'Core Engineering Services',
            }),
            heading: fields.text({
              label: 'Section Heading (H2)',
              description: '🔍 SEO HIGH (H2 Heading): Primary heading for the detailed MEP disciplines section.',
              defaultValue: 'Built on Technical Rigor & Coordination',
            }),
            description: fields.text({
              label: 'Section Description',
              multiline: true,
              defaultValue:
                'Every building system we engineer is tailored to optimize occupant comfort, life-safety protection, and operational sustainability.',
            }),
            deliverablesHeading: fields.text({
              label: 'Deliverables Box Subheading (H4)',
              defaultValue: 'Key Scope & Deliverables',
            }),
            items: fields.array(
              fields.object({
                id: fields.text({
                  label: 'Anchor ID (e.g. mechanical, electrical, plumbing, consulting)',
                  description:
                    '🔍 SEO & Navigation Note: Used for direct anchor links from the Home page (e.g. /services#mechanical).',
                }),
                badge: fields.text({
                  label: 'Discipline Badge (e.g. Discipline 01)',
                }),
                title: fields.text({
                  label: 'Discipline Title (H3)',
                  description: '🔍 SEO CRITICAL (H3 Heading): Primary discipline keyword title.',
                }),
                tagline: fields.text({
                  label: 'Highlight Tagline',
                  description: '🔍 SEO HIGH: Concise summary of key deliverables for this discipline.',
                }),
                description: fields.text({
                  label: 'Detailed Description',
                  multiline: true,
                  description: '🔍 SEO HIGH: In-depth paragraph describing technical capabilities for this discipline.',
                }),
                features: fields.array(
                  fields.text({ label: 'Scope / Deliverable Item' }),
                  {
                    label: 'Key Scope & Deliverables List',
                    description: '🔍 SEO HIGH: Long-tail engineering keywords that match specific client searches.',
                    itemLabel: (props) => props.value || 'Deliverable',
                  }
                ),
              }),
              {
                label: 'Core MEP Disciplines',
                itemLabel: (props) => props.fields.title.value || 'Discipline',
              }
            ),
          },
          { label: '3. Core MEP Disciplines Section' }
        ),

        capabilities: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Specialized Capabilities Grid',
              description:
                '⚠️ SEO Impact (High): Hiding removes high-intent service keywords including Energy Modeling (COMcheck/REScheck), Revit BIM Clash Detection, Tenant Improvements, and Construction Administration.',
              defaultValue: true,
            }),
            eyebrow: fields.text({
              label: 'Eyebrow Badge',
              defaultValue: 'Value-Added Expertise',
            }),
            heading: fields.text({
              label: 'Section Heading (H2)',
              description: '🔍 SEO HIGH (H2 Heading): Section heading for specialized capabilities.',
              defaultValue: 'Specialized Engineering Capabilities',
            }),
            description: fields.text({
              label: 'Section Description',
              multiline: true,
              defaultValue:
                'Beyond core design, we provide advanced technical evaluations and modeling tools that protect project schedules and bottom lines.',
            }),
            items: fields.array(
              fields.object({
                title: fields.text({
                  label: 'Capability Title (H3)',
                  description: '🔍 SEO HIGH (H3 Heading): Targets specialized service searches.',
                }),
                description: fields.text({
                  label: 'Capability Description',
                  multiline: true,
                }),
              }),
              {
                label: 'Specialized Capability Cards',
                itemLabel: (props) => props.fields.title.value || 'Capability',
              }
            ),
          },
          { label: '4. Specialized Capabilities Grid' }
        ),

        process: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Project Delivery Lifecycle (Phases 1–5)',
              description:
                '⚠️ SEO Impact (Medium): Hiding removes the 5-phase engineering delivery lifecycle (Schematic Design, DD, CD, Permitting, CA).',
              defaultValue: true,
            }),
            eyebrow: fields.text({
              label: 'Eyebrow Badge',
              defaultValue: 'Project Delivery Process',
            }),
            heading: fields.text({
              label: 'Section Heading (H2)',
              description: '🔍 SEO HIGH (H2 Heading): Section heading for project lifecycle phases.',
              defaultValue: 'How We Engineer Every Project',
            }),
            description: fields.text({
              label: 'Section Description',
              multiline: true,
              defaultValue:
                'A transparent, structured workflow designed to align with architectural milestones and contractor construction schedules.',
            }),
            phases: fields.array(
              fields.object({
                step: fields.text({ label: 'Phase Label (e.g. Phase 01)' }),
                title: fields.text({
                  label: 'Phase Title (H3)',
                  description: '🔍 SEO (H3 Subheading): Standard architectural/engineering phase name.',
                }),
                summary: fields.text({
                  label: 'Phase Summary',
                  multiline: true,
                }),
              }),
              {
                label: 'Lifecycle Phases (1–5)',
                itemLabel: (props) =>
                  `${props.fields.step.value || ''} - ${props.fields.title.value || 'Phase'}`,
              }
            ),
          },
          { label: '5. Project Delivery Lifecycle Section' }
        ),

        standards: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Codes, Standards & Software Badges Section',
              description:
                '⚠️ SEO Impact (Medium-High): Hiding removes technical code and software authority keywords (Autodesk Revit MEP, AutoCAD, ASHRAE, IBC, IECC, NEC, NFPA, COMcheck).',
              defaultValue: true,
            }),
            heading: fields.text({
              label: 'Section Heading (H3)',
              defaultValue: 'Industry Standards, Codes & Design Tools We Master',
            }),
            badges: fields.array(
              fields.text({ label: 'Code / Software Badge' }),
              {
                label: 'Standards & Software Badges',
                description: '🔍 SEO Note: Technical authority keywords that match code and software queries.',
                itemLabel: (props) => props.value || 'Badge',
              }
            ),
          },
          { label: '6. Codes, Standards & Software Badges' }
        ),

        faq: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Frequently Asked Questions (FAQ) Section',
              description:
                '⚠️ SEO Impact (High): Hiding removes FAQ question-and-answer content that targets long-tail search queries and AI/voice search answers.',
              defaultValue: true,
            }),
            eyebrow: fields.text({
              label: 'Eyebrow Badge',
              defaultValue: 'Common Questions',
            }),
            heading: fields.text({
              label: 'Section Heading (H2)',
              description: '🔍 SEO HIGH (H2 Heading): Section heading for FAQs.',
              defaultValue: 'Frequently Asked Questions',
            }),
            description: fields.text({
              label: 'Section Description',
              multiline: true,
              defaultValue:
                'Have questions about our engineering deliverables, licensing, or turnaround times?',
            }),
            items: fields.array(
              fields.object({
                question: fields.text({
                  label: 'Question (H3)',
                  description: '🔍 SEO HIGH (H3 Heading): Phrased as a natural question clients search on Google.',
                }),
                answer: fields.text({
                  label: 'Answer',
                  multiline: true,
                  description: '🔍 SEO HIGH: Clear, authoritative answer including relevant engineering terms.',
                }),
              }),
              {
                label: 'FAQ Items',
                itemLabel: (props) => props.fields.question.value || 'FAQ Question',
              }
            ),
          },
          { label: '7. Frequently Asked Questions (FAQ)' }
        ),
      },
    }),

    // Projects & Sectors Page Singleton
    projectsPage: singleton({
      label: 'Projects & Sectors Page',
      path: 'src/content/pages/projects',
      format: { data: 'json' },
      schema: {
        pageEnabled: fields.checkbox({
          label: 'Enable Projects Page (Show in Navigation & Allow Public Access)',
          description:
            '⚠️ SEO & Navigation Impact (Critical): Unchecking this hides "Projects" from the top navigation menu, sets "noindex" for search engines, and displays a friendly "Page Unavailable" screen if someone visits /projects directly.',
          defaultValue: true,
        }),
        seo: fields.object(
          {
            metaTitle: fields.text({
              label: 'SEO Page Title (<title>)',
              description:
                '🔍 SEO CRITICAL (Title Tag): Shown in Google search results and browser tabs. Ideal length: 50–60 characters.',
              defaultValue:
                'Sector Capabilities & Project Typologies | MEP Engineering | Engivato PLLC',
            }),
            metaDescription: fields.text({
              label: 'SEO Meta Description',
              multiline: true,
              description:
                '🔍 SEO CRITICAL (Meta Description): Summary shown in search results. Ideal length: 120–160 characters.',
              defaultValue:
                'Explore Engivato PLLC’s MEP engineering capabilities across commercial restaurants, office finish-outs, multifamily developments, retail spaces, and HVAC modernization throughout Texas.',
            }),
          },
          { label: '0. SEO & Page Metadata' }
        ),

        hero: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Hero Header Section',
              description:
                '⚠️ SEO Impact (Critical): Hiding removes the Projects/Sectors page H1 heading and introductory sector keywords.',
              defaultValue: true,
            }),
            eyebrow: fields.text({
              label: 'Eyebrow Badge',
              defaultValue: 'Sector Capabilities & Scope Focus',
            }),
            heading: fields.text({
              label: 'Main Page Heading (H1)',
              description: '🔍 SEO CRITICAL (H1 Heading): Main H1 heading for the Projects & Sectors page.',
              defaultValue: 'MEP Engineering Across Key Sectors',
            }),
            description: fields.text({
              label: 'Hero Description',
              multiline: true,
              description: '🔍 SEO HIGH: Summarizes sector focus across North Texas.',
              defaultValue:
                'Practical, code-compliant Mechanical, Electrical, and Plumbing engineering tailored to the unique operational, architectural, and schedule demands of North Texas facilities.',
            }),
            primaryCtaText: fields.text({
              label: 'Primary Button Text',
              defaultValue: 'Discuss Your Project Scope',
            }),
            secondaryCtaText: fields.text({
              label: 'Secondary Button Text',
              defaultValue: 'View All Services',
            }),
          },
          { label: '1. Hero Header Section' }
        ),

        highlights: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Quick Highlights Strip',
              description: '⚠️ SEO Impact (Low-Medium): Hiding removes the 4 engineering strength callouts below the hero.',
              defaultValue: true,
            }),
            items: fields.array(
              fields.object({
                value: fields.text({ label: 'Big Highlight Word' }),
                label: fields.text({ label: 'Subtitle Label' }),
              }),
              {
                label: 'Highlight Strip Items (4)',
                itemLabel: (props) =>
                  `${props.fields.value.value || ''} — ${props.fields.label.value || ''}`,
              }
            ),
          },
          { label: '2. Quick Highlights Strip' }
        ),

        showcase: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Interactive Project Case Studies Showcase',
              description:
                '⚠️ SEO Impact (Medium): Controls visibility of the filterable Project Portfolio Showcase (populated from the "Project Case Studies" collection). Keep disabled while placeholder projects are hidden; enable when ready to publish real case studies.',
              defaultValue: false,
            }),
            eyebrow: fields.text({
              label: 'Eyebrow Badge',
              defaultValue: 'Filter by Industry Sector',
            }),
            heading: fields.text({
              label: 'Section Heading (H2)',
              description: '🔍 SEO HIGH (H2 Heading): Section heading when the project showcase is enabled.',
              defaultValue: 'Selected Works & Case Studies',
            }),
            description: fields.text({
              label: 'Section Description',
              multiline: true,
              defaultValue:
                'Browse our projects across major commercial sectors. Each design reflects our commitment to code compliance, constructability, and energy efficiency.',
            }),
          },
          { label: '3. Interactive Project Showcase Section (Optional)' }
        ),

        sectors: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Sector Capabilities Main Section',
              description:
                '⚠️ SEO Impact (Critical): Hiding removes all detailed sector capability breakdowns (Restaurants, Office Finish-Outs, Multifamily, Retail Shell, HVAC Modernization).',
              defaultValue: true,
            }),
            eyebrow: fields.text({
              label: 'Eyebrow Badge',
              defaultValue: 'Targeted Built Environments',
            }),
            heading: fields.text({
              label: 'Section Heading (H2)',
              description: '🔍 SEO HIGH (H2 Heading): Main section heading for sector capabilities.',
              defaultValue: 'Engineering Tailored to Your Asset Type',
            }),
            description: fields.text({
              label: 'Section Description',
              multiline: true,
              defaultValue:
                'Every building sector has unique regulatory mandates, utility demands, and spatial constraints. We design constructible MEP systems aligned with contractor workflows.',
            }),
            deliverablesHeading: fields.text({
              label: 'Deliverables Box Heading (H4)',
              defaultValue: 'Key Engineering Deliverables',
            }),
            applicationsLabel: fields.text({
              label: 'Typical Applications Label',
              defaultValue: 'Typical Applications',
            }),
            ctaButtonText: fields.text({
              label: 'Sector Card Button Text',
              defaultValue: 'Request Scope Consultation',
            }),
            items: fields.array(
              fields.object({
                id: fields.text({
                  label: 'Anchor ID (e.g. restaurants, office-finish-outs, multifamily)',
                  description: '🔍 SEO & Navigation Note: Used for direct section anchor links.',
                }),
                title: fields.text({
                  label: 'Sector Title (H3)',
                  description: '🔍 SEO CRITICAL (H3 Heading): Targets industry-specific MEP searches (e.g. Restaurant MEP, Office Finish-Out).',
                }),
                badge: fields.text({
                  label: 'Sector Badge',
                }),
                desc: fields.text({
                  label: 'Sector Overview Description',
                  multiline: true,
                  description: '🔍 SEO HIGH: Explains the engineering challenges and solutions for this building type.',
                }),
                scopes: fields.array(
                  fields.text({ label: 'Deliverable / Scope Item' }),
                  {
                    label: 'Key Engineering Deliverables',
                    description: '🔍 SEO HIGH: Specific technical deliverables (Type I hoods, grease interceptors, VAV/VRF, RTU replacements, etc.).',
                    itemLabel: (props) => props.value || 'Scope Item',
                  }
                ),
                idealFor: fields.text({
                  label: 'Typical Applications List',
                  multiline: true,
                  description: '🔍 SEO Note: Lists specific facility subtypes for long-tail keyword coverage.',
                }),
              }),
              {
                label: 'Sector Capability Cards',
                itemLabel: (props) => props.fields.title.value || 'Sector',
              }
            ),
          },
          { label: '4. Sector Capabilities Section' }
        ),

        confidentialityCallout: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Sample Drawing Packages Callout Box',
              description:
                '⚠️ SEO & Conversion Impact (Low-Medium): Hiding removes the bottom callout inviting clients to request sample stamped MEP plan sets.',
              defaultValue: true,
            }),
            eyebrow: fields.text({
              label: 'Eyebrow Badge',
              defaultValue: 'Confidentiality & Deliverables',
            }),
            heading: fields.text({
              label: 'Callout Heading (H3)',
              defaultValue: 'Sample Drawing Packages & Plan Sets',
            }),
            description: fields.text({
              label: 'Callout Description',
              multiline: true,
              defaultValue:
                'In accordance with client non-disclosure agreements and commercial confidentiality, complete stamped MEP drawing sets, single-line schematics, and client references are provided directly upon request during project consultations.',
            }),
            ctaText: fields.text({
              label: 'Callout Button Text',
              defaultValue: 'Request Sample Drawings For Your Sector',
            }),
          },
          { label: '5. Sample Drawing Packages Callout Box' }
        ),
      },
    }),

    // Who We Serve Page Singleton
    whoWeServePage: singleton({
      label: 'Who We Serve Page',
      path: 'src/content/pages/who-we-serve',
      format: { data: 'json' },
      schema: {
        pageEnabled: fields.checkbox({
          label: 'Enable Who We Serve Page (Show in Navigation & Allow Public Access)',
          description:
            '⚠️ SEO & Navigation Impact (Critical - Local SEO): Unchecking this hides "Who We Serve" from the top navigation menu, sets "noindex" for search engines, and displays a friendly "Page Unavailable" screen if someone visits /whoWeServe directly.',
          defaultValue: true,
        }),
        seo: fields.object(
          {
            metaTitle: fields.text({
              label: 'SEO Page Title (<title>)',
              description:
                '🔍 SEO CRITICAL (Title Tag): Primary local SEO title targeting Dallas-Fort Worth (DFW). Ideal length: 50–60 characters.',
              defaultValue:
                'Who We Serve | Dallas-Fort Worth (DFW) MEP Engineering | Engivato PLLC',
            }),
            metaDescription: fields.text({
              label: 'SEO Meta Description',
              multiline: true,
              description:
                '🔍 SEO CRITICAL (Meta Description): Local SEO summary for search results. Ideal length: 120–160 characters.',
              defaultValue:
                'Engivato PLLC provides high-performance Mechanical, Electrical, and Plumbing (MEP) engineering solutions across the Dallas-Fort Worth (DFW) metroplex and North Texas.',
            }),
          },
          { label: '0. SEO & Page Metadata' }
        ),

        hero: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Hero Header Section',
              description:
                '⚠️ SEO Impact (Critical - Local SEO): Hiding removes the primary local SEO H1 heading ("Serving the Dallas–Fort Worth Metroplex & Beyond").',
              defaultValue: true,
            }),
            eyebrow: fields.text({
              label: 'Eyebrow Badge',
              defaultValue: 'Regional Engineering Leadership',
            }),
            headingPrefix: fields.text({
              label: 'Main Heading Prefix (H1)',
              description: '🔍 SEO CRITICAL (H1 Heading): Text before the blue highlighted region name.',
              defaultValue: 'Serving the',
            }),
            headingHighlight: fields.text({
              label: 'Main Heading Highlighted Region (H1)',
              description: '🔍 SEO CRITICAL (H1 Heading): Primary geographic target keyword.',
              defaultValue: 'Dallas–Fort Worth',
            }),
            headingSuffix: fields.text({
              label: 'Main Heading Suffix (H1)',
              description: '🔍 SEO CRITICAL (H1 Heading): Text after the highlighted region name.',
              defaultValue: 'Metroplex & Beyond',
            }),
            description: fields.text({
              label: 'Hero Description',
              multiline: true,
              description: '🔍 SEO HIGH (Local SEO): Introduces MEP engineering services for North Texas.',
              defaultValue:
                "Engivato PLLC provides specialized Mechanical, Electrical, and Plumbing (MEP) engineering solutions for architects, contractors, and owners navigating North Texas's dynamic building landscape.",
            }),
          },
          { label: '1. Hero Header Section' }
        ),

        coverage: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show DFW Regional Coverage & Municipalities Section',
              description:
                '⚠️ SEO Impact (Critical - Local SEO): Hiding removes DFW county cards and city-level keywords (Dallas, Fort Worth, Plano, Frisco, Arlington, etc.) which are essential for local search rankings.',
              defaultValue: true,
            }),
            eyebrow: fields.text({
              label: 'Eyebrow Badge',
              defaultValue: 'Local Presence, Proven Expertise',
            }),
            heading: fields.text({
              label: 'Section Heading (H2)',
              description: '🔍 SEO HIGH (H2 Heading): Primary local SEO heading for service areas.',
              defaultValue: 'Our DFW Service Coverage',
            }),
            description: fields.text({
              label: 'Section Description',
              multiline: true,
              defaultValue:
                'North Texas municipalities each maintain unique permitting processes, local amendments, and energy standards. We ensure your plans pass reviews swiftly.',
            }),
            statusBadge: fields.text({
              label: 'County Card Status Pill',
              defaultValue: 'Active Coverage',
            }),
            municipalitiesLabel: fields.text({
              label: 'Municipalities List Subheading',
              defaultValue: 'Key Municipalities',
            }),
            regions: fields.array(
              fields.object({
                county: fields.text({
                  label: 'County / Region Name (H3)',
                  description: '🔍 SEO HIGH (Local SEO H3): County keyword (e.g. Dallas County, Collin County).',
                }),
                desc: fields.text({
                  label: 'Region Description',
                  multiline: true,
                }),
                cities: fields.array(
                  fields.text({ label: 'City / Municipality Name' }),
                  {
                    label: 'Cities Served',
                    description: '🔍 SEO CRITICAL (Local SEO): City tags indexed for "MEP engineer near [City]" searches.',
                    itemLabel: (props) => props.value || 'City',
                  }
                ),
              }),
              {
                label: 'County Coverage Cards',
                itemLabel: (props) => props.fields.county.value || 'County',
              }
            ),
          },
          { label: '2. DFW Regional Coverage & Municipalities Section' }
        ),

        complianceCallout: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Local Code Compliance Callout Box',
              description:
                '⚠️ SEO Impact (Medium): Hiding removes North Texas building code and IECC compliance keywords.',
              defaultValue: true,
            }),
            heading: fields.text({
              label: 'Callout Heading (H3)',
              description: '🔍 SEO (H3 Subheading): Highlights local municipal code expertise.',
              defaultValue: 'Mastery of North Texas Building Codes',
            }),
            description: fields.text({
              label: 'Callout Description',
              multiline: true,
              defaultValue:
                'From Dallas Energy Code amendments and IECC standards to City of Fort Worth development guidelines, our team ensures complete plan compliance to expedite plan checks and avoid costly redlines.',
            }),
            ctaText: fields.text({
              label: 'Callout Button Text',
              defaultValue: 'Inquire for Your City',
            }),
          },
          { label: '3. Local Code Compliance Callout Box' }
        ),

        clientTypes: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Target Industries & Client Types Section',
              description:
                '⚠️ SEO Impact (High): Hiding removes stakeholder-specific H3 headings and descriptions (General Contractors, Architects, Developers, Property Managers, Consulting Partners, Restaurants/Retail).',
              defaultValue: true,
            }),
            eyebrow: fields.text({
              label: 'Eyebrow Badge',
              defaultValue: 'Target Industries & Partners',
            }),
            heading: fields.text({
              label: 'Section Heading (H2)',
              description: '🔍 SEO HIGH (H2 Heading): Section heading for target client segments.',
              defaultValue: 'Tailored Solutions for Every Stakeholder',
            }),
            description: fields.text({
              label: 'Section Description',
              multiline: true,
              defaultValue:
                'We engineer customized systems matching the exact constraints and goals of your project team.',
            }),
            items: fields.array(
              fields.object({
                title: fields.text({
                  label: 'Client Type Title (H3)',
                  description: '🔍 SEO HIGH (H3 Heading): Targets specific B2B partner searches.',
                }),
                desc: fields.text({
                  label: 'Client Type Description',
                  multiline: true,
                }),
              }),
              {
                label: 'Client & Partner Cards',
                itemLabel: (props) => props.fields.title.value || 'Client Type',
              }
            ),
          },
          { label: '4. Target Industries & Client Types Section' }
        ),

        advantage: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show The Engivato DFW Advantage Section',
              description: '⚠️ SEO Impact (Medium): Hiding removes the 3-point DFW competitive advantage cards.',
              defaultValue: true,
            }),
            heading: fields.text({
              label: 'Section Heading (H2)',
              description: '🔍 SEO HIGH (H2 Heading): Section heading for regional differentiators.',
              defaultValue: 'The Engivato DFW Advantage',
            }),
            description: fields.text({
              label: 'Section Description',
              multiline: true,
              defaultValue:
                'What sets our North Texas engineering practice apart from traditional consulting firms.',
            }),
            items: fields.array(
              fields.object({
                title: fields.text({
                  label: 'Advantage Title (H3)',
                }),
                desc: fields.text({
                  label: 'Advantage Description',
                  multiline: true,
                }),
              }),
              {
                label: 'Advantage Cards (1–3)',
                itemLabel: (props) => props.fields.title.value || 'Advantage',
              }
            ),
          },
          { label: '5. The Engivato DFW Advantage Section' }
        ),
      },
    }),

    // Contact Page Singleton
    contactPage: singleton({
      label: 'Contact Page',
      path: 'src/content/pages/contact',
      format: { data: 'json' },
      schema: {
        pageEnabled: fields.checkbox({
          label: 'Enable Contact Page (Show "Contact Us" Button & Allow Public Access)',
          description:
            '⚠️ Conversion & Navigation Impact (Critical): Unchecking this hides the "Contact Us" button in the navbar and footer, sets "noindex" for search engines, and displays a friendly "Page Unavailable" screen if someone visits /contact directly.',
          defaultValue: true,
        }),
        seo: fields.object(
          {
            metaTitle: fields.text({
              label: 'SEO Page Title (<title>)',
              description:
                '🔍 SEO CRITICAL (Title Tag): Shown in Google search results and browser tabs. Ideal length: 50–60 characters.',
              defaultValue:
                'Contact Us | MEP Engineering Consultation & Proposals | Engivato PLLC',
            }),
            metaDescription: fields.text({
              label: 'SEO Meta Description',
              multiline: true,
              description:
                '🔍 SEO CRITICAL (Meta Description): Summary shown in search results. Ideal length: 120–160 characters.',
              defaultValue:
                'Connect with Engivato PLLC for expert mechanical, electrical, and plumbing engineering consulting, stamped permit drawings, and fast-track tenant fit-out proposals across Dallas-Fort Worth.',
            }),
          },
          { label: '0. SEO & Page Metadata' }
        ),

        hero: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Hero Header Section',
              description:
                '⚠️ SEO Impact (Critical): Hiding removes the Contact page H1 heading and introductory conversion text.',
              defaultValue: true,
            }),
            eyebrow: fields.text({
              label: 'Eyebrow Badge',
              defaultValue: 'Get In Touch',
            }),
            heading: fields.text({
              label: 'Main Page Heading (H1)',
              description: '🔍 SEO CRITICAL (H1 Heading): Main H1 heading for the Contact page.',
              defaultValue: "Let's Build Systems That Perform",
            }),
            description: fields.text({
              label: 'Hero Description',
              multiline: true,
              defaultValue:
                'Whether you need full MEP construction documents, a fast-track commercial tenant fit-out, or code compliance review, our team is ready to assist.',
            }),
          },
          { label: '1. Hero Header Section' }
        ),

        channels: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Direct Communication Channels Strip',
              description:
                '⚠️ SEO Impact (Medium - Local SEO): Hiding removes visible contact email, service area ("Dallas–Fort Worth & North Texas"), and response time signals.',
              defaultValue: true,
            }),
            emailLabel: fields.text({
              label: 'Email Channel Label',
              defaultValue: 'Direct Inquiries',
            }),
            emailAddress: fields.text({
              label: 'Public Contact Email Address',
              defaultValue: 'admin@engivato.com',
            }),
            coverageLabel: fields.text({
              label: 'Coverage Channel Label',
              defaultValue: 'Service Coverage',
            }),
            coverageValue: fields.text({
              label: 'Coverage Channel Value',
              description: '🔍 SEO Note (Local SEO): Reinforces geographic service area.',
              defaultValue: 'Dallas–Fort Worth & North Texas',
            }),
            responseLabel: fields.text({
              label: 'Response Commitment Label',
              defaultValue: 'Response Commitment',
            }),
            responseValue: fields.text({
              label: 'Response Commitment Value',
              defaultValue: '< 24 Hour Initial Proposal Review',
            }),
          },
          { label: '2. Direct Communication Channels Strip' }
        ),

        formSection: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Proposal Inquiry Form',
              description:
                '⚠️ Conversion Impact (High): Hiding removes the interactive Request an Engineering Proposal form.',
              defaultValue: true,
            }),
            eyebrow: fields.text({
              label: 'Form Eyebrow Badge',
              defaultValue: 'Fast-Track Consultation',
            }),
            heading: fields.text({
              label: 'Form Heading (H3)',
              description: '🔍 SEO (H3 Subheading): Form heading containing proposal keyword.',
              defaultValue: 'Request an Engineering Proposal',
            }),
            description: fields.text({
              label: 'Form Subheading Description',
              multiline: true,
              defaultValue:
                'Fill out the details below to discuss your project scope, turnaround timeline, or stamped plan requirements.',
            }),
            submitButtonText: fields.text({
              label: 'Submit Button Text',
              defaultValue: 'Send Project Inquiry',
            }),
            privacyNote: fields.text({
              label: 'Bottom Security / Privacy Note',
              defaultValue:
                'Submissions are transmitted securely and routed to our principal engineering team.',
            }),
            successHeading: fields.text({
              label: 'Submission Success Heading',
              defaultValue: 'Message Sent Successfully!',
            }),
            successMessage: fields.text({
              label: 'Submission Success Message',
              multiline: true,
              defaultValue:
                'Thank you for reaching out to Engivato PLLC. We have received your inquiry and will review your project requirements within 1 business day.',
            }),
          },
          { label: '3. Proposal Inquiry Form Section' }
        ),

        sidebar: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Information Sidebar (Process, Plans Upload, FAQs)',
              description:
                '⚠️ SEO Impact (Medium): Hiding removes inquiry process steps, architectural plan upload instructions, and consultation FAQs.',
              defaultValue: true,
            }),
            processHeading: fields.text({
              label: 'Inquiry Process Card Heading (H3)',
              defaultValue: 'How We Handle Inquiries',
            }),
            processSteps: fields.array(
              fields.object({
                title: fields.text({ label: 'Step Title (H4)' }),
                desc: fields.text({ label: 'Step Description', multiline: true }),
              }),
              {
                label: 'Inquiry Process Steps (1–3)',
                itemLabel: (props) => props.fields.title.value || 'Step',
              }
            ),
            plansBoxHeading: fields.text({
              label: 'Plans Upload Box Heading (H4)',
              defaultValue: 'Have Architectural Plans Ready?',
            }),
            plansBoxDescription: fields.text({
              label: 'Plans Upload Box Description',
              multiline: true,
              defaultValue:
                'If you have CAD files, Revit models, or PDF architectural drawings, you can email them directly or include a cloud link in your message.',
            }),
            plansBoxFormats: fields.text({
              label: 'Accepted File Formats Note',
              defaultValue: 'Accepted formats: .dwg, .rvt, .pdf, .zip',
            }),
            faqHeading: fields.text({
              label: 'Sidebar FAQ Card Heading (H4)',
              defaultValue: 'Frequently Asked',
            }),
            faqs: fields.array(
              fields.object({
                question: fields.text({
                  label: 'Question (H5)',
                  description: '🔍 SEO Note: Addresses common pre-proposal questions.',
                }),
                answer: fields.text({
                  label: 'Answer',
                  multiline: true,
                }),
              }),
              {
                label: 'Sidebar FAQs',
                itemLabel: (props) => props.fields.question.value || 'FAQ',
              }
            ),
          },
          { label: '4. Information Sidebar Section' }
        ),
      },
    }),

    // Legal & Policy Pages Singleton
    legalPages: singleton({
      label: 'Legal & Policy Pages',
      path: 'src/content/pages/legal',
      format: { data: 'json' },
      schema: {
        privacy: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Enable Privacy Policy Page (Show in Footer & Allow Public Access)',
              description:
                '⚠️ Trust & Compliance Impact: Unchecking hides "Privacy Policy" from the footer links, sets "noindex", and displays a friendly "Page Unavailable" notice at /privacy.',
              defaultValue: true,
            }),
            metaTitle: fields.text({
              label: 'SEO Page Title (<title>)',
              defaultValue: 'Privacy Policy | Engivato PLLC',
            }),
            metaDescription: fields.text({
              label: 'SEO Meta Description',
              multiline: true,
              defaultValue:
                'Read the Privacy Policy for Engivato PLLC regarding how we collect, use, and protect your personal information.',
            }),
            heading: fields.text({
              label: 'Page Heading (H1)',
              defaultValue: 'Privacy Policy',
            }),
            paragraphs: fields.array(
              fields.text({ label: 'Paragraph', multiline: true }),
              {
                label: 'Policy Paragraphs',
                itemLabel: (props) =>
                  props.value ? `${props.value.slice(0, 60)}...` : 'Paragraph',
              }
            ),
          },
          { label: '1. Privacy Policy Page (/privacy)' }
        ),

        termsOfService: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Enable Terms of Service Page (Show in Footer & Allow Public Access)',
              description:
                '⚠️ Trust & Compliance Impact: Unchecking hides "Terms of Service" from the footer links, sets "noindex", and displays a friendly "Page Unavailable" notice at /termsOfService.',
              defaultValue: true,
            }),
            metaTitle: fields.text({
              label: 'SEO Page Title (<title>)',
              defaultValue: 'Terms of Service | Engivato PLLC',
            }),
            metaDescription: fields.text({
              label: 'SEO Meta Description',
              multiline: true,
              defaultValue: 'Terms of Service for Engivato PLLC website and engineering information.',
            }),
            heading: fields.text({
              label: 'Page Heading (H1)',
              defaultValue: 'Terms of Service',
            }),
            paragraphs: fields.array(
              fields.text({ label: 'Paragraph', multiline: true }),
              {
                label: 'Terms Paragraphs',
                itemLabel: (props) =>
                  props.value ? `${props.value.slice(0, 60)}...` : 'Paragraph',
              }
            ),
          },
          { label: '2. Terms of Service Page (/termsOfService)' }
        ),

        accessibility: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Enable Accessibility Statement Page (Show in Footer & Allow Public Access)',
              description:
                '⚠️ Trust & Compliance Impact: Unchecking hides "Accessibility" from the footer links, sets "noindex", and displays a friendly "Page Unavailable" notice at /accessibility.',
              defaultValue: true,
            }),
            metaTitle: fields.text({
              label: 'SEO Page Title (<title>)',
              defaultValue: 'Accessibility Statement | Engivato PLLC',
            }),
            metaDescription: fields.text({
              label: 'SEO Meta Description',
              multiline: true,
              defaultValue: 'Engivato PLLC is committed to digital accessibility and WCAG AA standards.',
            }),
            heading: fields.text({
              label: 'Page Heading (H1)',
              defaultValue: 'Accessibility',
            }),
            introParagraph1: fields.text({
              label: 'First Paragraph (WCAG Commitment)',
              multiline: true,
              defaultValue:
                'At Engivato, we are dedicated to ensuring our website is usable by people with different abilities. We are continually evaluating our platform to ensure both our current and future digital content aligns with WCAG AA accessibility standards. To achieve this, our team actively implements readable fonts, sufficient color contrast, alternative text for images, clearly labeled form fields, and keyboard-friendly navigation.',
            }),
            introParagraph2: fields.text({
              label: 'Second Paragraph (Browser Intro)',
              multiline: true,
              defaultValue:
                'A key part of this accessibility effort is maintaining broad browser compatibility. The engivato.com website is optimized for viewing on:',
            }),
            supportedBrowsers: fields.array(
              fields.text({ label: 'Browser Name' }),
              {
                label: 'Supported Browsers List',
                itemLabel: (props) => props.value || 'Browser',
              }
            ),
            closingParagraph: fields.text({
              label: 'Closing Feedback Paragraph',
              multiline: true,
              defaultValue:
                "We want to ensure that all visitors have an excellent experience when accessing our website, regardless of their device or any functional limitations. If you experience any difficulties accessing our content or have suggestions for improving our website's accessibility, please reach out and contact us. We appreciate your feedback and are committed to making engivato.com accessible to everyone.",
            }),
          },
          { label: '3. Accessibility Statement Page (/accessibility)' }
        ),
      },
    }),

    // Global Footer & CTA Singleton
    footerSettings: singleton({
      label: 'Global Footer & CTA Banner',
      path: 'src/content/settings/footer',
      format: { data: 'json' },
      schema: {
        ctaBanner: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Pre-Footer Call-to-Action Banner',
              description:
                '⚠️ Conversion & Internal Linking Impact: Toggles the "Ready to Collaborate?" banner displayed above the footer across all pages.',
              defaultValue: true,
            }),
            eyebrow: fields.text({
              label: 'Eyebrow Badge',
              defaultValue: 'Ready to Collaborate?',
            }),
            heading: fields.text({
              label: 'Banner Heading (H2)',
              description: '🔍 SEO (H2 Heading): Global conversion heading.',
              defaultValue: "Let's Build Systems That Perform",
            }),
            description: fields.text({
              label: 'Banner Description',
              multiline: true,
              defaultValue:
                'Send us your architectural plans or RFP. Our engineering team will review your scope and provide a detailed proposal and timeline.',
            }),
            primaryCtaText: fields.text({
              label: 'Primary Button Text',
              defaultValue: 'Contact Our Engineering Team',
            }),
            primaryCtaHref: fields.text({
              label: 'Primary Button Link',
              defaultValue: '/contact',
            }),
            secondaryCtaText: fields.text({
              label: 'Secondary Button Text',
              defaultValue: 'See Who We Serve',
            }),
            secondaryCtaHref: fields.text({
              label: 'Secondary Button Link',
              defaultValue: '/whoWeServe',
            }),
          },
          { label: '1. Pre-Footer CTA Banner' }
        ),

        bottomBar: fields.object(
          {
            enabled: fields.checkbox({
              label: 'Show Bottom Legal Links & Copyright Bar',
              description: '⚠️ SEO Impact: Contains internal links to Privacy Policy, Terms of Service, Accessibility, and Sitemap.',
              defaultValue: true,
            }),
            copyrightText: fields.text({
              label: 'Copyright Text (Year is added automatically)',
              defaultValue: 'Engivato PLLC. All rights reserved.',
            }),
          },
          { label: '2. Bottom Copyright & Links Bar' }
        ),
      },
    }),

    // Site Settings & Construction Mode Singleton
    siteSettings: singleton({
      label: 'Site Settings & Construction Mode',
      path: 'src/content/settings/site',
      format: { data: 'json' },
      schema: {
        underConstruction: fields.checkbox({
          label: 'Enable Under Construction Mode',
          description:
            '⚠️ CAUTION (SEO Impact): When enabled, this replaces the public Home page with the Under Construction screen on production. Search engine crawlers will NOT see regular Home page sections while active.',
          defaultValue: false,
        }),
        previewInDev: fields.checkbox({
          label: 'Preview Under Construction on Localhost',
          description:
            'Enable this to preview the Under Construction screen on http://localhost:3000/ during local development without needing a production build.',
          defaultValue: false,
        }),
        subheading: fields.text({
          label: 'Status Pill Text',
          defaultValue: 'Website Under Construction • Launching Soon',
        }),
        heading: fields.text({
          label: 'Headline (H1)',
          description: '🔍 SEO (H1 Heading): Main heading displayed when Under Construction mode is active.',
          defaultValue: 'Engineering High-Performance Solutions That Perform',
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          description: '🔍 SEO Note: Keep core MEP and Texas keywords here so crawlers still index your core services while under construction.',
          defaultValue:
            'We are currently building our full digital platform. Engivato PLLC delivers licensed Mechanical, Electrical, and Plumbing (MEP) consulting, stamped permit drawings, and fast-track tenant fit-out engineering across Texas.',
        }),
        showFeatureCards: fields.checkbox({
          label: 'Show 01–03 Feature Highlights Grid',
          defaultValue: true,
        }),
        featureCards: fields.array(
          fields.object({
            badge: fields.text({ label: 'Number Badge (e.g. 01)' }),
            title: fields.text({ label: 'Card Title (H2)' }),
            desc: fields.text({ label: 'Card Description', multiline: true }),
          }),
          {
            label: 'Feature Highlight Cards (01–03)',
            itemLabel: (props) =>
              `${props.fields.badge.value || ''} ${props.fields.title.value || 'Card'}`,
          }
        ),
        showContactCard: fields.checkbox({
          label: 'Show Direct Email / RFP Action Box',
          defaultValue: true,
        }),
        contactCardHeading: fields.text({
          label: 'Contact Box Heading',
          defaultValue: 'Have an active project or RFP?',
        }),
        contactCardDescription: fields.text({
          label: 'Contact Box Description',
          multiline: true,
          defaultValue:
            'Our engineering team is actively accepting project inquiries and architectural drawings for review.',
        }),
        contactCardButtonText: fields.text({
          label: 'Contact Box Button Text',
          defaultValue: 'Email Our Engineering Team',
        }),
        footerNote: fields.text({
          label: 'Footer Tagline',
          defaultValue: 'Licensed Engineering Consultation in Texas',
        }),
      },
    }),
  },

  // Content Collections
  collections: {
    services: collection({
      label: 'Home Services Cards',
      slugField: 'title',
      path: 'src/content/services/*',
      format: { data: 'json' },
      schema: {
        enabled: fields.checkbox({
          label: 'Show This Service Card on Home Page',
          description: '⚠️ SEO Impact: Unchecking hides this discipline card from the Home Page Services grid.',
          defaultValue: true,
        }),
        title: fields.slug({
          name: {
            label: 'Discipline Title (H3)',
            description: '🔍 SEO HIGH (H3 Heading): Primary discipline name shown on the Home Page card.',
          },
        }),
        badge: fields.text({ label: 'Discipline Badge (e.g. Discipline 01)' }),
        tagline: fields.text({
          label: 'Short Tagline',
          description: '🔍 SEO Note: Highlighted orange sub-headline on the card.',
        }),
        desc: fields.text({
          label: 'Card Description',
          multiline: true,
          description: '🔍 SEO HIGH: Concise summary of deliverables for this engineering discipline.',
        }),
        anchor: fields.text({
          label: 'Anchor ID on Services Page (e.g. mechanical, electrical, plumbing, consulting)',
          description: '🔍 SEO Internal Link: Links "Learn more" to /services#[anchor].',
        }),
        deliverables: fields.array(
          fields.text({ label: 'Deliverable Tag' }),
          {
            label: 'Key Deliverables & Scope Highlights (Up to 3 shown on card)',
            itemLabel: (props) => props.value || 'Deliverable',
          }
        ),
        order: fields.integer({ label: 'Display Order (1–4)', defaultValue: 1 }),
      },
    }),

    projects: collection({
      label: 'Project Case Studies',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { data: 'json' },
      schema: {
        enabled: fields.checkbox({
          label: 'Show This Project in Showcase',
          description: 'Toggle whether this individual project card appears when the Project Showcase section is enabled on the Projects page.',
          defaultValue: true,
        }),
        title: fields.slug({
          name: {
            label: 'Project Title (H3)',
            description: '🔍 SEO HIGH (H3 Heading): Descriptive project title including building type or system scope.',
          },
        }),
        desc: fields.text({
          label: 'Case Study Description',
          multiline: true,
          description: '🔍 SEO HIGH: Describe the MEP scope, square footage, equipment, and engineering results.',
        }),
        category: fields.select({
          label: 'Sector Category',
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
        location: fields.text({
          label: 'City & State (e.g. Dallas, TX)',
          description: '🔍 SEO (Local SEO): Helps associate project experience with specific Texas cities.',
        }),
        scope: fields.text({
          label: 'Scope of Work Summary',
          description: '🔍 SEO Note: Short keyword summary of engineering scope.',
        }),
        year: fields.text({ label: 'Year Completed / Status' }),
      },
    }),
  },
});
