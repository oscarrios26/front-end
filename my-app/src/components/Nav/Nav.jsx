import React, { useState } from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const alwaysRender = (
  <>
    <NavLink className="nav-link" to='/'> Home </NavLink>
    
  </>

)

const authenticated = (
  <>
   
    <NavLink className="nav-link" to='/sign-out'> Sign Out </NavLink>
  </>
)

const unauthenticated = (
  <>
    
    <NavLink className="nav-link" to='/sign-in'> Sign In </NavLink>
    
  </>
)





export default function Nav({ user }) {


  return (
    <nav>
    <div className='navContainer'>
      <NavLink className='titleNavLink' to='/'><h2 id='title'>CarInfo.com</h2></NavLink>
      <div className="links">
          {user && <div className="link-welcome">Welcome back! {user.Username}</div>} 
          {alwaysRender}
          {user ? authenticated : unauthenticated}
        </div>
        
        
    </div>
    </nav> 
    );
}

{/* <div className='nav'>
  
  <NavLink className="nav-link" to='/'> Home </NavLink>
  <NavLink className="nav-link" to='/sign-up'> Sign Up </NavLink>
  <NavLink className="nav-link" to='/sign-in'> Sign In </NavLink>
  </div> */}