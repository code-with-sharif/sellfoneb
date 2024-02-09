import Herosection from "./Herosection";
import WorksSection from "./WorksSection";
import SellmobilePhone from "./SellmobilePhone";
import RecommededMobil from "./RecommededMobil";
import AccordionSection from "./AccordionSection";
import Sellphonesafly from "./Sellphonesafly";
import Needquestion from "./Needquestion";
import ChooseUs from "./ChooseUs";
import CustomAccordion from "../../CommonComponents/CustomAccordion";
import questionsigneimg from "../../Images/Home/Acordionsection/questionsigmeimg.png";
import productcardimg from "../../Images/Home/RecomendedphoneSection/Rectangle 63 (1).png";
 


const Home = () => {
     
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
      // firstname:"Recommended",
      // lastname:" Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      // firstname:"Recommended",
      // lastname:" Mobiles Phones ",
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
      price: "Rs. 1,23,456",
      buttonLabel: "Quick View",
    },
     
  ];

  return (
    <>
      <Herosection />
      <ChooseUs />
      <WorksSection />
      <SellmobilePhone />
      <RecommededMobil  recomendmobile={recomendmobile}/>

      <AccordionSection   customAccordion ={ <CustomAccordion />}  questionsigneimg={questionsigneimg}/>
      <Sellphonesafly />
      <Needquestion />
     
    

    </>
  );
};

export default Home;
