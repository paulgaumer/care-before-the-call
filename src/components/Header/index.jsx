import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Langs from './langs';
import LangsMobile from './mobile/langsMobile';
import Credits from './mobile/credits';
import Socials from '../socials';
import styles from './index.module.scss';
import menuIcon from '../../images/icons/menu.svg';

const Header = ({ siteTitle, hideLangs }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
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
            <div className="d-none d-sm-block ">
              <div className={`${styles.navContent}`}>
                <div>{!hideLangs && <Langs />}</div>
                <Socials />
              </div>
            </div>
            <div className={`${styles.navMobile} d-block d-sm-none`}>
              <img src={menuIcon} alt="mobile menu" onClick={handleShow} />
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU MODAL */}
      <Modal show={show} onHide={handleClose} dialogClassName={styles.modalWidth}>
        <Modal.Body style={{ padding: '1rem 0 0 0' }}>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={handleClose}
          >
            <span aria-hidden="true" style={{ fontSize: '30px', padding: '10px 10px 0 0' }}>
              &times;
            </span>
          </button>
          <div className={styles.modalContent}>
            <LangsMobile />
            <Credits />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  hideLangs: PropTypes.bool,
};

Header.defaultProps = {
  siteTitle: ``,
  hideLangs: false,
};

export default Header;
