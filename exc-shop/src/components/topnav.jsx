import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom';

class TopNav extends Component {
    state = {  }
    render() { 
        return(
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-primary" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-primary" to="/products">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-primary" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-primary" to="/signup">Sign Up</NavLink>
            </li>
          </ul>
        </div>
      </nav>
        )
    }
}
 
export default TopNav;