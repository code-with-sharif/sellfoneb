import React from 'react'
import ProductCard from "../../CommonComponents/ProductCard";
import HowsellphoneImg1 from "../../Images/Sellerproduct/Howsellphone/HowsellphoneImg1.png";
import HowsellphoneImg2 from "../../Images/Sellerproduct/Howsellphone/HowsellphoneImg2.png";
import HowsellphoneImg3 from "../../Images/Sellerproduct/Howsellphone/HowsellphoneImg3.png";

const Howsellphone = () => {
    const cardData =[ {
        imgSrc: HowsellphoneImg1,
        title: "Sign Up",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        
      },
      {
        imgSrc: HowsellphoneImg2,
        title: "Create Your Advert",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        
      },
      {
        imgSrc: HowsellphoneImg3,
        title: "Get Instant Offers",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        
      },
     
    
    ]
    
  return (
 <>
<section style={{paddingTop:"60px", paddingBottom:"60px" ,background:"#F4F9EC"}} className="">
        <div className="text-center " >
          <h1 className=" px-3">
            How to   
            <span className="green px-2">Sell</span>
           your mobile phone? 
          </h1>
          <p className="p-lg-0 px-4  mx-auto" style={{marginTop: "15px", maxWidth: "500px"}}>
       AtLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua.
     </p>


        </div>
        {/* Card Section */}
      
       <ProductCard  cardData={cardData} />
        
      </section>
 </>
  )
}

export default Howsellphone;