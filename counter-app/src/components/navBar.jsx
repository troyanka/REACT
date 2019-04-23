import React from "react";

// We cant use lifeCycle hoocs in Stateless functional component
//Stateless functional component (sfc)
const NavBar = props => {
  const { totalCounters, totalItems } = props;
  return (
    <nav className='navbar navbar-light bg-light'>
      <a className='navbar-brand' href='/'>
        <span className='badge badge-pill badge-secondary'>
          Total ids: {totalCounters}
        </span>
        <span className='badge badge-info badge-secondary'>
          Total Item: {totalItems}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
