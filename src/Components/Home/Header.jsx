import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import Navbar from "./Navbar";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import CustomButton from "../../CommonComponents/CustomButton";
import log from "../../Images/Home/Header/logoimg1.svg";
import img from "../../Images/Home/Header/header_img2.svg";
import searcicon from "../../Images/Home/Header/serach_icon.svg";
import { CiSearch } from "react-icons/ci";
import "../../Styles/Home/Header.css";

const Header = () => {
  const options = [
    "iPhone 14",
    "iPhone 12",
    "Samsung Galaxy Z Flip 5"
  ];
const navigate=useNavigate();
  const [searchshow, setSearchShow] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("");
  const [popupLogin, setPopupLogin] = useState(true);
  const [popupRegistration, setPopupRegistration] = useState(false);

  const handleRedirectToPopupRegistration = () => {
    setPopupLogin(false);
    setPopupRegistration(true);
  };

  const handleRedirectToPopupLogin = () => {
    setPopupRegistration(false);
    setPopupLogin(true);
  };

  const handleSearch = () => {
    setSearchShow(!searchshow);
  };

  const toggleModel = () => {
    setIsActive(!isActive);
  };

  const handleSelect = (item) => {
    setSelected(item);
    setIsActive(false);
  };

  return (
    <section className="container-fluid sticky-top bg-white py-">
      <div className="row py-2 align-items-center" style={{  }}>
        {/* Navigation */}
        <div className="col-3 col-lg-1 m-0 manue-icon" style={{  }}>
          <Navbar />
        </div>

        {/* Logo */}
        <div className="col-4 col-lg-2 p-0 m-0  headerlogoImg">
  <Link to="/" className="" onClick={() => window.scrollTo(0, 0)}>
    <img className="img-fluid" style={{ maxWidth: "100%", height: "100%" }} src={log} alt="Logo" />
  </Link>
</div>

        {/* Input Search */}
        <div className="col-6 col-lg-5 col-md-6 col-xl-6 col-xxl-6 d-none d-lg-block d-xl-block d-xxl-block d-flex justify-content-center">
          <div style={{ position: "relative", width: "80%", marginLeft: "100px" }}>
            <input
              type="text"
              placeholder="Search Here.."
              className="form-control custominput ps-4"
              style={{ caretColor: "#92c43e", border: "1px solid #92C43E" }}
            />
            <div style={{ position: "absolute", top: "14px", left: "10px" }}>
              <img className="serahicon" src={searcicon} alt="" />
            </div>
          </div>
        </div>

        {/* Avatar and Dropdown */}
        <div className="col-5 col-lg-3 awatarImg" >
          <div
            style={{ background: "#F4F9EC", width: "50px", height: "50px", borderRadius: "7px", marginRight: "10px" }}
            className="d-lg-none d-block text-center d-flex align-items-center justify-content-center"
            onClick={handleSearch}
          >
            <CiSearch className="" style={{ fontSize: "30px", color: "#92C43E" }} />
          </div>

          <div className="d-flex justify-content-center align-items-center downarrowcontainer">
            <div>
              <img
                className="img-fluid rounded-1"
                src={img}
                style={{ width: "50px", height: "50px" }}
                alt="avatar"
              />
            </div>
            <div className="downarrowicon">
              <IoIosArrowDown className="headerdownarrow" />
            </div>
          </div>

          <div className="dropdown-menu">
            <ul style={{}}>
              {popupLogin && (
                <li className="dropdown-item"
                //  onClick={handleRedirectToPopupRegistration}
                ><Login /></li>
              )}

              <li className="dropdown-item" onClick={handleRedirectToPopupLogin}><Registration /></li>

              <hr className="mx-3" />
              <li className="dropdown-item">
                <Link to="" style={{ color: "#92C43E" }}>Sign Out</Link>
              </li>
            </ul>
          </div>

          <div>
            <CustomButton className="btn headerbutton" text="Post An Advert" />
          </div>
        </div>
      </div>

      {searchshow && (
        <div className="my-2 col-12 d-lg-none d-flex justify-content-center" onClick={toggleModel}>
          <div style={{ position: "relative", width: "100%" }}>
            <input
              type="text"
              placeholder="Search Here.."
              className="form-control custominput ps-4"
              style={{ caretColor: "#92c43e", border: "1px solid #92C43E" }}
              onChange={toggleModel}
              value= {selected}

            />

            <div style={{ position: "absolute", top: "14px", left: "10px" }}>
              <img className="img-fluid" src={searcicon} alt="" />
            </div>
          </div>
        </div>
      )}

      {isActive && (
        <div className="my-2  d-lg-none" style={{background:"#fff", border:"2px solid #E8E8E8" ,borderRadius:"7px"}}>
        <div style={{ marginLeft: "10px", fontWeight: "bold" }} className="mt-2">Popular Searches</div>

          {options.map((item) => (
            
            <div
              key={item}
              className="py-1"
              onClick={() => handleSelect(item)}
            >
              <span>
              <img className="img-fluid" src={searcicon} alt="" style={{marginLeft:"10px",marginRight:"10px"}} /></span>
              {item} 
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Header;
