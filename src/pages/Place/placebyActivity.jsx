import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./place.css";

const Place = () => {
  const [places, setPlaces] = useState([]);
  let place = useLocation();
  let placeId = place.state.location;

  const handleImageClick = (placeId) => {
    fetch(`http://localhost:5000/place/list/${placeId}`)
      .then((response) => response.json())
      .then((data) => {
        setPlaces(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    handleImageClick(placeId);
  }, []);

  return (
    <div className="grid-container">
      {Array.isArray(places) && places.length > 0 ? (
        places.map((each, index) => (
          <div className="places-wrapper" key={index}>
            <h1>{each.name}</h1>
            <img src={each.mainImage} alt="Place" />
            <h1>{each.description}</h1>
          </div>
        ))
      ) : (
        <p>No places found.</p>
      )}
    </div>
  );
};

export default Place;
