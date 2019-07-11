import React, { useState } from "react";
import "./tour.scss";
import { Stats, stat } from "fs";

const Tour = props => {
  let { img, city, name, info } = props.tourDetails;
  // state = {
  //   showInfo: false
  // };

  const { showInfo, setShowInfo } = useState(false);

  handeInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article className='tour'>
      <div className='img-container'>
        <img src={img} alt='' />
        <span className='close-btn'>
          <i className='fas fa-window-close' />
        </span>
      </div>
      <div className='tour-info'>
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          info{" "}
          <span onClick={handle}>
            <i className='fas fa-caret-square-down' />
          </span>
        </h5>
        {showInfo && <p>{info}</p>}
      </div>
    </article>
  );
};

export default Tour;
