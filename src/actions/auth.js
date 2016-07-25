import SC from 'soundcloud';
import { CLIENT_ID, REDIRECT_URI } from '../constants/auth';
import * as actionTypes from '../constants/actionTypes';
import { setTracks } from '../actions/track';

function setMe(user) {
  return {
    type: actionTypes.ME_SET,
    user,
  };
}

function fetchStream(me, session) {
  return (dispatch) => {
    fetch(`//api.soundcloud.com/me/activities?limit=20&offset=0&oauth_token=${session.oauth_token}`)
        .then((response) => response.json())
        .then((data) => {
          dispatch(setTracks(data.collection));
        });
  };
}

// With thunk instead of the action returning an object with an actionType and the data for the reducer,
// it let us return a function that will dispatch a "real action"
export function auth() {
  return (dispatch) => {
    // We initialize the Soundclound client using the client_id and the redirect uri
    SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });

    // We connect to the client using our oauth_token
    SC.connect().then((session) => {
      fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
          .then((response) => response.json())
          .then((user) => {
            // We dispatch an action that will save the user data
            dispatch(setMe(user));
            dispatch(fetchStream(user, session));
          });
    });
  };
}
