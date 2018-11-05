import React, { Component } from 'react';
import './App.css';
import GameMap from './containers/GameMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameMap />
      </div>
    );
  }
}

export default App;
