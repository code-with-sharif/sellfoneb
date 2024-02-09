import React from "react";
import "../../Styles/Home/Needquestion.css";
import needyquestioncall from "../../Images/Home/Needquestion/needyquestioncall-icon.png";
import needquestionemail from "../../Images/Home/Needquestion/needquestionemail_icon.png";
const Needquestion = () => {
  return (
    <>
      <main
        style={{ backgroundColor: "#F4F9EC", width: "100%", height: "auto" }}
        className="pb-5"
      >
        <h1 className=" text-center pt-5">
           Question or 
          <span className="green"> Need Help</span>
            ? 
        </h1>

        <p
          style={{ marginTop: "15px", maxWidth: "500px" }}
          className="text-center mx-auto p-lg-0 px-3"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* card section */}
        <div className="container">
          <div className="  row justify-content-center  p-lg-0 p-2     gap-lg-4 gap-2">
            <div
              className="needycard col-lg-4 col-4 emailIconcontainer   "
              style={{ }}
            >
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
              <div className="   p-0 ">
                {" "}
               
                <h3 className=" email-text ">WhatsApp</h3>
                <p className="email-text">+92 310 7631879</p>
              </div>
            </div>

            {/* emailIcon */}
            <div
  className="needycard col-lg-4 col-4 emailIconcontainer"
  style={{}}
>
  <div className="bgcirclecallimg">
    <div className="callimg">
      <img
        style={{ width: "25px",   }}
        className="img-fluid"
        src={needquestionemail}
        alt=""
      />
    </div>
  </div>
  <div className="  p-0">
    {" "}
    <h3 className="">Email Address</h3>
    <p className="email-text">loremipsum123@gmail.com</p>
  </div>
</div>

           
          </div>
        </div>
      </main>
    </>
  );
};

export default Needquestion;
