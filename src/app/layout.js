import './globals.css';

export const metadata = {

  /* for SEO */
  metadataBase: new URL('https://dylanalso.github.io/Engivato'), //whatever the landing page will be (engivato.com, not the github repo)

  title: 'Engivato | Engineering and Innovation',
  description: 'Engineering and Innovation for Local Businesses', // too $hort
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
