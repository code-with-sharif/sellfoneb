import React from "react";
import "../../src/Styles/ProductCard.css";

const ProductCard = ({ cardData }) => {
  // Check if cardData is not defined or not an array
  if (!cardData || !Array.isArray(cardData)) {
    console.error("cardData is not defined or not an array:", cardData);
    return null; // or handle the error in another way
  }

  return (

    <section className=" ">
      <div className="container p-lg-0 px-4">
        <div className="row row-cols-lg-3 row-cols-md-1 row-cols-1 gap-lg-3  ">
          {cardData.map((cardItem, id) => (
            <div key={id} className="icon-box mt-4  ">
              <div className="Icon-img">
                <img
                  className="img-fluid"
                  src={cardItem?.imgSrc}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
          <div className="">
          <h4 className="subheading mt-4 p-lg-0 ">{cardItem?.title}</h4>
              <p className="px-3">{cardItem?.description}</p>
          </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
