// https://www.robinwieruch.de/react-fetching-data/ - stopped at How to fetch data with Axios in React
import React, { Component } from "react";
import FetchData from "./components/fetchData";
import FetchWithAxios from "./components/fetchWithAxios";
import FetchWithAsyncAwait from "./components/fetchWithAsyncAwait";
import FetchInHigherOrderComponent from "./components/fetchInHigherOrderComponent";

const API = "https://hn.algolia.com/api/v1/search?query=";
const DEFAULT_QUERY = "redux";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <FetchData />
        <FetchWithAxios />
        <FetchWithAsyncAwait />
        <FetchInHigherOrderComponent />
      </>
    );
  }
}

export default App;
