import React from 'react';
import Score from './Score';
import CitiesList from './CitiesList';

const gameUI = ({ score, cities, spottedCities, scoreChange = 0 }) => {
  const spottedCitiesList = spottedCities.length > 0
    ? <CitiesList title={'Spotted cities'} cities={spottedCities} color={'success'} />
    : null;

    const nextCitiesList = cities.length > 0
    ? <CitiesList title={'Next cities'} cities={cities} />
    : null;

  return (
    <div className='gameUI'>
      <Score points={Math.round(score)} change={scoreChange} spottedCities={spottedCities} />
      {spottedCitiesList}
      {nextCitiesList}
    </div>
  );
}

export default gameUI;