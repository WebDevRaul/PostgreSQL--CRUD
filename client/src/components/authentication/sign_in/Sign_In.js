import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import LabelInput from '../../common/components/Label_Input';

// Redux
import { connect } from 'react-redux';
import { sign_in } from '../../../redux/actions/authentication';
import { clearEmail, clearPassword } from '../../../redux/actions/common';

// Validation
import validateSignInForm from '../../../validation/sign_in';
import isEmpty from '../../../validation/isEmpty';

// Css
import '../../../css/sign-in.css';
import Popover from './Popover';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      popover: false,
      errors: {
        email: '',
        password: ''
      }
    }
  };

  componentDidMount() {
    const { register } = this.props.register;
    const { popover } = this.state;
    const { isAuthenticated } = this.props.account.account.isAuth;
    if (isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if(register.length > 1 && popover === false) {
      this.setState({ popover: true })
    }
  }

  componentDidUpdate(prevProps ,prevState) {
    // Redirect on Dashboard if credential are ok
    const { isAuthenticated } = this.props.account.account.isAuth;
    if (isAuthenticated) {
      this.props.history.push('/dashboard');
    }
    
    // Update Error state from props
    const { email, password } = this.props.errors.errors;

    if((!isEmpty(email) && !isEmpty(password) && ( email && password === 'Incorrect email or password!' ))) {
      this.setState({ errors: { password: 'Incorrect email or password!' , email: 'Incorrect email or password!'} })
      // Clear Redux email state to stop render
      this.props.clearPassword();
      this.props.clearEmail();
    }

    const { popover } = this.state;
    if (popover !== prevState.popover) {
      setTimeout(() => this.setState({ popover: false }), 2000)
    }

  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const data = { email, password };
    const { errors, isValid } = validateSignInForm(data);

    if(!isValid) { this.setState({ errors }) }
    else { this.props.sign_in(data); }
  };

  onFocus = e => {
    // Clear Error on Focus
    const { errors } = this.state;
    const _state = Object.entries(errors).filter(i => { return i[0] === e.target.name });
    if(!isEmpty(_state)) return this.setState({ errors: {...this.state.errors, [e.target.name]: '' } });
  }

  render() {
    const { errors, popover } = this.state;
    return (
      <div className='sign-in'>
        <section className="py-5">
          {popover ? <Popover /> : null}
          <div className="container py-5 mt-2">
            <div className="row no-gutters">
              <div className="col-md-6 mx-auto">
                <div className="card bg-transparent">
                  <div className="card-header sign-in-header-bg text-white">
                    <h4 className='mb-0'>
                      <i className="fas fa-sign-in-alt"></i>  Sign In</h4>
                  </div>
                  <div className="card-body">
                    <form noValidate onSubmit={this.onSubmit}>
                      <LabelInput
                        text='Email'
                        type='email'
                        icon='fas fa-envelope'
                        name='email'
                        onChange={this.onChange}
                        onFocus={this.onFocus}
                        value={this.state.email}
                        error={errors.email}
                      />
                      <LabelInput
                        text='Password'
                        type='password'
                        icon='fas fa-lock'
                        name='password'
                        onChange={this.onChange}
                        onFocus={this.onFocus}
                        value={this.state.password}
                        error={errors.password}
                      />
                      <input type="submit" value="Login" className="btn btn-secondary bg-transparent btn-block" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
};

SignIn.propTypes = {
  errors: PropTypes.object.isRequired,
  account: PropTypes.object.isRequired,
  sign_in: PropTypes.func.isRequired,
  clearEmail: PropTypes.func.isRequired,
  clearPassword: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  account: state.account,
  register: state.register
});

export default connect(mapStateToProps, { sign_in, clearEmail, clearPassword })(SignIn);