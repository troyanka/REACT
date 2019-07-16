import React, { useState } from "react";
import "./tour.scss";

function Tour(props) {
  const [showInfo, setShowInfo] = useState(false);

  const handelInfo = () => {
    setShowInfo(!showInfo);
  };

  const { img, city, name, info, id } = props.tourDetails;
  const { removeTour } = props;
  return (
    <article className='tour'>
      <div className='img-container'>
        <img src={img} alt='' />
        <span className='close-btn' onClick={() => removeTour(id)}>
          <i className='fas fa-window-close' />
        </span>
      </div>
      <div className='tour-info'>
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          info{" "}
          <span onClick={() => handelInfo()}>
            <i className='fas fa-caret-square-down' />
          </span>
        </h5>
        {showInfo && <p>{info}</p>}
      </div>
    </article>
  );
}

export default Tour;
