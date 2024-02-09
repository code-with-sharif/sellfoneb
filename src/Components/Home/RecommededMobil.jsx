import React, { Fragment } from "react";
import Recomendmobilecard from "../../CommonComponents/Recomendmobilecard";
import { Link } from 'react-router-dom';

const RecommededMobil = ({ recomendmobile }) => {
  let mapdata = recomendmobile?.[0];
 

  return (
    <>
      <section className="" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        <h1 className="text-center pb-5">
          <span className="green">{mapdata?.firstname}</span> {mapdata?.lastname}
        </h1>

        {/* Card section */}
        <div className="container">
          <div className="row row-cols-2 row-cols-lg-5">
            {recomendmobile &&
              recomendmobile?.map((item, index) => (
                <Fragment key={index}>
                  <div className="col mb-4">
                    <Recomendmobilecard
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
      </section>
    </>
  );
};

export default RecommededMobil;
