import React from 'react';

const Footer = () => {
  return (
    <div className='footer bg-dark text-white text-center'>
      <div className='row no-gutters'>
        <div className='col-sm-6'>
          <p className='mb-0'>Copyright &copy; {new Date().getFullYear()}</p>
        </div>
        <div className='col-sm-6'>
          <p className='mb-0 d-flex justify-content-center align-items-center'>Made with <i className="fas fa-heart text-danger mr-2 ml-2"></i> by Savin Raul-Calin</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;