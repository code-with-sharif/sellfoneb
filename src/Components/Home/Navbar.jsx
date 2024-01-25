// Navbar.js
import React, { useState } from 'react';
import '../../Styles/Navbar.css';
import manueIcon from '../../Images/Home/Header/Manue_icon.png';
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showSubItems, setShowSubItems] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
    // Hide sub-items when closing the menu
    setShowSubItems(false);
  };

  const toggleSubItems = () => {
    setShowSubItems(!showSubItems);
  };

  return (
    <>
      <section className={`navbar-wrapper ${showNavbar ? 'active' : ''}`}>
        <div style={{ position: "relative" }} onClick={toggleNavbar}>
          {showNavbar ? (
            <RxCross2
              style={{
                width: "30px",
                height: "30px",
                position: 'absolute',
                left: '190px',
                top: '10px',
                color: '',
                zIndex: 100,
                cursor: "pointer",
                transition: '1s ease-in-out'
                }}
            />
          ) : (
            <img
              className=''
              style={{ width: "50px", height: "50px", cursor: "pointer" }}
              src={manueIcon}
              alt="Menu"
            />
          )}
        </div>
        <nav style={{ left: showNavbar ? 0 : '-100%'  ,
        
                           }}>
          <a href="#home">Home</a>
          <hr />
          <a href="#about">Process</a>
          <hr />

          <a href="#services" onClick={toggleSubItems}>
            Services
            {showSubItems && (
              {/* <ul>
                <li><a href="#sell-mobile">Sell Mobile</a></li>
                <li><a href="#buy-mobile">Buy Mobile</a></li>
              </ul> */}
            )}
          </a>
          <hr />

          <a href="#about">About Us</a>
          <hr />

          <a href="#fAQ">FAQ</a>
          <hr />

          <a href="#contact">Contact</a>
          <hr />

          <a href="#support">Support</a>
        </nav>  
      </section>
    </>
  );
};

export default Navbar;
