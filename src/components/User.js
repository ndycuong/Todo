import React from 'react';
import logo from '../images/aka.png';
import "../App.css"

function User() {

  return (
    <div className="User">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="info">
        <p className='Name'>Test Demos</p>
        <a href="/" className='Log-out' >Log-out</a>
      </div>
    </div>
  );
}

export default User;
