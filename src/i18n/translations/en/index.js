import flatten from 'flat';

import error404 from './404';
import home from './home';
import logoHero from './logoHero';
import behindCampaign from './behindCampaign';
import tripleCta from './tripleCta';

const messages = { error404, home, logoHero, behindCampaign, tripleCta };

export default flatten(messages);
