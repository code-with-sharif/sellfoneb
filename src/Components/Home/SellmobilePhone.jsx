import React from "react";
import { Tab, Tabs } from 'react-bootstrap';
import '../../Styles/SellmobilePhone.css';
import ProductCard from "../../CommonComponents/ProductCard";
import SellmobilePhoneimg1 from '../../Images/Home/SellmobilePhone/SellmobilePhoneimg1.png'
import SellmobilePhoneimg2 from '../../Images/Home/SellmobilePhone/SellmobilePhoneimg2.png'
import SellmobilePhoneimg3 from '../../Images/Home/SellmobilePhone/SellmobilePhoneimg3.png'
import arrowimg from '../../Images/Home/SellmobilePhone/ArrowRight.svg'
const SellmobilePhone = () => {

  const cardData =[ {
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
 

]

  return (
    <section style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      <div className="heading text-center">
        <span className="tertiaryColor">Sell </span>
        <span className="seconderyColor"> Your Mobile Phone</span>
      </div>

      <p
        className="text-center mx-auto"
        style={{ marginTop: "15px", maxWidth: "500px" }}>
        At Sellfone.pk, our top priority is the safety and welfare of all
        mobile phones rehomed through our site.
      </p>

      {/* Navigation links for tabs */}
      <Tabs defaultActiveKey="Android"  id="justify-tab-example" className="mb-3 justify-content-center">
  <Tab eventKey="Android"  title="Android" className="custom-tab tab-no-border"  >
    <ProductCard cardData={cardData} />
  </Tab>
  <Tab eventKey="iPhone" title="iPhone" className="custom-tab tab-no-border">
    <ProductCard cardData={cardData} />
  </Tab>
</Tabs>




    </section>
  );
};

export default SellmobilePhone;
 