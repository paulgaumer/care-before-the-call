import React from 'react';
import { FormattedMessage } from 'react-intl';
import ResourcesCard from './resources-card';

const ResourcesCardList = ({ resourcesListName, resourcesList }) => {
  return (
    <section>
      <h2 className={``}>
        <FormattedMessage id={`resources.${resourcesListName}.title`} />
      </h2>
      {Object.keys(resourcesList).map(resource => {
        return <ResourcesCard key={resource} listName={resourcesListName} name={resource} resource={resourcesList[resource]} />;
      })}
    </section>
  );
};

export default ResourcesCardList;
