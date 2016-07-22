import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import * as actions from '../../actions';
import Stream from './presenter';

// This function passed to connect updates the props once the redux store is updated
function mapStateToProps(state) {
  const tracks = state.track;
  return {
    tracks
  };
}

//With this we pass actions to our presenter component
//In this case we bind the action auth with the prop function onAuth
function mapDispatchToProps(dispatch) {
  return {
    onAuth: bindActionCreators(actions.auth, dispatch)
  }
}

// The connect method subscribe to the redux store updates
// And updates the props of Stream using mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(Stream);