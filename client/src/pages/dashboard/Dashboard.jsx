import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setPost } from '../../redux/actions/post'
import { createStructuredSelector } from 'reselect';
import { state_user } from '../../redux/selectors/user';
import { state_posts } from '../../redux/selectors/post';

import Title from '../../components/dashboard/Title';
import Form from '../../components/dashboard/Form';
import Post from '../../components/dashboard/Post';

const Dashboard = ({ user: { id } , setPost, posts}) => {
  // Update posts CDM
  useEffect(() => {
    setPost({id});
    // eslint-disable-next-line
  },[])
  return(
    <div className='dashboard'>
      <Title />
      <Form id={id} />
      { posts.map(post => <Post key={post.id} {...post} />) }
    </div>
  )
}

Dashboard.propTypes = {
  user: PropTypes.object.isRequired,
  setPost: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = createStructuredSelector({
  user: state_user,
  posts: state_posts
});

export default connect( mapStateToProps, { setPost } )(Dashboard);
