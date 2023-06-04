import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./place.css";
import Loader from "../../components/loader/Loader";

const PlacebyLocation = () => {
  const [location, setLocation] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  let loc = useLocation();
  let locId = loc.state.location;
  const navigate = useNavigate();

  const handleImageClick = (locationId) => {
    fetch(`https://meshwar.onrender.com/place/list/${locationId}`)
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
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  if (isloading) {
    return <Loader />;
  }
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
