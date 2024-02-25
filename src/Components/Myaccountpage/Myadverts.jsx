import React from "react";
import Profilecard from "./Profilecard";
import "../../Styles/Myaccountpage/Myadverts.css";
import voiceicon from '../../Images/Myaccountpage/voice-icon.png'
const Myadverts = () => {
  return (
    <>
      <section
        className="advertscontainer m-lg-0 m-2"
       >
        <div className="d-lg-block d-none">
          <Profilecard />
        </div>
        <div className="myadertscard">
          <h1>My Adverts</h1>
          <hr />
          <div className="d-flex  gap-2">
            {/* <button className="btn activebtn">Active (0)</button>
            <button
              className="inactivebtn"
              style={{ background: "#F2F2F2", color: "#000" }}
            >
              Inactive (0)
            </button> */}
            <h6 className="activebtn py-2 text-center rounded">   Active (0)</h6>
            <h6 className="inactivebtn py-2 text-center rounded" style={{   background:"#F2F2F2"}}>   Inactive (0)</h6>
          </div>

          <div className=" mt-3 mb-2 align-self-center " >
            <img className="img-fluid voiceimg " src={voiceicon} alt="" />
          </div>
          <p className=" advertinfo text-center">It seems like we couldn’t find what you are looking for.</p>
        </div>
      </section>
    </>
  );
};

export default Myadverts;
