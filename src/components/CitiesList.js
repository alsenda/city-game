import React from 'react';
import { Badge } from 'reactstrap';
import './CitiesList.css';

const citiesList = ({ title, cities, color='warning' }) => {
  return (
    <div className='CitiesList'>
      <h4 className="alert-heading">{title}</h4>
        {
          cities.map(city => {
            return <Badge className='CityBadge' color={color} key={city.name}>{ city.name }</Badge> ;
          })
        }
    </div>
  );
};

export default citiesList;