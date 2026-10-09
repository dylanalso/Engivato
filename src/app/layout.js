import './globals.css';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';

export const metadata = {

  /* for SEO */
  metadataBase: new URL('https://dylanalso.github.io/Engivato'), // whatever the landing page will be (engivato.com, not the github repo)

  title: 'Engivato | Engineering and Innovation',
  description: 'Engineering and Innovation for Local Businesses', // too $hort
};

{/* root layout for the website 
  attributes for every page */}
export default function RootLayout({ children }) {
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
