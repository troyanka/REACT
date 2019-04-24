import React from "react";
import "./chooseOption.scss";

const ChooseOptions = props => {
  const { handleChoose } = props;
  const CleaningOptions = [
    {
      id: 1,
      title: "Clean the floor"
    },
    {
      id: 1,
      title: "Wash the bathroom"
    }
  ];

  return (
    <div>
      <ul>
        {CleaningOptions.map(option => {
          <li onClick={() => handleChoose(option.id)}>{option.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default ChooseOptions;
