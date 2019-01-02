import React, { Component } from 'react';

class TopNav extends Component {
    state = {  }
    render() { 
        return(
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <a className="navbar-brand" href="#">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
        )
    }
}
 
export default TopNav;