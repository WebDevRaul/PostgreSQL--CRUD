import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center flex-column'>
      <h2 className='mb-5 text-center'>A simple CRUD application</h2>
      <div className='d-flex'>
        <Link to='/register'><h3>Register</h3></Link>
        <h3 className='ml-2 mr-2'>or</h3>
        <Link to='/sign-in'><h3>Sign In</h3></Link>
      </div>
    </div>
  )
};

export default Home;