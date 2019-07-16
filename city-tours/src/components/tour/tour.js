import React, { useState, Component } from "react";
import "./tour.scss";

class Tour extends Component {
  state = {
    showInfo: false
  };

  // const { showInfo, setShowInfo } = useState();

  handelInfo = () => {
    // console.log(this.state.showInfo);
    this.setState({ showInfo: !this.state.showInfo });
    // setShowInfo(!showInfo);
  };

  render() {
    const { img, city, name, info, id } = this.props.tourDetails;
    const { removeTour } = this.props;
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
            <span onClick={this.handelInfo}>
              <i className='fas fa-caret-square-down' />
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}

export default Tour;
