import React from "react";
import "./welcome.css";

const Welcome = () => {
  return (
    <>
      <div className="page" style={{
        background: "linear-gradient(to bottom, black, blue)",
        height: "800px",
        width: "1300px"
      }}>
        <div className="navbar">
          <h1 className="title" style={{position:"relative",left:"-550px",top:"20px"}}>TSM</h1>
          <div className="butt">
            <button className="butt1" style={{ border: "none" }}>HOME</button>
            <button
              className="butt2"
              onClick={() => (window.location.href = "/about")}
              style={{ background: "none", border: "none" }}
            >
              ABOUT
            </button>
            <button className="butt3" style={{ background: "none", border: "none" }}>
              CONTACT
            </button>
            <button className="butt4" style={{ background: "none", border: "none" }}>
              DESTINATION
            </button>
          </div>
          <button className="login">LOGIN</button>
          <button className="signup">SIGNUP</button>
          <h1 className="welcome-text">Welcome to TSM </h1>
          <h2 className="subtitle">Your Ultimate Travel Companion!</h2>
          <button className="start" onClick={() => (window.location.href = "/choose")}>
            BEGIN
          </button>
        </div>
        <div className="image-slider">
        <div className="slider-wrapper">
  <img src="./image1.png" alt="Travel 1" className="slider-img" />
  <img src="./image2.png" alt="Travel 2" className="slider-img" />
  <img src="./image3.png" alt="Travel 3" className="slider-img" />
  <img src="./image4.png" alt="Travel 4" className="slider-img" />
  <img src="./image5.png" alt="Travel 5" className="slider-img" />
  {/* Duplicate the images for a seamless loop */}
  <img src="./image1.png" alt="Travel 1" className="slider-img" />
  <img src="./image2.png" alt="Travel 2" className="slider-img" />
  <img src="./image3.png" alt="Travel 3" className="slider-img" />
  <img src="./image4.png" alt="Travel 4" className="slider-img" />
  <img src="./image5.png" alt="Travel 5" className="slider-img" />
</div>

        </div>
      </div>
    </>
  );
};

export default Welcome;
