import React from 'react';
import Cta from './cta';
import ctaList from '../../i18n/translations/en/tripleCta';

const TripleCta = () => {
  return (
    <section>
      {Object.keys(ctaList).map((cta, i) => {
        return <Cta cta={cta} key={cta} link={ctaList[cta].link} index={i} />;
      })}
    </section>
  );
};

export default TripleCta;
