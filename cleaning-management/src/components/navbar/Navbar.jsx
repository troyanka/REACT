import React from "react";
import "./Navbar.scss";
import logoImg from "../../images/logo.jpg";

const Navbar = () => {
  return (
    <nav className='main-nav'>
      <div>
        <img className='logo' src={logoImg} alt='Logo' />
      </div>
      <div className='main-title'>My Cleaning Plan</div>
      {/* <ul className="nav-links">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
        </ul> */}
    </nav>
  );
};

export default Navbar;
