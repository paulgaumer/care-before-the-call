import React, { useState, useEffect } from 'react';
import ResourcesList from './resources-list';
import ResourcesCardList from './resources-card-list';
import styles from './resources.module.scss';
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
      <div className={styles.resourcesListsContainer}>
        <div className={styles.resourcesLists}>
          {Object.keys(selectedResource).map((resource) => {
            return <ResourcesList key={resource} name={resource} list={selectedResource[resource].list} />
          })}
        </div>
      </div>
      {Object.keys(selectedResource).map(resource => {
        return <ResourcesCardList key={resource} resourcesListName={resource} resourcesList={selectedResource[resource].list} />;
      })}
    </section>
  );
};

export default Resources;
