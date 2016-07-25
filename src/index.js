import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './stores/configureStore';
import App from './components/App';
import Callback from './components/Callback';
import Stream from './components/Stream';

// Redux only has one store. configStore set that store
const store = configureStore();

// actions.setTracks returns an action with an action type
// store.dispatch sent that action to the store
// The store is going to let the rootReducer take care of it
// store.dispatch(actions.setTracks(tracks));

// Syncs the router history with the store so we can react to path changes
const history = syncHistoryWithStore(browserHistory, store);

/*
 We render our component Track with the props tracks
 in the element #app
 */
ReactDOM.render(
  // We wrap our components in the Provider
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Stream} />
        <Route path="/" component={Stream} />
        <Route path="/callback" component={Callback} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
