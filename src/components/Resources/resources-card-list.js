import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './resources-card-list.module.scss';
import ResourcesCard from './resources-card';

const ResourcesCardList = ({ resourcesListName, resourcesList }) => {
  return (
    <div className={styles.resourcesCardList}>
      <div className={styles.title}>
        <h2 className="extra-bold">
          <FormattedMessage id={`resources.${resourcesListName}.title`} />
        </h2>
      </div>
      <div>
        {Object.keys(resourcesList).map(resource => {
          return <ResourcesCard key={resource} listName={resourcesListName} name={resource} resource={resourcesList[resource]} />;
        })}
      </div>
    </div>
  );
};

export default ResourcesCardList;
