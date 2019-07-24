import React from 'react';

// Css
import '../../../css/footer.css';

const Footer = () => {
  return (
    <div className='footer bg-dark text-white'>
      <div className='row no-gutters'>
        <div className='col-sm-6'>
          <div className='footer-text'>
            <span>Copyright &copy; {new Date().getFullYear()}</span>
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='footer-text'>
            <span>Made with <i className="fas fa-heart"></i> by Savin Raul-Calin</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;