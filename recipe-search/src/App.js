// Example from:  https://www.youtube.com/watch?v=PbJt7-a2274&list=WL&index=5&t=0s
//https://cors-anywhere.herokuapp.com/  - we can use this link as server from local environment
import React, { Component } from "react";
import "./App.css";
import Form from "./components/form";
import Recipes from "./components/recipes";

const API_KEY = "00801de5a6f040d76fcaa8622b333cfa";
const API_BASE = "https://www.food2fork.com/api/";

class App extends Component {
  state = {
    recipes: []
  };
  getRecipe = async e => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch(
      `${API_BASE}search?key=${API_KEY}&q=${recipeName}&page=2&count=10`
    );

    const data = await api_call.json();
    let recipes = data.recipes;
    this.setState({ recipes });
    console.log(this.state.recipes);
  };

  componentDidMount = () => {
    const recipes = JSON.parse(localStorage.getItem("recipes"));
    this.setState({ recipes });
  };

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem({ recipes });
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
