import React from 'react';

const UserInput = props => {
    return (
        <div> 
       <label for="username">Type usename:</label>
       <input type='text' id="username" onChange={(e) => props.change(e)} value={props.usename}/>
    </div>
     )
}
 
export default UserInput;