import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Place = () => {
  const { id } = useParams();
  const [place, setPlace] = useState({});

  const getPlacebyId = (ID) => {
    fetch(`http://localhost:5000/place/${ID}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPlace(data);
      });
    };
const handleImageClick = (locationId) => {
  fetch(`http://localhost:5000/place/list/${locationId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setPlace(data);
    })
    .catch((error) => {
      console.error(error);
    });
};


  useEffect(() => {
    getPlacebyId(id);
    handleImageClick(id);
  }, []);

  return <div><h1>{place.description}</h1></div>;
};

export default Place;
