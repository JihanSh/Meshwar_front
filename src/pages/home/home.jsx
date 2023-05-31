import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swiper from "swiper";
import Slider from "react-slick";
import "swiper/swiper-bundle.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "../../components/loader/Loader";
import { Header } from "../../components/headnav/header";
import "./home.css";
import "../activities/activities.css";
import lol from "../../assets/jbeil.jpg";
import lebanon from "../../assets/lebanon.mp4";
import RandomPlace from "../Place/randomPlace";


const Home = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isloading, setIsLoading] = useState(true);
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
    const feedbackData = response.data.map((feedback) => ({
      ...feedback,
      username: feedback.user_id.username,
    }));
    setFeedbacks(feedbackData);
    setLoading(false);
  } catch (error) {
    setError("Failed to fetch feedbacks. Please try again.");
    setLoading(false);
  }
};


    const fetchActivities = () => {
      fetch("http://localhost:5000/activity")
        .then((response) => response.json())
        .then((data) => setActivities(data));
    };

    const fetchLocations = () => {
      axios
        .get("http://localhost:5000/location")
        .then((response) => {
          setLocations(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchActivities();
    fetchLocations();
    fetchFeedbacks();
  }, []);

  useEffect(() => {
    const swiper = new Swiper(".swiper-slider", {
      centeredSlides: true,
      slidesPerView: 2,
      grabCursor: true,
      freeMode: false,
      loop: true,
      mousewheel: false,
      keyboard: {
        enabled: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: false,
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 1.25,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    }, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [feedbacks]);

  const handleActivityChange = (event) => {
    setSelectedActivity(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleGoClick = () => {
    if (selectedActivity && selectedLocation) {
      fetch(
        `http://localhost:5000/place/list/${selectedActivity}/${selectedLocation}`
      )
        .then((response) => response.json())
        .then((data) => setFilteredPlaces(data));
    }
  };

  const submitChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  useEffect(()=>{
setTimeout(()=>{
setIsLoading(false);
},1000)
  },[])
if (isloading){
  return <Loader/>
}
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
      <div className="swiper swiper-slider">
        <div className="swiper-wrapper">
          {filteredPlaces.map((place, key) =>
            place.images.map((image) => (
              <div className="swiper-slide" key={image.id}>
                <img
                  className="carousel-img"
                  src={image.url}
                  alt={image.alt}
                  onClick={() =>
                    navigate("/place", { state: { id: place._id } })
                  }
                />
                <div className="image-name-container">
                  <div className="image-name">{place.name}</div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>

      <div className="about-container">
        <div className="about-text">
          <div className="about-title">
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
          <p>
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
          <Link to="/about">
            <button className="about-button">Explore</button>
          </Link>
        </div>
        <div className="about-video">
          <video src={lebanon} autoPlay muted loop></video>
        </div>
      </div>
      <RandomPlace />
      <div className="slider-container">
        <h1 className="feedback-title">Which City You'd Like to Visit?</h1>
        <Slider {...sliderSettings}>
          {locations.map((location) => (
            <div className="location-card" key={location._id}>
              <h3>{location.name}</h3>
              <img
                src={location.mainImage}
                alt={location.name}
                onClick={() =>
                  navigate("/location", { state: { location: location._id } })
                }
              />
            </div>
          ))}
        </Slider>
        <h1 className="feedback-title">What do you prefer to do?</h1>

        <Slider {...sliderSettings}>
          {activities.map((activity) => (
            <div className="location-card" key={activity._id}>
              <h3>{activity.name}</h3>
              <img
                src={activity.mainImage}
                alt={activity.name}
                onClick={() =>
                  navigate("/placebyactivity", {
                    state: { activity: activity._id },
                  })
                }
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="feedback-container">
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
                {feedbacks[currentIndex % feedbacks.length].images.map(
                  (image) => (
                    <img
                      key={image._id}
                      src={image.url}
                      alt="Feedback Image"
                      className="feed-image"
                    />
                  )
                )}
              </div>
            )}
            <div className="desc_wrapper">
              {feedbacks.length === 0 ? (
                <p>No feedbacks available.</p>
              ) : (
                <div>
                  <p>
                    {feedbacks[currentIndex % feedbacks.length].description}
                  </p>
                  <p>
                    {
                      feedbacks[currentIndex % feedbacks.length].user_id
                        .username
                    }
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
