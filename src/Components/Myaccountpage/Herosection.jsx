import React from "react";
import Profilecard from "./Profilecard";
import Accountcard from "./Accountcard";
import Contactdelail from "./Contactdelail";
import Changepassword from "./Changepassword";
import '../../Styles/Myaccountpage/Herosection.css'
const Herosection = () => {
  return (
    <>
      <section
        className="grid-container"
       
      >
        <div>
          <Profilecard />
         
        </div>
        <div>
          <Accountcard />
          <Contactdelail />
          <Changepassword />
        </div>
      </section>
      
        
    </>
  );
};

export default Herosection;


