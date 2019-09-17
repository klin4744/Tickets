import React from 'react';
import './Navbar.css';

export default function Navbar() {
   return (
      <nav className="navbar fixed-top Navbar w-100">
         <div className="navbar-brand">
            <img
               className="img-fluid"
               alt=""
               src={require('../assets/viagogo_logo.jpg')}
            />
         </div>
      </nav>
   );
}
