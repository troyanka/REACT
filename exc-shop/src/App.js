import React, { Component } from 'react';
import TopNav from './components/topnav';
import Footer from './components/footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery/dist/jquery.min.js';
//import '../node_modules/popper/dist/umd/popper.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <header>
          <TopNav/>
       </header>
       <main></main>
       <footer>
         <Footer/>
       </footer>
      </div>
    );
  }
}

export default App;
