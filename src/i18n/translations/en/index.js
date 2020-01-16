import flatten from 'flat';

import error404 from './404';
import home from './home';
import logoHero from './logoHero';
import behindCampaign from './behindCampaign';

const messages = { error404, home, logoHero, behindCampaign };

export default flatten(messages);
