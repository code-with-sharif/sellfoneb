import React from "react";
import "../../Styles/About/AboutHerosection.css";
import aboutheroimg1 from "../../Images/About/AboutHerosection/aboutheroimg1.png";

const AboutHerosection = ({ heading, paragraph, image }) => {
  return (
    <>
      <section className="aboutherobgcolor">
        <div className="container-fluid d-flex justify-content-between flex-lg-nowrap flex-wrap ">
          <div
            style={{}}
            className=" aboutheroheading   "
          >
            <h1 style={{ paddingBottom: "5px" }} className="black">
              {heading}
            </h1>
            <p style={{ maxWidth: "500px" }} className=" text-start text-sm-center text-md-center mx-auto ">
              {paragraph}
            </p>
          </div>

          <div className="aboutheroimg1 pt-lg-4">
            {" "}
            <img
              className="img-fluid   "
              style={{ maxWidth: "100%", height: "100%", objectFit: "cover", backgroundSize: "cover" }}
              src={image}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHerosection;
