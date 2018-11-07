import { connect } from 'react-redux';
import { mapClick, subtractPoints, citySpotted } from '../store/actions';
import React, { Component } from 'react';
import geolib from 'geolib';
import Map from '../components/Map';
import GameUI from '../components/GameUI';

class GameMap extends Component {
  handleMapClick(location) {
    const clickCoordinates = {
      latitude: location.latitude,
      longitude: location.longitude,
    };
    this.props.mapClicked(clickCoordinates);
    const currentCityCoordinates = this.props.currentCity.coordinates;
    const distance = geolib.getDistance(clickCoordinates, currentCityCoordinates);
    if (distance > this.props.maxDeviation) {
      this.props.losePoints(distance / 1000);
    } else {
      this.props.citySpotted(this.props.currentCity);
    }
  }

  render() {
    return (
      <div className='GameMap'>
        <GameUI
          score={this.props.score}
          currentCity={this.props.currentCity}
          scoreChange={this.props.change}
          cities={this.props.cities}
          spottedCities={this.props.spottedCities}
          />
        <Map clickHandler={this.handleMapClick.bind(this)} {...this.props.mapProps} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    score: state.ui.score,
    spottedCities: state.ui.spottedCities,
    currentCity: state.map.currentCity,
    maxDeviation: state.map.maxDeviation,
    change: state.ui.change,
    mapProps: state.map.mapProps,
    cities: state.map.cities,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    mapClicked: (clickCoordinates) => dispatch(mapClick(clickCoordinates)),
    losePoints: (lostPoints) => dispatch(subtractPoints(lostPoints)),
    citySpotted: (city) => dispatch(citySpotted(city)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameMap);