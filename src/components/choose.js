import React from "react";
import "./choose.css";

const Choose = () => {
  return (
    <div className="choose-container">
      <h1 className="title">Choose Your Service</h1>
      <div className="options">
        <button className="option explore" onClick={()=> window.location.href='/dash'}>
          <img src="./image.png" alt="Explore Destinations" />
          <p>Explore Destinations</p>
        </button>
        <button className="option" onClick={()=> window.location.href='/hotel'}>
          <img src="./hotel.png" alt="Hotel Booking" />
          <p>Hotel Booking</p>
        </button>
        <button className="option" >
          <img src="./trans.png" alt="Transport" />
          <p>Transport</p>
        </button>
      </div>
      <button className="special-option">
        <img src="./book.png" alt="View Packages" />
        <p>View Packages</p>
      </button>
    </div>
  );
};

export default Choose;
