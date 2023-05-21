import React, { useState, useEffect } from "react";
import "./activities.css";
import lake from "../../assets/lake.webp";
import yahchouch from "../../assets/yahchouch.jpeg";
import بيروت from "../../assets/بيروت.jpeg";
import "../../components/headnav/header-navbar.css";
const Acivity = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [yahchouch, lake, بيروت];
  const totalImages = images.length;
  
  

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % totalImages);
    }, 3000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [totalImages]);

  return (
    <>
      {/* <div className="slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={index === currentImage ? "active" : ""}
          />
        ))}
      </div> */}
      <div className="activities-wrapper">

        <div className="body-wrapper">
          <div className="first background-div" id="large-image-one">
            <h2 className="caption-header">Swimming</h2>
          </div>
          <section className="wrapper">
            <div className="background-wrapper background-div" id="first">
              <h2 className="caption-header">Hiking</h2>
            </div>
            <div className="background-wrapper background-div" id="second">
              <h2 className="caption-header">Night Out</h2>
            </div>
            <div className="background-wrapper background-div" id="third">
              <h2 className="caption-header">Eating</h2>
            </div>
          </section>
        </div>
        <div className="body-wrapper">
          <div className="first background-div" id="large-image-two">
            <h2 className="caption-header">Tours</h2>
          </div>
          <section
            className="wrapper"
            style={{ order: -1, paddingLeft: 0, paddingRight: 20 }}
          >
            <div className="background-wrapper background-div" id="fourth">
              <h2 className="caption-header">Skiing</h2>
            </div>
            <div className="background-wrapper background-div" id="fifth">
              <h2 className="caption-header">Historical places</h2>
            </div>
            <div className="background-wrapper background-div" id="sixth">
              <h2 className="caption-header">Hunting</h2>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default Acivity;
