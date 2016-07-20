import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import Stream from './components/Stream';

// This is our Stream component props
const tracks = [
  {
    title: 'Some Track'
  },
  {
    title: 'Some other Track'
  }
];

// Redux only has one store. configStore set that store
const store = configureStore();

// actions.setTracks returns an action with an action type
// store.dispatch sent that action to the store
// The store is going to let the rootReducer take care of it
store.dispatch(actions.setTracks(tracks));

/*
 We render our component Track with the props tracks
 in the element #app
 */
ReactDOM.render(
    // We wrap our components in the Provider
    <Provider store={store}>
      <Stream />
    </Provider>,
    document.getElementById('app')
);