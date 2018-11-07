import React from 'react';

const citiesList = ({ title, cities }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {
          cities.map(city => {
            return <li key={city.name}>{ city.name }</li>;
          })
        }
      </ul>
    </div>
  );
};

export default citiesList;