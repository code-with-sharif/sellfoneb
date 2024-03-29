// Sellerproductherosection.js

import React, { useEffect, useState } from "react";
import "../../Styles/SellerProduct/Sellerproductherosection.css";

const Sellerproductherosection = ({ title, paragraph, img }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageSrc, setImageSrc] = useState(
    window.innerWidth >= 576 ? img[0] : img[1]
  );
  

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setImageSrc(
        window.innerWidth >= 991 ? img[0] :  img[1]
      );
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [img]);

  return (
    <>
      <section className="herobgcolor " style={{  }}  >
        <div className="container-fluid d-flex justify-content-lg-between flex-lg-nowrap flex-wrap ">
        <div className="d-flex justify-content-center align-content-center">
        <div style={{}} className=" heroheading   ">
            <div 
              style={{ paddingBottom: "5px" }}
              className="black sellphoneheading"
            >
              {title}
            </div>
            <p
              style={{ maxWidth: "500px" }}
              className=" text-lg-start text-sm-center text-md-center mx-auto "
            >
              {paragraph}
            </p>
          </div>

        </div>
          <div className="heroimg1">
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

export default Sellerproductherosection;
