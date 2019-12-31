import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { signOut } from '../../redux/actions/user';
import { createStructuredSelector } from 'reselect';
import { state_isAuth } from '../../redux/selectors/user';

import Logo from './Logo';
import Guest from './Guest';
import User from './User';

const Navbar = ({ isAuth, signOut, history: { location: { pathname } } }) => {
  const [show, setShow] = useState(false);
  const plus18px = (pathname === '/home' || pathname === '/sign-in') && ( window.innerWidth > 992 ) ? true : false;

  const onClick = () => setShow(!show);
  const onSignOut = () => { signOut(); setShow(!show) };

  return (
    <nav className={classnames('navbar navbar-expand-lg navbar-dark bg-dark', {'is-scroll': plus18px})}>
      <Logo />
      <button
        className="navbar-toggler" 
        type="button"
        onClick={onClick}  
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={classnames('collapse navbar-collapse', { 'show' : show })}>
        { 
          isAuth 
          ? <User show={show} setShow={setShow} onSignOut={onSignOut} /> 
          : <Guest show={show} setShow={setShow} /> 
        }
      </div>
    </nav>
  )
};

Navbar.propTypes = {
  signOut: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  isAuth: state_isAuth
});

export default connect(mapStateToProps, { signOut })(withRouter(Navbar));