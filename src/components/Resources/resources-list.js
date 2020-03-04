import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './resources-list.module.scss';
import arrowDown from '../../images/icons/arrow-down.svg';

const ResourcesLists = ({ name, list }) => {
  return (
    <div className={styles.resources}>
      <div className={styles.title}>
        <h2 className="extra-bold">
          <FormattedMessage id={`resources.${name}.title`} />
        </h2>
      </div>
      <div className={styles.list}>
        <ul className="">
          {Object.keys(list).map(resource => {
            const name = list[resource].abbreviation ? list[resource].abbreviation : resource;
            return (
              <li key={resource}>
                <a href={`#${resource}`}>
                  <img src={arrowDown} alt="arrow" />
                  <span>{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ResourcesLists;
