import React from 'react'
import Selldevice from './Selldevice'
import Sellphonesafly from '../Home/Sellphonesafly'
import Needquestion from '../Home/Needquestion'
import RecommededMobil from '../Home/RecommededMobil'
import Pagination from './Pagination'
import Brands from './Brands'
import productcardimg from "../../Images/Home/RecomendedphoneSection/Rectangle 63 (1).png";
import TestBrand from './testBrands'

const Process = () => {

  const recomendmobile = [
    {
      // firstname:"Recommended",
      // lastname:" Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      // buttonLabel: "Quick View",
    },
    {
      
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      // buttonLabel: "Quick View",
    },
    {
      // firstname:"Recommended",
      // lastname:" Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      // buttonLabel: "Quick View",
    },
    {
      firstname:"Recommended",
      lastname:" Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      // buttonLabel: "Quick View",
    },
    {
      firstname:"Recommended",
      lastname:" Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      // buttonLabel: "Quick View",
    },
    {
      firstname:"Recommended",
      lastname:" Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      // buttonLabel: "Quick View",
    },
    {
      firstname:"Recommended",
      lastname:" Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      // buttonLabel: "Quick View",
    },
    {
      firstname:"Recommended",
      lastname:" Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      // buttonLabel: "Quick View",
    },
    {
      firstname:"Recommended",
      lastname:" Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      // buttonLabel: "Quick View",
    },
    {
      firstname:"Recommended",
      lastname:" Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      // buttonLabel: "Quick View",
    },
    {
      firstname:"Recommended",
      lastname:" Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      // buttonLabel: "Quick View",
    },
    {
      firstname:"Recommended",
      lastname:" Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      // buttonLabel: "Quick View",
    },
    {
      firstname:"Recommended",
      lastname:" Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      // buttonLabel: "Quick View",
    },
    {
      firstname:"Recommended",
      lastname:" Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      // buttonLabel: "Quick View",
    },
    {
      firstname:"Recommended",
      lastname:" Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      // buttonLabel: "Quick View",
    },
    {
      firstname:"Recommended",
      lastname:" Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      // buttonLabel: "Quick View",
    },
    {
      firstname:"Recommended",
      lastname:" Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      // buttonLabel: "Quick View",
    },
    {
      firstname:"Recommended",
      lastname:" Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      // buttonLabel: "Quick View",
    },
    {
      firstname:"Recommended",
      lastname:" Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      // buttonLabel: "Quick View",
    },
    {
      firstname:"Recommended",
      lastname:" Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 1,23,456",
      // buttonLabel: "Quick View",
    },
     
  ];

  return (
   <>
    <Selldevice />
    <Brands  />
    <TestBrand />
    <RecommededMobil  recomendmobile={recomendmobile}/>

<Pagination />
    <Sellphonesafly />
      <Needquestion />
   </>
  )
}

export default Process