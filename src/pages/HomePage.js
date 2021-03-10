import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {getLiveEvents} from "../redux/actions/liveEvents";

const HomePage = (props) => {
  useEffect(() => {
    props.getLiveEvents()
  }, [props])

  if(props.events) {
    return (
      <p>{props.events.data[0].match_awayteam_name}</p>
    )
  } else {
    return (
      <p>loading</p>
    )
  }
}

const mapStateToProps = state => {
  return {
    events: state.liveEvents.liveEvents
  }
}

export default connect(mapStateToProps, {getLiveEvents})(HomePage)