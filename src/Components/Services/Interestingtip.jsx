import React from "react";
import "../../Styles/SellerProduct/Interestingtip.css";
import Interestingtipimg1 from '../../Images/Sellerproduct/Interestingtip/Interestingtipimg1.png';
import Interestingtipimg2 from '../../Images/Sellerproduct/Interestingtip/Interestingtipimg2.png';

const Interestingtip = () => {
  const cardData = [
    {
      id: 1,
      imgSrc: Interestingtipimg1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    },
    {
      id: 2,
      imgSrc: Interestingtipimg1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    },
    {
      id: 3,
      imgSrc: Interestingtipimg1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    },
    {
      id: 4,
      imgSrc: Interestingtipimg1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    },
    // Add more card data objects as needed
  ];

  return (
    <section style={{paddingTop:"60px", paddingBottom:"60px"}}>
      <div className="container interestingcontainer">
        <div className="col textdata ">
          <div className="text-center">
            <h1 className=" p-2">
              Interesting  
              <span className="green px-1">Tips</span>
            </h1>
            <p className="p-lg-0 px-2 mx-auto" style={{ marginTop: "15px", maxWidth: "500px" }}>
              At Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Wrap the mapped elements inside a row container */}
        <div className="d-flex flex-wrap interestingcard2 " style={{ }}>
  {cardData.map((card) => (
  
    <div key={card.id} className="interestingcard">
      <div style={{ width: "70px", height: "70px", border: "", margin: "auto", marginTop: "-15%" }}>
        <img className="img-fluid" src={card.imgSrc} alt="" />
      </div>
      <p className="text-center px-1 mt-3">{card.text}</p>
    </div>
  ))}
</div>

{/* <div className="self-center"> */}
  
<div className="col imgcard">
<img className="img-fluid" src={Interestingtipimg2} alt="" style={{maxWidth :"100%", height:"100%"}} />
</div>
{/* // </div> */}
      </div>
    </section>
  );
};

export default Interestingtip;
