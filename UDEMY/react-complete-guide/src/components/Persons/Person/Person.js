import React, { Component } from "react";
// import styled from 'styled-components';
import classes from "./Person.css";

class Person extends Component {
  render() {
    const { click, name, children, age, changed } = this.props;
    return (
      // <StyledDiv>

      <div className={classes.Person}>
        <p onClick={click}>
          I`m {name} I and I`am {age}!
        </p>
        {children && <p>{children}</p>}
        <input type='text' onChange={changed} value={name} />

        {/* </StyledDiv> */}
      </div>
    );
  }
}

export default Person;
