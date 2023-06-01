import React, { useState, useEffect } from "react";
import "./about.css";
import lol from "../../assets/beirut.jpg";
import lol2 from "../../assets/lebanon1.jpg";
import { ThreeDots } from "react-loader-spinner";

const About = () => {

  
  return (
    <div className="about-container">
      <div className="about-wrap">
        <div className="about-wrap-image">
          <img src={lol} alt="Feedback Image" />
          <img src={lol2} alt="Feedback Image" />
        </div>
        <div className="about-wrap-text">
          <h1>
            Dare To live the Life you've always wanted
          </h1>
          <p>
            Life is short and the world is wide. <br />
            So better get started
          </p>
        </div>
      </div>
      <div className="about2-wrap">
          {/* <p className="about-2">About us</p> */}
        <div className="about2-wrap-text">
          <h1>Our Plan is to fullfill your dream wish</h1>
          <p>
            Life is short and the world is wide. <br />
            understand to achieve anything requires faith and belief in
            yourself, vision, hard work, determination, and dedication
          </p>
          <div className="lol">
            <div className="hero-artworks">
              <h1>10</h1>
              <p>Years Of Experience</p>
            </div>
            <div className="hero-artists">
              <h1>100+</h1>
              <p>Succsessful Trips</p>
            </div>
            <div className="hero-aucations">
              <h1>200+</h1>
              <p>happy tourrists</p>
            </div>
          </div>
        </div>
        <div className="about2-wrap-image">
          <img src={lol} alt="Feedback Image" />
          <img src={lol2} alt="Feedback Image" />
        </div>
      </div>
    </div>
  );
};
export default About;
