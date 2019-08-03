import React from 'react';

// Compomenents
import LabelInput from '../common/components/Label_Input';


const Form = ({ onSubmit, onChange, onFocus, add_post, post, onDeleteAll }) => {
  return(
    <div className='row no-gutters mb-5'>
      <div className='col col-md-10 col-lg-6 m-auto'>
        <form onSubmit={onSubmit}>
          <div className='row no-gutters'>
            <div className='col-8 col-sm-8 col-lg-8 dashbord-form-input pr-2'>
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
            <div className='col-4 col-sm-4 col-lg-4'>
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