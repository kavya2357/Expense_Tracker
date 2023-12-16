import React from 'react'
import './Styles/Header.css'
import {Link,NavLink} from 'react-router-dom'

function Header() {
  return (
    <div className='navbar'>
        <div><h1>ExpenSee.</h1></div>
        
        <div className='components'>
          <Link to='/home' activeClassName='active' className='component'>Dashboard</Link>
          <NavLink to='/transactions' activeClassName='active' className='component'>Transactions</NavLink>
          <NavLink to='' activeClassName='active' className='component'>Reports</NavLink>
          <NavLink to='' activeClassName='active' className='component'>SignOut</NavLink>
        </div>
      </div>
  )
}

export default Header