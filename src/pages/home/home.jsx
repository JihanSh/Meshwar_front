import React, { useState, useEffect } from "react";
import axios from "axios";
import lol from "../../assets/jbeil.jpg";
// import { Rating } from "react-simple-star-rating";
import "./home.css";
import "../activities/activities.css";
import lebanon from "../../assets/lebanon.mp4";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/headnav/header";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";

const Home = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activities, setActivities] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const navigate = useNavigate();
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
// Fetch activities
    fetch("http://localhost:5000/activity")
      .then((response) => response.json())
      .then((data) => setActivities(data));

    // Fetch locations
    fetch("http://localhost:5000/location")
      .then((response) => response.json())
      .then((data) => setLocations(data));
  
    fetchFeedbacks();
  }, []);

  useEffect(() => {
        const swiper = new Swiper(".swiper-slider", {
          // Optional parameters
          centeredSlides: true,
          slidesPerView: 1,
          grabCursor: true,
          freeMode: false,
          loop: true,
          mousewheel: false,
          keyboard: {
            enabled: true,
          },

          // Enabled autoplay mode
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },

          // If we need pagination
          pagination: {
            el: ".swiper-pagination",
            dynamicBullets: false,
            clickable: true,
          },

          // If we need navigation
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },

          // Responsive breakpoints
          breakpoints: {
            640: {
              slidesPerView: 1.25,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          },
        });
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

  // Handle activity select change
  const handleActivityChange = (event) => {
    setSelectedActivity(event.target.value);
  };

  // Handle location select change
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };
  const handleGoClick = () => {
    // Trigger filtering when the Go button is clicked
    console.log("selectedActivity && selectedLocation");
    console.log(selectedActivity && selectedLocation);
    if (selectedActivity && selectedLocation) {
      fetch(
        `http://localhost:5000/place/list/${selectedActivity}/${selectedLocation}`
      )
        .then((response) => response.json())
        .then((data) => setFilteredPlaces(data));
    }
    setSelectedActivity("");
    setSelectedLocation("");
  };

  const submitChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <>
      <Header />
      <div className="activity-select">
        <div className="activ-wrapper">
          <label htmlFor="activitySelect">Select Activity:</label>
          <select
            className="activitySelect"
            value={selectedActivity}
            onChange={handleActivityChange}
          >
            <option value="">All Activities</option>
            {activities.map((activity) => (
              <option key={activity._id} value={activity._id}>
                {activity.name}
              </option>
            ))}
          </select>
        </div>
        <div className="loc-wrapper">
          <label htmlFor="locationSelect">Select Location:</label>
          <select
            className="locationSelect"
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location._id} value={location._id}>
                {location.name}
              </option>
            ))}
          </select>
        </div>

        <button className="go-button" onClick={handleGoClick}>
          Go
        </button>
      </div>
      <ul>
        {filteredPlaces.map((place, key) => (
          <li key={place.id}>
            <h3>{place.name}</h3>
            <section className="section slider-section">
              <div className="container slider-column">
                <div className="swiper swiper-slider">
                  <div className="swiper-wrapper">
                    <div>
                      {place.images.map((image) => (
                        <img
                          key={image.id}
                          src={image.url}
                          alt={image.alt}
                          onClick={() => navigate(`/place/${place._id}`)}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="swiper-pagination"></span>
                  <span className="swiper-button-prev"></span>
                  <span className="swiper-button-next"></span>
                </div>
              </div>
            </section>
          </li>
        ))}
      </ul>
      <div className="about-container">
        <div className="about-text">
          <div className="about-title">
            {" "}
            <h1 className="title-abouthome">You're</h1>
            <h2 className="not">
              Not
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Yellowtail"
              />
            </h2>
            <h1 className="title-abouthome">Dreaming</h1>
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
