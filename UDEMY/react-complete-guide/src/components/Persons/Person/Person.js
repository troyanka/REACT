import React from "react";
// import Radium from 'radium';
// import styled from 'styled-components';
import classes from './Person.css'
// import "./Person/Person.css";


// const StyledDiv = styled.div`
// width: 60%;
// margin:  auto;
// border: 1px solid #eee;
// box-shadow: 0 2px 3px #ccc;
// padding: 16px;
// text-align: center;

// @media (min-width: 500px){width: 450px;}`;

//functional component
// stateless component, dumn


const Person = (props) => {

// const style = {
//   '@media (min-width: 500px)' : { width: '450px'}
// };


// const rnd = Math.random();
// if(rnd > 0.7){
//  throw new Error('something went wrong');
// }

  return (
    // <div className="Person" style={style}>


    // <StyledDiv>


    <div className={classes.Person}>

    <p onClick={() => props.click(40)}>I`m {props.name} I and I`am {props.age}!
    </p>
    {props.children && <p>{props.children}</p>}
    <input type="text" onChange={event=> props.changed(event)} value={props.name}/>

   {/* </StyledDiv> */}
   </div>
  );
};

export default Person;
// export default Radium(Person);
