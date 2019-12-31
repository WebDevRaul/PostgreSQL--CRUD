import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Guest = ({ show, setShow }) => {

  const onClick = () => { show && setShow(!show) }

  return (
    <ul className="navbar-nav ml-auto d-flex align-items-center text-center">
      <li className="nav-item" style={{ minWidth: '115px' }}>
        <NavLink 
          to='/home' 
          className='nav-link'
          activeClassName="active"
          onClick={onClick}
        >
          Home
        </NavLink>
        </li>
      <li className="nav-item" style={{ minWidth: '115px' }}>
        <NavLink 
          to='/register' 
          className='nav-link'
          activeClassName="active"
          onClick={onClick}
        >
          Register
        </NavLink>
      </li>
      <li className="nav-item" style={{ minWidth: '115px' }}>
        <NavLink 
          to='/sign-in' 
          className='nav-link'
          activeClassName="active"
          onClick={onClick}
        >
          Sign in
        </NavLink>
      </li>
    </ul>
  )
}

Guest.propTypes = {
  setShow: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
}

export default Guest;