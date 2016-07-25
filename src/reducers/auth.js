import * as actionTypes from '../constants/actionTypes';

const initialState = {};

// Adds the user to the state
function setMe(state, action) {
  const { user } = action;
  return { ...state, user };
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ME_SET:
      return setMe(state, action);
    default:
  }

  return state;
}
