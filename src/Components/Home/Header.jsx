import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import log from "../../Images/Home/Header/logoimg1.svg";
import img from "../../Images/Home/Header/header_img2.svg";
import { IoIosArrowDown } from "react-icons/io";
import CustomButton from "../../CommonComponents/CustomButton";
import searcicon from "../../Images/Home/Header/serach_icon.svg";
import caretdon from "../../Images/Home/Header/CaretDown.svg";
import Navbar from "./Navbar";
import "../../Styles/Home/Header.css";
import { Link } from "react-router-dom";
import Login from "../Login/Login";

import Ragistration from "../Registration/Registration";


const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState (false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <section style={{zIndex:999 , border:"2px solid red",}} className="container-fluid   sticky-top bg-white  py-1 ">
      <div className="">
        <div className="row p-0 align-items-center   ">
          <div className="col-2 col-lg-1 col-md-1      "> 
           <Navbar  /> 
         
          </div>
        

         <div className="col-4 col-lg-2   p-0 headerlogoImg  ">
             <Link to="#"><img
              style={{
              maxWidth:"100%",
              height:"100%"
              }}
              className="img-fluid  "
              src={log}
              alt="Logo"
            /> </Link>
          </div>
          
 {/* inputfield */}
          <div  className="col-6 col-lg-6 col-md-6 col-xl-6 col-xxl-6 d-none d-lg-block  d-xl-block d-xxl-block d-flex justify-content-center  ">
          <div style={{ position: "relative", width:'80%', marginLeft:'100px' }}>
                <input
                  type="text"
                  placeholder="Search Here.."
                  className="form-control custominput ps-4"
                  style={{ caretColor: "#92c43e"}}
                />

                <div style={{ position: "absolute", top: "14px", left: "10px" }}>
                  <img className=" serahicon" src={searcicon} alt="" />
                </div> 
            </div>
          </div>
 

          <div className="col-4 col-lg-3  p-0 gap-3 d-flex justify-content-center align-items-center   awatarImg ">
             <div className="">
              <img className="img-fluid avatar rounded-1" src={img} 
              style={{
              verticalAlign: "middle", width: "50px",
              height: "50px",
             
              }} 
              alt="avatar" />
            </div> 

            

    <div className="dropdownitem p-0" style={{ position: "relative" }} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
  <IoIosArrowDown
    className={isDropdownOpen ? "rotate-90" : ""}
    data-bs-toggle="dropdown p-0"
    style={{cursor:"pointer", fontSize:"20px", border:"2px solid red"}}
  />
  <ul
    style={{ position: "absolute", top: "15px", left: "-220px", display: isDropdownOpen ? "block" : "none" }}
    className="mt-3 dropdown-menu dropdown-menu-start dropdown-menu-lg-end"
  >
    <li>
      {/* <Link className="dropdown-item" to="/login"> */}
      <Login />
      {/* </Link> */}
    </li>
    <li>
      {/* <a className="dropdown-item mt-2" href="#"> */}
      <Ragistration />
      {/* </a> */}
    </li>
    <hr className="mx-3" />
    <li>
      <a className="dropdown-item" style={{ color: "#92C43E" }} href="#">
        Sign Out
      </a>
    </li>
  </ul>
</div>


            <div className=" ">
              <CustomButton className="btn headerbutton" text="Post An Advert" />
            </div> 
          </div>
         </div>
        </div>
   
      </section>
    </>
  );
};

export default Header;
