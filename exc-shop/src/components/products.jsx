import React, { Component, Fragment } from 'react';
import { getProduct } from '../services/products.service';

class Products extends Component {
    state = {
        products: getProduct()
    }
    render() {
        return (
            <Fragment>
                <div className="row">
                    {
                        this.state.products.map(product =>
                            <div key={product.id} className="col-md-4 mt-5">
                                <div className="card">
                                    <div className="card-header">
                                        <span className="h4">{product.title}</span>
                                    </div>
                                    <div className="card-body">
                                        <p>{product.article}</p>
                                        <p><b>Price: </b>$ {product.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </Fragment>
        );
    }
}

export default Products;