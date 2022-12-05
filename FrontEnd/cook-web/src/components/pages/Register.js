import React, { useState } from 'react';
import '../css/Register.css';
import axios from "axios";

function Register() {
  const [email, setEmail] = useState();
  const [password1, setPassword1] = useState();
  const [password2, setPassword2] = useState();

  const onChangeEmail = (data) => {
    setEmail(data.target.value);
  }

  const onChangePassword1 = (data) => {
    setPassword1(data.target.value);
  }

  const onChangePassword2 = (data) => {
    setPassword2(data.target.value);
  }

  const onSubmitButton = (e) => {
    // prevent the page from reloading
    e.preventDefault();
    // check if password1 === password2
    if (password1 !== password2) {
      // pop up, password doesn't match
      console.log("password doesn't match");
      return;
    }

    let body = {
      email: email,
      password: password1
    }

    console.log(body);
    // send API req to backend
    axios
      .post('http://localhost:9000/users/reg', body)
      .then(res => {
        // check response 
        //    if 200 -> redirect to login page
        //    if 400 -> username taken, popup to change username
        console.log(res)
      });

  }

  return (
    <div className=''>
      <form className='input-container' action=''>
        <p className='general-text'>Register</p>
        <hr className='general-line'></hr>
        <input
          className='input'
          type='email'
          placeholder='Email'
          onChange={onChangeEmail}
        />
        <input
          className='input'
          type='password1'
          placeholder='Create Password'
          onChange={onChangePassword1}
        />
        <input
          className='input'
          type='password2'
          placeholder='Confirm Password'
          onChange={onChangePassword2}
        />
        <button
          className='button'
          type='submit'
          onClick={onSubmitButton}
        >Register</button>
      </form>
    </div>
  )
}

export default Register;