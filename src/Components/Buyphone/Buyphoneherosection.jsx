import React, { useEffect, useState } from 'react';
import buyphoneheroimg1 from '../../Images/Buymobilephone/Buyphoneherosection/Buyphoneherosectionimg1.png';
import Buyphoneherosectionimg2 from '../../Images/Buymobilephone/Buyphoneherosection/Buyphoneherosectionimg2.png';
import '../../Styles/Buyphone/Buyphoneherosection.css';

const Buyphoneherosection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageSrc, setImageSrc] = useState(
    window.innerWidth >= 576 ? buyphoneheroimg1 : Buyphoneherosectionimg2
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setImageSrc(
        window.innerWidth >= 991 ? buyphoneheroimg1 : Buyphoneherosectionimg2
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Buyphonedata = [{
    title: "Buy Mobile Phone",
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`,
    img: [buyphoneheroimg1, Buyphoneherosectionimg2],
  }];

  return (
    <>
      {Buyphonedata.map((data, index) => (
        <section key={index} className="buyphonebgcolor">
          <div className="container-fluid d-lg-flex justify-content-lg-between flex-lg-nowrap flex-wrap">
            <div className="d-flex flex-column justify-content-center align-content-center">
              <div className="buyphoneheading">
                <h1 style={{ paddingBottom: "5px" }} className="text-lg-start text-center">
                  {data.title}
                </h1>
                <p style={{ maxWidth: "500px" }} className="text-lg-start text-center mx-auto">
                  {data.paragraph}
                </p>
              </div>
            </div>
            <div className="buyphoneheroimg1">
              <img
                className="img-fluid p-lg-0 p-2"
                src={windowWidth >= 991 ? data.img[0] : data.img[1]}
                alt=""
              />
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Buyphoneherosection;
