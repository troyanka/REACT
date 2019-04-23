import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

// example from https://www.youtube.com/watch?v=Ke90Tje7VS0 2:00:00

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  // Good place for AJAX calls
  // componentDidMount() {
  //   console.log("App - Mounted");
  // }

  handleReset = () => {
    let counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: counters });
  };

  handleDelete = id => {
    let counters = [...this.state.counters].filter(
      counter => counter.id !== id
    );
    this.setState({ counters });
  };

  handleIncrement = myCounter => {
    let counters = [...this.state.counters];
    const index = counters.indexOf(myCounter);
    counters[index] = { ...myCounter };
    counters[index].value++;
    this.setState({ counters });
  };

  // When it is CanvasRenderingContext2D, all the children are rendered also
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
          totalItems={this.state.counters.reduce(function(counter, obj) {
            return counter + obj.value;
          }, 0)}
        />
        <main className='container'>
          <Counters
            counters={this.state.counters}
            handleDelete={this.handleDelete}
            handleReset={this.handleReset}
            handleIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
