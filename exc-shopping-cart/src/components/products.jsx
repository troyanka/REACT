import React, { Component, Fragment } from "react";
import ProductItem from '../components/product-item';
import { products } from "../services/products.service";

// 45 minute

class App extends Component {
  state = {
    products: [],
    totalAmount: 0
  };

  componentDidMount() {
    let myProducts = [...products];
    myProducts.map(product => {
      product.total = 1;
      product.showAmount = false;
      return product;
    });
    this.setState({ products: myProducts });
  }

  handleChange() {}

  handleClick = (event, ProductId) => {
    let myProducts = [...products];
    let op = event.target.value;

    myProducts.map(product => {
      if (product.id === ProductId) {
        if (op === "+") {
          product.total++;
        } else {
          if (product.total > 1) product.total--;
        }
      }
      return product;
    });

    this.setState({ products: myProducts });
  };

  handleShow = productId => {
    let { products } = this.state;
    let myProd = products.find(product => product.id === productId);
    myProd.showAmount = !myProd.showAmount;
    this.setState({ products });
  };

  render() {
    let { products } = this.state;

    return (
      <Fragment>
        <div className='container'>
        <div className="row">
            <div className="col-12 mt-3">
            <p>Total Items In Cart: {this.state.totalAmount}</p>
            </div>
        </div>
          <div className='row'>
            {products.map(product => (
              <ProductItem key={product.id} product={product} clickShow={this.handleShow} handleChange={this.handleChange} handleClick={this.handleClick}/>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
