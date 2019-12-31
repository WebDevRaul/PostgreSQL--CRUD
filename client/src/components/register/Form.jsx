import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { state_isAuth, state_isLoading, state_errors } from '../../redux/selectors/user';
import { register, clearUserErrors } from '../../redux/actions/user';
import validateRegister from './validate/Validate';

import Input from '../common/form/input/Input';
import Button from '../common/buton/Button';

const Form = ({ register, isLoading, history, isAuth, errors, clearUserErrors }) => {
  const [state, setState] = useState({ first_name: '', last_name: '', email: '', password: '', password2: ''});
  const [error, setError] = useState({ first_name: '', last_name: '', email: '', password: '', password2: ''});
  const { first_name, last_name, email, password, password2 } = state;

  // Update error CDU
  useEffect(() => {
    setError({...error, ...errors});
    // eslint-disable-next-line
  },[errors]);

  // Clear Errors CDUM
  useEffect(() => {
    const clear = () => clearUserErrors();
    return clear;
    // eslint-disable-next-line
  },[]);
  
  const onChange = e => setState({...state, [e.target.name]: e.target.value });
  
  const onFocus = e => {
    const { first_name, last_name, email, password, password2 } = error;
    if(!( first_name || last_name || email || password || password2 )) return null;
    const field = Object.keys(error).filter(i => i === e.target.name )[0];
    setError({ ...error, [field]: '' });
  }

  const onSubmit = e => {
    e.preventDefault();
    const { errors, isValid } = validateRegister(state);
    if(!isValid) return setError({ ...error, ...errors });
    register({ data: { ...state }, history });
  }
  
  if(isAuth) return <Redirect to='/dashboard' />;

  return (
    <form noValidate onSubmit={onSubmit}>
      <Input
        name='first_name'
        value={first_name}
        label='First Name'
        icon='fas fa-user'
        error={error.first_name}
        onChange={onChange}
        onFocus={onFocus}
        capitalize={true}
      />
      <Input
        name='last_name'
        value={last_name}
        label='Last Name'
        icon='fas fa-user'
        error={error.last_name}
        onChange={onChange}
        onFocus={onFocus}
        capitalize={true}
      />
      <Input
        name='email'
        value={email}
        label='Email'
        type='email'
        icon='fas fa-envelope'
        error={error.email}
        onChange={onChange}
        onFocus={onFocus}
      />
      <Input
        name='password'
        value={password}
        label='Password'
        type='password'
        icon='fas fa-lock'
        error={error.password}
        onChange={onChange}
        onFocus={onFocus}
      />
      <Input
        name='password2'
        value={password2}
        label='Confirm Password'
        type='password'
        icon='fas fa-lock'
        error={error.password2}
        onChange={onChange}
        onFocus={onFocus}
      />
      <Button 
        text='Submit' 
        isClass='btn-outline-primary w-100 text-uppercase font-weight-bold' 
        isLoading={isLoading} 
        type='submit' 
      />
    </form>
  )
};

Form.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  clearUserErrors: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
  isAuth: state_isAuth,
  isLoading: state_isLoading,
  errors: state_errors
});

export default connect(mapStateToProps, { register, clearUserErrors })(Form);