import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./place.css"

function RandomPlace() {
  const [randomPlace, setRandomPlace] = useState(null);
  const [error, setError] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const fadeIn = useSpring({
    opacity: showDetails ? 1 : 0,
    from: { opacity: 0 },
  });

  const fetchRandomPlace = async () => {
    try {
      const response = await fetch("http://localhost:5000/place/random");
      const data = await response.json();
      if (response.ok) {
        setRandomPlace(data);
        setShowDetails(true);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Failed to fetch random place.");
    }
  };

  const handleRandomClick = () => {
    setShowDetails(false);
    fetchRandomPlace();
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!randomPlace) {
    return (
      <div className="random-container">
        <h1>Don't know where to go?</h1>
        <h2>Let Me Pick For You</h2>
        <button className="random-button" onClick={handleRandomClick}>Let's Go</button>
        
      </div>
    );
  }

  return (
    <div className="random-container">
      <animated.div style={fadeIn}>
        <p>Name: {randomPlace.name}</p>
        <img src={randomPlace.mainImage} alt="Place" />
        <p>Activity: {randomPlace.activity.name}</p>
        <p>Location: {randomPlace.location.name}</p>
      <button className="random-button" onClick={handleRandomClick}>Pick Another</button>
      </animated.div>
    </div>
  );
}

export default RandomPlace;
