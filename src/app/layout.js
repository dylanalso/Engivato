import './globals.css';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import UnderConstruction from '../components/UnderConstruction.js';

export const metadata = {

  /* for SEO */
  metadataBase: new URL('https://dylanalso.github.io/Engivato'), // whatever the landing page will be (engivato.com, not the github repo)

  title: 'Engivato | Engineering and Innovation',
  description: 'Engineering and Innovation for Local Businesses',
};

import { getSiteSettings } from '../lib/settings';

// --------------------------------------------------------------------------
// UNDER CONSTRUCTION MODE
// --------------------------------------------------------------------------
// Controlled via Keystatic CMS singleton ("Site Settings & Construction Mode")
// or directly in `src/content/settings/site.json`.
//
// - `underConstruction: true` activates the Under Construction screen for production.
// - `previewInDev: true` also previews the Under Construction screen on localhost.
// - You can always visit http://localhost:3000/under-construction/ to preview it.
// --------------------------------------------------------------------------

{/* root layout for the website 
  attributes for every page */}
export default async function RootLayout({ children }) {
  const siteSettings = await getSiteSettings();
  const isUnderConstruction =
    siteSettings.underConstruction &&
    (process.env.NODE_ENV === 'production' || siteSettings.previewInDev);

  if (isUnderConstruction) {
    return (
      <html lang="en">
        <body className="min-h-screen bg-slate-950">
          <UnderConstruction settings={siteSettings} />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">

        <main className="flex-grow">

          <Navbar />

          {children}

        </main>

        <Footer />
      </body>
    </html>
  );
}

