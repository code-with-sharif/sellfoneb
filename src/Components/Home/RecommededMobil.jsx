import React, { Fragment } from "react";
import Recomendmobilecard from "../../CommonComponents/Recomendmobilecard";
import { Link } from 'react-router-dom';

const RecommededMobil = ({ recomendmobile }) => {
  let mapdata = recomendmobile?.[0];
 

  return (
    <>
       <div>
        <div className="text-center pb-5 sellphoneheading">
          <span className="green">{mapdata?.firstname}</span> {mapdata?.lastname}
        </div>

        {/* Card section */}
        <div className="" style={{width:"90%", margin:"auto"}}>
          <div className="row row-cols-2 row-cols-lg-5">
            {recomendmobile &&
              recomendmobile?.map((item, index) => (
                <Fragment key={index}>
                  <div className="col mb-4">
                    <Recomendmobilecard
                    id={item?.id}
                      imgSrc={item?.imgSrc}
                      title={item?.title}
                      price={item?.price}
                      buttonLabel={item?.buttonLabel}
                    />
                  </div>
                </Fragment>
              ))}
          </div>
        </div>
     </div>
    </>
  );
};

export default RecommededMobil;

