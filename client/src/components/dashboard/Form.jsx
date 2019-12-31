import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost, deleteAll } from '../../redux/actions/post';

import Input from '../common/form/input/Input';

const Form = ({ id, addPost, deleteAll }) => {
  const [input, setInput] = useState('');
  const [temp, setTemp] = useState(1);

  const onChange = e => setInput(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    addPost({ id, post: input, temp });
    setTemp(temp+1)
    setInput('');
  }

  const onDelete = () => deleteAll({id})

  return (
    <div className='row no-gutters'>
      <div className='col-11 col-sm-8 col-md-6 col-lg-5 m-auto'>
        <form onSubmit={onSubmit} noValidate>
          <div className='row no-gutters'>
            <div className='col-8 col-sm-8 col-lg-8 dashbord-form-input pr-2'>
              <Input
                name='input'
                value={input}
                type='text'
                icon='far fa-plus-square'
                error=''
                onChange={onChange}
                onFocus={() => {}}
              />
            </div>
            <div className='col-4 col-sm-4 col-lg-4 m-auto'>
              <div className='d-flex float-right pr-2'>
                <div className='d-flex pr-2'>
                  <button className='btn btn-primary btn-add d-flex m-auto' type='submit'>
                    <i className="fas fa-plus-circle m-auto"></i>
                  </button>
                </div>
                <div className='d-flex'>
                  <button className='btn btn-danger btn-clear m-auto d-flex' type='button' onClick={onDelete}>
                    <i className='far fa-times-circle m-auto'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

Form.propTypes = {
  id: PropTypes.string.isRequired,
  addPost: PropTypes.func.isRequired,
  deleteAll: PropTypes.func.isRequired
}

export default connect(null, { addPost, deleteAll })(Form);