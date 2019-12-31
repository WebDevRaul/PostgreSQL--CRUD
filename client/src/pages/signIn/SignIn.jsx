import React from 'react';

import Form from '../../components/sign_in/Form';

import './responsive.css';

const SignIn = () => {
  return (
    <section className='sign-in d-flex flex-column justify-content-center'>
      <div className='row no-gutters'>
        <div className='col col-sm-6 col-md-4 col-lg-3 m-auto'>
          <div className="card mt-4 mb-4">
            <div className="card-header bg-white d-flex justify-content-center align-items-center">
              <i className="fas fa-user fa-2x mr-3"></i> 
              <h5 className='mb-0'>Sign In</h5>
            </div>
            <div className="card-body">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignIn;