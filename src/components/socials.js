import React from 'react';
import instagram from '../images/icons/instagram.svg';
import twitter from '../images/icons/twitter.svg';
import facebook from '../images/icons/facebook.svg';

const Socials = () => {
  return (
    <div className="socials">
      <a href="https://www.instagram.com/officeonhealth/" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="instagram" />
      </a>
        <a href="https://facebook.com/officeonhealth/" target="_blank" rel="noopener noreferrer">
        <img src={facebook} alt="facebook" />
      </a>

        <a href="https://twitter.com/officeonhealth/" target="_blank" rel="noopener noreferrer">
        <img src={twitter} alt="twitter" />
      </a>
    </div>
  );
};

export default Socials;
