import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

const TOMTOM_API_KEY = "lLcJIAppIBBRFN6wNjpax85Vpoj2FqLN"; // Replace with actual key

const Map = () => {
  const [touristPlaces, setTouristPlaces] = useState([]);
  const [map, setMap] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);

  // Extract city from URL
  const query = new URLSearchParams(useLocation().search);
  const city = query.get("city") || "hyderabad";

  useEffect(() => {
    const fetchTouristPlaces = async () => {
      try {
        const response = await fetch(`https://tourism-backend-e55e.onrender.com/locations/${city.toUpperCase()}`);
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
      touristPlaces.forEach((place) => {
        const popup = new tt.Popup({ offset: 30 }).setHTML(
          `<strong>${place.name}</strong><br>${place.address}`
        );

        const marker = new tt.Marker()
          .setLngLat([place.lon, place.lat])
          .setPopup(popup)
          .addTo(map);

        marker.getElement().addEventListener("click", () => {
          setSelectedPlace(place);
        });
      });
    }
  }, [map, touristPlaces]);

  const handlePlaceChange = (event) => {
    const placeName = event.target.value;
    const place = touristPlaces.find((p) => p.name === placeName);
    if (place && map) {
      map.flyTo({ center: [place.lon, place.lat], zoom: 14 });
      setSelectedPlace(place);
    }
  };

  return (
    <>
      <style>
        {`
          #map {
            width: 100vw;
            height: 100vh;
          }

          .info-box {
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 15px;
            border-radius: 10px;
            width: 400px;
            text-align: center;
            z-index: 1000;
          }

          .info-box h3 {
            margin: 0;
            font-size: 18px;
            color: #ffcc00;
          }

          .info-box p {
            margin: 5px 0;
            font-size: 14px;
          }

          .dropdown-container {
            position: absolute;
            top: 20px;
            right: 20px;
            z-index: 1000;
          }

          select {
            padding: 10px;
            font-size: 14px;
            border-radius: 5px;
            background: rgba(205, 185, 171, 0.8);
            border: 1px solid #ccc;
          }
        `}
      </style>

      <div id="map"></div>

      <div className="dropdown-container">
        <select onChange={handlePlaceChange}>
          <option value="">Select a Place</option>
          {touristPlaces.map((place, index) => (
            <option key={index} value={place.name}>{place.name}</option>
          ))}
        </select>
      </div>

      {selectedPlace && (
        <div className="info-box">
          <h3>{selectedPlace.name}</h3>
          <p><strong>Address:</strong> {selectedPlace.address}</p>
          <p><strong>Info:</strong> {selectedPlace.description}</p>
        </div>
      )}
    </>
  );
};

export default Map;
