<div className='dashboard'>
<div className='row no-gutters d-flex'>
  <div className='col col-sm-6 m-auto'>
    
    <div className='row d-flex no-gutters mb-5 bg-white'>
      <div className='col col-sm-8 m-auto'>
        <div className='row no-gutters'>
          <div className='col'>
            <form onSubmit={this.onSubmit}>
              <div className='row no-gutters'>
                <div className='col-6 col-sm-8'>
                  <LabelInput 
                    text='Text'
                    type='text'
                    icon='far fa-plus-square'
                    name='add_post'
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    value={add_post}
                    error={errors.post}
                  />
                </div>
                <div className='col-6' >
                  <div className='row no-gutters'>
                    <div className='col-6'>
                      <button className='btn ml-2 mr-2 btn-primary float-right'>Add</button>
                    </div>
                    <div className='col-6'>
                    <button className='btn btn-danger float-right'onClick={this.onDeleteAll}>
                      Clear
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='row no-gutters'>
          <div className='col m-auto'>
            {/* { crud_posts } */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>