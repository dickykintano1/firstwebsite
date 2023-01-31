import React from 'react'
import './css/Header.css'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <nav>
      <div className='headerbar'>
        <a href='/' className='title' name='title'>Cook Web</a>
        <Link to={'/about'} className='navbar-button' name='about-button'>About</Link>
        <Link to={'/login'} className='navbar-button' name='login-button'>Login</Link>
        <Link to={'/users/reg'} className='navbar-button' name='reg-button'>Register</Link>
        <form className='navbar-srchbar' action=''>
          <input
            className='navbar-input'
            type='search'
            placeholder='search recipe'
          />
          <button
            className='submit-button'
            type='submit'
          >
          </button>
        </form>
      </div>
    </nav>
  )
}

export default Header