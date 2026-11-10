import './globals.css';
import { Inter, Space_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import { SITE_URL } from '../lib/constants.js';
import { getSiteSettings, getFooterSettings, getNavigationVisibility } from '../lib/settings';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

export const metadata = {
  // Base URL for canonical links and OpenGraph metadata
  metadataBase: new URL(SITE_URL),

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
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
    >
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
