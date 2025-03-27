import React, { useState } from "react";
import "./dash.css";

const Dash = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
    <div className="page1">
      <div className="search-container">
        <input 
          type="text" 
          className="search-bar" 
          placeholder="Search for a destination..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>
      <h1 className="title">TRENDING DESTINATIONS</h1>
      <div className="cat">
        <button className="cat-btn" onClick={() => fetchLocations("HYDERABAD")}>HYDERABAD</button>
        <button className="cat-btn" onClick={() => fetchLocations("DELHI")}>DELHI</button>
        <button className="cat-btn" onClick={() => fetchLocations("MUMBAI")}>MUMBAI</button>
        <button className="cat-btn" onClick={() => fetchLocations("RAJASTHAN")}>RAJASTHAN</button>
        <button className="cat-btn" onClick={() => fetchLocations("KASHMIR")}>KASHMIR</button>
      </div>
    </div>
  );
};

export default Dash;

/* dash.css */

