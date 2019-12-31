import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './Private_Route';

import Navbar from './layout/navbar/Navbar';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import SignIn from './pages/signIn/SignIn';
import Dashboard from './pages/dashboard/Dashboard';
import Footer from './layout/footer/Footer';

import './app.css';
import NotFound from './pages/not_found/Not_Found';

const App = () => (
  <div className='app'>
    <Navbar />
    <Switch>
      <Redirect exact from ='/' to='/home' />
      <Route exact path='/register' component={Register} />
      <Route exact path='/sign-in' component={SignIn} />
      <Route exact path='/home' component={Home} />

      <PrivateRoute exact path='/dashboard' component={Dashboard} />

      <Route path='*' component={NotFound} />
    </Switch>
    <Footer />
  </div>
)

export default App;