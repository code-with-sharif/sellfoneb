import React from 'react'
import '../../Styles/FAQS/Faqsherosection.css'
import faqsheroimg1 from "../../Images/FAQS/faqsheroimg1.png";

const Faqsherosection = () => {
  return (
   <>
    <section className="faqherobgcolor">
        <div className="container-fluid d-flex justify-content-between flex-lg-nowrap flex-wrap ">
          <div
            style={{  }}
            className=" faqsheroheading   ">
            <h1 style={{ paddingBottom: "5px" }} className="black heading">
            Welcome to Sellfone.pk FAQs
            </h1>
            <p style={{ maxWidth: "500px" }} className=" text-start text-sm-center text-md-center mx-auto ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="faqsheroimg1">
            {" "}
            <img
              className="img-fluid   "
              style={{ maxWidth: "100%", height:"100%", objectFit: "cover" ,backgroundSize:"cover"}}
              src={faqsheroimg1}
              alt=""
            />
          </div>
        </div>
      </section>
   </>
  )
}

export default Faqsherosection