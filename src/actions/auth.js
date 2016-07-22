import { CLIENT_ID, REDIRECT_URI } from '../constants/auth';

export function auth() {
  //We initialize the Soundclound client using the client_id and the redirect uri
  SC.initialize({client_id: CLIENT_ID, redirect_uri: REDIRECT_URI});

  //We connect to the client using our oauth_token
  SC.connect().then((session) => {
    fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
        .then((response) => response.json())
        .then((me) => {
          console.log(me);
        })
  })
}