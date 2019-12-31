import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, signOut } from './redux/actions/user';
import jwt_decode from 'jwt-decode';

import App from './App';
import * as serviceWorker from './serviceWorker';

// Check Token
if (localStorage.Crud_Token) {
  const { Crud_Token } = localStorage;
  const { exp } = jwt_decode(Crud_Token);
  const time = Date.now() / 1000;

  // Sign-In user
  setAuthToken(Crud_Token);
  store.dispatch(setCurrentUser(Crud_Token));

  // Sign-Out user
  if(exp < time) store.dispatch(signOut());
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <HttpsRedirect>
          <App />
        </HttpsRedirect>
      </Router>
    </PersistGate>
  </Provider> 
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
