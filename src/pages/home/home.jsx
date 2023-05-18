import React, { useState, useEffect } from "react";
import axios from "axios";
import lol from '../../assets/jbeil.jpg'
// import { Rating } from "react-simple-star-rating";
import "./home.css";
import lebanon from "../../assets/lebanon.mp4";
import { Link } from "react-router-dom";
import { Header } from "../../components/headnav/header";

const Home = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/feedback");
        setFeedbacks(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch feedbacks. Please try again.");
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    }, 5000); // Change slide interval as needed (in milliseconds)

    return () => {
      clearInterval(slideInterval);
    };
  }, [feedbacks]);

  if (loading) {
    return <p>Loading feedbacks...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }


 
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="about-text">
          <div className="about-title">
            {" "}
            <h1>You're</h1>
            <h2>
              Not
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Yellowtail"
              />
            </h2>
            <h1>Dreaming</h1>
          </div>
          <p className="about-description">
            If you are looking for a destination that offers rich history,
            stunning landscapes, and vibrant culture, then look no further than
            Lebanon! This beautiful country is a hidden gem waiting to be
            discovered by travelers of all types. From the bustling streets of
            Beirut, to the serene beauty of the Cedars Forest, Lebanon has
            something for everyone. Visitors can explore ancient ruins like the
            Roman Temples of Baalbek, relax on the sandy beaches of Jounieh Bay,
            or spend an afternoon wandering through the charming streets of
            Byblos, one of the oldest continuously inhabited cities in the
            world. Whether you're interested in food, art, history, or
            adventure, Lebanon is sure to captivate and inspire you. Come
            discover this unique and enchanting country for yourself!
          </p>
          <button className="about-button">
            <Link to="/about"></Link>Explore
          </button>
        </div>
        <div className="about-video">
          <video src={lebanon} autoPlay muted loop></video>
        </div>
      </div>
      <div>
        <h1 className="feedback-title">What Visitors are Saying?</h1>
        <div className="home-feedback">
          <div className="for-absolue">
            <p className="feedback-text">
              Take a look at what our visitors are saying. In Lebanon, we not
              only provide you with services but also valuable experiences for
              your valuable time.
            </p>
            {feedbacks.length === 0 ? (
              <p>No feedbacks available.</p>
            ) : (
              <div className="feedback-images">
                {feedbacks[currentIndex].images.map((image) => (
                  <img
                    key={image._id}
                    src={image.url}
                    alt="Feedback Image"
                    className="feed-image"
                  />
                ))}
              </div>
            )}
            <div className="desc_wrapper">
              <p>{feedbacks[currentIndex].description}</p>
              <p>-{feedbacks[currentIndex].user_id.username}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
