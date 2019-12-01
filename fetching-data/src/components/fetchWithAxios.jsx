import React, { Component } from "react";
import axios from "axios";

const API = "https://hn.algolia.com/api/v1/search?query=";
const DEFAULT_QUERY = "redux";

class FetchWithAxios extends Component {
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

    axios
      .get(API + DEFAULT_QUERY)
      .then(result =>
        this.setState({
          hits: result.data.hits,
          isLoading: false
        })
      )
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
  }

  render() {
    const { hits } = this.state;
    return (
      <>
        <h1>Fetch Data with axios</h1>
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

export default FetchWithAxios;
