import React from 'react';

const Cart = (props) => {

    let {id, total, handleChange, handleClick}  = props;

    return ( 
        <div className='amount'>
            <input className='btn btn-success mr-2' type='button' onClick={e => handleClick(e, id)} value='-' />
            <input type='text' onChange={handleChange} value={total} size='1' style={{ textAlign: "center" }} />
            <input className='btn btn-success ml-2 ' type='button' onClick={e => handleClick(e, id)} value='+' />
        </div>
     );
}
 
export default Cart;