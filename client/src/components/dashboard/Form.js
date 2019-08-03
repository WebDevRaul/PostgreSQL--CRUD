import React from 'react';

// Compomenents
import LabelInput from '../common/components/Label_Input';


const Form = ({ onSubmit, onChange, onFocus, add_post, post, onDeleteAll }) => {
  return(
    <div className='row no-gutters mb-5 bg-white'>
      <div className='col col-sm-8 m-auto'>
        <form onSubmit={onSubmit}>
          <div className='row no-gutters'>
            <div className='col-6 col-sm-8'>
              <LabelInput 
                text='Text'
                type='text'
                icon='far fa-plus-square'
                name='add_post'
                onChange={onChange}
                onFocus={onFocus}
                value={add_post}
                error={post}
              />
            </div>
            <div className='col-6' >
              <div className='row no-gutters'>
                <div className='col-6'>
                  <button className='btn ml-2 mr-2 btn-primary float-right'>Add</button>
                </div>
                <div className='col-6'>
                <button className='btn btn-danger float-right'onClick={onDeleteAll}>
                  Clear
                </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;