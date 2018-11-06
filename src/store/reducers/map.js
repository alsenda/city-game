import cities from '../cities';

const initialState = {
  score: 1500,
  maxDeviation: 50000,
  cities: cities,
  currentCity: {
    name: 'Brussels',
    coordinates: {
      latitude: 50.83996998465344,
      longitude: 4.363860839843774
    }
  },
  clickCoordinates: [],
};

const map = (state = initialState, action) => {
  console.log('ACTION', action);
  switch (action.type) {
    case 'MAP_CLICK':
      return {
        ...state,
        clickCoordinates: action.clickCoordinates
      };
    case 'SUBTRACT_POINTS':
      return {
        ...state,
        score: state.score - action.lostPoints
      }
    default:
      return state;
  }
}

export default map;