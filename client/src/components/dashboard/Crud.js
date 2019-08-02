import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Crud extends Component {
  constructor() {
    super();
    this.state = {
      edit: false,
      error: '',
      post: ''
    }
  }

  componentDidMount() {
    this.setState({ post: this.props.post })
  }

  componentDidUpdate(prevProps, prevState) {
    const { edit, post } = this.state;
    const { id } = this.props;
    if (!edit && (post !== prevProps.post) && (prevState.edit === true)) {
      const data = { id, post }
      // redirect to dashbboard
      this.props.onUpdate(data);
    }
  }
  

  onEdit = () => {
    this.setState({ edit: !this.state.edit })
  }

  onChange = e => {
    this.setState({ post: e.target.value })
  }

  onDelete = id => () => {
    this.props.onDelete(id)
  }
  
  render() {
    const { id } = this.props;
    const { edit, post, error } = this.state;
    return (
      <div className='row no-gutters mb-3'>
        <div className='col-9'>
          <div className='dashboard-user'>
            <div className='form-group mb-0'>
              <div className='input-group'>
                <input
                  type='text'
                  className={classnames('form-control form-control-lg', {'is-invalid' : error})}
                  value={post}
                  onChange={this.onChange}
                  disabled={edit ? false : true}
                />
                {error && <div className='invalid-feedback'>{error}</div>}
              </div>
            </div>
          </div>
        </div>
        <div className='col-3 m-auto d-flex'>
          <span 
            className='m-auto dashbord-edit'
            onClick={this.onEdit}
            >
              <i className={!edit ? 'fas fa-pen' : 'fas fa-check'}></i>
          </span> 
          <span 
            className='dashboard-delete float-right'
            onClick={this.onDelete(id)}
            >
            <button className='btn btn-primary'><i className='far fa-times-circle'></i></button>
          </span>
        </div>
      </div>
    );
  };
};
  
  Crud.propTypes = {
    id: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
  };
  
  export default Crud;