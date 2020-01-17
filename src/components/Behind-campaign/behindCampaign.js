import React from 'react';
import { FormattedMessage } from 'react-intl';
import Portrait from './portrait';
import styles from './behindCampaign.module.scss';
import portraitsList from '../../i18n/translations/en/behindCampaign';
import logoCity from '../../images/office_on_health_badge.svg';

const BehindCampaign = () => {
  const { portraits } = portraitsList;
  return (
    <section className="container">
      <div className={styles.topSection}>
        <img src={logoCity} alt="City of Central Fall" />
        <div className={styles.textSide}>
          <h2>
            <FormattedMessage id="behindCampaign.who-behind-campaign.title" />
          </h2>
          <p>
            <FormattedMessage id="behindCampaign.who-behind-campaign.content" />
          </p>
        </div>
      </div>
      <div className="row">
        {Object.keys(portraits).map(portrait => {
          return <Portrait character={portrait} key={portrait} image={portraits[portrait].image} />;
        })}
      </div>
    </section>
  );
};

export default BehindCampaign;
