import React from 'react'
import './css/Header.css'

function Header() {
  return (
    <nav>
      <div className='headerbar'>
        <h1>Cook Web</h1>
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