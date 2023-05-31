import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import RandomPlace from "../Place/randomPlace";
const Activity = () => {
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();
  const place = useLocation();
  const [isloading, setIsLoading] = useState(true);

  const getAllActivities = async () => {
    try {
      const response = await fetch("https://meshwar.onrender.com/place");
      const data = await response.json();
      setActivities(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getAllActivities();
  }, []);
  useEffect(()=>{
setTimeout(()=>{
setIsLoading(false);
},1000)
  },[])
if (isloading){
  return <Loader/>}
  return (
    <>
      <div className="imageGrid">
        {activities.map((activity) => (
          <div
            key={activity._id}
            className="tile"
            style={{ backgroundImage: `url(${activity.mainImage})` }}
            onClick={() =>
              navigate("/placeInfo", { state: { activity: activity._id } })
            }
          >
            <div className="textWrapper">
              <h2>{activity.title}</h2>
              <div className="content">{activity.name}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Activity;
