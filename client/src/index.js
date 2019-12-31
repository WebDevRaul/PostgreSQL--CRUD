import React from 'react';
import ReactDOM from 'react-dom';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, signOut } from './redux/actions/user';
import jwt_decode from 'jwt-decode';
import { Provider } from 'react-redux';
import store from './redux/store';

import App from './App';
import * as serviceWorker from './serviceWorker';

if (localStorage.jwtToken) {
  const decoded = jwt_decode(localStorage.jwtToken);
  // Sign-in User
  setAuthToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Sign-out ser
    store.dispatch(signOut());
    window.location.href = '/sign-in';
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
