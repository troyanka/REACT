import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    let { counters, handleDelete, handleReset, handleIncrement } = this.props;
    return (
      <div>
        <button onClick={handleReset} className='btn btn-primary btn-sm m-2'>
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={handleDelete}
            onIncrement={handleIncrement}>
            {/* <h4>Counter #{counter.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
