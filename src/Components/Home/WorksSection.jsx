import React from "react";
import "../../Styles/Home/WorksSection.css";

const WorksSection = () => {
  return (
    <>
      <section
        className="bgcolor  "
        style={{ paddingTop: "60px", paddingBottom: "60px" }}
      >
        <div className="container px-lg-0 px-4">
          
          <div className="mb-5">
          <h1 className=" text-center ">
           
           How it <span className="green">Works</span>?
       
         </h1>
         <p className="workdata mx-auto text-center " style={{ maxWidth: "500px" }}>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua.
         </p>
       
          </div>

          {/* card section  */}
          <div className="row gx-2 gy-2" style={{border:"2px solid red"}}>
            <div className="col-lg-6 col-12">
              <div className="card cardData p-4">
                 
                  <h3 className="text-center pb-3">
                    Sell <span className="green">Phone</span>
                  </h3>
           

                {/* Section 1 */}
                <div className="d-flex gap-3">
                  <div className="position-relative">
                    <div className="bgcirclecallimg">
                      <div className="subcircle">
                        <span className="green quantity">01</span>
                      </div>
                    </div>
                    <div
                      style={{
                        paddingTop: "0px",
                        paddingLeft: "30px",
                        maxWidth: "100%",
                        height: "100%",
                      }}
                      className="vertical-line "
                    ></div>
                  </div>
                  <div>
                    <h6 className="  title">Lorem Ipsum</h6>
                    <p className="titleInfo">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod temp por incididunt ut labore et dolore
                      magna aliqua
                    </p>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="d-flex gap-3">
                  <div className="position-relative">
                    <div className="bgcirclecallimg">
                      <div className="subcircle">
                        <span className="green quantity">02</span>
                      </div>
                    </div>
                    <div
                      style={{
                        paddingTop: "0px",
                        paddingLeft: "30px",
                        maxWidth: "100%",
                        height: "100%",
                      }}
                      className="vertical-line "
                    ></div>
                  </div>

                  <div>
                    <h6 className=" title">Lorem Ipsum</h6>
                    <p className="titleInfo">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod temp por incididunt ut labore et dolore
                      magna aliqua
                    </p>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="d-flex gap-3">
                  <div className="bgcirclecallimg">
                    <div className="subcircle">
                      <span className="green quantity">03</span>
                    </div>
                  </div>
                  <div>
                    <h6 className=" title">Lorem Ipsum</h6>
                    <p className="titleInfo">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod temp por incididunt ut labore et dolore
                      magna aliqua
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Buy Phone section */}
            <div className="col-lg-6 col-12">
              <div className=" card cardData p-4">
              
                  <h3 className="text-center pb-3">
                    Buy <span className="green">Phone</span>
                  </h3>
                 

                {/* Section 1 */}
                <div className="d-flex gap-3">
                  <div className="position-relative">
                    <div className="bgcirclecallimg">
                      <div className="subcircle">
                        <span className="green quantity">01</span>
                      </div>
                    </div>
                    <div
                      style={{
                        paddingTop: "0px",
                        paddingLeft: "30px",
                        maxWidth: "100%",
                        height: "100%",
                      }}
                      className="vertical-line "
                    ></div>
                  </div>
                  <div>
                    <h6 className=" title">Lorem Ipsum</h6>
                    <p className="titleInfo">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod temp por incididunt ut labore et dolore
                      magna aliqua
                    </p>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="d-flex gap-3">
                  <div className="position-relative">
                    <div className="bgcirclecallimg">
                      <div className="subcircle">
                        <span className="green quantity">02</span>
                      </div>
                    </div>
                    <div
                      style={{
                        paddingTop: "0px",
                        paddingLeft: "30px",
                        maxWidth: "100%",
                        height: "100%",
                      }}
                      className="vertical-line "
                    ></div>
                  </div>

                  <div>
                    <h6 className=" title">Lorem Ipsum</h6>
                    <p className="titleInfo">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod temp por incididunt ut labore et dolore
                      magna aliqua
                    </p>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="d-flex gap-3">
                  <div className="bgcirclecallimg">
                    <div className="subcircle">
                      <span className="green quantity">03</span>
                    </div>
                  </div>
                  <div>
                    <h6 className=" title">Lorem Ipsum</h6>
                    <p className="titleInfo">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod temp por incididunt ut labore et dolore
                      magna aliqua
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorksSection;
