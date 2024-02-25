import React, { useState } from "react";
import "../../Styles/SecondpartSelldevice/SecondpartSelldeviceherosection.css";
import Iphonecard from "../../CommonComponents/Iphonecard";
import Recomendmobilecard from "../../CommonComponents/Recomendmobilecard";
import productcardimg from "../../Images/Home/RecomendedphoneSection/Rectangle 63 (1).png";
import Selectedbrandcard from "../../CommonComponents/Selectedbrandcard";

const SecondpartSelldeviceherosection = () => {
  const [phonePrice, setPhonePrice] = useState("PKR 0.00");

  const handlePriceChange = (newPrice) => {
    setPhonePrice(newPrice);
  };

  const recomendmobile = [
    {
      imgSrc: productcardimg,
      price: phonePrice,
      buttonLabel: "Sell My Phone",
    },
  ];

  const selectedBarand = {
    brand: "Apple",
    model: "iPhone X",
  };

  return (
    <section className="iphonehero">
      <div className="container ">
        <div className="row gap-lg-0 gap-3" style={{}}>
          <div className="col-lg-7 p-0 m-0 order-1" style={{}}>
            <h1 className="text-lg-start text-center">iPhone 13</h1>
            <p className="px-2 text-lg-start text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div>
              <Iphonecard
                labels={{
                  conditionTitle: "Condition",
                  storageTitle: "Storage Capacity",
                  newPhoneLabel: "New (Device in sealed packaging)",
                  usedPhoneLabel: "Used (Device used out of the package)",
                  storage128GBLabel: "128GB",
                  storage256GBLabel: "256GB",
                  storage512GBLabel: "512GB",
                }}
                showHorizontalLine={true}
                onPriceChange={handlePriceChange} // Pass the callback function
              />
            </div>
          </div>
          {/* Card section */}
          <div
            className="col-lg-5 d-flex flex-column gap-4 justify-content-end order-2"
            style={{ paddingRight: "0px" }}
          >
            {recomendmobile?.map((data, index) => (
              <div key={index}>
                <Recomendmobilecard
                  imgSrc={data.imgSrc}
                  price={data.price}
                  buttonLabel={data.buttonLabel}
                  buttonWidth={true}
                  priceSize={true}
                />
              </div>
            ))}
            {/* Second card */}
            <div>
              <Selectedbrandcard selectedBarand={selectedBarand} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondpartSelldeviceherosection;
