import Validator from 'validator';
import isEmpty from '../../common/utils/isEmpty';

const validateSignIn = ({ email, password }) => {
  let errors = {};

  // Validate email
  if (!Validator.isEmail(email)) errors.email = 'Email is invalid';
  
  // Validate password
  if (!Validator.isLength(password, {min:6})) errors.password = 'Password must be at least 6 characters';
  if (!Validator.isLength(password, {max:30})) errors.password = 'Password cant exceed 30 characters';


  // Validate Empty
  if (Validator.isEmpty(email)) errors.email = 'Email field is required!';
  if (Validator.isEmpty(password)) errors.password = 'Password field is required!';

  // Return errors
  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export default validateSignIn;