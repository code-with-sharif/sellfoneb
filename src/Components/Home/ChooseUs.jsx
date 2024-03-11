import React from "react";
import ProductCard from "../../CommonComponents/ProductCard";
import choosecardimg1 from "../../Images/Home/ChoosecardSection/ChooseSection_img1.png";
import choosecardimg2 from "../../Images/Home/ChoosecardSection/ChooseSection_img2.png";
import choosecardimg3 from "../../Images/Home/ChoosecardSection/ChooseSection_img3.png";

const ChooseUs = () => {
  const cardData =[ {
    imgSrc: choosecardimg1,
    title: "Money Back Guarantee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    
  },
  {
    imgSrc: choosecardimg2,
    title: "Safe Purchase",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    
  },
  {
    imgSrc: choosecardimg3,
    title: "6-Month Warranty",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    
  },
 

]

  return (
    <>
      <section style={{paddingTop:"60px", paddingBottom:"60px"}} className="">
        <div className="text-center " >
          <div className="sellphoneheading">
           Why  
            <span className="green px-1">Choose Us</span>
            ? 
          </div>
          <p className="p-lg-0 px-2  mx-auto" style={{marginTop: "15px", maxWidth: "500px"}}>
       At Sellfone.pk, our top priority is the safety and welfare of all mobile phones rehomed through our site.
     </p>


        </div>
        {/* Card Section */}
      
       <ProductCard  cardData={cardData} />
        
      </section>
    </>
  );
};

export default ChooseUs;
