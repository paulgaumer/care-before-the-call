import React from 'react';
import { FormattedMessage } from 'react-intl';

const LogoHero = () => {
  return (
    <section>
      <div className="leftSide">
        <div>
          <h3>
            <FormattedMessage id="logoHero.what-is-btc.title" />
          </h3>
          <p>
            <FormattedMessage id="logoHero.what-is-btc.content" />
          </p>
        </div>
        <div>
          <h3>
            <FormattedMessage id="logoHero.why-important.title" />
          </h3>
          <p>
            <FormattedMessage id="logoHero.why-important.content" />
          </p>
        </div>
      </div>
      <div className="rightSide">
        <img src="" alt="Care Before The Call" />
      </div>
    </section>
  );
};

export default LogoHero;
