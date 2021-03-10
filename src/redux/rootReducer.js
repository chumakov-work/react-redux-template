import {combineReducers} from "redux";

// Reducers
import {getLiveEvents} from "./reducers/liveEvents";

export const rootReducer = combineReducers({
  liveEvents: getLiveEvents
})