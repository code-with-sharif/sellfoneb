import React from "react";
import "../Styles/Home/Selectedbrandcard.css";

const Selectedbrandcard = ({
  editphoneprice,
  selectedBarand,
  showHorizontalLine,
  show
}) => {
  return (
    <section>
      <div className="selectedbrand">
      <div
          className="d-flex justify-content-between"
           style={{ alignItems:"flex-end"}}  
        >
          <div className="p-0px inputlable  ">Brand</div>
          <p className="p-0 inputchecklable  mb-0">{selectedBarand?.brand} {editphoneprice?.brand}</p>
           
        </div>
       

 
          <hr  className=""   />
        


        <div
          className="d-flex justify-content-between"
          style={{ }}
        >
          <span className="p-0px inputlable">Model</span>
          <p className="p-0 inputchecklable mb-0">{selectedBarand?.model} {editphoneprice?.model}</p>
        </div>
         {show &&(
          <>
{showHorizontalLine && (
  <div style={{}}><hr   /></div>
)}
        <div
          className="d-flex justify-content-between"
          style={{ alignItems:"flex-end"}}  
        >
          <span className="p-0px inputlable">
            {editphoneprice?.storagecapicitytitle}
          </span>
          <p className="p-0 mb-0 inputchecklable">
            {editphoneprice?.StorageCapacity}
          </p>
        </div>
        {showHorizontalLine && (
  <div style={{}}><hr   /></div>
)}
       
        <div
          className="d-flex justify-content-between"
          style={{   }}
        >
          <span className="p-0px inputlable">
            {editphoneprice && editphoneprice?.conditiontitle}
          </span>
          <p className="p-0 inputchecklable">{editphoneprice?.Condition}</p>
        </div>
        </>
        )}
      </div>
    </section>
  );
};

export default Selectedbrandcard;
