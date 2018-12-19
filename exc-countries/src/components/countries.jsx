import React, { Component } from 'react';
import CountriesService from '../services/countries.service'
import './countries.css';

let countries = [];

class Countries extends Component {

    //Old school way
    // constructor(){
    //     super();
    //     this.state = {
    //         x: 3
    //     }
    //     this.handleSubmit = this.handleSubmit.bind(this);  
    // }

    // handleSubmit(e){
    //     e.preventDefault();
    //     console.log(this.state.x);
    // }

    constructor(){
        super();
        this.cs = new CountriesService();
    }

    componentDidMount(){
        this.cs.getCountries().then( country=> {
            countries.push(country);
        });
    }

    state = { 
     showCard : false,
     searchField : '',
     countries, 
     borderCapitals : []
    }

    handleSubmit  = (e) => {
        e.preventDefault();
        countries = countries[0]
        let {searchField} = this.state;
        const country = this.cs.searchCapital(searchField ,countries);

        if(country){
            //console.log("country-1", country);
            let borderCapitals = this.cs.getCapitalsByBorders(country.borders, countries);
            //console.log("borderCapitals", borderCapitals);
            this.setState({borderCapitals});
            //console.log("borderCapitals", this.state.borderCapitals);
            this.setState({showCard : true});
        }
    };

    handleChange = (e) =>{
        let searchField = e.target.value.trim();
        this.setState({searchField});
    }

    render() { 
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col-12 my-5">
                        <h1>Victoria countries Project</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, beatae.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit} autoComplete="off" noValidate="noValidate">
                            <div className="input-group mb-3">
                                <input name="search" value={this.state.searchField} onChange={this.handleChange} type="text" className="form-control" placeholder="Search Capital" aria-label="Search Capital" aria-describedby="search" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-primary" type="submit" id="search">GO!</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {this.state.showCard && 
                <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                         <span className="capital-letter">{this.state.searchField} - England</span>
                        </div>
                        <div className="card-body">
                            <p className="capital-letter">Capital: {this.state.searchField}</p>
                                <button className="btn btn-primary" type="button" data-toggle="collapse" 
                                data-target="#collapseCapitals" aria-expanded="false" 
                                aria-controls="collapseExample">
                                    Capital Borders
                                </button>

                                <div className="collapse mt-3" id="collapseCapitals">
                                 <ul>
                                     {
                                         this.state.borderCapitals.map( (border, index) => {
                                            return <li key={index}>{border}</li>
                                         })
                                     }
                                 </ul>
                                </div>
                        </div>
                    </div>
                </div>
            </div>}
            </div>
        );
    }
}
 
export default Countries;