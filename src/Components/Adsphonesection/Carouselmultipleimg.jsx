import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Varientpic from "./Varientpic";
import '../../Styles/Adsphonesection/AsNavFor.css'
function AsNavFor() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <div className="slider-container">
      <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}
      style={{ position: "relative ",zIndex:"9" }}
      >
        <div style={{ position: "relative",zIndex:"9"  }}>
          <h3><Varientpic  /></h3>
        </div>
        <div  style={{ position: "relative",zIndex:"9"}}>
        <h3><Varientpic /></h3>

        </div>
        <div  style={{ position: "relative",zIndex:"9" }}>
        <h3><Varientpic /></h3>

        </div>
        <div  style={{ position: "relative" ,zIndex:"9"}}>
        <h3><Varientpic /></h3>

        </div>
        <div  style={{ position: "relative",zIndex:"9" }}>
        <h3><Varientpic /></h3>

        </div>
        <div  style={{ position: "relative",zIndex:"9" }}>
        <h3><Varientpic /></h3>

        </div>
        <div  style={{ position: "relative" ,zIndex:"9" }}>
        <h3><Varientpic /></h3>

        </div>
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={slider => (sliderRef2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        arrows={false}
        style={{ position: "relative" }}
     >
       <div   >
        <h3 ><Varientpic /></h3>
        </div>
       <div>
        <h3><Varientpic /></h3>
        </div>
       <div>
        <h3><Varientpic /></h3>
        </div>
       <div>
        <h3><Varientpic /></h3>
        </div>
       <div>
        <h3><Varientpic /></h3>
        </div>
       <div>
        <h3><Varientpic /></h3>
        </div>
     
      
    
    
      </Slider>
    


    </div>
  );
}

export default AsNavFor;



