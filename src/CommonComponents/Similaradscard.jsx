import React from 'react'
import Recomendmobilecard from './Recomendmobilecard';
import productcardimg from "../Images/Home/RecomendedphoneSection/Rectangle 63 (1).png" 
// RecomendedphoneSection/Rectangle 63 (1).png";
const Similaradscard = () => {
    const recomendmobile = [
        {
          firstname:"Recommended",
          lastname:" Mobiles Phones ",
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
          firstname:"Recommended",
          lastname:" Mobiles Phones ",
          imgSrc: productcardimg,
          title: "Apple iPhone 13",
          price: "Rs. 2,46,999",
          buttonLabel: "Quick View",
        },
        {
          firstname:"Recommended",
          lastname:" Mobiles Phones ",
          imgSrc: productcardimg,
          title: "Apple iPhone 13",
          price: "Rs. 2,46,999",
          buttonLabel: "Quick View",
        },
        {
          firstname:"Recommended",
          lastname:" Mobiles Phones ",
          imgSrc: productcardimg,
          title: "Apple iPhone 13",
          price: "Rs. 2,46,999",
          buttonLabel: "Quick View",
        },
        {
          firstname:"Recommended",
          lastname:" Mobiles Phones ",
          imgSrc: productcardimg,
          title: "Apple iPhone 13",
          price: "Rs. 2,46,999",
          buttonLabel: "Quick View",
        },
        {
          firstname:"Recommended",
          lastname:" Mobiles Phones ",
          imgSrc: productcardimg,
          title: "Apple iPhone 13",
          price: "Rs. 2,46,999",
          buttonLabel: "Quick View",
        },
        {
          firstname:"Recommended",
          lastname:" Mobiles Phones ",
          imgSrc: productcardimg,
          title: "Apple iPhone 13",
          price: "Rs. 2,46,999",
          buttonLabel: "Quick View",
        },
        
        
        
         
      ];
  return (
    <>
      <section style={{paddingTop:"60px" , paddingBottom:"60px" , width:"90%" , margin:"auto"}}>
      <h1 className='text-center'>Similar <span className='green'>Ads</span></h1>

      <div className="row row-cols-2 row-cols-lg-4">
              { 
                recomendmobile.map((item, index) => (
                 
                    <div  key={index} className="col mt-4">
                      <Recomendmobilecard
                        imgSrc={item?.imgSrc}
                        title={item?.title}
                        price={item?.price}
                        buttonLabel={item?.buttonLabel}
                      />
                    </div>
                
                ))}
            </div>
      </section>
    </>
  )
}

export default Similaradscard;