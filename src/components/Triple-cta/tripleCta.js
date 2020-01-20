import React from 'react';
import Cta from './cta';
import ctaList from '../../i18n/translations/en/tripleCta';
import redBackground from '../../images/red-background.svg';
import purpleBackground from '../../images/purple-background.svg';
import yellowBackground from '../../images/yellow-background.svg';

const selectBackground = bg => {
  switch (bg) {
    case 'redBackground':
      return redBackground;
    case 'purpleBackground':
      return purpleBackground;
    case 'yellowBackground':
      return yellowBackground;
    default:
      return redBackground;
  }
};

const TripleCta = () => {
  return (
    <section>
      {Object.keys(ctaList).map((cta, i) => {
        const background = selectBackground(ctaList[cta].background);
        return (
          <Cta cta={cta} key={cta} link={ctaList[cta].link} index={i} background={background} />
        );
      })}
    </section>
  );
};

export default TripleCta;
