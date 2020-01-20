import React from 'react';
import PropTypes from 'prop-types';
import Langs from './langs';
import Socials from '../socials';
import styles from './index.module.scss';

const Header = ({ siteTitle, hideLangs }) => (
  <header
    style={{
      maxHeight: 100,
      position: 'absolute',
      left: 0,
      right: 0,
      top: 30,
    }}
  >
    <div className="container">
      <div className={styles.navbar}>
        <div>{!hideLangs && <Langs />}</div>
        <Socials />
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  hideLangs: PropTypes.bool,
};

Header.defaultProps = {
  siteTitle: ``,
  hideLangs: false,
};

export default Header;
