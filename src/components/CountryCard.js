import React from 'react';
import styles from './CountryCard.module.css';
import icon from '../images/details.png';

const CountryCard = (country) => {
  const { name, latest_data: latestData = { confirmed: 0 } } = country;
  return (
    <div className={styles.container}>
      <div><img src={icon} alt="details" /></div>
      <div className={styles.bottom}>
        <div className={styles.name}>{name}</div>
        <div>{latestData.confirmed}</div>
      </div>
    </div>
  );
};

export default CountryCard;
