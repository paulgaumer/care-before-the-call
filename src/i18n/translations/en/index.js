import flatten from 'flat';

import error404 from './404';
import home from './home';
import logoHero from './logoHero';
import behindCampaign from './behindCampaign';
import tripleCta from './tripleCta';
import resources from './resources';
import follow from './follow';
import footer from './footer';

const messages = { error404, home, logoHero, behindCampaign, tripleCta, resources, follow, footer };

export default flatten(messages);
