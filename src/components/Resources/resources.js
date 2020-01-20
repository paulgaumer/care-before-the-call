import React from 'react';
import ResourcesList from './resources-list';
import ResourcesCard from './resources-card';
import resources from '../../i18n/translations/en/resources';

const Resources = () => {
  return (
    <section className="container">
      <ResourcesList list={resources.list} />
      <div>
        {Object.keys(resources.list).map(resource => {
          return <ResourcesCard name={resource} resource={resources.list[resource]} />;
        })}
      </div>
    </section>
  );
};

export default Resources;
