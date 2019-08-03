<div className='crud'>
<div className='row no-gutters'>
  <div className='col-8'>
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
  <div className='col-3 m-auto d-flex'>
    <button
      className='btn btn-primary ml-2 mr-2'
      onClick={this.onEdit}
    >
      <i className={!edit ? 'fas fa-pen' : 'fas fa-check'}></i>
    </button>
    <span>
      <button 
        className='btn btn-danger float-right'
        onClick={this.onDelete(id)}
      >
        <i className='far fa-times-circle'></i>
      </button>
    </span>
  </div>
</div>
</div>