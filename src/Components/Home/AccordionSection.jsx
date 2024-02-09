import React from "react";
import "../../Styles/Home/AccordionSection.css";
import CustomAccordion from "../../CommonComponents/CustomAccordion";
import questionsigneimg from "../../Images/Home/Acordionsection/questionsigmeimg.png";

const AccordionSection = ({ customAccordion, questionsigneimg, buttonLabel }) => {
  return (
    <>
      <section
        style={{
          backgroundColor: buttonLabel ? "white" : "#F4F9EC",
          paddingTop: "60px",
          paddingBottom: "60px",
        }}
      >
        <div className="container acordionHeadear ">
          <div
            className={
              buttonLabel
                ? "faqsacordionText  order-1"
                : "acordionText  order-lg-1 order-2"
            }
          >
            <h1 className="">
               Frequently Asked  
              <span className="green">Questions </span>
            </h1>

            <p
              className="p-lg-0 px-5 mx-auto"
              style={{ marginTop: "15px", maxWidth: "500px" }}
            >
              At Sellfone.pk, our top priority is the safety and welfare of all
              mobile phones rehomed through our site.
            </p>
          </div>

          {/* accordion section  */}
          <div
            className={
              buttonLabel
                ? "faqaccordionsection order-3"
                : "accordionsection order-3"
            }
          >
            <div style={{ width: "100%" }} className="">
              {customAccordion}
            </div>
          </div>

          <div className="  acordionimgSection order-lg-2 order-1  " style={{}}>
            <img
              className="img-fluid "
              style={{ objectFit: "cover", maxWidth: "100%" ,height:"100%"}}
              src={questionsigneimg}
              alt=""
            />
          </div>
        </div>
        {buttonLabel && (
          <div className="  mt-3 d-flex   justify-content-center    ">
            <button className="btn faqsbutton ">{buttonLabel}</button>
          </div>
        )}
      </section>
    </>
  );
};

export default AccordionSection;
