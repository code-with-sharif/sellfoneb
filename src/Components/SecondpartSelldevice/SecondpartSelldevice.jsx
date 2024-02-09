import React from "react";
import Sellerproductherosection from "../Sellerproduct/Sellerproductherosection";
import heroimg1 from "../../Images/Sellerproduct/Sellerproductherosection/sellerproductheroimg1.png";
import heroimg2 from "../../Images/Sellerproduct/Sellerproductherosection/sellerproductheroimg2.png";
import Uploadphoto from "./Uploadphoto";
import Sellerdetail from "./Sellerdetail";
import Sellphonesafly from "../Home/Sellphonesafly";
import Needquestion from "../Home/Needquestion";
import SecondpartSelldeviceherosection from "./SecondpartSelldeviceherosection";
const SecondpartSelldevice = () => {
 
  return (
    <>
    <SecondpartSelldeviceherosection />
      <Uploadphoto />
      <Sellerdetail />
      <Sellphonesafly />
      <Needquestion />

    </>
  );
};
 
export default SecondpartSelldevice;
