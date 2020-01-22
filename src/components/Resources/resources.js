import React from 'react';
import ResourcesList from './resources-list';
import ResourcesCard from './resources-card';
import resourcesEN from '../../i18n/translations/en/resources';
import resourcesES from '../../i18n/translations/es/resources';
import resourcesPT from '../../i18n/translations/pt/resources';

const Resources = () => {
  const selectLanguage = () => {
    const lg = localStorage.getItem('language');
    switch (lg) {
      case 'en':
        return resourcesEN;
      case 'es':
        return resourcesES;
      case 'pt':
        return resourcesPT;
      default:
        return resourcesEN;
    }
  };

  return (
    <section className="container">
      <ResourcesList list={selectLanguage().list} />
      <div>
        {Object.keys(selectLanguage().list).map(resource => {
          return <ResourcesCard name={resource} resource={selectLanguage().list[resource]} />;
        })}
      </div>
    </section>
  );
};

export default Resources;
