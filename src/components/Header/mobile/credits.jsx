import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './credits.module.scss';
import Socials from '../../socials';
import citySeal from '../../../images/city_seal.svg';
import instagramBlack from '../../../images/icons/instagram-black.svg';
import twitterBlack from '../../../images/icons/twitter-black.svg';
import facebookBlack from '../../../images/icons/facebook-black.svg';

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
        <div className={styles.creditsSocials}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramBlack} alt="instagram" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookBlack} alt="facebook" />
          </a>

          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterBlack} alt="twitter" />
          </a>
        </div>
        <p>
          <FormattedMessage id={`footer.copyright`} />
        </p>
      </div>
    </div>
  );
};

export default Footer;
