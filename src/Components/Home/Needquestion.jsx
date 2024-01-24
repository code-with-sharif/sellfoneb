import React from "react";
import "../../Styles/Needquestion.css";
import needyquestioncall from "../../Images/Home/Needquestion/needyquestioncall-icon.png";
import needquestionemail from "../../Images/Home/Needquestion/needquestionemail_icon.png";
const Needquestion = () => {
  return (
    <>
      <main
        style={{ backgroundColor: "#F4F9EC", width: "100%", height: "auto" }}
        className="pb-5"
      >
        <div className="heading text-center pt-5">
          <span className="seconderyColor">Question or</span>
          <span className="tertiaryColor"> Need Help</span>
          <span className="seconderyColor"> ?</span>
        </div>

        <p style={{ marginTop: "15px" }} className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor  incididunt ut labore et dolore magna aliqua.
        </p>

        {/* card section */}
        <div className="container">
          <div className="  row justify-content-center  p-lg-0 p-2   mt-4 gap-lg-4 gap-2">
            <div className="needycard col-lg-4 col-12 d-flex gap-lg-4 gap-2 " style={{paddingTop:"50px", paddingLeft:"30px"}}>
               
                <div className="bgcirclecallimg">
                  <div className="callimg">
                    <img
                      style={{ width: "25px", height: "25px" }}
                      className="img-fluid"
                      src={needyquestioncall}
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <h5 className="subheading">WhatsApp</h5>
                   <p>+92 310 7631879</p>
                </div>
              </div>
            <div className="needycard col-lg-4 col-12 d-flex  gap-4" style={{paddingTop:"50px", paddingLeft:"30px"}}>
               
                <div className="bgcirclecallimg">
                  <div className="callimg">
                    <img
                      style={{ width: "25px", height: "25px" }}
                      className="img-fluid"
                      src={needquestionemail}
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <h5 className="subheading"> Email Address</h5>
                   <p> loremipsum123@gmail.com</p>
                </div>
              </div>
            </div>
             
          </div>
         
      </main>
    </>
  );
};

export default Needquestion;
