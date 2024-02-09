import React from "react";
import '../../Styles/SecondpartSelldevice/SecondpartSelldeviceherosection.css'
import Iphonecard from "../../CommonComponents/Iphonecard";
import productcardimg from "../../Images/Home/RecomendedphoneSection/Rectangle 63 (1).png";
import Recomendmobilecard from "../../CommonComponents/Recomendmobilecard";

const SecondpartSelldeviceherosection = () => {
  const recomendmobile = [
    {
      imgSrc: productcardimg,
      title: "PKR 0.00",
      // price: "PKR 0.00",
      buttonLabel: "Sale My Phone",
    },
  ];

  return (
    <>
      <section>
        <div className="container iphonehero">
          <div className="row">
            <div className="col-lg-7 p-0 m-0 border">
              <h1>iPhone 13</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore mag na aliqua.
              </p>
              <Iphonecard />
            </div>
            <div className="col-lg-5   d-flex justify-content-end " style={{ border: "2px solid red" }}>
              {recomendmobile?.map((data, index) => {
                return (
                  <div key={index}>
                    <Recomendmobilecard
                      imgSrc={data.imgSrc}
                      title={data.title}
                      price={data.price}
                      buttonLabel={data.buttonLabel}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondpartSelldeviceherosection;
