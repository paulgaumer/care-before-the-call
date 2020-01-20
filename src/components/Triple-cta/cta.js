import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import styles from './cta.module.scss';

const Cta = props => {
  const { cta, link, index } = props;

  const reverse = index % 2 !== 0;

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${props.background})` }}
      id="wrap"
    >
      <div className="container">
        <div
          className={styles.ctaContainer}
          style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}
        >
          <div className={styles.textSide}>
            <h2 className={``}>
              <FormattedMessage id={`tripleCta.${cta}.title`} />
            </h2>
            <p>
              <FormattedMessage id={`tripleCta.${cta}.content`} />
            </p>
          </div>
          <div className={`${styles.btnSide} extra-bold`}>
            <a href={link}>
              <FormattedHTMLMessage id={`tripleCta.${cta}.cta`} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
