import React from "react";
import "../../Styles/Adsphonesection/Adsphonehero.css";
import Incomecard from "../../CommonComponents/Incomecard";
import Sellerdetailedcard from "../../CommonComponents/Sellerdetailedcard";
import Sellercomments from "../../CommonComponents/Sellercomments";
import Notificationforadds from "../../CommonComponents/Notificationforadds";
import Mobiledetailes from "../../CommonComponents/Mobiledetailes";
import Mobilefeaturescard from "../../CommonComponents/Mobilefeaturescard";
import Phonepicforsale from "./Phonepicforsale";

const Adsphonehero = () => {
  return (
    <>
      <section className="container-fluid" style={{ width: "90%" }}>
        <div className="row ">
          <div className="col-lg-6 col-12 p-0">
            <Phonepicforsale />
            <Mobiledetailes />
            <Mobilefeaturescard />
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5 col-12 p-0">
            <Incomecard />
            <Sellerdetailedcard />
            <Sellercomments />
            <Notificationforadds />
          </div>
        </div>
      </section>
    </>
  );
};

export default Adsphonehero;
