import React from 'react';
import { Link } from 'react-router-dom';

// Tilt
import Tilt from 'react-tilt'

// Assets
import logo from '../../assets/logo.png';

 const Logo = () => {
  return (
    <Tilt className="Tilt" options={{ max : 25 }}>
      <div className="Tilt-inner">
        <div className='logo'>
          <Link to='/'><img src={logo} alt='logo' /></Link>
        </div>
      </div>
    </Tilt>
  )
}

export default Logo;