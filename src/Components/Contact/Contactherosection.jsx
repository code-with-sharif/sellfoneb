import React, { useState, useEffect } from "react";
import "../../Styles/Contact/Contactherosection.css";
import Contactherosectionimg1 from "../../Images/Contact/Contactherosection/Contactherosectionimg1.png";
import Contactherosectionimg2 from "../../Images/Contact/Contactherosection/contactheroimg2.png";
import { FaWandMagicSparkles } from "react-icons/fa6";

const Contactherosection = () => {
 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageSrc, setImageSrc] = useState(
    window.innerWidth >= 576
      ? Contactherosectionimg1
      : Contactherosectionimg2
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setImageSrc(
        window.innerWidth >= 991
          ? Contactherosectionimg1
          : Contactherosectionimg2
      );
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      <section className="contactherobgcolor " style={{}}>
        <div className="container-fluid d-flex justify-content-between flex-lg-nowrap flex-wrap ">
          <div style={{}} className=" contactheroheading   ">
            <h1
              style={{ paddingBottom: "5px" }}
              className="black "
            >
              Get in Touch with us
            </h1>
            <p
              style={{ maxWidth: "500px" }}
              className=" text-start text-sm-center text-md-center mx-auto "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="contactheroimg1">
            <img
              className="img-fluid"
              style={{
                maxWidth: "100%",
                height: "100%",
                objectFit: "cover",
                backgroundSize: "cover",
              }}
              src={imageSrc}


              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactherosection;
