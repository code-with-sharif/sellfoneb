import React from "react";
import "../../Styles/Home/Sellphonesafly.css";
import sellphone from  '../../Images/Home/Sellphonesafely/Sellphone_img1.png'
const Sellphonesafly = () => {
  return (
    <>
      <section style={{paddingTop:"60px", paddingBottom:"60px"}}>
        <div className="" style={{width:"90%" , margin:"auto"}}>
          <div className=" row g-5  "> 
            <div className="col-12 col-lg-6 sellfonetext  ">
              <div className=" pb-3 sellphoneheading">
                 Sell ​​your phone  
                <span className="green"> safely and quickly</span>
              </div>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
            </div>
            <div className="col-12 col-lg-6 sellphoneimg  " style={{width:"px"}}>
                <div style={{ }} className="  mx-auto  ">
                    <img className="img-fluid" src={sellphone}style={{objectFit:"cover", maxWidth:"100%"}} alt="sell phone image not show" />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sellphonesafly