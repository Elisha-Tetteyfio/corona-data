import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';
import CountryCard from '../components/CountryCard';

const Home = () => {
  const countries = useSelector((data) => data.data);
  return (
    <div>
      <h1>Corona Data</h1>
      <div>
        {countries.map((country) => (
          <CountryCard
            name={country.name}
            latest_data={country.latest_data}
            key={uuidv4()}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
