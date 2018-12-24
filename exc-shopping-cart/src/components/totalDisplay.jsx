import React, { Component } from 'react';

class TotalDisplay extends Component {
    render() { 
        let {itemsInCart, totalAmount} = this.props;
        return ( 
            <div className='col-12 mt-3'>
            <p>Total Items In Cart: {this.state.totalAmount}</p>
            {
                this.state.totalAmount > 0 && 
                  <ul>
                      {this.state.itemsInCart.map(item=>{
                          return <li key={item.productId}>ItemId: {item.productId} | Amount: {item.amount}</li>
                      })}
                </ul>
            }
          </div>
         );
    }
}
 
export default TotalDisplay;