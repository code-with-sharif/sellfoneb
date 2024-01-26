 

import Herosection from "./Herosection"
import WorksSection from './WorksSection';
import SellmobilePhone from './SellmobilePhone';
import RecommededMobil from './RecommededMobil';
import AccordionSection from './AccordionSection';
import Sellphonesafly from './Sellphonesafly';
import Needquestion from './Needquestion';
import ChooseUs from './ChooseUs';

                     const  Home = () => {
  return ( 
    <>
        <Herosection />
      <ChooseUs />
      <WorksSection />
      <SellmobilePhone />
      <RecommededMobil />

      <AccordionSection />
      <Sellphonesafly/>
      <Needquestion />
    </>
  )
}

export default Home