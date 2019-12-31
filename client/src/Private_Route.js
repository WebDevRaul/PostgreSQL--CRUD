import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { state_isAuth } from './redux/selectors/user';

const PrivateRoute = ({component: Component, isAuth, ...rest}) => (
  <Route 
    {...rest}
    render = {
      props => isAuth === true ? 
        ( <Component {...props} /> ) : ( <Redirect to='/sign-in' /> )
    }
  />
);

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = createStructuredSelector({
  isAuth: state_isAuth
});

export default connect(mapStateToProps, null)(PrivateRoute);