import { combineReducers } from "redux";
import laneReducer from './laneReducer';

export default combineReducers({
    lanes: laneReducer
});