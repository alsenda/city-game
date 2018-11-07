import React from 'react';

const score = ({ points, spottedCities, change = 0 }) => {
  const changeTag = change && ` (-${ Math.round(change) } km)`;
  return (
    <div>
      <div>{ spottedCities.length } cities placed</div>
      <div>{ points + changeTag } kilometers left</div>
    </div>
  );
}

export default score;