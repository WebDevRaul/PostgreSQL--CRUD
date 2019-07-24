import Validator from 'validator';
import isEmpty from './isEmpty';

const validateSignInForm = data => {
  let errors = {};

  // Check if Empty
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';


  // Validate email
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  // Validate password
  if (!Validator.isLength(data.password, {min:6, max: 30})) {
    errors.password = 'Password must be at least 6 characters';
  }


  // Validate Empty
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required!'
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required!'
  }

  // Return errors
  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export default validateSignInForm;