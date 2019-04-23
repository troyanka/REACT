import React from "react";
import "./Navbar.scss";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='City Tours Logo' />
      <ul className='nav-links'>
        <li>
          <a className='nav-link' href='/'>
            Home
          </a>
        </li>
        <li>
          <a className='nav-link' href='/'>
            About
          </a>
        </li>
        <li>
          <a className='nav-link active' href='/'>
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
