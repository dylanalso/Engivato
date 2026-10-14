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

// --------------------------------------------------------------------------
// UNDER CONSTRUCTION SETTING
// --------------------------------------------------------------------------
// Set UNDER_CONSTRUCTION = true to show the Under Construction page on the
// live published website.
// When you are ready to officially launch the full website, set this to false!
//
// In local development (`npm run dev`), your full site remains accessible so
// you can continue building. To preview the Under Construction page locally,
// visit: http://localhost:3000/under-construction/
// --------------------------------------------------------------------------
const UNDER_CONSTRUCTION = true;

{/* root layout for the website 
  attributes for every page */}
export default function RootLayout({ children }) {
  const isUnderConstruction = UNDER_CONSTRUCTION && process.env.NODE_ENV === 'production';

  if (isUnderConstruction) {
    return (
      <html lang="en">
        <body className="min-h-screen bg-slate-950">
          <UnderConstruction />
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

