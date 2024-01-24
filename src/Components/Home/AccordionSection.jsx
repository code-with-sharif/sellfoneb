import React from "react";
import '../../Styles/AccordionSection.css'
import CustomAccordion from "../../CommonComponents/CustomAccordion";
import questionsigneimg from "../../Images/Home/Acordionsection/questionsigmeimg.png";
const AccordionSection = () => {
  return (
    <>
      <section
        style={{
          backgroundColor: "#F4F9EC",
          paddingTop: "60px",
          paddingBottom: "60px",
        }}
      >
        <div className="container forparent ">
          <div className=" headingpart order-lg-1 order-2 border  border-1 border-danger">
            <h4 className="heading">
              <span className="seconderyColor">Frequently Asked </span>
              <span className="tertiaryColor">Questions </span>
            </h4>

            <p className="p-lg-0 px-5" style={{ marginTop: "15px" }}>
              At Sellfone.pk, our top priority is the safety and welfare of all
              mobile phones <br /> rehomed through our site.
            </p>
          </div>

          {/* accordion section  */}


            <div className="  qsigneimgpart order-lg-2 order-1 border  border-1 border-danger ">
              <div style={{ width: "280px", height: " " }}>
                <img
                  className="img-fluid "
                  style={{ objectFit: "cover", maxWidth: "100%" }}
                  src={questionsigneimg}
                  alt=""
                />
              </div>
            </div>

            
          <div className=" order-3 border  border-1 border-danger ">
            <div
              style={{ width: "" }}
              className="   border  border-1 border-danger"
            >
              <CustomAccordion />
            </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default AccordionSection;
