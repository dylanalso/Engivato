import UnderConstruction from '../../components/UnderConstruction';
import { getSiteSettings } from '../../lib/settings';

export const metadata = {
  title: 'Under Construction | Engivato PLLC',
  description: 'Engivato PLLC - Engineering and Innovation. Platform launching soon.',
};

export default async function UnderConstructionPage() {
  const siteSettings = await getSiteSettings();
  return <UnderConstruction settings={siteSettings} />;
}

