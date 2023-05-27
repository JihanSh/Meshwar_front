import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Activity = () => {
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();
  const getAllActivities = async () => {
    try {
      const response = await fetch("http://localhost:5000/activity");
      const data = await response.json();
      setActivities(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
  getAllActivities();
  }, []);
  
  return (
    <div className="imageGrid">
      {activities.map((activity) => (
        <div
          key={activity._id}
          className="tile"
          style={{ backgroundImage: `url(${activity.mainImage})` }}
          onClick={() => navigate("/placebyactivity", { state: { activity: activity._id } })}
        >
          <div className="textWrapper">
            <h2>{activity.title}</h2>
            <div className="content">{activity.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activity;
