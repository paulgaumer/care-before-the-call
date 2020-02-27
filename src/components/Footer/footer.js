import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './footer.module.scss';
import citySeal from '../../images/city_seal.svg';

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <section className="container">
        <div className="row">
          <div className="col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <div className={styles.footer}>
              <p>
                <span className="extra-bold">
                  <FormattedMessage id={`footer.cbtc`} />
                </span>{' '}
                  <FormattedMessage id={`footer.content`}
                    values={{
                      debEmail: <a href="mailto:dnavarro@centralfallsri.us">dnavarro@centralfallsri.us</a>,
                      emEmail: <a href="mailto:erizzo@centralfallsri.us">erizzo@centralfallsri.us</a>,
                    }} />
              </p>
              <img src={citySeal} alt="city of Central Falls" />
              <p>
                <FormattedMessage id={`footer.copyright`} />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
