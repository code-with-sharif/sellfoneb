import React from "react";
import "../Styles/Home/Sellerdetailedcard.css";
const Sellerdetailedcard = () => {
  return (
    <>
      <section>
        <div className="sellercardcontainer">
          <div className="">
            <h2 className="text-center">Seller Details</h2>
            <h6
              className="py-2 rounded text-center"
              style={{ background: "#F2F2F2", width: "50%", margin: "auto" }}
            >
              Trusted Seller
            </h6>
           <div className=" " style={{  width:"90%", margin:"auto"}}>
           <hr />
            <div>
              <div className="d-flex   align-items-center gap-5 ">
                <h6 className=" ">Dealer:</h6>
                <p className="  mt-2 ">Sellfone.pk Islamabad</p>
              </div>

              <div className="d-flex   align-items-center gap-5 ">
                <h6>Address:</h6>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              <div className="d-flex   align-items-center gap-5 ">
                <h6>Timings:</h6>
                <p>09:00 AM to 09:00 PM</p>
              </div>
            </div>
            <div className="d-flex gap-3 justify-content-center mt-3">
              <button className="btn w-100">Call Now</button>
              <button className=" btn btn-white w-100">Message Now</button>
            </div>
           </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sellerdetailedcard;
