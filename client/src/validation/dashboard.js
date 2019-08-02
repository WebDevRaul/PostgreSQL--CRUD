import Validator from 'validator';
import isEmpty from './isEmpty';

const validateDashboardInput = data => {
  let errors = {};

  // Check if Empty
  data.post = !isEmpty(data.post) ? data.post : '';


  // Validate Empty
  if (Validator.isEmpty(data.post)) {
    errors.post = 'Text field is required!'
  }

  // Return errors
  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export default validateDashboardInput;