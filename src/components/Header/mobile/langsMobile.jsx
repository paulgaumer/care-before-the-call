import React, { useContext } from 'react';
import { navigate } from 'gatsby';
import { injectIntl } from 'react-intl';

import languages from '../../../i18n/languages';
import PageContext from '../../../layout/PageContext.js';
import styles from './langsMobile.module.scss';

const LangButton = ({ label, chosen, onClick }) => (
  <p onClick={onClick} className={styles.langButton}>
    <span
      style={{
        borderBottom: chosen ? '2px solid black' : 'none',
      }}
    >
      {label}
    </span>
  </p>
);

const Langs = ({ intl: { locale } }) => {
  const pageContext = useContext(PageContext);

  const handleSetLang = language => {
    const { originalPath } = pageContext.page;
    const newPathname = `/${language}${originalPath}`;

    localStorage.setItem('language', language);
    navigate(newPathname);
  };

  if (!pageContext.custom.localeKey) return null;
  return (
    <div className={styles.content}>
      {languages.map(language => {
        return (
          <LangButton
            key={language.locale}
            label={language.label}
            chosen={language.locale === locale}
            onClick={() => handleSetLang(language.locale)}
          />
        );
      })}
    </div>
  );
};

export default injectIntl(Langs);
