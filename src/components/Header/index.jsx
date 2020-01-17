import React from 'react';
import PropTypes from 'prop-types';
// import Link from '../Link';
import Langs from './langs';

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
      <div>{!hideLangs && <Langs />}</div>
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
