import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

const TOMTOM_API_KEY = "lLcJIAppIBBRFN6wNjpax85Vpoj2FqLN"; // Replace with actual key

const Map = () => {
  const [touristPlaces, setTouristPlaces] = useState([]);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  
  // Extract city from URL
  const query = new URLSearchParams(useLocation().search);
  const city = query.get("city") || "hyderabad"; // Default to Hyderabad if no city selected

  useEffect(() => {
    const fetchTouristPlaces = async () => {
      try {
        const response = await fetch(`http://localhost:5000/locations/${city.toUpperCase()}`);
        const data = await response.json();
        console.log("Fetched data:", data.results);
        if (data.results) {
          setTouristPlaces(data.results);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    

    fetchTouristPlaces();
  }, [city]);

  useEffect(() => {
    if (!touristPlaces.length) return;

    // Initialize map centered on first location
    const mapInstance = tt.map({
      key: TOMTOM_API_KEY,
      container: "map",
      center: [touristPlaces[0].lon, touristPlaces[0].lat],
      zoom: 12,
    });

    setMap(mapInstance);
    return () => mapInstance.remove();
  }, [touristPlaces]);

  useEffect(() => {
    if (map) {
      markers.forEach((marker) => marker.remove());
      setMarkers([]);

      const newMarkers = [];

      touristPlaces.forEach((place) => {
        const marker = new tt.Marker()
          .setLngLat([place.lon, place.lat])
          .addTo(map);
        newMarkers.push(marker);
      });

      setMarkers(newMarkers);
    }
  }, [map, touristPlaces]);

  return (
    <div>
      <h2>Tourist Places in {city.charAt(0).toUpperCase() + city.slice(1)}</h2>
      <div id="map" style={{ width: "100%", height: "500px" }}></div>
      <ul>
        {touristPlaces.map((place, index) => (
          <li key={index}>
            {place.name} - {place.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Map;
