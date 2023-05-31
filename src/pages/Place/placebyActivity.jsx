import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./place.css";
import Loader from "../../components/loader/Loader";

const PlacebyActivity = () => {
  let navigate = useNavigate();
  const [place, setPlace] = useState([]);
  const acPlace = useLocation();
  const activityId = acPlace.state.activity;

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const response = await fetch(
          `https://meshwar.onrender.com/place/showByActivity/${activityId}`
        );
        const data = await response.json();
        setPlace(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlace();
  }, [activityId]);

  return (
    <>
      {!place ? <Loader /> : ""}
      <div className="grid-container">
        {place.map((each) => (
          <div className="places-wrapper" key={place._id}>
            <img
              src={each.mainImage}
              alt="Location"
              onClick={() =>
                navigate("/placeInfo", { state: { img_id: each._id } })
              }
            />
            <h1>{each.name}</h1>
            <h1>{each.description}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default PlacebyActivity;
