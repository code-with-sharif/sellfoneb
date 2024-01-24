import React from "react";
import "../Styles/CustomAccordion.css";

const accordionData = [
  {
    id: 1,
    quantity: "01.",
    question: "How long does it take to process my phone?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conse quat.",
  },
  {
    id: 2,
    quantity: "02.",
    question: "How long does it take to process my phone?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conse quat.",
  },
  {
    id: 3,
    quantity: "03.",
    question: "How long does it take to process my phone?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conse quat.",
  },
  {
    id: 4,
    quantity: "04.",
    question: "How long does it take to process my phone?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conse quat.",
  },
  {
    id: 5,
    quantity: "05.",
    question: "How long does it take to process my phone?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conse quat.",
  },
];

const CustomAccordion = () => {
  return (
    <section style={{ paddingTop:"20px" }}>
      <div>
        <section id="why-us" className="why-us section-bg">
          <div className="container-fluid" data-aos="fade-up">
            <div className="row accordionwidth">
              <div className=" d-flex flex-column justify-content-center align-items-stretch ">
                <div className="accordion-list">
                  <ul>
                    {accordionData.map((item, index) => (
                      <li key={index}>
                        <a
                          data-bs-toggle="collapse"
                          className="collapse"
                          data-bs-target={`#accordion-list-${item.id}`}
                        >
                          <span style={{ color: "#A5A7A5" }} className="">{item.quantity}</span><span className="thirdheading " style={{color:" "}}> {item.question}</span>
                        </a>
                        <div
                          id={`accordion-list-${item.id}`}
                          className="collapse "
                          data-bs-parent=".accordion-list"
                        >
                          <p className="" style={{color:"#A5A7A5"}}>{item.answer}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                className="col-lg-5 a img"
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                &nbsp;
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default CustomAccordion;
