import React, { Component } from "react";
import "./tourList.scss";
import Tour from "../tour/tour";

class TourList extends Component {
  render() {
    return (
      <section className='tourList'>
        <Tour />
      </section>
    );
  }
}

export default TourList;
