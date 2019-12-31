import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Spinner from '../spinner/Spinner';

const Button = ({ text, isClass, onClick, isLoading, type }) => {
  return (
    <button 
      className={classnames(`btn mr-1 ${isClass}`, { 'p-0': isLoading })}
      type={type} 
      onClick={onClick}
    >
      <div>{isLoading ? <Spinner isClass='btn-spinner' /> : <p className='mb-0'>{text}</p>}</div>
    </button>
  )
}

Button.defaultProps = {
  type: 'button'
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isClass: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  type: PropTypes.string.isRequired
}

export default Button;