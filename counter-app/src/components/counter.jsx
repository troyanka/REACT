import React, { Component } from "react";

class Counter extends Component {
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  styles = {
    fontWeight: "bold",
    fontSize: "10px"
  };

  render() {
    let classes = this.getBadgeClasses();
    let { onDelete } = this.props;
    let { id } = this.props.counter;

    return (
      <div>
        {/* {this.props.children} */}
        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className='btn btn-secondary btm-sm m-2'>
          Increment
        </button>
        <button
          onClick={() => onDelete(id)}
          className='btn btn-danger btn-sm m-2'>
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "m-2 badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : this.props.counter.value;
  };
}

export default Counter;
