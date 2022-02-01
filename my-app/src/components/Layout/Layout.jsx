import React from 'react';
import './Layout.css'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'

export default function Layout(props) {
  return (
    <div className='layout'>
      <div className='header-nav'>
      <Nav user={props.user}/>
      </div>
      <div className='layout-children'>{props.children}</div>
      <Footer />
    </div>
  );
}
