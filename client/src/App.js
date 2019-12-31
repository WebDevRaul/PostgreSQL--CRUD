import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './layout/navbar/Navbar';
import Register from './pages/register/Register';
import SignIn from './pages/signIn/SignIn';
import Footer from './layout/footer/Footer';

import './app.css';

const App = () => (
  <div className='app'>
    <Navbar />
    <Switch>
      <Redirect exact from ='/' to='/home' />
      <Route exact path='/register' component={Register} />
      <Route exact path='/sign-in' component={SignIn} />
    </Switch>
    <Footer />
  </div>
)

export default App;