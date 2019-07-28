import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

// Redux
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, sign_out } from './redux/actions/authentication';
import { set_posts } from './redux/actions/post';

// Components
import Home from './components/home/Home';
import Sign_In from './components/authentication/sign_in/Sign_In';
import Register from './components/authentication/register/Register';
import Dashboard from './components/dashboard/Dashboard';
import NotFound from './components/common/components/Not_Found';

// Redux
import store from './store';
import { Provider } from 'react-redux';

// Layout
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';

// Common
import PrivateRoute from './components/common/privateRoute';

// Css
import './css/app.css';
import './css/responsive.css';

if (localStorage.jwtToken) {
  const decoded = jwt_decode(localStorage.jwtToken);
  // Sign-in User
  setAuthToken(localStorage.jwtToken);
  // Extract posts for its own reducer
  const { posts } = decoded;
  store.dispatch(setCurrentUser(decoded));
  store.dispatch(set_posts(posts))

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Sign-out ser
    store.dispatch(sign_out());
    window.location.href = '/sign-in';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='app-container'>
            <Navbar />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/sign-in' component={Sign_In} />
                <Route exact path='/register' component={Register} />

                <PrivateRoute exact path='/dashboard' component={Dashboard} />
                
                <Route path='*' component={NotFound} />
              </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;