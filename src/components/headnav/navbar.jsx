import React, { useEffect, useState } from "react";
import meshwar from "../../assets/meshwar.png";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./header-navbar.css";

export const Navbar = () => {
  const location = useLocation();
  const handleHamburgerClick = () => {
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    const hamburger = document.querySelector(".hamburger");

    // Animate Links
    navLinks.classList.toggle("open");
    links.forEach((link) => {
      link.classList.toggle("fade");
    });

    // Hamburger Animation
    hamburger.classList.toggle("toggle");
  };

  return (
    <nav>
      <div
        className={
          location.pathname === "/"
            ? "headnav-container headnav_active"
            : "headnav-container"
        }
      >
        <div className="hamburger" onClick={handleHamburgerClick}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className="nav-links">
          <li>
            <Link
              to="/about"
              style={{ textdecoration: "none", color: "#ffffff" }}
            >
              <p>About</p>
            </Link>{" "}
          </li>
          <li>
            <Link
              to="/activity"
              style={{ textdecoration: "none", color: "#ffffff" }}
            >
              <p>Places to go</p>
            </Link>{" "}
          </li>
          <li>
            <Link to="/">
              <img src={meshwar} alt="Meshwar" />
            </Link>{" "}
          </li>
          <li>
            <Link
              to="/contact"
              style={{ textdecoration: "none", color: "#0d3762" }}
            >
              <p>Contact us</p>
            </Link>{" "}
          </li>
          <li>
            <Link
              to="/login"
              style={{ textdecoration: "none", color: "#0d3762" }}
            >
              <p>Login</p>
            </Link>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
};

