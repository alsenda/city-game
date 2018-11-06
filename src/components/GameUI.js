import React from 'react';

const gameUI = ({ score, currentCity }) => {
  return (
    <div className='gameUI'>
      GAMEUI
      score: { Math.round(score) }
      currentCity: { currentCity.name }
    </div>
  );
}

export default gameUI;