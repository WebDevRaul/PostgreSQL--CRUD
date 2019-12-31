import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import logo from '../../assets/logo.png';

 const Logo = () => {
  return (
    <div className='logo'>
      <Link to='/'><img src={logo} alt='logo' /></Link>
    </div>
  )
}

export default Logo;