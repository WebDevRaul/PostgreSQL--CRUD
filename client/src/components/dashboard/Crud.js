import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Css
import '../../css/crud.css'

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
      <div className='dashboard-crud'>
        <div className='row no-gutters mb-2'>
          <div className='col col-md-10 col-lg-6 m-auto'>
            <div className='row no-gutters'>
              <div className='col-8 col-sm-9 col-lg-8 dashbord-form-input pr-2'>
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
              <div className='col-4 col-sm-3 col-lg-4 m-auto'>
                <div className='d-flex float-right pr-2'>
                  <div className='btn-edit d-flex pr-2'>
                      <button className='btn btn-primary d-flex m-auto' onClick={this.onEdit}>
                        <i className={!edit ? 'fas fa-pen' : 'fas fa-check'}></i>
                      </button>
                    </div>
                    <div className='btn-delete d-flex'>
                      <button className='btn btn-danger m-auto d-flex' onClick={this.onDelete(id)}>
                        <i className='far fa-times-circle m-auto'></i>
                      </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
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