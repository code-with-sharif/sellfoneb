import React from "react";
import Faqsherosection from "./Faqsherosection";
import AccordionSection from "../Home/AccordionSection";
import CustomAccordion from "../../CommonComponents/CustomAccordion";
import Sellphonesafly from "../Home/Sellphonesafly";
import Needquestion from "../Home/Needquestion";
import questionsigneimg from "../../Images/Home/Acordionsection/questionsigmeimg.png";

const Faq = () => {
  const  buttonLabel="More FAQs"
  return (
    <>
      <Faqsherosection />
      <AccordionSection
        customAccordion={<CustomAccordion />}
        buttonLabel={buttonLabel}
      />

      <Sellphonesafly />
      <Needquestion />
    </>
  );
};

export default Faq;
