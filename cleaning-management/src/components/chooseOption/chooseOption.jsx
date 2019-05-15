import React from "react";
import "./chooseOption.scss";
// import washFloorImg from '../../images/clean-floor.jpg';
// import washDishesImg from './images/wash-dishes.jpg';


const ChooseOptions = props => {
  const {id, title, isChecked, handleChoose, imageUrl } = props;

  return (
    <React.Fragment>
    <label>
      <input type="radio" value={title} key={id} name="task-choose" onChange={handleChoose} className="form-check-input"/>
      {title}
    </label>
    <img src={imageUrl} alt={title}/>
    </React.Fragment>
  );
};

export default ChooseOptions;
