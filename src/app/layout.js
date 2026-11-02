import './globals.css';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import { getSiteSettings, getFooterSettings, getNavigationVisibility } from '../lib/settings';

export const metadata = {
  // Base URL for canonical links and OpenGraph metadata
  metadataBase: new URL('https://dylanalso.github.io/Engivato'),

  title: 'Engivato PLLC | Texas MEP Engineering & Innovation',
  description:
    'Texas-based engineering firm delivering innovative, practical, and reliable Mechanical, Electrical, and Plumbing (MEP) solutions.',
};

export default async function RootLayout({ children }) {
  const [siteSettings, footerData, pageVisibility] = await Promise.all([
    getSiteSettings(),
    getFooterSettings(),
    getNavigationVisibility(),
  ]);

  // Activate Under Construction view in production, or locally when preview is enabled
  const isUnderConstruction =
    siteSettings.underConstruction &&
    (process.env.NODE_ENV === 'production' || siteSettings.previewInDev);

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <main className="grow">
          <Navbar isUnderConstruction={isUnderConstruction} pageVisibility={pageVisibility} />
          {children}
        </main>
        <Footer
          isUnderConstruction={isUnderConstruction}
          footerData={footerData}
          pageVisibility={pageVisibility}
        />
      </body>
    </html>
  );
}
