import React, { useState } from "react";
import Slider from "react-slick";
import Phonesuccessstory from "../Services/Phonesuccessstory";

export default function MultipleItems() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  
    cssEase: "linear",
    arrows: false,
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => {
      console.log("Index:", i, "Current Slide:", currentSlide);
      return (
        <div
          style={{
            width: "20px",
            height: "10px",
            background: i === currentSlide ? "#92C43E" : "white",
            marginTop: "30px",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        ></div>
          );
        },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    afterChange: current => {
      setCurrentSlide(current);
    }
  };

  return (
    <section style={{ background: "#F4F9EC",}}>
      <div style={{ width: "90%", margin: "auto" , paddingTop: '60px', paddingBottom: "90px" }}>
      <div className="text-center pb-4 " >
          <h1 className="">
          
            Sell Mobile Phones
            <span className="green px-1"> Success Stories</span>
          </h1>
          <p className="p-lg-0 px-3  mx-auto" style={{marginTop: "15px", marginBottom:"", maxWidth: "500px"}}>
       AtLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
       incididunt ut labore et dolore magna aliqua.
     </p>


        </div>
        <Slider {...settings}>
          <div>
            <Phonesuccessstory />
          </div>
          <div>
            <Phonesuccessstory />
          </div>
          <div>
            <Phonesuccessstory />
          </div>
          {/* <div>
            <Phonesuccessstory />
          </div>
          <div>
            <Phonesuccessstory />
          </div>
          <div>
            <Phonesuccessstory />
          </div>
          <div>
            <Phonesuccessstory />
          </div> */}
        </Slider>
      </div>
    </section>
  );
}
