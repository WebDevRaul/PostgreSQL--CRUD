import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setPost } from '../../redux/actions/post'
import { createStructuredSelector } from 'reselect';
import { state_user } from '../../redux/selectors/user';

import Title from '../../components/dashboard/Title';
import Form from '../../components/dashboard/Form';

const Dashboard = ({ user: { id, first_name } , setPost}) => {
  // Update posts CDM
  useEffect(() => {
    setPost({id})
  },[])
  return(
    <div className='dashboard'>
      <Title />
      <Form />
    </div>
  )
}

Dashboard.propTypes = {
  user: PropTypes.object.isRequired,
  setPost: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  user: state_user
});

export default connect( mapStateToProps, { setPost } )(Dashboard);
