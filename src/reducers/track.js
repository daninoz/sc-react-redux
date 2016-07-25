import * as actionTypes from '../constants/actionTypes';

const initialState = {
  tracks: [],
  activeTrack: null,
};

function setTracks(state, action) {
  // This is the same as var tracks = action.tracks;
  const { tracks } = action;

  // It combines the current state and the given tracks
  // It's important to see that we do not append the tracks to the current state
  // We return a new state that contains the previous state tracks and the new tracks
  // The state is always immutable
  return { ...state, tracks };
}

function setPlay(state, action) {
  const { track } = action;
  return { ...state, activeTrack: track };
}

export default function (state = initialState, action) {
  // The reducer checks if it should act based on the action type
  switch (action.type) {
    case actionTypes.TRACKS_SET:
      return setTracks(state, action);
    case actionTypes.TRACK_PLAY:
      return setPlay(state, action);
    default:
  }

  // If the reducer doesn't have an operation of this action type it should always return the state given
  return state;
}
