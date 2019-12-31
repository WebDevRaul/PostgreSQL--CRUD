import React from 'react';

const Title = () => {
  return (
    <div className='row no-gutters p-5'>
      <div className='col col-sm-6 col-lg-4 m-auto'>
        <div className='dashboard-title m-auto text-center'>
          <h1 className='text-primary'>CRUD</h1>
          <p className='border-bottom pb-2 mb-0 border-dark'>Create - Read - Update - Delete</p>
        </div>
      </div>
    </div>
  );
};

export default Title;