import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

const PrivateRoute = ({component: Component, account, ...rest}) => (
  <Route 
    {...rest}
    render = {
      props => account.account.isAuth.isAuthenticated === true ? 
        ( <Component {...props} /> ) : ( <Redirect to='/sign-in' /> )
    }
  />
);

PrivateRoute.propTypes = {
  account: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  account: state.account
});

export default connect(mapStateToProps)(PrivateRoute);