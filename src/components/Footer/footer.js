import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './footer.module.scss';
import citySeal from '../../images/city_seal.svg';

const Footer = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-sm-12 col-md-8 offset-md-2">
          <div className={styles.footer}>
            <p>
              <span className="extra-bold">
                <FormattedMessage id={`footer.cbtc`} />
              </span>{' '}
              <FormattedMessage id={`footer.content`} />
            </p>
            <img src={citySeal} alt="city of Central Falls" />
            <p>
              <FormattedMessage id={`footer.copyright`} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
