import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// Components
import LabelInput from '../../common/components/Label_Input';

// Redux
import { connect } from 'react-redux';
import { register } from '../../../redux/actions/authentication';
import { clearEmail } from '../../../redux/actions/common';

// Validation
import validateRegisterForm from '../../../validation/register';
import isEmpty from '../../../validation/isEmpty';

// Css
import '../../../css/register.css';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password2: '',
      errors: {},
    }
  };


  componentDidUpdate(prevProps, prevState) {
    const { email } = this.props.errors.errors;
    // Update Error state from props
    if ((email !== prevState.errors.email) && (email === 'Email is already in use!')) {
      this.setState({ errors: { email: 'Email is already in use!' } })
      // Clear Redux email state to stop render
      this.props.clearEmail();
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { first_name, last_name, email, password, password2 } = this.state;
    const data = { first_name, last_name, email, password, password2 };
    
    const { errors, isValid } = validateRegisterForm(data);
    if(!isValid) { this.setState({ errors }) }
    else { this.props.register(data, this.props.history) }
  };

  onFocus = e => {
    // Clear Error on Focus
    const { errors } = this.state;
    const _state = Object.entries(errors).filter(i => { return i[0] === e.target.name });
    if(!isEmpty(_state)) return this.setState({ errors: {...this.state.errors, [e.target.name]: '' } });
  }
  
  render() {
    
    const { errors } = this.state;

    return (
      <div className='register'>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card bg-transparent">
                  <div className="card-header register-header-bg text-white">
                    <h4 className='mb-0'>
                      <i className="fas fa-user-plus"></i> Register</h4>
                  </div>
                  <div className="card-body">
                      <form noValidate onSubmit={this.onSubmit} >
                        <LabelInput
                          text='First Name'
                          icon='fas fa-user'
                          name='first_name'
                          value={this.state.first_name}
                          onChange={this.onChange}
                          error={errors.first_name}
                          onFocus={this.onFocus}
                        />
                        <LabelInput
                          text='Last Name'
                          name='last_name'
                          icon='fas fa-user'
                          value={this.state.last_name}
                          onChange={this.onChange}
                          error={errors.last_name}
                          onFocus={this.onFocus}
                        />
                        <LabelInput
                          text='Email'
                          name='email'
                          icon='fas fa-envelope'
                          type='email'
                          value={this.state.email}
                          onChange={this.onChange}
                          error={errors.email}
                          onFocus={this.onFocus}
                        />
                        <LabelInput 
                          text='Password'
                          name='password'
                          icon='fas fa-lock'
                          type='password'
                          value={this.state.password}
                          onChange={this.onChange}
                          error={errors.password}
                          onFocus={this.onFocus}
                        />
                        <LabelInput 
                          text='Confirm Password'
                          name='password2'
                          icon='fas fa-lock'
                          type='password'
                          value={this.state.password2}
                          onChange={this.onChange}
                          error={errors.password2}
                          onFocus={this.onFocus}
                        />
                      <input type="submit" value="Register" className="btn btn-secondary bg-transparent btn-block" />
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
}

Register.propTypes = {
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  clearEmail: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, {register, clearEmail})(withRouter(Register));