import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './logoHero.module.scss';

import logoCare from '../../images/cbtc_logo_english.svg';
import logoCity from '../../images/office_on_health_badge.svg';
import chevronDown from '../../images/icons/chevron-down.svg';

const LogoHero = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* <div className="row"> */}
        <div className={styles.hero}>
          <div className={styles.logoSide}>
            <div>
              <div className={styles.logoGroup}>
                <img src={logoCare} alt="Care Before The Call" className={styles.logoCare} />
                <div className={styles.cityLogo}>
                  <div className={styles.legend}>
                    <p>Brought to you by the</p>
                    <p>Central Falls Office on Health</p>
                  </div>
                  <img src={logoCity} alt="City of Central Falls" />
                </div>
              </div>
            </div>
            <div className={styles.chevronDown}>
              <a href="#heroText">
                <img src={chevronDown} alt="chevron down" />
              </a>
            </div>
          </div>

          <div className={styles.textSide} id="heroText">
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
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default LogoHero;
