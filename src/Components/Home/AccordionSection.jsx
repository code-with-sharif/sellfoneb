import React from "react";
import "../../Styles/AccordionSection.css";
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
        <div className="container acordionHeadear ">
          <div className=" acordionText order-lg-1 order-2 ">
            <h4 className="heading">
              <span className="seconderyColor">Frequently Asked </span>
              <span className="tertiaryColor">Questions </span>
            </h4>

            <p
              className="p-lg-0 px-5 mx-auto"
              style={{ marginTop: "15px", maxWidth: "500px" }}
            >
              At Sellfone.pk, our top priority is the safety and welfare of all
              mobile phones rehomed through our site.
            </p>
          </div>

          {/* accordion section  */}
          <div className=" accordionsection order-3  ">
            <div style={{ width: "" }} className="   ">
              <CustomAccordion />
            </div>
          </div>

          <div className="  acordionimgSection order-lg-2 order-1  " style={{  }}>
           
              <img
                className="img-fluid "
                style={{ objectFit: "cover", maxWidth: "100%" }}
                src={questionsigneimg}
                alt=""
              />
           
          </div>
        </div>
      </section>
    </>
  );
};

export default AccordionSection;
