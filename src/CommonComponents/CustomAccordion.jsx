import React, { useState } from "react";
import "../Styles/Home/CustomAccordion.css";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
const accordionData = [
  {
    id: 1,
    quantity: "01.",
    question: "How long does it take to process my phone?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conse quat.",
  },
  {
    id: 2,
    quantity: "02.",
    question: "How long does it take to process my phone?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conse quat.",
  },
  {
    id: 3,
    quantity: "03.",
    question: "How long does it take to process my phone?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conse quat.",
  },
  {
    id: 4,
    quantity: "04.",
    question: "How long does it take to process my phone?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conse quat.",
  },
  {
    id: 5,
    quantity: "05.",
    question: "How long does it take to process my phone?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conse quat.",
  },
];

const CustomAccordion = () => {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const handleAccordionToggle = (accordionId) => {
    setOpenAccordionId(openAccordionId === accordionId ? null : accordionId);
  };

  return (
    <section style={{ paddingTop: "15px" }}>
      <div>
        <section id="why-us" className="why-us  w-100">
          <div className="container-fluid " data-aos="fade-up">
            <div className="row p-0  m-0" >
              <div className="d-flex flex-column justify-content-center align-items-stretch p-0 m-0">
                <div className="accordion-list p-0 ">
                  <ul className="p-0 " style={{marginRight:"px"}}>
                    {accordionData.map((item) => (
                      <li key={item.id} className="w-100 ">
                        <a
                          onClick={() => handleAccordionToggle(item.id)}
                          className={`collapse ${
                            openAccordionId === item.id ? "show" : ""
                          }`}
                        >
                          <div
                            className="d-flex gap-2 justify-content-between"
                            style={{
                            
                             
                            }}
                          >
                            <div>
                              <span style={{ color: "#A5A7A5" }}>
                                {item.quantity}
                              </span>
                              <span
                                className=" acordiontitle"
                             
                              >
                                {item.question}
                              </span>
                            </div>
                            {/* positive and nagitive signe */}
                            <div className="  acordionsigne">
                              {openAccordionId === item.id ? (
                                <RxCross2 style={{ marginBottom: "3px" , }} />
                              ) : (
                                <FaPlus style={{ marginBottom: "3px" }} />
                              )}
                            </div>
                          </div>
                        </a>
                        <div
                          className={`collapse ${
                            openAccordionId === item.id ? "show" : ""
                          }`}
                        >
                          <p className="" style={{ color: "#A5A7A5" }}>
                            {item.answer}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default CustomAccordion;
