import React, { Component } from "react";
import "./tourList.scss";
import Tour from "../tour/tour";
import { tourData } from "../tourData";

class TourList extends Component {
  state = {
    tours: tourData
  };

  render() {
    const { tours } = this.state;

    return (
      <section className='tourList'>
        {tours.map(tour => (
          <Tour key={tour.id} tourDetails={tour} />
        ))}
      </section>
    );
  }
}

export default TourList;
