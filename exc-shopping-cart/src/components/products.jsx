import React, { Component, Fragment } from 'react';
import {products} from '../services/products.service';

// 45 minute

class App extends Component {
    state = {
        total: 1,
        showAmount: false,
        products: []
    }

    componentDidMount(){
        let myProducts = [...products];
        myProducts.map( product =>{
            product.showAmount = false;
            product.total = 1;
            return product;
        });
        this.setState({products:myProducts});
    }

    handleChange() { };

    handleClick = (event) => {
        let total = this.state.total;
        let op = event.target.value;
        if (op === '+') total++;
        else {
            if (total > 1) {
                total--;
            }
        }
        this.setState({ total });
    }

    handleShow = (id) => {
        let { products } = this.state;

        products.map(product=>{
            product.showAmount = !product.showAmount;
        });

        let { showAmount } = this.state;
        showAmount = !showAmount;
        this.setState({ showAmount });
    }

    render() {

        let { products } = this.state;

        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        {products.map(product =>
                            <div className="col-md-4 mt-5">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>{product.title}</h3>
                                    </div>
                                    <div className="card-body">
                                        <p> {product.article} </p>
                                        <p><input onClick={()=>this.handleShow(product.id)} className="btn btn-primary" type="button" value="Buy" /></p>
                                        {product.showAmount &&
                                            <div className="amount">
                                                <input className="btn btn-success mr-2" type="button" onClick={this.handleClick} value="-"></input>
                                                <input type="text" onChange={this.handleChange} value={product.total} size="1" style={{ textAlign: 'center' }}></input>
                                                <input className="btn btn-success ml-2 " type="button" onClick={this.handleClick} value="+"></input>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default App;
