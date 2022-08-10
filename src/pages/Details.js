import React from 'react';
import { NavLink } from 'react-router-dom';

const Details = (country) => {
  const { name, latest_data: latestData } = country;
  return (
    <>
      <header>
        <NavLink to="/" exact>&lt;</NavLink>
        {name}
        {' '}
        corona details
      </header>
      <div>
        Name:
        {name}
      </div>
      <div>
        Confirmed cases:
        {latestData.confirmed}
      </div>
      <div>
        Confirmed deaths:
        {latestData.deaths}
      </div>
    </>
  );
};

export default Details;
