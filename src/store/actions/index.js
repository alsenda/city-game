export const mapClick = coordinates => ({
  type: 'MAP_CLICK',
  clickCoordinates: coordinates
});

export const subtractPoints = lostPoints => ({
  type: 'SUBTRACT_POINTS',
  lostPoints: lostPoints
});