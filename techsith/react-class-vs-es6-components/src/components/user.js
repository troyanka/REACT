import React from 'react';

// Functional component should get props
//It should be used when there is no need for state
const User = (props) =>{
   let {age, children} = props;
   if(children){
    age = age ? age : "NA";
    return <div>Name: {children} | Age: {age}</div>
   }else{
     return <div>Invalid Entry</div>
   }
}

export default User;