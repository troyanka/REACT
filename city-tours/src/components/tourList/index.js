import React, { Component } from "react";
import "./tourList.scss";
import Tour from "../tour/tour";
import { tourData } from "../tourData";

class TourList extends Component {
  state = {
    tours: tourData
  };

  removeTour = id => {
    console.log(id);
    const { tours } = this.state;
    let filteredTours = tours.filter(tour => tour.id !== id);
    this.setState({ tours: filteredTours });
  };

  render() {
    const { tours } = this.state;

    return (
      <section className='tourList'>
        {tours.map(tour => (
          <Tour key={tour.id} tourDetails={tour} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}

export default TourList;
