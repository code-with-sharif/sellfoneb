import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import "../../Styles/Home/SellmobilePhone.css";
import ProductCard from "../../CommonComponents/ProductCard";
import SellmobilePhoneimg1 from "../../Images/Home/SellmobilePhone/Infinix.png";
import SellmobilePhoneimg2 from "../../Images/Home/SellmobilePhone/Samsung.png";
import SellmobilePhoneimg3 from "../../Images/Home/SellmobilePhone/Oppo.png";
import arrowimg from "../../Images/Home/SellmobilePhone/ArrowRight.svg";
const SellmobilePhone = () => {
  const cardData = [
    {
      imgSrc: SellmobilePhoneimg1,
      deviceName: "Samsung",
      deviceLink: "Sell Samsung",
    },
    {
      imgSrc: SellmobilePhoneimg2,
      deviceName: "Oppo",
      deviceLink: "Sell Oppo",
    },
    {
      imgSrc: SellmobilePhoneimg3,
      deviceName: "Infinix",
      deviceLink: "Sell Infinix",
    },
  ];

  return (
    <section style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      <h1 className="text-center">
        <span className="green">Sell </span>
        Your Mobile Phone
      </h1>
      <p
        className="text-center mx-auto p-lg-0 p-2"
        style={{ marginTop: "15px", maxWidth: "500px" }}
      >
        At Sellfone.pk, our top priority is the safety and welfare of all mobile
        phones rehomed through our site.
      </p>

      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <h3>
            <button
              className="nav-link  show active"
              id="pills-Android-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-Android"
              type="button"
              role="tab"
              aria-controls="pills-Android"
              aria-selected="false"
            >
              Android
            </button>
          </h3>
        </li>
        <li className="nav-item" role="presentation">
          <h3>
            <button
              className="nav-link  "
              id="pills-iPhone-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-iPhone"
              type="button"
              role="tab"
              aria-controls="pills-iPhone"
              aria-selected="true"
            >
              iPhone
            </button>
          </h3>
        </li>
      </ul>

      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-iPhone"
          role="tabpanel"
          aria-labelledby="pills-iPhone-tab"
        >
          <ProductCard cardData={cardData} 
            deviceLink={true}
          />
        </div>
        <div
          className="tab-pane fade "
          id="pills-Android"
          role="tabpanel"
          aria-labelledby="pills-Android-tab"
        >
          <ProductCard cardData={cardData} />
        </div>
      </div>

      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show "
          id="pills-iPhone"
          role="tabpanel"
          aria-labelledby="pills-iPhone-tab"
        >
          <ProductCard cardData={cardData} />
        </div>

        <div
          className="tab-pane fade"
          id="pills-Android"
          role="tabpanel"
          aria-labelledby="pills-Android-tab"
        >
          <ProductCard cardData={cardData} />
        </div>
      </div>
    </section>
  );
};

export default SellmobilePhone;
