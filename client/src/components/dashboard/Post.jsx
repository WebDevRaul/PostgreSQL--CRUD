import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { deletePost, updatePost } from '../../redux/actions/post';
import { createStructuredSelector } from 'reselect';
import { state_user } from '../../redux/selectors/user';

import Spinner from '../common/spinner/Spinner';

const Post = ({ post, id, position, deletePost, updatePost, user }) => {
  const [input, setInput] = useState('');
  const [edit, setEdit] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [temp, setTemp] = useState(1);
  const update = id.startsWith('temp') ? true : id.startsWith('update') ? true : false;

  useEffect(() => {
    setLoading(update);
    // eslint-disable-next-line
  },[id])

  useEffect(() => {
    setInput(post);
    // eslint-disable-next-line
  },[])

  const onChange = e => setInput(e.target.value);
  const onEdit = () => {
    setEdit(!edit);
    if(edit) updatePost({ post: input, id, position, temp: `update${id}`, account_id: user.id });
    setTemp(temp+1);
  };
  const onDelete = () => {
    setLoading(true);
    deletePost({ id, account_id: user.id })
  }

  const onSubmit = e => e.preventDefault();

  return (
    <div className='row no-gutters mt-3'>
      <div className='col-11 col-sm-8 col-md-6 col-lg-5 m-auto'>
        <form onSubmit={onSubmit} noValidate>
          <div className='row no-gutters'>
            <div className='col-8 col-sm-8 col-lg-8 dashbord-form-input' style={{ paddingRight: '10px' }}>
              <input
                type='text'
                className='form-control form-control-lg'
                value={input}
                onChange={onChange}
                disabled={edit ? false : true}
              />
            </div>
            <div className='col-4 col-sm-4 col-lg-4 m-auto'>
              <div className='d-flex float-right pr-2'>
                <div className='d-flex pr-2'>
                  <button 
                    className={classnames('btn btn-primary btn-add justify-content-center d-flex m-auto', {'disabled p-0': isLoading})} 
                    onClick={onEdit}
                  >
                  {
                    isLoading ? <Spinner isClass='btn-spinner' /> : <i className={!edit ? 'fas fa-pen' : 'fas fa-check'}></i>
                  }
                  </button>
                </div>
                <div className='d-flex'>
                <button 
                  className={classnames('btn btn-primary btn-clear justify-content-center m-auto d-flex', {'disabled p-0' : isLoading})} 
                  onClick={onDelete}
                >
                  {
                    isLoading ? <Spinner isClass='btn-spinner' /> : <i className='far fa-times-circle'></i>
                  }
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

Post.propTypes = {
  post: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  position: PropTypes.number,
  deletePost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

const mapStateToProps = createStructuredSelector({
  user: state_user
})

export default connect(mapStateToProps, { deletePost, updatePost } )(Post);