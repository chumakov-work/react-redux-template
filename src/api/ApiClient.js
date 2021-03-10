import axios from 'axios'

export const loadLiveEvents = () => {
  return axios.get('https://apiv2.apifootball.com/?action=get_events&APIkey=24f9bb61075eee987c7548fa194268d1b99591802be04faaf42f8097d15714c6&match_live=1')
}