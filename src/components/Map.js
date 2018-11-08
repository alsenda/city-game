import React from 'react';
import { ReactBingmaps } from 'react-bingmaps';

const map = ({ clickHandler, center, bingmapKey, mapTypeId, children }) => (
  <div className='Map' style={{ height: '100vh' }}>
    <ReactBingmaps
          labelOverlay='hidden'
          bingmapKey = { bingmapKey }
          center = { center }
          zoom = {4}
          mapTypeId = { mapTypeId }
          getLocation = {
            { addHandler: 'click', callback: ((e) => clickHandler(e)) }
          }
          mapOptions = {{
            disableScrollWheelZoom: true,
          }}
        > 
      </ReactBingmaps>
      {children}
    </div>
);

export default map;