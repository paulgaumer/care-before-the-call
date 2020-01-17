import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './logoHero.module.scss';

import logoCare from '../../images/cbtc_logo_english.svg';
import logoCity from '../../images/office_on_health_badge.svg';

const LogoHero = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-7">
            <div className={styles.paragraphe}>
              <h2>
                <FormattedMessage id="logoHero.what-is-btc.title" />{' '}
                <span className="extra-bold">
                  <FormattedMessage id="logoHero.what-is-btc.cbtc" />
                </span>
                ?
              </h2>
              <p>
                <span className="extra-bold">
                  <FormattedMessage id="logoHero.what-is-btc.cbtc" />
                </span>{' '}
                <FormattedMessage id="logoHero.what-is-btc.content" />
              </p>
            </div>
            <div className={styles.paragraphe}>
              <h2>
                <FormattedMessage id="logoHero.why-important.title" />
              </h2>
              <p>
                <FormattedMessage id="logoHero.why-important.content" />
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-5">
            <div className={styles.logoSide}>
              <img src={logoCare} alt="Care Before The Call" />
              <div className={styles.cityLogo}>
                <div className={styles.legend}>
                  <p>Brought to you by the</p>
                  <p>Central Falls Office on Health</p>
                </div>
                <img src={logoCity} alt="City of Central Falls" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoHero;
