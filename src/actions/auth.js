import { CLIENT_ID, REDIRECT_URI } from '../constants/auth';
import * as actionTypes from '../constants/actionTypes';

function setMe(user) {
  return {
    type: actionTypes.ME_SET,
    user
  }
}

export function auth() {
  return function(dispatch) {
    //We initialize the Soundclound client using the client_id and the redirect uri
    SC.initialize({client_id: CLIENT_ID, redirect_uri: REDIRECT_URI});

    //We connect to the client using our oauth_token
    SC.connect().then((session) => {
      fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
          .then((response) => response.json())
          .then((user) => {
            //We dispatch an action that will save the user data
            dispatch(setMe(user));
          })
    });
  }
}