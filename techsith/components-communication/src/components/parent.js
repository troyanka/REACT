import React, { PureComponent } from 'react';
import Child from './child';

const Parent = (props) => {
   return(
       <div>
           <Child handleClick={props.changeTheWordEvent} title={props.title}/>
           <Child handleClick={props.keepTheWordSameEvent} title={props.title}/>
       </div>
   )
}

export default Parent;