import React, { PureComponent } from 'react';

//Functional component (stateless)
const Child  = (props) =>{
    return(
        <div>
            <button onClick={props.handleClick}>{props.title}</button>
        </div>
  )
}

export default Child;