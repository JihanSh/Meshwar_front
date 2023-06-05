import React from "react";
import "./footer.css";
import meshwar from "../../assets/meshwar.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
              <div className="flex-footer">
                <div
                  className="col-lg-3 col-md-6 col-sm-12 offset-lg-2 footer-column"
                  style={{ margin: "auto" }}
                >
                  <div className="service-widget footer-widget">
                    <div className="footer-title">
                      About us <br />
                      <p>
                        Our team of experienced travel experts is dedicated to
                        curating exceptional itineraries that showcase the best
                        destinations around lebanon.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="logo-widget footer-widget">
                  <figure className="logo-box">
                    <a href="#">
                      <img src={meshwar} alt="" />
                    </a>
                  </figure>

                  <ul className="footer-social">
                    <li>
                      <a href="https://github.com/JihanSh">
                        <i className="fab fa-github">
                          <FaGithub />
                        </i>
                      </a>
                    </li>

                    <li>
                      <a href="https://www.linkedin.com/in/jihanshamas/">
                        <i className="fab fa-google-plus-g">
                          <FaLinkedin />
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
                ={" "}
                <div className="contact-footer">
                  <div className="footer-title">
                    Contact us
                    <div className="text">
                      <p className="text">+(961) 3473351</p>
                      <p className="text">jihan.shamas@gmail.com</p>{" "}
                      <p className="text">
                        Thank you for choosing our services. We look forward to
                        serving you!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
