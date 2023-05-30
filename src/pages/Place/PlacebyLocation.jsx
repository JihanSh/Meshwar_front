import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./place.css";

const PlacebyLocation = () => {
  const [location, setLocation] = useState([]);
  let loc = useLocation();
  let locId = loc.state.location;
  const navigate = useNavigate();

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
      {location.map((each) => (
        <div className="places-wrapper" key={each._id}>
          <img
            src={each.mainImage}
            alt="Location"
            onClick={() =>
              navigate("/placeInfo", { state: { each: each._id } })
            }
            />
            <h1>{each.name}</h1>
          <h1>{each.description}</h1>
        </div>
      ))}
    </div>
  );
};

export default PlacebyLocation;
