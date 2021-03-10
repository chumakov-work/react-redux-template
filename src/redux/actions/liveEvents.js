import {GET_LIVE_EVENTS} from '../types'
import {loadLiveEvents} from "../../api/ApiClient";

export const getLiveEvents = () => async dispatch => {
  let res = await loadLiveEvents()
  dispatch({type: GET_LIVE_EVENTS, payload: res})
}