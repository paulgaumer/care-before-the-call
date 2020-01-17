import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './portrait.module.scss';

const Portrait = props => {
  const { character, image } = props;
  console.log(character.role);

  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className={styles.card}>
        <img src={`/images/portraits/${image}`} alt={character} />
        <h3>{character}</h3>

        <p className={`${styles.role} extra-bold`}>
          <FormattedMessage id={`behindCampaign.portraits.${character}.role`} />
        </p>
        <p className={`${styles.description} bio-description-fontsize`}>
          <FormattedMessage id={`behindCampaign.portraits.${character}.description`} />
        </p>
      </div>
    </div>
  );
};

export default Portrait;
