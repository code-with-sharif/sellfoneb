import React from "react";
import Sellphonesafly from "../Home/Sellphonesafly";
import Needquestion from "../Home/Needquestion";
import Similaradscard from "../../CommonComponents/Similaradscard";
import Mobilefeaturescard from "../../CommonComponents/Mobilefeaturescard";
import Mobiledetailes from "../../CommonComponents/Mobiledetailes";
import Incomecard from "../../CommonComponents/Incomecard";
import Sellerdetailedcard from "../../CommonComponents/Sellerdetailedcard";
import Sellercomments from "../../CommonComponents/Sellercomments";
import Notificationforadds from "../../CommonComponents/Notificationforadds";
import Adsphonehero from "./Adsphonehero";

const Adsphonesection = () => {
  return (
    <>
      <Adsphonehero />
      <Similaradscard />
      <Sellphonesafly />
      <Needquestion />
    </>
  );
};

export default Adsphonesection;
