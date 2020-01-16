import React from 'react';
import { FormattedMessage } from 'react-intl';

const Portrait = props => {
  return (
    <div className="portrait-card">
      <img src="" alt="" />
      <h3>{props.character.name}</h3>
      <p>{props.character.role}</p>
      <p>{props.character.description}</p>
    </div>
  );
};

export default Portrait;
