import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./place.css";
import MAP from "../../assets/MAP.png";
import FeedbackForm from "./FeedbackForm";

const PlaceInfo = () => {
  const [placeInfo, setPlaceInfo] = useState({});
  const [feedback, setFeedback] = useState([]);
  const [images, setImages] = useState([]);
  const [rating, setRating] = useState(0);
  const [showAllFeedback, setShowAllFeedback] = useState(false);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const place = useLocation();
  const placeId = place.state.each;
  let imgId = place.state.img_id;
  let places = place.state.activity;

  useEffect(() => {
    handleImageClick();
  }, [placeId]);

  const handleImageClick = () => {
    fetch(`https://meshwar.onrender.com/place/${placeId || imgId || places}`)
      .then((response) => response.json())
      .then((data) => {
        setPlaceInfo(data);
        if (data && data.images) {
          setImages(data.images);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    fetch(
      `https://meshwar.onrender.com/place/show/${placeId || imgId || places}`
    )
      .then((response) => response.json())
      .then((data) => {
        setFeedback(data);
        console.log(data);
        if (data && data.images) {
          setImages(data.images);
        }
      });
  };

  useEffect(() => {
    $(function () {
      $("#thumbnail li").click(function () {
        var thisIndex = $(this).index();

        if (thisIndex < $("#thumbnail li.active").index()) {
          prevImage(
            thisIndex,
            $(this).parents("#thumbnail").prev("#image-slider")
          );
        } else if (thisIndex > $("#thumbnail li.active").index()) {
          nextImage(
            thisIndex,
            $(this).parents("#thumbnail").prev("#image-slider")
          );
        }

        $("#thumbnail li.active").removeClass("active");
        $(this).addClass("active");
      });
    });

    var width = $("#image-slider").width();

    function nextImage(newIndex, parent) {
      parent
        .find("li")
        .eq(newIndex)
        .addClass("next-img")
        .css("left", width)
        .animate({ left: 0 }, 600);
      parent
        .find("li.active-img")
        .removeClass("active-img")
        .css("left", "0")
        .animate({ left: -width }, 600);
      parent.find("li.next-img").attr("class", "active-img");
    }

    function prevImage(newIndex, parent) {
      parent
        .find("li")
        .eq(newIndex)
        .addClass("next-img")
        .css("left", -width)
        .animate({ left: 0 }, 600);
      parent
        .find("li.active-img")
        .removeClass("active-img")
        .css("left", "0")
        .animate({ left: width }, 600);
      parent.find("li.next-img").attr("class", "active-img");
    }
  }, []);

  const handleRatingChange = (value) => {
    setRating(value);
    // You can perform any additional logic here, such as updating the rating on the server
  };

  const handleViewMoreClick = () => {
    setShowAllFeedback(true);
  };

  const visibleFeedbacks = showAllFeedback ? feedback : feedback.slice(0, 3);
  const toggleFeedbackForm = () => {
    setShowFeedbackForm(!showFeedbackForm);
  };

  const handleFeedbackFormClose = () => {
    setShowFeedbackForm(false);
  };

  return (
    <div className="info-container">
      <div className="place-info">
        <h1>Name:</h1>
        <p>{placeInfo.name}</p>
        <h1>Description:</h1>
        <p>{placeInfo.description}</p>
        <h1>Price Range:</h1>
        <p>{placeInfo.price}$</p>
        <div className="rating">
          <h1>Rating:</h1>
          <p className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= rating ? "active" : ""}
                onClick={() => handleRatingChange(star)}
              >
                &#9733;
              </span>
            ))}
          </p>
        </div>
        <div
          className={`feedback1-container ${
            showAllFeedback ? "show-all-feedback" : ""
          }`}
        >
          <h1>Feedback</h1>
          <div className="feedback-scroll">
            {visibleFeedbacks.map((feedbacks, index) => (
              <div key={index}>
                <p>{feedbacks.description}</p>
                {feedbacks.images.map((image, imgIndex) => (
                  <img
                    className="feed-img"
                    key={imgIndex}
                    src={image.url}
                    alt="Jamala wlo"
                  />
                ))}
              </div>
            ))}
          </div>
          {!showAllFeedback && (
            <button className="viewMore" onClick={handleViewMoreClick}>
              View More
            </button>
          )}
        </div>
        <button className="plus-button" onClick={toggleFeedbackForm}>
          +
        </button>
        {showFeedbackForm && (
          <FeedbackForm
            isOpen={true}
            onRequestClose={handleFeedbackFormClose}
          />
        )}
      </div>
      <div className="slider-wrapper" id="slider-wrapper">
        <div id="image-slider">
          <ul>
            <li className="active-img">
              <img src={placeInfo.mainImage} alt="" />
            </li>
          </ul>
        </div>

        <div id="thumbnail">
          <ul>
            {images.map((image, index) => (
              <li key={index} className={index === 0 ? "active" : ""}>
                <img src={image.url} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaceInfo;
