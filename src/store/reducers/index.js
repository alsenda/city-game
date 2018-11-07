import { combineReducers } from 'redux';
import MapReducer from './map';
import UIReducer from './ui';
export default combineReducers({
  map: MapReducer,
  ui: UIReducer, 
});