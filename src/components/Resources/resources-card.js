import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FormattedHTMLMessage } from 'react-intl';
import styles from './resources-card.module.scss';

const Addresses = ({ address }) => {
  return (
    <div>
      {address.name !== undefined && (
        <p className={`${styles.addressName} extra-bold`}>{address.name}</p>
      )}
      <p>{address.street}</p>
      <p>{address.city}</p>
      {address.phone !== undefined && <p>{address.phone}</p>}
    </div>
  );
};

const Hours = ({ hour, index, name }) => {
  return (
    <div>
      {/* <p>
        <FormattedMessage id={`resources.list.${name}.hours[${index}].name`} />
      </p> */}
      <p className={`${styles.hourName} extra-bold`}>{hour.name}</p>
      {hour.options.map(option => (
        <p className={styles.hourOption}>{option}</p>
      ))}
    </div>
  );
};

const ResourcesCard = ({ resource, listName, name }) => {
  return (
    <div className={styles.resourceCard} id={name}>
      <div className={styles.image}>
        <img
          src={resource.image}
          alt={name}
          style={resource.rounded ? { borderRadius: '50%' } : null}
        />
      </div>
      <div className={styles.info}>
        <h2>{name}</h2>
        {resource.website !== undefined && (
        <a
          href={`http://${resource.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="extra-bold"
        >
          <FormattedMessage id={`resources.${listName}.list.${name}.website`} />
        </a>
        )}
        <div className={styles.addressesDetails}>
          {resource.addresses.map(address => (
            <Addresses address={address} />
          ))}
        </div>
        {resource.description !== undefined && (
          <p className={styles.description}>
            <FormattedHTMLMessage
              id={`resources.${listName}.list.${name}.description`}
              // values={{ br: <br />  }}
            />
          </p>
        )}
        {resource.hours !== undefined && (
          <div className={styles.hoursDetails}>
            {resource.hours.map((hour, i) => (
              <Hours hour={hour} index={i} name={name} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesCard;
