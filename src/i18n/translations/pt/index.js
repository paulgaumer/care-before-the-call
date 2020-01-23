import flatten from 'flat';

import error404 from './404';
import logoHero from './logoHero';
import behindCampaign from './behindCampaign';
import tripleCta from './tripleCta';
import resources from './resources';
import follow from './follow';
import footer from './footer';

const messages = { error404, logoHero, behindCampaign, tripleCta, resources, follow, footer };

export default flatten(messages);
