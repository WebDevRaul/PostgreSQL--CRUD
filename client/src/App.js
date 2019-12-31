import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './layout/navbar/Navbar';
import Footer from './layout/footer/Footer';

import './app.css';

const App = () => (
  <Router>
    <div className='app'>
      <Navbar />
      <Footer />
    </div>
  </Router>
)

export default App;