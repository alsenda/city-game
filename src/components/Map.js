import React from 'react';
import { ReactBingmaps } from 'react-bingmaps';

const map = ({ clickHandler, center, bingmapKey, mapTypeId }) => (
  <div style={{ height: '100vh', width: '100%' }}>
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
    </div>
);

export default map;