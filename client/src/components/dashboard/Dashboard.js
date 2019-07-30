import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import LabelInput from '../common/components/Label_Input';
import Crud from './Crud';

// Redux
import { connect } from 'react-redux';
import { add_post, set_post, delete_post, delete_all_posts } from '../../redux/actions/post';


// Css
import '../../css/dashboard.css';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      add_post: '',
      errors: ''
    }
  }

  componentDidMount() {
    // Fetch the posts
    const { id } = this.props.account.account.user;
    this.props.set_post(({id}));
  }

  onSubmit = e => {
    e.preventDefault();
    const data = {
      id: this.props.account.account.user.id,
      post: this.state.add_post
    };
    // Add post
    this.props.add_post(data);
    // reset post state;
    this.setState({ add_post: '' })
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

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { add_post, errors } = this.state;
    const { posts } = this.props.posts;

    const crud_posts = posts.map(({ post, id }) => 
        <Crud
          key={id}
          post={post}
          onDelete={this.onDelete}
          id={id}
        />
      );

    return (
      <div className='dashboard d-flex pl-3 pr-3'>
        <div className='m-auto'>
          <div className='row no-gutters mb-5'>
            <div className='col'>
              <div className='dashboard-title text-center'>
                <h1 className='text-primary'>CRUD</h1>
                <p>Create - Read - Update - Delete</p>
              </div>
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='col'>
              <form onSubmit={this.onSubmit} >
                <div className='row no-gutters'>
                  <div className='col-9'>
                    <LabelInput 
                      text='Text'
                      type='text'
                      icon='far fa-plus-square'
                      name='add_post'
                      onChange={this.onChange}
                      value={add_post}
                      error={errors}
                    />
                  </div>
                  <div className='col-3 m-auto pt-3 d-flex'>
                    <button className='btn ml-2 mr-2 btn-primary float-right'>Add</button>
                    <span>
                      <button 
                        className='btn btn-danger float-right'
                        onClick={this.onDeleteAll}
                      >Clear</button>
                    </span>
                  </div>
                </div>
              </form>
              {crud_posts}
            </div>
          </div>
        </div>
      </div>
    )
  };
};

Dashboard.propTypes = {
  account: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
  add_post: PropTypes.func.isRequired,
  set_post: PropTypes.func.isRequired,
  delete_post: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  account: state.account,
  posts: state.posts
});

export default connect( mapStateToProps, { add_post, set_post, delete_post, delete_all_posts } )(Dashboard);