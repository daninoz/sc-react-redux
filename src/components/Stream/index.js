import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Stream from './presenter';

// This function passed to connect updates the props once the redux store is updated
function mapStateToProps(state) {
  const { user } = state.auth;
  const { tracks, activeTrack } = state.track;
  return {
    user,
    tracks,
    activeTrack,
  };
}

// With this we pass actions to our presenter component
// In this case we bind the action auth with the prop function onAuth
function mapDispatchToProps(dispatch) {
  return {
    onAuth: bindActionCreators(actions.auth, dispatch),
    onPlay: bindActionCreators(actions.playTrack, dispatch),
  };
}

// The connect method subscribe to the redux store updates
// And updates the props of Stream using mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(Stream);
