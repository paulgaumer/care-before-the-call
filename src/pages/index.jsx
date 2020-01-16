import React from 'react';
import withLayout from '../layout';

import LogoHero from '../components/Logo-hero/logoHero';
import BehindCampaign from '../components/Behind-campaign/behindCampaign';

const IndexPage = () => (
  <>
    <LogoHero />
    <BehindCampaign />
  </>
);

const customProps = {
  localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
};

export default withLayout(customProps)(IndexPage);
