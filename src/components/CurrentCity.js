import React from 'react';
import './CurrentCity.css';

const currentCity = ({ city }) => {
  const display = city
    ? <div>
        Select the location of
        <h1>{ city.name }</h1>
      </div>
    : <div>
        <h1>You win!</h1>
      </div>
  return (
    <div className='CurrentCity'>
      {display}
    </div>
  );
}

export default currentCity;