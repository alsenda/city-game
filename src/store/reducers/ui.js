const initialState = {
  initialScore: 1500,
  score: 1500,
  spottedCities: [],
  change: 0,
};

const ui = (state = initialState, action) => {
  console.log('ACTION', action);
  switch (action.type) {
    case 'SUBTRACT_POINTS':
      return {
        ...state,
        score: state.score - action.lostPoints,
        change: action.lostPoints,
      };
    case 'CITY_SPOTTED':
      const newSpottedCities = [...state.spottedCities, action.city];
      console.log('CITY_SPOTTED', action);
      console.log('newSpottedCities', newSpottedCities);
      return {
        ...state,
        change: 0,
        spottedCities: newSpottedCities,
      };
    case 'RESET_GAME':
      return initialState;
    default:
      return state;
  }
}

export default ui;