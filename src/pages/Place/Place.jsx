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

  useEffect(() => {
    getPlacebyId(id);
  }, []);

  return <div>Place</div>;
};

export default Place;
