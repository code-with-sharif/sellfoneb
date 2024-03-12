import React, { useState } from "react";
import Iphonecard from "./../../CommonComponents/Iphonecard";
import Recomendmobilecard from "../../CommonComponents/Recomendmobilecard";
import Selectedbrandcard from "../../CommonComponents/Selectedbrandcard";
import productcardimg from "../../Images/Home/RecomendedphoneSection/Rectangle 63 (1).png";

const Editphonepriceherosection = () => {

  // const [payment, setPayment] = useState(0);

  // const updatePrice = (newPrice) => {
  //   setPayment(newPrice);
  // };



  const recomendmobile = [
    {
      imgSrc: productcardimg,
      price: "PKR 0.00",
      // buttonLabel: "Sell My Phone",
      Editpricebtn: "Edit Price",
    },
  ];

  const labels = {
    conditionTitle: "Condition",
    asGoodAsNewLabel: "As New (The device shows no signs of wear)",
    storageTitle: "Storage Capacity",
    phoneTitle: "Condition of your iPhone 13?",
    batteryTitle: "Does your battery have a maximum capacity of 85%?",
    batterycapacitygood: "Yes",
    batterycapacitygoodprice: "+PKR 0",
    batterycapacitybad: "No",
    batterycapacitybadprice: "-PKR 7000",
    chargcabletittle: "Does your iPhone charge well with the charging cable?",
    chargcablegood: "Yes",
    chargcablegoodprice: "+PKR 0",
    chargcablebad: "No",
    chargcablebadprice: "-PKR 7000",
    cracklingcallTittle: "Do you hear noise/crackling while calling?",
    cracklingcallgood: "Yes",
    cracklingcallgoodprice: "+PKR 0",
    cracklingcallbad: "No",
    cracklingcallbadprice: "-PKR 7000",

    camerabrokenTittle: "Is your iPhone's camera lens broken?",
    camerabroken: "Yes",
    camerabrokengoodprice: "+PKR 0",
    Nocamerabroken: "No",
    camerabrokenbadprice: "-PKR 7000",

    iphonenotificationTittle: "Does your iPhone have a notification after repair?",
    iphonenotification: "Yes",
    iphonenotificationgoodprice: "+PKR 0",
    Noiphonenotification: "No",
    iphonenotificationbadprice: "-PKR 7000",

    orignlechargerTittle: "Are you sending an original, unused charging cable?",
    orignlecharger: "Yes",
    orignlechargergoodprice: "+PKR 0",
    Noorignlecharger: "No",
    orignlechargerbadprice: "-PKR 7000",

    newPhoneLabel: "New (The device shows no signs of wear)",
    usedPhoneLabel: "Used (The device has some minimal signs of use)",
    lightlyUsedLabel: "Lightly Used (The device has several light signs of use, which cannot be felt with a fingernail)",
    visiblyUsedLabel: "Visibly Used (The device has several visible signs of use, palpable with a fingernail)",
    crackDefectsLabel: "Crack/Defects (The device contains damage)",
    notWorkingLabel: "Not Working (The device contains damage)",
    storage128GBLabel: "128GB",
    storage256GBLabel: "256GB",
    storage512GBLabel: "512GB",
    phonecondition: "Select your mobile condition",
  };

  // selected brand
  const editphoneprice = {
    brand: "Apple",
    model: "iPhone X",
    storagecapicitytitle: "Storage Capacity",
    conditiontitle: "Condition",
    StorageCapacity: "256GB",
    Condition: "As New"
  };

  return (
    <>
      <section style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        <div className="" style={{ width: "88%", margin: "auto" }}>
          <div className="row g-4">
            <div className="col-lg-7 p-0 m-0">
              <div className="text-lg-start text-center sellphoneheading">iPhone 13</div>
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
            <div className="col-lg-5 d-flex flex-column gap-4">
              {recomendmobile?.map((data, index) => (
                <div key={index}>
                   <Recomendmobilecard
                    imgSrc={data.imgSrc}
                    price={data.price}
                    Editpricebtn={data.Editpricebtn}
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
