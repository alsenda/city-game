import { connect } from 'react-redux';
import { mapClick, subtractPoints } from '../store/actions';
import React, { Component } from 'react';
import geolib from 'geolib';
import Map from '../components/Map';
import GameUI from '../components/GameUI';

class GameMap extends Component {
  handleMapClick(location) {
    const clickCoordinates = {
      latitude: location.latitude,
      longitude: location.longitude
    };
    console.log('clickCoordinates', clickCoordinates);
    this.props.mapClicked(clickCoordinates);
    const currentCityCoordinates = this.props.map.currentCity.coordinates;
    const distance = geolib.getDistance(clickCoordinates, currentCityCoordinates);
    if(distance > this.props.map.maxDeviation) {
      console.log('TOO FAR', distance);
      this.props.losePoints(distance/1000);
    } else {
      console.log('YOU GOT IT', distance);
    }
  }

  render() {
    const mapProps = {
      clickHandler: this.handleMapClick.bind(this),
      center: [50, 14],
      bingmapKey: 'AreSMxQDRlNyZMBEt5u5fQ9g5OP_jdLS4TkgAiV7Evki1Czpor8RExlEXzljmySW',
      mapTypeId: 'road'
    };

    return (
      <div className='GameMap'>
        <GameUI score={ this.props.map.score } currentCity={ this.props.map.currentCity } />
        <Map { ...mapProps } />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    map: state.map,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    mapClicked: (clickCoordinates) => dispatch(mapClick(clickCoordinates)),
    losePoints: (lostPoints) => dispatch(subtractPoints(lostPoints)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameMap);