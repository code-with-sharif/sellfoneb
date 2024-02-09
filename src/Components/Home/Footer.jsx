import React from "react";
import "../../Styles/Home/Footer.css";
import logo from "../../Images/Home/Header/Logo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SlSocialPintarest } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <section style={{ }} className="" >
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row  ">
                <div className="col-lg-5 col-sm-12 col-md-6 footer-links">
                  <div className="footerlogoimg   " style={{marginLeft:"-16px"}}>
                    <img
                      className="img-fluid"
                      style={{ objectFit: "cover", backgroundSize:"cover" }}
                      src={logo}
                      alt="footer not show"
                    />
                  </div>
                  <p className="footerText ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="social-links">
                    <a href="#" className="linkedin-icon"> <FaLinkedinIn /></a>
                    <a href="#" className="linkedin-icon"> <FaFacebookF /></a>
                    <a href="#" className="linkedin-icon"> <FaTwitter /></a>
                    <a href="#" className="linkedin-icon"> <FaInstagram /></a>
                    <a href="#" className="linkedin-icon"><SlSocialPintarest /></a>
                  </div>
                </div>

{/* navigation part */}


                <div className="  navigationpart col-sm-1 col-lg-2 col-md-1 footer-links">
                  <h6>Navigation</h6>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">Process</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
 {/* service part */}

                <div className=" col-lg-2 col-sm- col-md-6 footer-links order-lg-3 order-4">
                  <h6>Services</h6>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">Sell Phone </a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">Buy Phone</a>
                    </li>
                  </ul>
                </div>
{/* company part */}
                <div className="  companypart col-lg-2 col-5 col-md-6 footer-links order-lg-4 order-3">
                  <h6>Company</h6>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">Frequently Asked Questions</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>

              </div>
              {/* row end */}
              <hr />
              <p className="text-center">
                © 2024 Sellphonepk. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
