import React from 'react';
import Cart from '../components/cart';

const ProductItem = (props) => {
    let { title, article, id, total, showAmount, price } = props.product;
    const { clickShow, handleChange, handleClick } = props;
    
        return (
            <div className='col-md-4 mt-5' key={id}>
                <div className='card'>
                  <div className='card-header'>
                    <h3>{title}</h3>
                  </div>
                  <div className='card-body'>
                    <p> {article} </p>
                    <p><b>Price on site:</b> {price} </p>
                    <p>
                      <input onClick={() => clickShow(id)} className='btn btn-primary' type='button' value='Add to Cart' />
                    </p>
                    {showAmount && <Cart handleChange={handleChange} handleClick={handleClick} id={id} total={total}/>
                    }
                  </div>
                </div>
              </div>
     )
}
 
export default ProductItem;