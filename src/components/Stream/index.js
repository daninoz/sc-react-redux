import React from "react";
import { connect } from "react-redux";
import Stream from './presenter';

// This function passed to connect updates the props once the redux store is updated
function mapStateToProps(state) {
  const tracks = state.track;
  return {
    tracks
  };
}

// The connect method subscribe to the redux store updates
// And updates the props of Stream using mapStateToProps
export default connect(mapStateToProps)(Stream);