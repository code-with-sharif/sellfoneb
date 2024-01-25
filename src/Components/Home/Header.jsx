import React from "react";
import "../../Styles/Header.css";
import log from "../../Images/Home/Header/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../../Images/Home/Header/header_img1.png";
import "../../Styles/Header.css";
import CustomButton from "../../CommonComponents/CustomButton";
import searcicon from "../../Images/Home/Header/serach_icon.svg";
import caretdon from "../../Images/Home/Header/CaretDown.svg";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <>
      <main className="">
        <div className="mx-5 ">


          <div className=" d-flex align-items-center    justify-content-around flex-lg-nowrap  flex-wrap gap-3">


            <div className="    d-flex  aligne logoimg  ">
     <div className="pt-1 me-2">
           <Navbar  />
     </div>

              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className="img-fluid  "
                src={log}
                alt="Logo"
              />
            </div>
            <div className="   ">
              <form action="">
                <div style={{ position: "relative" }} className="">
                  <input
                    type="text"
                    placeholder="Search Here.."
                    className="form-control custominput   ps-4"
                    style={{ caretColor: "#92c43e" }}
                  />

                  <div
                    style={{ position: "absolute", top: "14px", left: "9px" }}
                  >
                    <img className=" serahicon" src={searcicon} alt="" />
                  </div>
                </div>
              </form>
            </div>

            {/* Button part  */}

            <div className=" d-flex  align-items-center gap-2  ">
              <div className="headerimg">
                <img className="img-fluid" src={img} alt="" />
              </div>

              {/* dropdown item */}

              <img
  className=""
  src={caretdon}
  alt=""
  data-bs-toggle="dropdown"
  style={{cursor:"pointer",  }}
/>


<ul style={{ position: "absolute", top: "30px" }} className=" mt-3 dropdown-menu dropdown-menu-start dropdown-menu-lg-end">
  <li>
    <a className="dropdown-item" href="#">
      My Account
    </a>
  </li>
  <li>
    <a className="dropdown-item mt-2" href="#">
      My Adverts
    </a>
  </li>
  <hr className="mx-3" />
  <li>
    <a className="dropdown-item" style={{ color: "#92C43E" }} href="#">
      Sign Out
    </a>
  </li>
</ul>


              <div>
                <CustomButton className="btn" text="Post An Advert" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;
