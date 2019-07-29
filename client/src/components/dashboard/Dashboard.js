import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import LabelInput from '../common/components/Label_Input';
import Crud from './Crud';

// Redux
import { connect } from 'react-redux';
import { add_post, set_post, delete_post } from '../../redux/actions/post';


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

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { add_post, errors } = this.state;
    const { posts } = this.props.posts;

    let crud_posts;

    // const data = posts.filter(item => item.id !== 'b6f75f2a-b22a-11e9-acc0-0221deac008e')
    // console.log(data);

    if(posts.length !== 0) {
      crud_posts = posts.map(({ post, id }) => 
        <Crud
          key={id}
          post={post}
          onDelete={this.onDelete}
          id={id}
        />
      );
    }

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
                  <div className='col-3 m-auto pt-3'>
                    <button className='btn btn-primary float-right'>Add</button>
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
  posts: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  account: state.account,
  posts: state.posts
});

export default connect( mapStateToProps, { add_post, set_post, delete_post } )(Dashboard);