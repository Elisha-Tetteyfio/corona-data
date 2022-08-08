import React from 'react';

const CountryCard = (country) => {
  const { name, latest_data: latestData } = country;
  return (
    <div style={{ margin: '10px' }}>
      <div>rightarrow</div>
      <div>{name}</div>
      <div>{latestData.deaths}</div>
    </div>
  );
};

export default CountryCard;
