import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Title from './Title';
import Form from './Form';
import Crud from './Crud';

// Redux
import { connect } from 'react-redux';
import { add_post, set_post, delete_post, delete_all_posts, update_post } from '../../redux/actions/post';
import { set_error, clear_error } from '../../redux/actions/common';

// Validation
import validateDashboardInput from '../../validation/dashboard';
import isEmpty from '../../validation/isEmpty';

// Css
import '../../css/dashboard.css';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      add_post: '',
      exp: 1,
      errors: ''
    }
  }

  componentDidMount() {
    // Fetch the posts
    const { id } = this.props.account.account.user;
    this.props.set_post(({id}));
  };

  componentDidUpdate(prevProps, prevState) {
    const { post } = this.props.errors.errors;
    // Update Error state from props
    if ((post !== prevState.errors.post) && !isEmpty(post)) {
      this.setState({ errors: { post } });
      this.props.clear_error();
    };
  };
  

  onSubmit = e => {
    e.preventDefault();
    const data = {
      id: this.props.account.account.user.id,
      post: this.state.add_post,
      // id: PropTypes.string.isRequired, in CRUD component
      exp: String(this.state.exp)
    };
    // Validate Post
    const { errors, isValid } = validateDashboardInput({ post: this.state.add_post });
    if(!isValid) { this.props.set_error(errors) }
    else { 
      // Add post
      this.props.add_post(data);
      // Clear post state;
      this.setState({ add_post: '', exp: this.state.exp+1 });
     }
  }

  onFocus = e => {
    // Clear Error on Focus
    const { errors } = this.state;
    if(!isEmpty(errors)) return this.setState({ errors: { post: '' } });
  }

  onDelete = id => {
    const account_id = this.props.account.account.user.id;
    const data = { id, account_id }
    this.props.delete_post(data)
  }

  onDeleteAll = e => {
    e.preventDefault();
    const { id } = this.props.account.account.user;
    this.props.delete_all_posts({ id })
  };

  onUpdate = data => {
    data.account_id = this.props.account.account.user.id;
    this.props.update_post(data);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // Sort the posts so they dont move @
  onSort = data => {
    return data.sort((a, b) => a.position - b.position); 
  }

  render() {
    const { add_post, errors } = this.state;
    const { posts } = this.props.posts;
    // Sorts posts
    if(posts.length > 2) {
      this.onSort(posts);
    } 

    const CRUD_component = posts.map(({ post, id }) => 
        <Crud
          key={id}
          post={post}
          onDelete={this.onDelete}
          onUpdate={this.onUpdate}
          id={id}
        />
      );

    return (
      <div className='dashboard'>
        <div className='row no-gutters d-flex'>
          <div className='col col-sm-10 m-auto'>
            <Title />
            <Form
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              onFocus={this.onFocus}
              add_post={add_post}
              post={errors.post}
              onDeleteAll={this.onDeleteAll}
            />
            { CRUD_component }
          </div>
        </div>
      </div>
    )
  };
};

Dashboard.propTypes = {
  account: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  add_post: PropTypes.func.isRequired,
  set_post: PropTypes.func.isRequired,
  delete_post: PropTypes.func.isRequired,
  delete_all_posts: PropTypes.func.isRequired,
  update_post: PropTypes.func.isRequired,
  set_error: PropTypes.func.isRequired,
  clear_error: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  account: state.account,
  posts: state.posts,
  errors: state.errors
});

export default connect( mapStateToProps, 
  { add_post, set_post, delete_post, delete_all_posts, update_post, set_error, clear_error } )(Dashboard);