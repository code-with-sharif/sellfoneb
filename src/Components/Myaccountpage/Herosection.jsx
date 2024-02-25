import React from "react";
import Profilecard from "./Profilecard";
import Accountcard from "./Accountcard";
import Contactdelail from "./Contactdelail";
import Changepassword from "./Changepassword";

const Herosection = () => {
  return (
    <>
      <section
        className="grid-container"
        style={{
          paddingTop: "30px",
          paddingBottom: "60px",
          width: "92%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "0px",
        }}
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
