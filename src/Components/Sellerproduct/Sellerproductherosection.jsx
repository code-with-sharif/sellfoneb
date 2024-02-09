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
      <section className="herobgcolor " style={{ paddingBottom: "60px" ,marginTop:"15px"}}  >
        <div className="container-fluid d-flex justify-content-between flex-lg-nowrap flex-wrap ">
          <div style={{}} className=" heroheading   ">
            <h1
              style={{ paddingBottom: "5px" }}
              className="black"
            >
              {title}
            </h1>
            <p
              style={{ maxWidth: "500px" }}
              className=" text-lg-start text-sm-center text-md-center mx-auto "
            >
              {paragraph}
            </p>
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
