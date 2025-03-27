import React, { useState } from "react";
import "./hotel.css";

const Hotel = () => {
  const [formData, setFormData] = useState({
    people: "",
    place: "",
    hotelType: "",
    priceRange: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="hotel-container">
      <h2 className="title">Find Your Perfect Hotel</h2>
      <form className="hotel-form">
        <input 
          type="number" 
          name="people" 
          placeholder="Number of People" 
          value={formData.people} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="place" 
          placeholder="Enter Place" 
          value={formData.place} 
          onChange={handleChange} 
        />
        <select name="hotelType" value={formData.hotelType} onChange={handleChange}>
          <option value="">Select Hotel Type</option>
          <option value="budget">Budget</option>
          <option value="standard">Standard</option>
          <option value="luxury">Luxury</option>
        </select>
        <input 
          type="text" 
          name="priceRange" 
          placeholder="Price Range" 
          value={formData.priceRange} 
          onChange={handleChange} 
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Hotel;