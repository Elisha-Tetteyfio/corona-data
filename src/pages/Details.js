import React from 'react';

const Details = (country) => {
  const { name, latest_data: latestData } = country;
  return (
    <>
      <h1>Yay details page</h1>
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
