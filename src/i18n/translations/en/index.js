import flatten from 'flat';

import error404 from './404';
import home from './home';
import logoHero from './logoHero';
import behindCampaign from './behindCampaign';
import tripleCta from './tripleCta';
import resources from './resources';
import follow from './follow';

const messages = { error404, home, logoHero, behindCampaign, tripleCta, resources, follow };

export default flatten(messages);
