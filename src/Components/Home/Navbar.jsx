// Navbar.js
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import "../../Styles/Home/Navbar.css";
import manueIcon from "../../Images/Home/Header/Equals.svg";

const Navbar = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const handleMenuItemClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

   
    setShowOffCanvas(false);
  };

  const closeOffCanvas = () => {
    setShowOffCanvas(false);
  };

  return (
    <>
      <Link
        onClick={() => setShowOffCanvas(!showOffCanvas)}
        role="button"
        aria-controls="offcanvasExample"
        data-bs-toggle="offcanvas"
        to="#offcanvasExample"
       
      >
      <div className="MenuIcon">
  <img
    className="img-fluid "
    style={{
      width: "100%",  
      height: "100%",  
      cursor: "pointer",
      objectFit: "cover",     
    }}
    src={manueIcon}
    alt="Menu"
  />
</div>

      </Link>

      <Offcanvas
        show={showOffCanvas}
        onHide={closeOffCanvas}
        placement="start"
        backdrop={false}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> 
          {/* title */}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className="">
            <Link
              className="navitem"
              to="/"
              onClick={() => {
                handleMenuItemClick();
                closeOffCanvas();
              }}
            >
              Home
            </Link>
            <hr className="" />

            <NavLink
              className="navitem  "
              to="/process"
              onClick={handleMenuItemClick}
            >
              Process
            </NavLink>
            <hr />

            <NavLink className="navitem " to="/services" onClick={handleMenuItemClick}>
              Services
            </NavLink>
            <ul className="subnavitem">
              <li className="w-100 position-relative mt-2">
                <NavLink className="thirdheading" to="/sellerproduct"
                 onClick={() => {
                handleMenuItemClick();
                closeOffCanvas();
              }}>
              Sell Mobile Phone
                </NavLink>
                <div className="greatherSign" style={{}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="11"
                    viewBox="0 0 6 11"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.146447 10.8536C-0.0488155 10.6583 -0.0488155 10.3417 0.146447 10.1464L4.79289 5.5L0.146447 0.853553C-0.0488155 0.658291 -0.0488155 0.341709 0.146447 0.146447C0.341709 -0.0488148 0.658291 -0.0488148 0.853553 0.146447L5.85355 5.14645C6.04882 5.34171 6.04882 5.65829 5.85355 5.85355L0.853553 10.8536C0.658291 11.0488 0.341709 11.0488 0.146447 10.8536Z"
                      fill="#212221"
                    />
                  </svg>
                </div>
              </li>
              <li className="w-100 position-relative mt-1">
                <NavLink className="thirdheading" to="/services/service2">
                  Buy Mobile Phone
                </NavLink>
                <div className=" greatherSign" style={{}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="11"
                    viewBox="0 0 6 11"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.146447 10.8536C-0.0488155 10.6583 -0.0488155 10.3417 0.146447 10.1464L4.79289 5.5L0.146447 0.853553C-0.0488155 0.658291 -0.0488155 0.341709 0.146447 0.146447C0.341709 -0.0488148 0.658291 -0.0488148 0.853553 0.146447L5.85355 5.14645C6.04882 5.34171 6.04882 5.65829 5.85355 5.85355L0.853553 10.8536C0.658291 11.0488 0.341709 11.0488 0.146447 10.8536Z"
                      fill="#212221"
                    />
                  </svg>
                </div>
              </li>
            </ul>
            <hr />

            <NavLink
              className="navitem thirdheading"
              to="/about"
              onClick={handleMenuItemClick}
            >
              About Us
            </NavLink>
            <hr />
            <NavLink
              className="navitem thirdheading"
              to="/faq"
              onClick={handleMenuItemClick}
            >
              FAQ
            </NavLink>
            <hr />
            <NavLink
              className="navitem thirdheading"
              to="/contact"
              onClick={handleMenuItemClick}
            >
              Contact
            </NavLink>
            <hr />
            <div className="navitem thirdheading">
              {/* to="/support" onClick={handleMenuItemClick} */}
              Support
            </div>
            <ul className="mt-2">
              <li className="subnavitem">
                <NavLink className="thirdheading" to="/services/service1">
                  Support & Safety Portal
                </NavLink>
              </li>
            </ul>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navbar;
