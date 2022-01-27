import React from 'react';
import './Nav.css'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return <div className='nav'>
    <NavLink to='/'> Home </NavLink>
    <NavLink to='/sign-up'> Sign Up </NavLink>
    <NavLink className="nav-link" to='/sign-in'> Sign In </NavLink>
  </div>;
}
