
import React from "react";
import Sellphonesafly from "../Home/Sellphonesafly";
import Needquestion from "../Home/Needquestion";
import questionsigneimg from "../../Images/Home/Acordionsection/questionsigmeimg.png";
import CustomAccordion from "../../CommonComponents/CustomAccordion";
import AccordionSection from "../Home/AccordionSection";

import heroimg1 from "../../Images/Sellerproduct/Sellerproductherosection/sellerproductheroimg1.png";
import heroimg2 from "../../Images/Sellerproduct/Sellerproductherosection/sellerproductheroimg2.png";
import Sellerproductherosection from "../Sellerproduct/Sellerproductherosection";
 
import Howsellphone from './../Services/Howsellphone';
import SellphoneQuickly from './../Services/sellphoneQuickly';
import Choosesellphone from './../Services/Choosesellphone';
import Whysellphone from './../Services/Whysellphone';
import Interestingtip from './../Services/Interestingtip';
import Carouselindicator from './../Services/Carouselindicator';
import MultipleItems from "./Item";
import Phonesuccessstory from "../Services/Phonesuccessstory";
const Sellerproduct = () => {
  const heroProps = {
    title: "Sell Mobile Phone",
    paragraph:
      "A platform where you can sell your mobile devices within no time. Just fill the form and we will contact you within 2 hours. Instant cash Offer and pick up in 24 hours from your doorstep.",
    img: [heroimg1, heroimg2],
  };

  return (
    <>
  

    <Sellerproductherosection {...heroProps} />

<Choosesellphone />

<Whysellphone />
<Howsellphone />
{/* <SellphoneQuickly /> */}
{/* <Phonesuccessstory /> */}

{/* <Carouselindicator  /> */}
{/* <MultipleItems /> */}
{/* <Interestingtip /> */}
<AccordionSection
  customAccordion={<CustomAccordion />}
  questionsigneimg={questionsigneimg}
/>

<Sellphonesafly />
<Needquestion />
    </>
  );
};

export default Sellerproduct;
