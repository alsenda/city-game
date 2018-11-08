import citiesJSON from '../cities';

const initialState = {
  maxDeviation: 50000,
  cities: citiesJSON,
  currentCity: {
    name: 'Brussels',
    coordinates: {
      latitude: 50.83996998465344,
      longitude: 4.363860839843774
    }
  },
  clickCoordinates: [],
  mapProps: {
    center: [54, 14],
    bingmapKey: 'AreSMxQDRlNyZMBEt5u5fQ9g5OP_jdLS4TkgAiV7Evki1Czpor8RExlEXzljmySW',
    mapTypeId: 'road',
  },
};

const map = (state = initialState, action) => {
  switch (action.type) {
    case 'MAP_CLICK':
      return {
        ...state,
        clickCoordinates: action.clickCoordinates
      };
    case 'CITY_SPOTTED':
      const newCities = [...state.cities];
      const newCurrentCity = newCities.splice(0, 1)[0];
      return {
        ...state,
        cities: newCities,
        currentCity: newCurrentCity,
      };
    case 'RESET_GAME':
      console.log('RESET_GAME');
      return initialState;
    default:
      return state;
  }
}

export default map;