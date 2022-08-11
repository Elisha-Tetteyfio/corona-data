import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Details.module.css';
import settings from '../images/settings.png';

const Details = (country) => {
  const { name, latest_data: latestData, population } = country;
  return (
    <>
      <header>
        <NavLink to="/" exact className={styles.back}>&lt; Home</NavLink>
        {name}
        <img src={settings} alt="settings" />
      </header>
      <div className={styles.intro}>
        {name}
        {' '}
        corona details
      </div>
      <ul className={styles.details}>
        <li className={styles.detailsElement}>
          <div>Country</div>
          <div>{name}</div>
        </li>
        <li className={styles.detailsElement}>
          <div>Population</div>
          <div>{population.toLocaleString()}</div>
        </li>
        <li className={styles.detailsElement}>
          <div>Confirmed cases</div>
          <div>{latestData.confirmed.toLocaleString()}</div>
        </li>
        <li className={styles.detailsElement}>
          <div>Critical cases</div>
          <div>{latestData.critical.toLocaleString()}</div>
        </li>
        <li className={styles.detailsElement}>
          <div>Confirmed deaths</div>
          <div>{latestData.deaths.toLocaleString()}</div>
        </li>
        <li className={styles.detailsElement}>
          <div>Recovered cases</div>
          <div>{latestData.recovered.toLocaleString()}</div>
        </li>
      </ul>
    </>
  );
};

export default Details;
