// RecommededMobil.jsx

import React from "react";
import Recomendmobilecard from "../../CommonComponents/Recomendmobilecard";
import productcardimg from "../../Images/Home/RecomendedphoneSection/Rectangle 63 (1).png";
 

const RecommededMobil = () => {
  const recomendmobile = [
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 1,23,456",
      buttonLabel: "Quick View",
    },
     
  ];

  return (
    <>
      <section className="" style={{paddingTop:"60px", paddingBottom:"60px"}}>
     
          <div className="heading text-center pb-5">
            <span className="tertiaryColor">Recommended </span>
            <span className="seconderyColor">Mobiles Phones</span>
          </div>

          {/* Card section */}
          <div className="container">
            <div className="row row-cols-sm-2   row-cols-lg-5">
              {recomendmobile.map((item, index) => (
                <div key={index} className="col mb-4">
                  <Recomendmobilecard
                    imgSrc={item.imgSrc}
                    title={item.title}
                    price={item.price}
                    buttonLabel={item.buttonLabel}
                  />
                </div>
              ))}
            </div>
          </div>
       
      </section>
    </>
  );
};

export default RecommededMobil;
