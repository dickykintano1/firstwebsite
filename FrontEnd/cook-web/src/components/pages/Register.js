import React from 'react';

function Register() {
  return (
    <div className='css2'>
      <form method='POST' className='input-container' action='/users/reg'>
        <p className='general-text'>Register</p>
        <hr className='general-line'></hr>
        <input
          className='input'
          type='email'
          id='email'
          placeholder='Email'
          name='email'
        />
        <input
          className='input'
          type='password'
          id='password1'
          placeholder='Password'
          name='password1'
        />
        <input
          className='input'
          type='password'
          id='password2'
          placeholder='Repeat your Password'
          name='password2'
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