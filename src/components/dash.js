import React from "react";
import "./dash.css";

const Dash = () => {
  const fetchLocations = async (city) => {
    try {
      const response = await fetch(`https://tourism-backend-e55e.onrender.com/locations/${city}`);
      const data = await response.json();
      console.log("Fetched locations:", data.results);
      if (data.results) {
        localStorage.setItem("locations", JSON.stringify(data.results));
        window.location.href = `/map?city=${city}`;

      }
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  return (
    <div className="page1" style={{ backgroundImage: "url('./image1.jpg')", 
    color: "white", 
    fontSize: "20px",
    backgroundPosition: "center", color: "white", fontSize: "20px" }}>
      <h1 style={{ textAlign: "center", marginTop: "50px", position:"relative",top:"40px" }}>SELECT DESTINATION</h1>
      <div className="cat">
        <button className="cat1" onClick={() => fetchLocations("HYDERABAD")}>HYDERABAD</button>
        <button className="cat2" onClick={() => fetchLocations("DELHI")}>DELHI</button>
        <button className="cat3" onClick={() => fetchLocations("MUMBAI")}>MUMBAI</button>
        <button className="cat4" onClick={() => fetchLocations("RAJASTHAN")}>RAJASTHAN</button>
        <button className="cat5" onClick={() => fetchLocations("KASHMIR")}>KASHMIR</button>
      </div>
    </div>
  );
};

export default Dash;
