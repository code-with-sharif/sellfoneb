import React, { useEffect, useState } from "react";
import "../Styles/Home/Iphonecard.css";
import { useLocation, useNavigate } from "react-router-dom";

const Iphonecard = ({ labels, showHorizontalLine, show,  }) => {
  const location=useLocation();
  const[checkLocation, setCheckLocation]=useState(location.pathname)
  const navigate=useNavigate();
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
  
   

    // if((newPhoneCheckbox || usedPhoneCheckbox) &&(storage128GBCheckbox||storage256GBCheckbox||storage512GBCheckbox)&& (checkLocation === '/secondpartSelldevice')) {

    //   navigate("/editphoneprice");
      
    //   window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    //   });
      
  
    
    // }
    }

    useEffect(() => {
      if (
        (checkboxes.radionewphone || checkboxes.radiousedphone) &&
        (checkboxes.storage128GBCheckbox ||
          checkboxes.storage256GBCheckbox ||
          checkboxes.storage512GBCheckbox) &&
        location.pathname === '/secondpartSelldevice'
      ) {
        // Navigate to "/editphoneprice" page
        navigate("/editphoneprice");
    
        // Scroll to top
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }, [checkboxes, location.pathname, navigate]);
    
  
  
 
  
  


   


  return (
    <section className="iphone-card p-0">
      <div className="p-3">
        <h3>{labels?.conditionTitle}</h3>
        <p style={{ color: "#A5A7A5" }}>Select your mobile condition</p>

        <form>
          <div className="d-flex justify-content-between flex-lg-nowrap flex-wrap gap-lg-0 gap-2">
           
             {/* <div className="group ">
            <input  type="checkbox"
                id="newPhoneCheckbox"
                name="newPhoneCheckbox"
                checked={checkboxes.newPhoneCheckbox}
                onChange={() => handleCheckboxChange("newPhoneCheckbox")}
             />
            <label
             htmlFor="newPhoneCheckbox">
           {labels?.newPhoneLabel}
            
            </label>
          </div> */}

          

            {/* <div className="group">
            <input  type="checkbox"
                id="usedPhoneCheckbox"
                name="usedPhoneCheckbox"
                checked={checkboxes.usedPhoneCheckbox}
                onChange={() => handleCheckboxChange("usedPhoneCheckbox")}

             />
            <label  htmlFor="usedPhoneCheckbox">{labels?.usedPhoneLabel} </label>
          </div>  */}

<div class="group">
  <input type="radio" id="radionewphone" name="radio" 

checked={checkboxes.radionewphone}
                onChange={() => handleCheckboxChange("radionewphone")}
  />
  <label for="radionewphone" > {labels?.newPhoneLabel}</label>
</div>
<div class="group">
  <input type="radio" id="radiousedphone" name="radio" 

checked={checkboxes.radiousedphone}
                onChange={() => handleCheckboxChange("radiousedphone")}
  />
  <label for="radiousedphone" >{labels?.usedPhoneLabel} </label>
</div>





          

          </div>
          {showHorizontalLine && <hr />}
          <h3>{labels?.storageTitle}</h3>
          <p style={{ color: "#A5A7A5" }}>Select your mobile storage capacity</p>
          {/* <div className="d-flex justify-content-between">
            
            
            <div className="group">
            <input
                type="radio"
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
                type="radio"
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
                type="radio"
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

          </div> */}

  {/* storage of phone */}
          <div className="d-flex justify-content-between">
  <div className="group">
    <input
      type="radio"
      id="storage128GBCheckbox"
      name="storageCheckbox"
      checked={checkboxes.storage128GBCheckbox}
      onChange={() => handleCheckboxChange("storage128GBCheckbox")}
    />
    <label htmlFor="storage128GBCheckbox">
      {labels?.storage128GBLabel}
    </label>
  </div>

  <div className="group">
    <input
      type="radio"
      id="storage256GBCheckbox"
      name="storageCheckbox"
      checked={checkboxes.storage256GBCheckbox}
      onChange={() => handleCheckboxChange("storage256GBCheckbox")}
    />
    <label htmlFor="storage256GBCheckbox">
      {labels?.storage256GBLabel}
    </label>
  </div>

  <div className="group">
    <input
      type="radio"
      id="storage512GBCheckbox"
      name="storageCheckbox"
      checked={checkboxes.storage512GBCheckbox}
      onChange={() => handleCheckboxChange("storage512GBCheckbox")}
    />
    <label htmlFor="storage512GBCheckbox">
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
                  <label htmlFor="asGoodAsNewCheckbox"
                  style={{width:"98%" }}
                  >
                    {labels?.asGoodAsNewLabel}
                  </label>
                </div>
                <div className="group">
                  <input
                  className=""
                    type="checkbox"
                    id="lightlyUsedCheckbox"
                    name="lightlyUsedCheckbox"
                    checked={checkboxes.lightlyUsedCheckbox}
                    onChange={() =>handleCheckboxChange("lightlyUsedCheckbox")}
                  />
                  <label className="d-flex flex-wrap" style={{width:"98%" }} htmlFor="lightlyUsedCheckbox" >
                    {labels?.lightlyUsedLabel}
                  </label>
                </div>
                <div  className="group ">
                  <input
                    type="checkbox"
                    id="visiblyUsedCheckbox"
                    name="visiblyUsedCheckbox"
                    checked={checkboxes.visiblyUsedCheckbox}
                    onChange={() => handleCheckboxChange("visiblyUsedCheckbox")}
                  />
                  <label htmlFor="visiblyUsedCheckbox"
                  style={{width:"98%" }}
                   >
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





          {/* Does your battery have a maximum capacity of 85%? */}
          {show && showHorizontalLine && <hr />}
          <h3>{labels?.batteryTitle}</h3>
         {/* <div className="d-flex  align-items-center justify-content-between gap-lg-5  gap-2 flex-lg-nowrap flex-wrap">
         <div className="d-flex  align-items-center gap-5">
         <div  className="group">
                  <input
                    type="radio"
                    id="batterycapacitygoodCheckbox"
                    name="batterycapacitygoodCheckbox"
                    checked={checkboxes.batterycapacitygoodCheckbox}
                    onChange={() => handleCheckboxChange("batterycapacitygoodCheckbox")}
                  />
                  <label htmlFor="batterycapacitygoodCheckbox" >
                    {labels?.batterycapacitygood}
                  </label>
                </div>
                <div>{labels?.batterycapacitygoodprice}</div> 
         </div>
         <div className="d-flex  align-items-center gap-5">
         <div  className="group">
                  <input
                      type="radio"
                    id="batterycapacitybadCheckbox"
                    name="batterycapacitybadCheckbox"
                    checked={checkboxes.batterycapacitybad}
                    onChange={() => handleCheckboxChange("batterycapacitybad")}
                  />
                  <label htmlFor="batterycapacitybad" >
                    {labels?.batterycapacitybad}
                  </label>
                </div>
                <div>{labels?.batterycapacitybadprice}</div> 
         </div>
         </div> */}
         <div className="d-flex align-items-center justify-content-between gap-lg-5 gap-2 flex-lg-nowrap flex-wrap">
  <div className="d-flex align-items-center gap-5">
    <div className="group">
      <input
        type="radio"
        id="batterycapacitygoodCheckbox"
        name="batterycapacityCheckbox"
        checked={checkboxes.batterycapacitygoodCheckbox}
        onChange={() => handleCheckboxChange("batterycapacitygoodCheckbox")}
      />
      <label htmlFor="batterycapacitygoodCheckbox">
        {labels?.batterycapacitygood}
      </label>
    </div>
    <div>{labels?.batterycapacitygoodprice}</div>
  </div>
  <div className="d-flex align-items-center gap-5">
    <div className="group">
      <input
        type="radio"
        id="batterycapacitybadCheckbox"
        name="batterycapacityCheckbox"
        checked={checkboxes.batterycapacitybad}
        onChange={() => handleCheckboxChange("batterycapacitybad")}
      />
      <label htmlFor="batterycapacitybad">
        {labels?.batterycapacitybad}
      </label>
    </div>
    <div>{labels?.batterycapacitybadprice}</div>
  </div>
</div>

         {show && showHorizontalLine && <hr />}
         <h3>{labels?.chargcabletittle}</h3>


         {/* <div className="d-flex  align-items-center justify-content-between gap-lg-5  gap-2 flex-lg-nowrap flex-wrap ">
         <div className="d-flex  align-items-center gap-5">
         <div  className="group">
                  <input
                    type="radio"
                    id="chargcablegoodCheckbox"
                    name="chargcablegoodCheckbox"
                    checked={checkboxes.chargcablegoodCheckbox}
                    onChange={() => handleCheckboxChange("chargcablegoodCheckbox")}
                  />
                  <label htmlFor="chargcablegoodCheckbox" >
                    {labels?.chargcablegood}
                  </label>
                </div>
                <div>{labels?.chargcablegoodprice}</div> 
         </div>
         <div className="d-flex  align-items-center gap-5">
         <div  className="group">
                  <input
                    type="radio"
                    id="chargcablebadCheckbox"
                    name="chargcablebadCheckbox"
                    checked={checkboxes.chargcablebad}
                    onChange={() => handleCheckboxChange("chargcablebad")}
                  />
                  <label htmlFor="chargcablebad" >
                    {labels?.chargcablebad}
                  </label>
                </div>
                <div>{labels?.chargcablebadprice}</div> 
         </div>
         </div> */}
         <div className="d-flex align-items-center justify-content-between gap-lg-5 gap-2 flex-lg-nowrap flex-wrap">
  <div className="d-flex align-items-center gap-5">
    <div className="group">
      <input
        type="radio"
        id="chargcablegoodCheckbox"
        name="chargcableCheckbox"
        checked={checkboxes.chargcablegoodCheckbox}
        onChange={() => handleCheckboxChange("chargcablegoodCheckbox")}
      />
      <label htmlFor="chargcablegoodCheckbox">
        {labels?.chargcablegood}
      </label>
    </div>
    <div>{labels?.chargcablegoodprice}</div>
  </div>
  <div className="d-flex align-items-center gap-5">
    <div className="group">
      <input
        type="radio"
        id="chargcablebadCheckbox"
        name="chargcableCheckbox"
        checked={checkboxes.chargcablebad}
        onChange={() => handleCheckboxChange("chargcablebad")}
      />
      <label htmlFor="chargcablebad">
        {labels?.chargcablebad}
      </label>
    </div>
    <div>{labels?.chargcablebadprice}</div>
  </div>
</div>



         {show && showHorizontalLine && <hr />}
         <h3>{labels?.cracklingcallTittle}</h3>

         {/* <div className="d-flex  align-items-center justify-content-between gap-lg-5  gap-2 flex-lg-nowrap flex-wrap">
         <div className="d-flex  align-items-center gap-5">
         <div  className="group">
                  <input
                  type="radio"
                    id="cracklingcallgoodCheckbox"
                    name="cracklingcallgoodCheckbox"
                    checked={checkboxes.cracklingcallgoodCheckbox}
                    onChange={() => handleCheckboxChange("cracklingcallgoodCheckbox")}
                  />
                  <label htmlFor="cracklingcallgoodCheckbox" >
                    {labels?.cracklingcallgood}
                  </label>
                </div>
                <div>{labels?.cracklingcallgoodprice}</div> 
         </div>
         <div className="d-flex  align-items-center gap-5">
         <div  className="group">
                  <input
                    type="radio"
                    id="cracklingcallbadCheckbox"
                    name="cracklingcallbadCheckbox"
                    checked={checkboxes.cracklingcallbad}
                    onChange={() => handleCheckboxChange("cracklingcallbad")}
                  />
                  <label htmlFor="cracklingcallbad" >
                    {labels?.cracklingcallbad}
                  </label>
                </div>
                <div>{labels?.cracklingcallbadprice}</div> 
         </div>
         </div> */}
         <div className="d-flex align-items-center justify-content-between gap-lg-5 gap-2 flex-lg-nowrap flex-wrap">
  <div className="d-flex align-items-center gap-5">
    <div className="group">
      <input
        type="radio"
        id="cracklingcallgoodCheckbox"
        name="cracklingcallCheckbox"
        checked={checkboxes.cracklingcallgoodCheckbox}
        onChange={() => handleCheckboxChange("cracklingcallgoodCheckbox")}
      />
      <label htmlFor="cracklingcallgoodCheckbox">
        {labels?.cracklingcallgood}
      </label>
    </div>
    <div>{labels?.cracklingcallgoodprice}</div>
  </div>
  <div className="d-flex align-items-center gap-5">
    <div className="group">
      <input
        type="radio"
        id="cracklingcallbadCheckbox"
        name="cracklingcallCheckbox"
        checked={checkboxes.cracklingcallbad}
        onChange={() => handleCheckboxChange("cracklingcallbad")}
      />
      <label htmlFor="cracklingcallbad">
        {labels?.cracklingcallbad}
      </label>
    </div>
    <div>{labels?.cracklingcallbadprice}</div>
  </div>
</div>

         {show && showHorizontalLine && <hr />}
         <h3>{labels?.camerabrokenTittle}</h3>


         {/* <div className="d-flex  align-items-center justify-content-between gap-lg-5  gap-2 flex-lg-nowrap flex-wrap ">
         <div className="d-flex  align-items-center gap-5">
         <div  className="group">
                  <input
                    type="radio"
                    id="camerabrokenCheckbox"
                    name="camerabrokenCheckbox"
                    checked={checkboxes.camerabrokenCheckbox}
                    onChange={() => handleCheckboxChange("camerabrokenCheckbox")}
                  />
                  <label htmlFor="camerabroken" >
                    {labels?.camerabroken}
                  </label>
                </div>
                <div>{labels?.camerabrokengoodprice}</div> 
         </div>
         <div className="d-flex  align-items-center gap-5">
         <div  className="group">
                  <input
                    type="radio"
                    id="NocamerabrokenCheckbox"
                    name="NocamerabrokenCheckbox"
                    checked={checkboxes.Nocamerabroken}
                    onChange={() => handleCheckboxChange("Nocamerabroken")}
                  />
                  <label htmlFor="Nocamerabroken" >
                    {labels?.Nocamerabroken}
                  </label>
                </div>
                <div>{labels?.camerabrokenbadprice}</div> 
         </div>
         </div> */}
         <div className="d-flex align-items-center justify-content-between gap-lg-5 gap-2 flex-lg-nowrap flex-wrap">
  <div className="d-flex align-items-center gap-5">
    <div className="group">
      <input
        type="radio"
        id="camerabrokenCheckbox"
        name="camerabrokenGroup"
        checked={checkboxes.camerabrokenCheckbox}
        onChange={() => handleCheckboxChange("camerabrokenCheckbox")}
      />
      <label htmlFor="camerabrokenCheckbox">
        {labels?.camerabroken}
      </label>
    </div>
    <div>{labels?.camerabrokengoodprice}</div>
  </div>
  <div className="d-flex align-items-center gap-5">
    <div className="group">
      <input
        type="radio"
        id="NocamerabrokenCheckbox"
        name="camerabrokenGroup"
        checked={checkboxes.Nocamerabroken}
        onChange={() => handleCheckboxChange("Nocamerabroken")}
      />
      <label htmlFor="NocamerabrokenCheckbox">
        {labels?.Nocamerabroken}
      </label>
    </div>
    <div>{labels?.camerabrokenbadprice}</div>
  </div>
</div>

         {show && showHorizontalLine && <hr />}
         <h3>{labels?.iphonenotificationTittle}</h3>
        
{/*  
         <div className="d-flex  align-items-center justify-content-between gap-lg-5  gap-2 flex-lg-nowrap flex-wrap">
         <div className="d-flex  align-items-center gap-5">
         <div  className="group">
                  <input
                    type="radio"
                    id="iphonenotificationCheckbox"
                    name="iphonenotificationCheckbox"
                    checked={checkboxes.iphonenotificationCheckbox}
                    onChange={() => handleCheckboxChange("iphonenotificationCheckbox")}
                  />
                  <label htmlFor="iphonenotification" >
                    {labels?.iphonenotification}
                  </label>
                </div>
                <div>{labels?.iphonenotificationgoodprice}</div> 
         </div>
         <div className="d-flex  align-items-center gap-5">
         <div  className="group">
                  <input
                    type="radio"
                    id="NoiphonenotificationCheckbox"
                    name="NoiphonenotificationCheckbox"
                    checked={checkboxes.Noiphonenotification}
                    onChange={() => handleCheckboxChange("Noiphonenotification")}
                  />
                  <label htmlFor="Noiphonenotification" >
                    {labels?.Noiphonenotification}
                  </label>
                </div>
                <div>{labels?.iphonenotificationbadprice}</div> 
         </div>
         </div>  */}

         <div className="d-flex align-items-center justify-content-between gap-lg-5 gap-2 flex-lg-nowrap flex-wrap">
  <div className="d-flex align-items-center gap-5">
    <div className="group">
      <input
        type="radio"
        id="iphonenotificationCheckbox"
        name="iphonenotificationGroup"
        checked={checkboxes.iphonenotificationCheckbox}
        onChange={() => handleCheckboxChange("iphonenotificationCheckbox")}
      />
      <label htmlFor="iphonenotificationCheckbox">
        {labels?.iphonenotification}
      </label>
    </div>
    <div>{labels?.iphonenotificationgoodprice}</div>
  </div>
  <div className="d-flex align-items-center gap-5">
    <div className="group">
      <input
        type="radio"
        id="NoiphonenotificationCheckbox"
        name="iphonenotificationGroup"
        checked={checkboxes.Noiphonenotification}
        onChange={() => handleCheckboxChange("Noiphonenotification")}
      />
      <label htmlFor="NoiphonenotificationCheckbox">
        {labels?.Noiphonenotification}
      </label>
    </div>
    <div>{labels?.iphonenotificationbadprice}</div>
  </div>
</div>

         {show && showHorizontalLine && <hr />}
         <h3>{labels?.orignlechargerTittle}</h3>

         {/* <div className="d-flex  align-items-center justify-content-between gap-lg-5  gap-2 flex-lg-nowrap flex-wrap">
         <div className="d-flex  align-items-center gap-5">
         <div  className="group">
                  <input
                    type="radio"
                    id="orignlechargerCheckbox"
                    name="orignlechargerCheckbox"
                    checked={checkboxes.orignlechargerCheckbox}
                    onChange={() => handleCheckboxChange("orignlechargerCheckbox")}
                  />
                  <label htmlFor="orignlecharger" >
                    {labels?.orignlecharger}
                  </label>
                </div>
                <div>{labels?.orignlechargergoodprice}</div> 
         </div>
         <div className="d-flex  align-items-center gap-5">
         <div  className="group">
                  <input
                    type="radio"
                    id="NoorignlechargerCheckbox"
                    name="NoorignlechargerCheckbox"
                    checked={checkboxes.Noorignlecharger}
                    onChange={() => handleCheckboxChange("Noorignlecharger")}
                  />
                  <label htmlFor="Noorignlecharger" >
                    {labels?.Noorignlecharger}
                  </label>
                </div>
                <div>{labels?.orignlechargerbadprice}</div> 
         </div>
         </div>  */}
         <div className="d-flex  align-items-center justify-content-between gap-lg-5  gap-2 flex-lg-nowrap flex-wrap">
         <div className="d-flex  align-items-center gap-5">
         <div  className="group">
                  <input
                    type="radio"
                    id="orignlechargerCheckbox"
                    name="orignlechargerGroup"
                    checked={checkboxes.orignlechargerCheckbox}
                    onChange={() => handleCheckboxChange("orignlechargerCheckbox")}
                  />
                  <label htmlFor="orignlecharger" >
                    {labels?.orignlecharger}
                  </label>
                </div>
                <div>{labels?.orignlechargergoodprice}</div> 
         </div>
         <div className="d-flex  align-items-center gap-5">
         <div  className="group">
                  <input
                    type="radio"
                    id="NoorignlechargerCheckbox"
                    name="orignlechargerGroup"
                    checked={checkboxes.Noorignlecharger}
                    onChange={() => handleCheckboxChange("Noorignlecharger")}
                  />
                  <label htmlFor="Noorignlecharger" >
                    {labels?.Noorignlecharger}
                  </label>
                </div>
                <div>{labels?.orignlechargerbadprice}</div> 
         </div>
         </div> 

            </>
          )}

         
        </form>
      </div>
    </section>
  );
};

export default Iphonecard;
