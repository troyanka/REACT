import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import TopNav from './components/topnav';
import Footer from './components/footer';
import About from './components/about';
import Home from './components/home';
import Contact from './components/contact';
import Signup from './components/signup';
import Products from './components/products';
import Page404 from './components/page404';


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
       <main className="container">
        <Switch>
          <Route path='/page-404' component={Page404}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path='/' exact component={Home}></Route>
          <Redirect to='/page-404'></Redirect>
        </Switch>
       </main>
       <footer>
         <Footer/>
       </footer>
      </div>
    );
  }
}

export default App;
