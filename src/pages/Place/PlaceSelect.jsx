import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PlaceSelect = () => {
  const [place, setPlace] = useState({});
  const location = useLocation();
  let id = location.state.id;
  console.log(id);
  const getPlacebyId = (ID) => {
    console.log(ID);
    fetch(`https://meshwar.onrender.com/place/list/${ID}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPlace(data);
      });
  };
  useEffect(() => {
    getPlacebyId(id);
  }, []);
  return (
    <>
      <h1>{place.name}</h1>
      <h1>{place.description}</h1>
    </>
  );
};

export default PlaceSelect;
