import React, { useContext } from 'react';
import { navigate } from 'gatsby';
import { injectIntl } from 'react-intl';

import languages from '../../i18n/languages.js';
import PageContext from '../../layout/PageContext.js';
import styles from './langs.module.scss';

const LangButton = ({ label, chosen, onClick }) => (
  <span
    onClick={onClick}
    className={styles.langButton}
    style={{
      borderBottom: chosen ? '2px solid black' : 'none',
    }}
  >
    {label}
  </span>
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
    <div>
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
