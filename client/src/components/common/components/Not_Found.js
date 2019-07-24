import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// Css
import '../../../css/not-found.css'

class NotFound extends Component {
  render() {
    return (
      <div className='not-found d-flex'>
        <div className='m-auto'>
          <div className='row no-gutters d-flex'>
            <div className='col-10 m-auto'>
              <h1 className='m-0'>Oops!</h1> 
              <h4 className='text-center'>404 - Page not found</h4>
              <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
              <Link to='/' className='nav-link text-center' onClick={this.onClick}>
                <span className='btn btn-primary'>Go to homepage</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(NotFound);