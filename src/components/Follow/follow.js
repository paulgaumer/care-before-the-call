import React from 'react';
import { FormattedMessage } from 'react-intl';
import Socials from '../socials';
import styles from './follow.module.scss';
import checkersBackground from '../../images/checkers-background.svg';

const Follow = () => {
  return (
    <div
      className="wrapper"
      style={{ backgroundImage: `url(${checkersBackground})`, backgroundSize: 'cover' }}
    >
      <section className="container">
        <div className={styles.follow}>
          <h2>
            <FormattedMessage id={`follow.content`} />
          </h2>
          <Socials />
        </div>
      </section>
    </div>
  );
};

export default Follow;
