import * as actionTypes from '../constants/actionTypes';

// Set tracks does not operate over the state in any way
// It just creates an action
// An action is just an object that has type property
// The rest of the action structure is up to the developer
export function setTracks(tracks) {
  return {
    type: actionTypes.TRACKS_SET,
    tracks
  };
}