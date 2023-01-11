import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import '../css/Login.css';
import axios from "axios";


// class Login extends React.Component {
//   render(){
//   }
// }
// 'https://images.pexels.com/photos/2035738/pexels-photo-2035738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'


function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onChangeEmail = (data) => {
    setEmail(data.target.value);
  }

  const onChangePassword = (data) => {
    setPassword(data.target.value);
  }

  const onSubmitButton = (e) => {
    // prevent the page from reloading
    e.preventDefault();
    // check if username and password match with one on database
    const result = axios.get('http://localhost:9000/users/')

    let body = {
      email: email,
      password: password
    }

    console.log(body);
    console.log(result)
    // send API req to backend
    // axios
    //   .post('http://localhost:9000/users/reg', body)
    //   .then(res => {
    //     // check response 
    //     //    if 200 -> redirect to login page
    //     //    if 400 -> username taken, popup to change username
    //     console.log(res)
    //   });
  }

  return (
    <html className='html-login'>
      <form className='input-container' action=''>
        <p className='general-text'>Login</p>
        {/* <hr className='general-line'></hr> */}
        <input
          className='input'
          type='email'
          placeholder='Email'
          onChange={onChangeEmail}
        />
        <input
          className='input'
          type='password'
          placeholder='Password'
          onChange={onChangePassword}
        />
        <button
          className='button'
          type='submit'
          onClick={onSubmitButton}
        >Login</button>
      </form>
    </html>
  )
}

export default Login;