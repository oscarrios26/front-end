import React from 'react';
import './Nav.css'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='navContainer'>
      <h2 id='title'>CarInfo.com</h2>
      <div className='nav'>
  
      <NavLink className="nav-link" to='/'> Home </NavLink>
      <NavLink className="nav-link" to='/sign-up'> Sign Up </NavLink>
      <NavLink className="nav-link" to='/sign-in'> Sign In </NavLink>
      </div>
    </div>
      
    );
}
