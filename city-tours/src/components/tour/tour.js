import React, { Component } from "react";
import "./tour.scss";

class Tour extends Component {
  state = {};
  render() {
    return (
      <article className='tour'>
        <div className='img-container'>
          <img
            width='200'
            src='https://images.pexels.com/photos/2278885/pexels-photo-2278885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            alt=''
          />
          <span className='close-btn'>
            <i className='fas fa-window-close' />
          </span>
        </div>
        <div className='tour-info'>
          <h3>City</h3>
          <h4>Name</h4>
          <h5>
            info{" "}
            <span>
              <i className='fas fa-caret-square-down' />
            </span>
          </h5>
          <p>
            Tempor officia reprehenderit veniam ipsum elit nisi do. Labore
            adipisicing officia adipisicing ex ad eu ipsum velit Lorem. Nulla
            aliqua ipsum mollit eu ea anim consectetur Lorem velit enim occaecat
            adipisicing. Aliqua ipsum laborum est laborum sit non proident
            adipisicing excepteur laborum sint nisi eu aliquip.
          </p>
        </div>
      </article>
    );
  }
}

export default Tour;
