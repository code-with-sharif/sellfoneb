import React from "react";
import "../../Styles/HeroSection.css";
import herosectionimg1 from "../../Images/Home/Herosection/heroSection_img1.png";
import herosectionimg2 from "../../Images/Home/Herosection/heroSection_img2.png";
import CustomButton from "../../CommonComponents/CustomButton";
import herostar from "../../Images/Home/Herosection/Group 52 (1).svg";

const Herosection = () => {
  const buttonData = [
    { id: 1, text: "Sell Phone", className: "btn" },
    { id: 2, text: "Buy Phone", className: "buttoncolor" },
  ];

  return (
    <>
      <main className="heroheader">
        <div className="container-fluid p-4">
          <div className="row gap-lg-0 gap-5">
            {/* First column */}
            <div className="col-lg-3 order-lg-1 order-2">
              <div className=" herosectionimg1" style={{ width: "350px", height: "390px" }}>
                <img className="img-fluid" src={herosectionimg1} alt="" />
              </div>
            </div>

            {/* Text part */}
            <div className="col-lg-5 order-lg-2 order-1">
              <div className=" ">
                <h1 className="heading headingStyle">
                  Sell & Buy your mobile phone safely and quickly
                </h1>
                <p className="heroparagraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="d-flex justify-content-center gap-3">
                  {buttonData.map((button) => (
                    <span key={button.id}>
                      <CustomButton
                        className={button.id === 1 ? "btn" : "buttoncolor"}
                        text={button.text}
                      />
                    </span>
                  ))}
                </div>
                {/* Other data */}
                <div className="d-flex gap-2 justify-content-center align-items-end mt-4">
                  <span className="rating">4.0</span>
                  <span>
                    <img src={herostar} alt="" />
                  </span>
                  <span className="review">200 reviews</span>
                </div>
              </div>
            </div>

            {/* Second column */}
            <div className="col-lg-3 order-lg-3 order-3">
              <div className=" herosectionimg2" style={{ width: "390px", height: "390px" }}>
                <img className="img-fluid" src={herosectionimg2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Herosection;
