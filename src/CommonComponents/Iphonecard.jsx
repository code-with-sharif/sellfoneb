import React, { useEffect, useState } from "react";
import "../Styles/Home/Iphonecard.css";

const Iphonecard = ({ labels, showHorizontalLine, show, onPriceChange }) => {
  const [checkboxes, setCheckboxes] = useState({
    newPhoneCheckbox: false,
    usedPhoneCheckbox: false,
    asGoodAsNewCheckbox: false,
    lightlyUsedCheckbox: false,
    visiblyUsedCheckbox: false,
    crackDefectsCheckbox: false,
    notWorkingCheckbox: false,
    storage128GBCheckbox: false,
    storage256GBCheckbox: false,
    storage512GBCheckbox: false,
  });

  const handleCheckboxChange = (checkboxName) => {
    // Update the state of the checkboxes
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  
    // Update the price based on checkbox selection
    if (checkboxName === "newPhoneCheckbox") {
      // If "New" checkbox is selected, unselect the "Used" checkbox and update the price
      if (checkboxes.usedPhoneCheckbox) {
        setCheckboxes((prevCheckboxes) => ({
          ...prevCheckboxes,
          usedPhoneCheckbox: false,
        }));
        onPriceChange("PKR 500.00");
      } else {
        onPriceChange("PKR 500.00");
      }
    } else if (checkboxName === "usedPhoneCheckbox") {
      // If "Used" checkbox is selected, unselect the "New" checkbox and update the price
      if (checkboxes.newPhoneCheckbox) {
        setCheckboxes((prevCheckboxes) => ({
          ...prevCheckboxes,
          newPhoneCheckbox: false,
        }));
        onPriceChange("PKR 200.00");
      } else {
        onPriceChange("PKR 200.00");
      }
    } else if (!checkboxes.newPhoneCheckbox && !checkboxes.usedPhoneCheckbox) {
      // If both checkboxes are unselected, update the price to 0
      onPriceChange("PKR 0.00");
    }
  };
  
  
  

   


  return (
    <section className="iphone-card p-0">
      <div className="p-3">
        <h3>{labels?.conditionTitle}</h3>
        <p style={{ color: "#A5A7A5" }}>Select your mobile condition</p>

        <form>
          <div className="d-flex justify-content-between flex-lg-nowrap flex-wrap gap-lg-0 gap-2">
           
            <div className="group">
            <input  type="checkbox"
                id="newPhoneCheckbox"
                name="newPhoneCheckbox"
                checked={checkboxes.newPhoneCheckbox}
                onChange={() => handleCheckboxChange("newPhoneCheckbox")}

             />
            <label htmlFor="newPhoneCheckbox">
           {labels?.newPhoneLabel}
            
            </label>
          </div>

          

            <div className="group">
            <input  type="checkbox"
                id="usedPhoneCheckbox"
                name="usedPhoneCheckbox"
                checked={checkboxes.usedPhoneCheckbox}
                onChange={() => handleCheckboxChange("usedPhoneCheckbox")}

             />
            <label  htmlFor="usedPhoneCheckbox">
                {labels?.usedPhoneLabel}
            
            </label>
          </div>

          </div>
          {showHorizontalLine && <hr />}
          <h3>{labels?.storageTitle}</h3>
          <p style={{ color: "#A5A7A5" }}>Select your mobile storage capacity</p>
          <div className="d-flex justify-content-between">
            
            
            <div className="group">
            <input
                type="checkbox"
                id="storage128GBCheckbox"
                name="storage128GBCheckbox"
                checked={checkboxes.storage128GBCheckbox}
                onChange={() => handleCheckboxChange("storage128GBCheckbox")}
              />
           <label
                htmlFor="storage128GBCheckbox"
              
              >
                {labels?.storage128GBLabel}
              </label>
          </div>
            <div className="group">
              <input
                type="checkbox"
                id="storage256GBCheckbox"
                name="storage256GBCheckbox"
                checked={checkboxes.storage256GBCheckbox}
                onChange={() => handleCheckboxChange("storage256GBCheckbox")}
              />
              <label
                htmlFor="storage256GBCheckbox"
             
              >
                {labels?.storage256GBLabel}
              </label>
            </div>
            <div className="group">
              <input
                type="checkbox"
                id="storage512GBCheckbox"
                name="storage512GBCheckbox"
                checked={checkboxes.storage512GBCheckbox}
                onChange={() => handleCheckboxChange("storage512GBCheckbox")}
              />
              <label
                htmlFor="storage512GBCheckbox"
              
              >
                {labels?.storage512GBLabel}
              </label>
            </div>
          </div>
          {/* Condition of your iPhone 13? */}
          {show && showHorizontalLine && <hr />}
          <h3>{labels?.phoneTitle}</h3>
          <p style={{ color: "#A5A7A5" }}>{labels?.phonecondition}</p>

          {show && (
            <>
              <div className="d-flex flex-column gap-2">
                <div className="group">
                  <input
                    type="checkbox"
                    id="asGoodAsNewCheckbox"
                    name="asGoodAsNewCheckbox"
                    checked={checkboxes.asGoodAsNewCheckbox}
                    onChange={() => handleCheckboxChange("asGoodAsNewCheckbox")}
                  />
                  <label
                    htmlFor="asGoodAsNewCheckbox"
                  
                  >
                    {labels?.asGoodAsNewLabel}
                  </label>
                </div>
                <div  className="group">
                  <input
                    type="checkbox"
                    id="lightlyUsedCheckbox"
                    name="lightlyUsedCheckbox"
                    checked={checkboxes.lightlyUsedCheckbox}
                    onChange={() => handleCheckboxChange("lightlyUsedCheckbox")}
                  />
                  <label htmlFor="lightlyUsedCheckbox" >
                    {labels?.lightlyUsedLabel}
                  </label>
                </div>
                <div  className="group">
                  <input
                    type="checkbox"
                    id="visiblyUsedCheckbox"
                    name="visiblyUsedCheckbox"
                    checked={checkboxes.visiblyUsedCheckbox}
                    onChange={() => handleCheckboxChange("visiblyUsedCheckbox")}
                  />
                  <label htmlFor="visiblyUsedCheckbox" >
                    {labels?.visiblyUsedLabel}
                  </label>
                </div>
                <div  className="group">
                  <input
                    type="checkbox"
                    id="crackDefectsCheckbox"
                    name="crackDefectsCheckbox"
                    checked={checkboxes.crackDefectsCheckbox}
                    onChange={() => handleCheckboxChange("crackDefectsCheckbox")}
                  />
                  <label htmlFor="crackDefectsCheckbox" >
                    {labels?.crackDefectsLabel}
                  </label>
                </div>
                <div  className="group">
                  <input
                    type="checkbox"
                    id="notWorkingCheckbox"
                    name="notWorkingCheckbox"
                    checked={checkboxes.notWorkingCheckbox}
                    onChange={() => handleCheckboxChange("notWorkingCheckbox")}
                  />
                  <label htmlFor="notWorkingCheckbox" >
                    {labels?.notWorkingLabel}
                  </label>
                </div>
              </div>
            </>
          )}

          {/* Does your battery have a maximum capacity of 85%? */}
          {show && showHorizontalLine && <hr />}
          <h3>{labels?.batteryTitle}</h3>
        </form>
      </div>
    </section>
  );
};

export default Iphonecard;
