import React from 'react';
import '../css/Login.css'

function Login() {
  return (
    <div className='css2'>
      <form className='input-container' action=''>
        <p className='general-text'>Login</p>
        <hr className='general-line'></hr>
        <input
          className='input'
          type='username'
          placeholder='Username'
        />
        <input
          className='input'
          type='password'
          placeholder='Password'
        />
        <button
          className='button'
          type='submit'
        >Login</button>
      </form>
    </div>
  )
}

export default Login;