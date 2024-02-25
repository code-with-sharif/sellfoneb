import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import Navbar from "./Navbar";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import CustomButton from "../../CommonComponents/CustomButton";
import log from "../../Images/Home/Header/logoimg1.svg";
import img from "../../Images/Home/Header/header_img2.svg";
import searcicon from "../../Images/Home/Header/serach_icon.svg";
import "../../Styles/Home/Header.css";

const Header = () => {
  return (
    <section className="container-fluid sticky-top bg-white py-2">
      <div className="row p-0 align-items-center" style={{border:"2px solid red"}}>
        {/* Navigation */}
        <div className="col-2 col-lg-1 col-md-1">
          <Navbar />
        </div>

        {/* Logo */}
        <div className="col-4 col-lg-2 p-0 border headerlogoImg">
          <Link to="#">
            <img className="img-fluid" src={log} alt="Logo" />
          </Link>
        </div>

        {/*input  Search */}
        <div className="col-6 col-lg-5 col-md-6 col-xl-6 col-xxl-6 d-none d-lg-block  d-xl-block d-xxl-block d-flex justify-content-center">
          <div style={{ position: "relative", width: "80%", marginLeft: "100px" }}>
            <input
              type="text"
              placeholder="Search Here.."
              className="form-control custominput ps-4"
              style={{ caretColor: "#92c43e" }}
            />
            <div style={{ position: "absolute", top: "14px", left: "10px" }}>
              <img className="serahicon" src={searcicon} alt="" />
            </div>
          </div>
        </div>

        {/* Avatar and Dropdown */}
        <div className="col-6 col-lg-3 p-0 m-0 awatarImg" style={{border:"2px solid blue"}}>
          <div className="d-flex justify-content-center align-items-center downarrowcontainer">
            <div>
              <img
                className="img-fluid rounded-1"
                src={img}
                style={{ verticalAlign: "middle", width: "50px", height: "50px" }}
                alt="avatar"
              />
            </div>
            <div className="downarrowicon">
              <IoIosArrowDown className="headerdownarrow" />
            </div>
          </div>
          <div className="dropdown-menu ">
            <ul style={{}}>
              <li className="dropdown-item "><Login /></li>
              <li className="dropdown-item "><Registration /></li>
              <hr className="mx-3" />
              <li className="dropdown-item ">
                <Link to="" className="" style={{ color: "#92C43E" }}>
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <CustomButton className="btn headerbutton" text="Post An Advert" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
