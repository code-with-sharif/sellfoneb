import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../Styles/SellerProduct/Brands.css";
const Brands = () => {
  const brandList = [
    "Apple", "Samsung", "Infinix", "Oppo"
  ];
  const modeList =[
      [
        "iPhone 8",
         "iPhone X",
         "iPhone 11",
         "iPhone",
         "iPhone 14",
         "iPhone 15",
      ]
  ];

  return (
    <section
      className="d-flex flex-wrap p-2 gap-3 justify-content-center align-items-center"
      style={{
        paddingBottom: "30px",
        paddingTop: "600px",
        marginTop:"60px",
         border:"2px solid red"
      }}
    >
      <div
        className="border"
        style={{
          width: "35%",
         
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "7px",
        }}
      >
        <div className="m-3 mt-3 " style={{}}>
        <div className="d-flex  brand-icon justify-content-between align-items-center" >
    <span className="brandtext">Brands</span>
    <RiArrowDownSLine className=" downarrow" style={{ width: "30px", height: "20px" }} />
</div>

{/* form */}
<div className="mt-2 brandcheckbox">
    <form action="">
        <div className="d-flex flex-wrap" style={{ display: "flex", flexWrap: "wrap" }}>
            {/* Apply flexbox here */}
            {brandList.map((brand, index) => (
                <Form.Group
                    key={index}
                    controlId={`exampleForm.TermsCheckbox${index}`}
                    className=""
                    style={{ flexBasis: "33%" }}
                >
                    <Form.Check type="checkbox" label={<p style={{ cursor: "pointer" }}>{brand}</p>} />
                </Form.Group>
            ))}
        </div>
    </form>
</div>


        </div>
      </div>

     

      {/* model list */}
<div
  className="border"
  style={{
    width: "35%",
    // height: "180px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "7px",
  }}
>
  <div className="m-3 mt-3" style={{}}>
    <div className="d-flex justify-content-between align-items-center">
      <span className="brandtext" style={{ }}>
        Model
      </span>
      <RiArrowDownSLine
        style={{ width: "30px", height: "20px",  }}
      />
    </div>

    {/* form */}
    <div className="mt-2">
      <form action="">
        <div
          className="d-flex flex-wrap"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {/* Apply flexbox here */}
          {modeList.map((models, index) => (
            // Add another level of mapping for models
            models.map((model, subIndex) => (
              <Form.Group
                key={`${index}-${subIndex}`}
                controlId={`exampleForm.TermsCheckbox${index}-${subIndex}`}
                className=""
                style={{ flexBasis: "33%" }}
              >
                <Form.Check type="checkbox" label={<p className="" style={{cursor:"pointer"}}>{model}</p>} />
              </Form.Group>
            ))
          ))}
        </div>
      </form>
    </div>
  </div>
</div>

    </section>
  );
};

export default Brands;
