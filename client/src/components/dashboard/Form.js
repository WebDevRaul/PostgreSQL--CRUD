import React from 'react';

// Compomenents
import LabelInput from '../common/components/Label_Input';


const Form = ({ onSubmit, onChange, onFocus, add_post, post, onDeleteAll }) => {
  return(
    <div className='row no-gutters mb-5 bg-white'>
      <div className='col col-md-8 m-auto bg-white'>
        <form onSubmit={onSubmit}>
          <div className='row no-gutters'>
            <div className='col-6 dashbord-form-input'>
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
            <div className='col-5 pl-2'>
              <div className='row no-gutters dashboard-form-btn'>
                <div className='col-6 btn-add d-flex'>
                  <button className='btn btn-primary d-flex m-auto'>
                    <i className="fas fa-plus-circle m-auto"></i>
                  </button>
                </div>
                <div className='col-6 btn-clear d-flex'>
                  <button className='btn btn-danger m-auto d-flex'onClick={onDeleteAll}>
                    <i className='far fa-times-circle m-auto'></i>
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