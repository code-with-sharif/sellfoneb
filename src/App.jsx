
import React from 'react' 
import Header from './Components/Home/Header'
import ChooseUs from './Components/Home/ChooseUs'
import SellmobilePhone from './Components/Home/SellmobilePhone'
import RecommededMobil from './Components/Home/RecommededMobil'
import Sellphonesafly from './Components/Home/Sellphonesafly'
import Needquestion from './Components/Home/Needquestion'
import CustomAccordion from './CommonComponents/CustomAccordion'
import Herosection from './Components/Home/Herosection'
import WorksSection from './Components/Home/WorksSection'
import AccordionSection from './Components/Home/AccordionSection'
 
 
const App = () => {
  return (
 <>
  <Header />
  <Herosection /> 
  <ChooseUs /> 
  <WorksSection />
  <SellmobilePhone />
  <RecommededMobil />  
 
  <AccordionSection /> 
   <Sellphonesafly/>
  <Needquestion/>

 </>
  )
}

export default App