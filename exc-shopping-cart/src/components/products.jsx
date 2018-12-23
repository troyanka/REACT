import React, { Component, Fragment } from 'react';

class App extends Component {
    state = {
        total: 1,
        showAmount: false,
        products: [
            { id: 2, title: 'Product1', article: 'Text prod1', price: 45 },
            { id: 7, title: 'Product2', article: 'Text prod2', price: 25 },
            { id: 6, title: 'Product3', article: 'Text prod3', price: 35 }
        ]
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

    handleShow = () => {
        let { showAmount } = this.state;
        showAmount = !showAmount;
        this.setState({ showAmount });
    }

    render() {

        let { showAmount, total, products } = this.state;

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
                                        <p><input onClick={this.handleShow} className="btn btn-primary" type="button" value="Buy" /></p>
                                        {showAmount &&
                                            <div className="amount">
                                                <input className="btn btn-success mr-2" type="button" onClick={this.handleClick} value="-"></input>
                                                <input type="text" onChange={this.handleChange} value={total} size="1" style={{ textAlign: 'center' }}></input>
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
