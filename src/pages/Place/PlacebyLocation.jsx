import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./place.css";

const Place = () => {
  const [location, setLocation] = useState([]);
  let loc = useLocation();
  let locId = loc.state.location;

  const handleImageClick = (locationId) => {
    fetch(`http://localhost:5000/place/list/${locationId}`)
      .then((response) => response.json())
      .then((data) => {
        setLocation(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    handleImageClick(locId);
  }, []);

  return (
    <div className="grid-container">
      {location.map((each, index) => (
        <div className="places-wrapper" key={index}>
          <h1>{each.name}</h1>
          <img src={each.mainImage} alt="Location" />
          <h1>{each.description}</h1>
        </div>
      ))}
    </div>
  );
};

export default Place;
