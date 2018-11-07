import React from 'react';
import CurrentCity from './CurrentCity';
import Score from './Score';
import CitiesList from './CitiesList';
import './GameUI.css';

const gameUI = ({ score, currentCity, cities, spottedCities, scoreChange = 0 }) => {
  const spottedCitiesList = spottedCities.length > 0
    ? <CitiesList title={'Spotted cities'} cities={spottedCities} />
    : null;

    const nextCitiesList = cities.length > 0
    ? <CitiesList title={'Next cities'} cities={cities} />
    : null;

  const currentCityDisplay = currentCity && <CurrentCity name={ currentCity.name } />;

  return (
    <div className='gameUI'>
      GAMEUI
      <Score points={Math.round(score)} change={scoreChange} spottedCities={spottedCities} />
      {currentCityDisplay}
      {spottedCitiesList}
      {nextCitiesList}
    </div>
  );
}

export default gameUI;