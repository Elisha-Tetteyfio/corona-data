import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import CountryCard from '../components/CountryCard';
import styles from './Home.module.css';

const Home = () => {
  const countries = useSelector((data) => data.data);
  let totalCases = 0;
  let totalCountries = 0;
  let totalDeaths = 0;
  countries.map((c) => {
    totalCases += c.latest_data.confirmed;
    totalCountries += 1;
    totalDeaths += c.latest_data.deaths;
    return totalCases;
  });
  return (
    <div>
      <div className={styles.intro}>
        <h1>Corona Virus Data</h1>
        <div className={styles.allData}>
          <div>
            <div className={styles.value}>{totalCountries}</div>
            <div className={styles.parameter}>Number of countries</div>
          </div>
          <div>
            <div className={styles.value}>{totalCases.toLocaleString()}</div>
            <div className={styles.parameter}>Total number of cases</div>
          </div>
          <div>
            <div className={styles.value}>{totalDeaths.toLocaleString()}</div>
            <div className={styles.parameter}>Total number of deaths</div>
          </div>
        </div>
      </div>
      <div className={styles.divide}>Stats by countries</div>
      <div className={styles.countriesContainer}>
        {countries.map((country) => (
          <NavLink to={`/details/${country.name}`} exact key={uuidv4()} className={styles.link}>
            <CountryCard
              name={country.name}
              latest_data={country.latest_data}
              key={uuidv4()}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Home;
