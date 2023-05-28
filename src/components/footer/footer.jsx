import React from "react";
import "./footer.css"
import meshwar from "../../assets/meshwar.png"
const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
              <div className="flex-footer">
                <div className="logo-widget footer-widget">
                  <figure className="logo-box">
                    <a href="#">
                      <img src={meshwar} alt="" />
                    </a>
                  </figure>

                  <ul className="footer-social">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-vimeo-v"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              <div className="col-lg-3 col-md-6 col-sm-12 offset-lg-2 footer-column">
                <div className="service-widget footer-widget">
                  <div className="footer-title">Services</div>
                  <ul className="list">
                    <li>
                      <a href="#">Water Survey</a>
                    </li>
                    <li>
                      <a href="#">Education for all</a>
                    </li>
                    <li>
                      <a href="#">Food Serving</a>
                    </li>
                    <li>
                      <a href="#">Animal Saves</a>
                    </li>
                    <li>
                      <a href="#">Help Orphan</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-widget">
                <div className="contact-widget footer-widget">
                  <div className="footer-title">Contacts</div>
                  <div className="text">
                    <p>Lorem Ipsum, simply dummy text, printing, Chandigarh</p>
                    <p>+2(784) 1223323</p>
                    <p>info@example.com</p>
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
