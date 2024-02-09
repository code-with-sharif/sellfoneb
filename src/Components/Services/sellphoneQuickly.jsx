import React from 'react'
 
import ProductCard from "../../CommonComponents/ProductCard";
import SellphoneQuicklyimg1 from "../../Images/Sellerproduct/SellphoneQuickly/SellphoneQuicklyimg1.png";
import SellphoneQuicklyimg2 from "../../Images/Sellerproduct/SellphoneQuickly/SellphoneQuicklyimg2.png";
import SellphoneQuicklyimg3 from "../../Images/Sellerproduct/SellphoneQuickly/SellphoneQuicklyimg3.png";
import SellphoneQuicklyimg4 from "../../Images/Sellerproduct/SellphoneQuickly/SellphoneQuicklyimg4.png";
 

const SellphoneQuickly = () => {
    const cardData =[ {
        imgSrc: SellphoneQuicklyimg1,
        SellphoneQuicklytitle: "Upload Good Quality Photos",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        
      },
      {
        imgSrc: SellphoneQuicklyimg2,
        SellphoneQuicklytitle: "Feature Your Mobile Phones",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        
      },
      {
        imgSrc: SellphoneQuicklyimg3,
        SellphoneQuicklytitle: "Attach Auction Sheet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        
      },
     
      {
        imgSrc: SellphoneQuicklyimg4,
        SellphoneQuicklytitle: "Attach Inspection Report",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        
      },
     
    
    ]
  return (
  <>
    <section style={{paddingTop:"60px", paddingBottom:"60px"}} className="">
        <div className="text-center " >
          <h1 className=" p-3">
             How to  
            <span className="green px-1">Sell</span>
            your mobile phone quickly? 
          </h1>
          <p className="p-lg-0 px-3  mx-auto" style={{marginTop: "15px", maxWidth: "500px"}}>
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

export default SellphoneQuickly;






 