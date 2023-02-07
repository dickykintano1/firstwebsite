import React from 'react'
import './css/Header.css'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <nav>
      <div className={localStorage.getItem('test') === 'Test value' ? 'headerbar-signedIn' : 'headerbar'}>
        <a href='/' className='title' name='title'>Cook Web</a>
        <Link to={'/about'} className='navbar-button' name='about-button'>About</Link>
        {localStorage.getItem('test') === 'Test value' ? 
        <><Link to={'/'} className='navbar-button' name='profile-button'>Profile</Link><Link to={'/'} className='navbar-button' name='createRecipe-button'>Create</Link></>: 
        <Link to={'/login'} className='navbar-button' name='login-button'>Login</Link>}
        {/* <Link to={'/login'} className='navbar-button' name='login-button'>Login</Link> */}
        {/* <Link to={'/users/reg'} className='navbar-button' name='reg-button'>Register</Link> */}
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