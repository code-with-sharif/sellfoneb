import React from 'react';
import '../../Styles/SellerProduct/Whysellphone.css'
const VerticalLine = () => (
  <div style={{ position: "absolute", top: "25%", right: 0, height: "40%", borderRight: "2px solid #D9D9D9", width: "50%", margin:"auto" }}></div>
);

const Whysellphone = ({ verticalLine }) => {
  const dataArray = [
    { id: 1, heading: "#1", description: "Pakistan’s #1 Mobile Phones selling marketplace" },
    { id: 2, heading: "50k", description: "About 50k+ people visit this website daily" },
    { id: 3, heading: "12k", description: "About 12+ mobile phones have been sold" },
    { id: 4, heading: "24h", description:"75% mobile phones have been sold within 24 hours" },
  ];

  return (
    <>
      <section style={{paddingTop:"60px" , paddingBottom:"60px"}}>
        <div className="text-center ">
          <h1 className=" p-2">
           Why  
            <span className="green px-2">Sell</span>
            your mobile on Sellfone.pk? 
          </h1>
          <p
            className="p-lg-0 px-2  mx-auto px-3"
            style={{ marginTop: "15px", maxWidth: "500px" }}
          >
            At Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        {/* card  */}
        <div className='border d-flex flex-wrap' style={{ width: "85%", height: "auto", padding: "30px", margin: "auto", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", borderRadius:"7px"}}>
          {dataArray.map((data) => (
            <div key={data.id} className='sellphoneCArd text-center' style={{ position: "relative" }}>
              <h3 className=' green my-2'>{data.heading}</h3>
              <p>{data.description}</p>
              {/* Check if the verticalLine prop is provided, and render it if true */}
              {verticalLine && <VerticalLine />}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Whysellphone;
