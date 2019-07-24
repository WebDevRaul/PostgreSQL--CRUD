import React from 'react';

// Css
import '../../css/home.css';

const Home = () => {
  return (
    <div className='home d-flex text-center'>
      <div className='m-auto'>
        <div className='row no-gutters'>
          <div className='col'>
            <h1>Home</h1>
          </div>
        </div>
        <div className='row no-gutters'>
          <div className='col'>
            <h5>Register / Sign in <span className='pl-1'>Template!</span></h5>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;