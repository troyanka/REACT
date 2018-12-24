import React, { Component, Fragment } from "react";
import ProductItem from "../components/product-item";
import { products } from "../services/products.service";

class App extends Component {
  state = {
    products: [],
    totalAmount: 0,
    itemsInCart: []
  };

  componentDidMount() {
    let myProducts = [...products];
    myProducts.map(product => {
      product.total = 0;
      product.showAmount = false;
      return product;
    });
    this.setState({ products: myProducts });
  }

  handleChange() {}

  handleClick = (event, productId) => {
    let myProducts = [...products];
    let myCounter = this.state.totalAmount;
    let op = event.target.value;
    let itemsInCart = [...this.state.itemsInCart];
    console.log("itemsInCart", itemsInCart);

    myProducts.map(product => {
      if (product.id === productId) {
          //Add to Total Amount + add specific product
        if (op === "+") {
          product.total++;
          myCounter++
          let alreadyExists = itemsInCart.find( item => item.productId === productId);
          if(!alreadyExists){
            itemsInCart.push({productId, amount:1});
          }
          else{
            alreadyExists.amount++;
          }
        
        //Reduce from Total Amount + delete specific product
        } else {
          if (product.total > 0) {
            myCounter--;
            product.total--;

            let currentItem = itemsInCart.find( item => item.productId === productId);
            
            if(currentItem.amount === 1){
                const removeIndex = itemsInCart.map(function(item) { return item.productId }).indexOf(productId);
                itemsInCart.splice(removeIndex, 1);
            }
            else{
                currentItem.amount--;
            }
          }
        }
      }
      return product;
    });

    this.setState({itemsInCart});
    this.setState({ products: myProducts });
    this.setState({ totalAmount: myCounter });
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
          <div className='row'>
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
          </div>
          <div className='row'>
            {products.map(product => (
              <ProductItem key={product.id} product={product} clickShow={this.handleShow} handleChange={this.handleChange} handleClick={this.handleClick} />
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
