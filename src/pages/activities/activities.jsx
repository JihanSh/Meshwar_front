import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Activity = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getAllActivities();
  }, []);
  const getAllActivities = async () => {
    try {
      const response = await fetch("http://localhost:5000/activity");
      const data = await response.json();
      setActivities(data);
    } catch (err) {
      console.error(err);
    }
  };  const navigate = useNavigate();

  return (
    <div className="imageGrid">
      {activities.map((activity) => (
        <div
          key={activity._id}
          className="tile"
          style={{ backgroundImage: `url(${activity.mainImage})` }}
          onClick={() => navigate("/places", { state: { id: activity._id } })}
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
