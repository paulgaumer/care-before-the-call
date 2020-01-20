import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './resources-list.module.scss';

const ResourcesLists = props => {
  return (
    <div className={styles.resources}>
      <h2 className="extra-bold">
        <FormattedMessage id={`resources.title`} />
      </h2>
      <div className={styles.list}>
        <ul className="">
          {Object.keys(props.list).map(resource => {
            return (
              <li>
                <span>{resource}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ResourcesLists;
