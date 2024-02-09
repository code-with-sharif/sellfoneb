import React from "react";
import "../../Styles/About/Ourvision.css";
import Ourvisionimg1 from "../../Images/About/Ourvision/Ourvisionimg1.png";
const Ourvision = () => {
  return (
    <>
      <section className="aboutvisionbgColor">
        <section style={{}}>
          <div className="container">
            <div className=" row gap-4">
              <div className="col-12 col-lg-6  ">
              <div className="visiontextSection">

              <h1 className=" pb-3">
                 Our  
                  <span className="green">Vision</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.
                </p>
              </div>
              </div>
              <div className="col-12 col-lg-4 Ourvisionimg1" style={{ width: "600px" }}>
                <div style={{}} className="  mx-auto  ">
                  <img
                    className="img-fluid"
                    src={Ourvisionimg1}
                    style={{ objectFit: "cover", maxWidth: "100%" }}
                    alt="sell phone image not show"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Ourvision;
