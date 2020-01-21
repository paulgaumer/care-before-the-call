import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './credits.module.scss';
import citySeal from '../../../images/city_seal.svg';

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.credits}>
        <p>
          <span className="extra-bold">
            <FormattedMessage id={`footer.cbtc`} />
          </span>{' '}
          <FormattedMessage id={`footer.content`} />
        </p>
        <img src={citySeal} alt="city of Central Falls" />
        <p>
          <FormattedMessage id={`follow.content`} />
        </p>
        <p>
          <FormattedMessage id={`footer.copyright`} />
        </p>
      </div>
    </div>
  );
};

export default Footer;
