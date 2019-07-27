import React, { Component } from 'react';

// Components
import LabelInput from '../common/components/Label_Input';
import Crud from './Crud';

// Redux
import { connect } from 'react-redux';


// Css
import '../../css/dashboard.css';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      user_text: '',
      errors: ''
    }
  }

  onSubmit = e => {
    e.preventDefault();

  }

  onDelete = id => {

  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { user_text, errors } = this.state;
    const { posts } = this.props.account.account.user;

    const post = posts.map(({ post, post_id }) => 
      <Crud
        key={post_id}
        post={post}
        onDelete={this.onDelete}
        id={post_id}
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
                      name='user_text'
                      onChange={this.onChange}
                      value={user_text}
                      error={errors}
                    />
                  </div>
                  <div className='col-3 m-auto pt-3'>
                    <button className='btn btn-primary float-right'>Add</button>
                  </div>
                </div>
                  {post}
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  };
};

const mapStateToProps = state => ({
  account: state.account
});

export default connect( mapStateToProps, {} )(Dashboard);