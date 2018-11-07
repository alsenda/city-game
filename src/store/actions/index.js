export const mapClick = coordinates => ({
  type: 'MAP_CLICK',
  clickCoordinates: coordinates,
});

export const subtractPoints = lostPoints => ({
  type: 'SUBTRACT_POINTS',
  lostPoints: lostPoints,
});

export const resetGame = () => ({
  type: 'RESET_GAME',
});

export const citySpotted = (city) => ({
  type: 'CITY_SPOTTED',
  city: city,
});