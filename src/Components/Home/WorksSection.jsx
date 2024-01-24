import React from "react";
import "../../Styles/WorksSection.css";

const WorksSection = () => {
  return (
    <>
      <main className="bgcolor  " style={{paddingTop:"60px", paddingBottom:"60px"}}>
        <div className="container px-lg-0 px-4">
          <div className="heading text-center ">
            <span className="seconderyColor">How It </span>
            <span className="tertiaryColor">Works</span>
            <p className="workdata mx-auto" style={{maxWidth: "500px"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor  
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* card section  */}
          <div className="row d-flex gap-2">
            <div className="col-lg-6 col-12 card">
              <div className="heading text-center p-4">
                <span className="tertiaryColor heading">Sell </span>
                <span className="seconderyColor">Phone</span>
              </div>

              {/* Section 1 */}
              <div className="d-flex gap-3" style={{ paddingTop: "0px", paddingLeft: "30px" }}>
              <div className="position-relative">
                <div className="bgcirclecallimg">
                  <div className="subcircle">
                    <span className="tertiaryColor quantity">01</span>
                  </div>

                </div>
                <div style={{ paddingTop: "0px", paddingLeft: "30px" }} class="vertical-line "></div>

                </div>
                <div>
                  <h5 className="subheading title">Lorem Ipsum</h5>
                  <p className="titleInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp por incididunt ut labore et dolore magna aliqua</p>
                </div>
              </div>

              
 

              {/* Section 2 */}
              <div className="d-flex gap-3" style={{ paddingTop: "0px", paddingLeft: "30px" }}>
                <div className="position-relative">
                <div className="bgcirclecallimg">
                  <div className="subcircle">
                    <span className="tertiaryColor quantity">02</span>
                  </div>

                </div>
                <div style={{ paddingTop: "0px", paddingLeft: "30px" }} class="vertical-line "></div>

                </div>

                <div>
                  <h5 className="subheading title">Lorem Ipsum</h5>
                  <p className="titleInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp por incididunt ut labore et dolore magna aliqua</p>
                </div>
                
              </div>


              {/* Section 3 */}
              <div className="d-flex gap-3" style={{ paddingTop: "0px", paddingLeft: "30px" }}>
                <div className="bgcirclecallimg">
                  <div className="subcircle">
                    <span className="tertiaryColor quantity">03</span>
                  </div>
                </div>
                <div>
                  <h5 className="subheading title">Lorem Ipsum</h5>
                  <p className="titleInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp por incididunt ut labore et dolore magna aliqua</p>
                </div>
              </div>
            </div>
            {/* Buy Phone section */}
            <div className="col-lg-6 col-12 card">
              <div className="heading text-center p-4">
                <span className="tertiaryColor heading">Buy </span>
                <span className="seconderyColor">Phone</span>
              </div>

              {/* Section 1 */}
              <div className="d-flex gap-3" style={{ paddingTop: "0px", paddingLeft: "30px" }}>
              <div className="position-relative">
                <div className="bgcirclecallimg">
                  <div className="subcircle">
                    <span className="tertiaryColor quantity">01</span>
                  </div>

                </div>
                <div style={{ paddingTop: "0px", paddingLeft: "30px"  }} class="vertical-line "></div>

                </div>
                <div>
                  <h5 className="subheading title">Lorem Ipsum</h5>
                  <p className="titleInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp por incididunt ut labore et dolore magna aliqua</p>
                </div>
              </div>
 
 

              {/* Section 2 */}
              <div className="d-flex gap-3" style={{ paddingTop: "0px", paddingLeft: "30px" }}>
                <div className="position-relative">
                <div className="bgcirclecallimg">
                  <div className="subcircle">
                    <span className="tertiaryColor quantity">02</span>
                  </div>

                </div>
                <div style={{ paddingTop: "0px", paddingLeft: "30px" }} class="vertical-line "></div>

                </div>

                <div>
                  <h5 className="subheading title">Lorem Ipsum</h5>
                  <p className="titleInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp por incididunt ut labore et dolore magna aliqua</p>
                </div>
                
              </div>


              {/* Section 3 */}
              <div className="d-flex gap-3" style={{ paddingTop: "0px", paddingLeft: "30px" }}>
                <div className="bgcirclecallimg">
                  <div className="subcircle">
                    <span className="tertiaryColor quantity">03</span>
                  </div>
                </div>
                <div>
                  <h5 className="subheading title">Lorem Ipsum</h5>
                  <p className="titleInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp por incididunt ut labore et dolore magna aliqua</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
};

export default WorksSection;
