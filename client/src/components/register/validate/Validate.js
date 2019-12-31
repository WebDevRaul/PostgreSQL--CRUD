import Validator from 'validator';
import isEmpty from '../../common/utils/isEmpty';

const validateRegister = ({ first_name, last_name, email, password, password2 }) => {
  let errors = {};

  // Check if Empty
  first_name = !isEmpty(first_name) ? first_name : '';
  last_name = !isEmpty(last_name) ? last_name : '';
  email = !isEmpty(email) ? email : '';
  password = !isEmpty(password) ? password : '';
  password2 = !isEmpty(password2) ? password2 : '';

  // Validate Names
  if(!Validator.isLength(first_name, { min:2, max: 30 })) errors.first_name = 'First name must be between 2 and 30 characters';
  if(!Validator.isLength(last_name, { min:2, max: 30 })) errors.last_name = 'Last name must be between 2 and 30 characters';
  
  // Validate email
  if(!Validator.isEmail(email)) errors.email = 'Email is invalid';

  // Validate password
  if(!Validator.isLength(password, {min:6, max: 30})) errors.password = 'Password must be at least 6 characters';
  
  // Validate password to match password2
  if(!Validator.equals(password, password2)) errors.password2 = 'Passwords must match';

  // Validate Empty
  if(Validator.isEmpty(first_name)) errors.first_name = 'First name field is required!';
  if(Validator.isEmpty(last_name)) errors.last_name = 'Last name field is required!';
  if(Validator.isEmpty(email)) errors.email = 'Email field is required!';
  if(Validator.isEmpty(password)) errors.password = 'Password field is required!';
  if(Validator.isEmpty(password2)) errors.password2 = 'Confirm Password field is required!';

  // Return errors
  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export default validateRegister;