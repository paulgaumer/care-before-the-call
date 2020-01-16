import flatten from 'flat';

import error404 from './404';
import home from './home';
import resources from './resources';

const message = { error404, home, resources };

export default flatten(message);
