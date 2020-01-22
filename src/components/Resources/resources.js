import React, { useState, useEffect } from 'react';
import ResourcesList from './resources-list';
import ResourcesCard from './resources-card';
import resourcesEN from '../../i18n/translations/en/resources';
import resourcesES from '../../i18n/translations/es/resources';
import resourcesPT from '../../i18n/translations/pt/resources';

const Resources = () => {
  const [selectedResource, setSelectedResource] = useState(resourcesEN);

  useEffect(() => {
    setSelectedResource(selectLanguage());
  }, []);

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
      <ResourcesList list={selectedResource.list} />
      <div>
        {Object.keys(selectedResource.list).map(resource => {
          return <ResourcesCard name={resource} resource={selectedResource.list[resource]} />;
        })}
      </div>
    </section>
  );
};

export default Resources;
