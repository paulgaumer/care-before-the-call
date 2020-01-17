import React from 'react';
import { FormattedMessage } from 'react-intl';
import Portrait from './portrait';
import portraitsList from '../../i18n/translations/en/behindCampaign';

const BehindCampaign = () => {
  const { portraits } = portraitsList;
  return (
    <section>
      <div>
        <div className="leftSide">
          <img src="" alt="City of Central Fall" />
        </div>
        <div className="rightSide">
          <h3>
            <FormattedMessage id="behindCampaign.who-behind-campaign.title" />
          </h3>
          <p>
            <FormattedMessage id="behindCampaign.who-behind-campaign.content" />
          </p>
        </div>
      </div>
      <div className="portraits">
        {Object.keys(portraits).map(portrait => {
          return <Portrait character={portrait} key={portrait} />;
        })}
      </div>
    </section>
  );
};

export default BehindCampaign;
