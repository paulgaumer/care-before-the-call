import React from 'react';
import PropTypes from 'prop-types';
// import Link from '../Link';
import Langs from './langs';
import instagram from '../../images/icons/instagram.svg';
import twitter from '../../images/icons/twitter.svg';
import facebook from '../../images/icons/facebook.svg';

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
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>{!hideLangs && <Langs />}</div>
        <div className="socials">
          <img src={instagram} alt="instagram" width="60px" style={{ paddingLeft: '30px' }} />
          <img src={facebook} alt="facebook" width="60px" style={{ paddingLeft: '30px' }} />
          <img src={twitter} alt="twitter" width="60px" style={{ paddingLeft: '30px' }} />
        </div>
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
