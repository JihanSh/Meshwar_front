import React, { useEffect, useState } from "react";
import meshwar from "../../assets/meshwar.png";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./header-navbar.css";

export const Navbar = () => {
  const location = useLocation();


  return (
    <>
      <div
        className={
          location.pathname === "/"
            ? "headnav-container headnav_active"
            : "headnav-container"
        }
      >
        <Link to="/about" style={{ textdecoration: "none", color: "#0d3762" }}>
          <p>About</p>
        </Link>
        <Link to="/activity" style={{ textdecoration: "none", color: "#0d3762" }}>
          <p>Places to go</p>
        </Link>
        <Link to="/">
          <img src={meshwar} alt="Meshwar" />
        </Link>
        <Link
          to="/contact"
          style={{ textdecoration: "none", color: "#0d3762" }}
        >
          <p>Contact us</p>
        </Link>
        <p>Login</p>
      </div>
    </>
  );
};
