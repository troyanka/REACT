import React, { useState } from "react";
import "./tourList.scss";
import Tour from "../tour/tour";
import { tourData } from "../tourData";

function TourList() {
  const [tours, setTours] = useState(tourData);

  const removeTour = id => {
    let filteredTours = tours.filter(tour => tour.id !== id);
    setTours(filteredTours);
  };

  return (
    <section className='tourList'>
      {tours.map(tour => (
        <Tour key={tour.id} tourDetails={tour} removeTour={removeTour} />
      ))}
    </section>
  );
}

export default TourList;
