import React from "react";
import "../../Styles/Home/Footer.css";
import logo from "../../Images/Home/Header/Logo.png";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { SlSocialPintarest } from "react-icons/sl";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="mx-lg-0 mx-2" style={{  }}>
        <footer id="footer">
          <div className="footer-top">
            <div className="" style={{ width: "92%", margin: "auto" }}>
              <div className="row ">
                <div className="col-lg-5 col-sm-12 col-md-6 footer-links ">
                  <div className="footerlogoimg" style={{ marginLeft: "-16px" }}>
                    <img
                      className="img-fluid"
                      style={{ objectFit: "cover", backgroundSize: "cover" }}
                      src={logo}
                      alt="footer not show"
                    />
                  </div>
                  <p className="footerText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="social-links">
                    <Link to="#" className="linkedin-icon"><FaLinkedinIn /></Link>
                    <Link to="#" className="linkedin-icon"><FaFacebookF /></Link>
                    <Link to="#" className="linkedin-icon"><FaTwitter /></Link>
                    <Link to="#" className="linkedin-icon"><FaInstagram /></Link>
                    <Link to="#" className="linkedin-icon"><SlSocialPintarest /></Link>
                  </div>
                </div>

                {/* navigation part */}
                <div className="  navigationpart col-1 col-lg-2 col-md-1 footer-links">
                  <h6>Navigation</h6>
                  <ul>
                  <li className="sociallinksitem">
                     
                     <Link to="#">Home</Link>
                   </li>
                    <li className="sociallinksitem">
                     
                     <Link to="#">Process</Link>
                   </li>
                    <li className="sociallinksitem">
                     
                      <Link to="#">About us</Link>
                    </li>
                    <li className="sociallinksitem">
                     
                      <Link to="#">FAQ</Link>
                    </li>
                   
                    <li className="sociallinksitem">
                      
                      <Link className="" to="#">Contact</Link>
                    </li>
                  </ul>
                </div>

                {/* service part */}
                <div className="servicepart col-lg-2 col-sm- footer-links order-lg-3 order-4">
                  <h6>Services</h6>
                  <ul>
                    <li  className="sociallinksitem">
                      <i className="bx bx-chevron-right"></i>{" "}
                      <Link to="#">Sell Phone</Link>
                    </li>
                    <li  className="sociallinksitem">
                      <i className="bx bx-chevron-right"></i>{" "}
                      <Link to="#">Buy Phone</Link>
                    </li>
                  </ul>
                </div>

                {/* company part */}
                <div className="companypart col-lg-2 col-5 col-md-6 footer-links order-lg-4 order-3">
                  <h6>Company</h6>
                  <ul className="linksorderlist">
                    <li className="sociallinksitem">
                      <i className="bx bx-chevron-right"></i>{" "}
                      <Link to="#">Frequently Asked Questions</Link>
                    </li>
                    <li  className="sociallinksitem">
                      <i className="bx bx-chevron-right"></i>{" "}
                      <Link to="#">Terms & Conditions</Link>
                    </li>
                    <li  className="sociallinksitem">
                      <i className="bx bx-chevron-right"></i>{" "}
                      <Link to="#">Privacy Policy</Link>
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
