import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';


const Input = ({ name, value, label, icon, type, error, onChange, onFocus, capitalize}) => {
  return (
    <div className='form-group'>
      <label 
        className={classnames('ml-1 mb-0 text-primary', { 'text-danger': error, 'font-weight-bold': !error })} 
        htmlFor={name}
      >
        { error ? error: label }
      </label>
      <div className='input-group'>
        {
          icon &&
          <div className="input-group-prepend">
            <div className="input-group-text"><i className={icon}></i></div>
          </div>
        }
        <input
          type={type}
          className={classnames('form-control mr-1 ml-1 form-control-lg', 
            {'is-invalid' : error, 'text-capitalize' : capitalize})}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          autoComplete='off'
          required
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  capitalize: PropTypes.bool
};

Input.defaultProps = {
  type: 'text'
};

export default Input;