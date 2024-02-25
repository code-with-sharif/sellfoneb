import React from "react";
import "../../Styles/SellerProduct/Choosesellphone.css";
import { FaArrowRight } from "react-icons/fa6";
import Choosesellphoneimg1 from "../../Images/Sellerproduct/Choosesellphone/Choosesellphoneimg1.png";

const Choosesellphone = () => {
  // Array of objects containing card data
  const cardData = [
    {
      backgroundImage: Choosesellphoneimg1,
      title1: "Post Your Advert on",
      title2: "Sellfone.pk",
      list: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing."
      ],
      buttonText: "Post An Advert"
    },
    {
      backgroundImage: Choosesellphoneimg1,
      title1: "Post Your Advert on",
      title2: "Sellfone.pk",
      list: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing."
      ],
      buttonText: "Hire Sellfone.pk"
    },
    // Add more objects for additional cards if needed
  ];

  return (
    <>
      <section style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        <div className="text-center ">
          <h1 className=" p-2">
            Choose How to 
            <span className="green px-1">Sell Your Phone</span>
          </h1>
          <p
            className="p-lg-0 px-2  mx-auto"
            style={{ marginTop: "15px", maxWidth: "500px" }}
          >
            AtLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Cards */}
        <div  className="forresponsive " style={{ }}>

       
        {cardData.map((card, index) => (
          <div 
            key={index}
            className="chosecarddata  "
            style={{
              backgroundImage: `url(${card.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              padding: "20px",
            }}
          >
            <div className=" ">
              <h2 className="my-3">
                <span className="white">{card.title1}</span>
                <span className="green">{card.title2}</span>
              </h2>
           
              {card.list.map((item, i) => (
                <div key={i} className="d-flex gap-2 justify-content-start align-content-center">
                  <div className="arrowIcon">
                    {" "}
                    <FaArrowRight />{" "}
                  </div>
                  <p className="white mt-1">{item}</p>
                </div>
              ))}
              <button className="btn my-2 px-2">{card.buttonText}</button>
            </div>
          </div>
        ))}
        </div>
      </section>
    </>
  );
};

export default Choosesellphone;
