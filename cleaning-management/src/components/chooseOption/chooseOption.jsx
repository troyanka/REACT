import React from "react";
import "./chooseOption.scss";
// import washFloorImg from '../../images/clean-floor.jpg';
// import washDishesImg from './images/wash-dishes.jpg';


const ChooseOptions = props => {
  const {id, title, isChecked, imageUrl } = props;

  return (
    <label><input type="radio" value={title} key={id} name="task-choose" checked={isChecked} className="form-check-input"/>
    {title}</label>
    
  );
};

export default ChooseOptions;
