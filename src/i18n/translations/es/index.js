import flatten from 'flat';

import error404 from './404';
import home from './home';
import resources from './resources';
import behindCampaign from './behindCampaign';

const message = { error404, home, resources, behindCampaign };

export default flatten(message);
