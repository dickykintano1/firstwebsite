import React from 'react';

function Register() {
  return (
    <div className='css2'>
      <form className='input-container' action=''>
        <p className='general-text'>Register</p>
        <hr className='general-line'></hr>
        <input
          className='input'
          type='username'
          placeholder='Username'
        />
        <input
          className='input'
          type='password1'
          placeholder='Password'
        />
        <input
          className='input'
          type='password2'
          placeholder='Repeat your Password'
        />
        <button
          className='button'
          type='submit'
        >Register</button>
      </form>
    </div>
  )
}

export default Register;