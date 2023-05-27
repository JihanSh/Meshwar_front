import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./place.css";

const PlacebyActivity = () => {
  const [place, setPlace] = useState([ ]);
  const acPlace = useLocation();
  const activityId = acPlace.state.activity;

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/place/showByActivity/${activityId}`
        );
        const data = await response.json();
        setPlace(data);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlace();
  }, [activityId]);

  return (
    <div className="grid-container">
      {place.map((each) => (
        <div className="places-wrapper" key={place._id}>
          <h1>{each.name}</h1>
          <img
            src={each.mainImage}
            alt="Location"
          />
          <h1>{each.description}</h1>
        </div>
      ))}
    </div>
  );
};

export default PlacebyActivity;
