import { connect } from 'react-redux';
import { mapClick, subtractPoints, citySpotted, resetGame } from '../store/actions';
import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import geolib from 'geolib';
import Map from '../components/Map';
import GameUI from '../components/GameUI';
import CurrentCity from '../components/CurrentCity';
import './GameMap.css';

class GameMap extends Component {
  handleMapClick(location) {
    if(!this.props.currentCity) return false;
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

  handleReset() {
    this.props.resetGame();
  }

  render() {

    return (
      <Container className='GameMap' fluid={true}>
        <Row>
          <Col xl='3' xs='12'>
            <GameUI
              score={this.props.score}
              scoreChange={this.props.change}
              cities={this.props.cities}
              spottedCities={this.props.spottedCities}
              />
              <Button color={'danger'} className='ResetGameButton' onClick={this.handleReset.bind(this)}>Reset game</Button>
          </Col>
          <Col xl='9' xs='12'>
            <Map clickHandler={ this.handleMapClick.bind(this) } {...this.props.mapProps}>
              <CurrentCity city={ this.props.currentCity } />
            </Map>
          </Col>
        </Row>
      </Container>
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
    resetGame: () => dispatch(resetGame()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameMap);