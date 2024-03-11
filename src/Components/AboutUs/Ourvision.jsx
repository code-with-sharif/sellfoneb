import React from "react";
import "../../Styles/About/Ourvision.css";
import Ourvisionimg1 from "../../Images/About/Ourvision/Ourvisionimg1.png";
const Ourvision = () => {
  return (
    <>
      <section className="aboutvisionbgColor">
        <section style={{width:"95%", margin:"auto"}}>
          <div className="" style={{}} >
            <div className=" row g-4">
              <div className="col-12 col-lg-6  ">
              <div className="visiontextSection">

              <div className=" sellphoneheading pb-3">
                 Our  
                  <span className="green"> Vision</span>
                </div>
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
              <div className="col-12 col-lg-6 Ourvisionimg1" style={{}}>
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
