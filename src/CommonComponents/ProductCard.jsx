import React from "react";
import PropTypes from "prop-types";
import "../../src/Styles/Home/ProductCard.css";
import { IoArrowForwardOutline } from "react-icons/io5";

const ProductCard = ({ cardData, deviceLink }) => {
  if (!cardData || !Array.isArray(cardData)) {
    console.error("cardData is not defined or not an array:", cardData);
    return null;
  }

  return (
    <section>
      <div className="container p-lg-0 px-4">
        <div className="row row-cols-lg-3 cols-1 gap-3 justify-content-lg-center">
          {cardData.map((cardItem, id) => (
            <div
              key={id}
              className={`${
                cardItem.deviceName
                  ? "sellmobilephonecard"
                  : cardItem.SellphoneQuicklytitle
                  ? "SellphoneQuicklycard"
                  : "ChooseUscard"
              } mt-4`}
            >
              <div
                className={`${
                  cardItem.deviceName
                    ? "sellmobilephoneImg"
                    : "ChooseUscardImg"
                }`}
              >
                <img
                  className="img-fluid"
                  src={cardItem.imgSrc}
                  alt={`${cardItem.title} ${cardItem.deviceName}${cardItem.SellphoneQuicklytitle}`}
                  style={{
                    maxWidth: "100%",
                    height: "100%",
                    objectFit: "cover",
                    backgroundSize: "cover",
                  }}
                />
              </div>
              <div>
                <h6 className="mt-4 p-lg-0">
                  {cardItem.title} {cardItem.deviceName}
                  {cardItem.SellphoneQuicklytitle}
                </h6>
                <p className="px-3">
                  <span>{cardItem.description}</span>
                  <span style={{ color: "#92C43E" }}>
                    <span style={{ cursor: "pointer" }} className="p-1">
                      {cardItem.deviceLink}
                    </span>
                    <span style={{ cursor: "pointer" }}>
                      {deviceLink && <IoArrowForwardOutline />}
                    </span>
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

ProductCard.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      deviceName: PropTypes.string,
      SellphoneQuicklytitle: PropTypes.string,
      title: PropTypes.string,
      imgSrc: PropTypes.string,
      description: PropTypes.string,
      deviceLink: PropTypes.string,
    })
  ),
};

export default ProductCard;
