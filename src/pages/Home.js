import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import CountryCard from '../components/CountryCard';

const Home = () => {
  const countries = useSelector((data) => data.data);
  return (
    <div>
      <h1>Corona Data</h1>
      <div>
        {countries.map((country) => (
          <NavLink to={`/details/${country.name}`} exact key={uuidv4()}>
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
