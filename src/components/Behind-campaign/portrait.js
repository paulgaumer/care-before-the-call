import React from 'react';
import { FormattedMessage } from 'react-intl';

const Portrait = props => {
  const { character } = props;
  return (
    <div className="portrait-card">
      <img src="" alt="" />
      <h3>{character}</h3>

      <p>
        <FormattedMessage id={`behindCampaign.portraits.${character}.role`} />
      </p>
      <p>
        <FormattedMessage id={`behindCampaign.portraits.${character}.description`} />
      </p>
    </div>
  );
};

export default Portrait;
