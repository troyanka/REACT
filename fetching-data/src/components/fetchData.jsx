import React, { Component } from "react";

const API = "https://hn.algolia.com/api/v1/search?query=";
const DEFAULT_QUERY = "redux";

class fetchData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API + DEFAULT_QUERY)
      .then(response => {
        console.log("response", response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => this.setState({ hits: data.hits, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { hits, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading data....</p>;
    }

    return (
      <>
        <h1>Fetch Data with fetch() and componentDidMount</h1>
        <ul>
          {hits.map(hit => (
            <li key={hit.objectID}>
              <a href={hit.url}>{hit.title}</a>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default fetchData;
