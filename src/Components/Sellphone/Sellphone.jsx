import React from "react";
import Selldevice from "./Selldevice";
import Sellphonesafly from "../Home/Sellphonesafly";
import Needquestion from "../Home/Needquestion";
import Brands from "./Brands";
import TestBrand from "./testBrands";

const Sellphone = () => {
  return (
    <>
      <Selldevice />
      <Brands />
      <Sellphonesafly />
      <Needquestion />
    </>
  );
};

export default Sellphone;
