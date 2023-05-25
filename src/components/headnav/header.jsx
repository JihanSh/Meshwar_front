import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header-navbar.css";
import lebanon from "../../assets/rawche.jpeg";
import site from "../../assets/beirut1.jpg";
import map from "../../assets/lebanon outline.png";
import baalbeck from "../../assets/baalbeck.jpg";

export const Header=()=>{
    const [currentImage, setCurrentImage] = useState(0);
    const images = [lebanon, baalbeck, site];
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
        <div className="cloud">
          <div className="slider">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className={index === currentImage ? "active" : ""}
              />
            ))}
          </div>
          <div className="head-descripttion">
            <div className="places-text">
              <h1>Lebanon</h1>{" "}
              <p>
                Whether you're interested in food, art, history, or adventure,
                Lebanon is sure to captivate and inspire you. Come discover this
                unique and enchanting country for yourself!
              </p>{" "}
            </div>
            <img className="map-img" src={map}></img>
          </div>
        </div>
      </>
    );
}