import React from "react";
import Iphonecard from "./../../CommonComponents/Iphonecard";
import Recomendmobilecard from "../../CommonComponents/Recomendmobilecard";
import Selectedbrandcard from "../../CommonComponents/Selectedbrandcard";
import productcardimg from "../../Images/Home/RecomendedphoneSection/Rectangle 63 (1).png";

const Editphonepriceherosection = () => {
  const recomendmobile = [
    {
      imgSrc: productcardimg,
      price: "PKR 0.00",
      buttonLabel: "Sell My Phone",
    },
  ];

  const labels = {
    conditionTitle: "Condition",
    asGoodAsNewLabel:"As New (The device shows no signs of wear)",
    storageTitle: "Storage Capacity",
    phoneTitle:"Condition of your iPhone 13?",
    batteryTitle:"Does your battery have a maximum capacity of 85%?",
    newPhoneLabel: "New (The device shows no signs of wear)",
    usedPhoneLabel: "Used (The device has some minimal signs of use)",
    lightlyUsedLabel: "Lightly Used (The device has several light signs of use, which cannot be felt with a fingernail)",
    visiblyUsedLabel: "Visibly Used (The device has several visible signs of use, palpable with a fingernail)",
    crackDefectsLabel: "Crack/Defects (The device contains damage)",
    notWorkingLabel: "Not Working (The device contains damage)",
    storage128GBLabel: "128GB",
    storage256GBLabel: "256GB",
    storage512GBLabel: "512GB",
    phonecondition :"Select your mobile condition",
     
  };

  // selected brand
  const editphoneprice = {
    brand: "Apple",
    model: "iPhone X",
    storagecapicitytitle:"Storage Capacity",
    conditiontitle:"Condition",
    StorageCapacity: "256GB",
    Condition: "As New"
  };
  
  return (
    <>
      <section style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        <div className="container ">
          <div className="row gap-lg-0 gap-3" style={{}}>
            <div className="col-lg-7 p-0 m-0 order-1" style={{}}>
              <h1 className="text-lg-start text-center">iPhone 13</h1>
              <p className="px-2 text-lg-start text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div>
              <Iphonecard               
    labels={labels}                  
    showHorizontalLine={true}
    show={true}
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
                    price={data.price} // Assuming you might want to use price later, though it's commented out now
                    buttonLabel={data.buttonLabel}
                  buttonWidth={true}
                  priceSize={true}
                  />
                </div>
              ))}
              {/* Second card */}

              <div>
                <Selectedbrandcard
               editphoneprice={editphoneprice}
                    showHorizontalLine={true}
                    show={true}
                    />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Editphonepriceherosection;
