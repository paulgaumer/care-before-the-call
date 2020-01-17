import React from 'react';
import PropTypes from 'prop-types';
// import Link from '../Link';
import Langs from '../Langs';

const Header = ({ siteTitle, hideLangs }) => (
  <header
    style={{
      // marginBottom: `1.45rem`,
      maxHeight: 100,
      position: 'absolute',
    }}
  >
    <div className="container">
      <div
      // style={{
      //   margin: `0 auto`,
      //   maxWidth: 960,
      //   padding: `1.45rem 1.0875rem`,
      //   display: 'flex',
      //   justifyContent: 'space-between',
      //   flexWrap: 'wrap',
      // }}
      >
        {!hideLangs && <Langs />}
        {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}
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
