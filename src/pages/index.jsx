import React from 'react';
import withLayout from '../layout';

import LogoHero from '../components/Logo-hero/logoHero';
import BehindCampaign from '../components/Behind-campaign/behindCampaign';
import TripleCta from '../components/Triple-cta/tripleCta';
import Resources from '../components/Resources/resources';
import Follow from '../components/Follow/follow';

const IndexPage = () => (
  <>
    <LogoHero />
    <BehindCampaign />
    <TripleCta />
    <Resources />
    <Follow />
  </>
);

const customProps = {
  localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
};

export default withLayout(customProps)(IndexPage);
