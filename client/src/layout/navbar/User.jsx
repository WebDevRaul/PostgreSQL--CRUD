import React from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const User = ({ show, setShow, onSignOut }) => {

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
          to='/dashboard'
          className='nav-link'
          activeClassName="active"
          onClick={onClick}
        >
          Dashboard
        </NavLink>
      </li>
      <li className="nav-item">
        <button
          className='nav-link btn d-flex justify-content-center m-auto'
          onClick={onSignOut}
        >
          <span className='special'>Sign Out</span>
        </button>
      </li>
    </ul>
  )
}

User.propTypes = {
  setShow: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  onSignOut: PropTypes.func.isRequired
}

export default User;