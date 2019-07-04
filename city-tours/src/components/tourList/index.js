import React, { Component } from "react";
import "./tourList.scss";
import Tour from "../tour/tour";

class TourList extends Component {
  state = {
    tours: [
      {
        id: 1,
        city: "new york",
        img:
          "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        name: "new york bridge tour",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,repellendus!"
      },
      {
        id: 2,
        city: "paris",
        img:
          "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        name: "paris lights tour",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,repellendus!"
      },
      {
        id: 3,
        city: "london",
        img:
          "https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        name: "london royal palace tour",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,repellendus!"
      },
      {
        id: 4,
        city: "tokyo",
        img:
          "https://images.pexels.com/photos/1727627/pexels-photo-1727627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        name: "tokyo sushi tour",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,repellendus!"
      }
    ]
  };

  render() {
    return (
      <section className='tourList'>
        {this.state.tours.map(tour => (
          <Tour key={tour.id} tourDetails={tour} />
        ))}
      </section>
    );
  }
}

export default TourList;
