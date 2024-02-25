import React from 'react';
import noticationcirleimg from '../Images/Adsphonesection/Notificationforadds/noticationcirleimg.png'
import Flag from '../Images/Adsphonesection/Notificationforadds/Flag.png'

const Notificationforadds = () => {
  return (
    <>
      <section>
        <div className='' style={{ marginTop:"8%", height: "200px", border: "2px solid #E3E3E3", borderRadius: "7px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <div className='d-flex flex-column gap-2' style={{ width: "90%", borderRadius: "7px" }}>
            <div className='d-flex gap-3 align-items-center py-2 justify-content-center' style={{ border: "2px solid #92C43E", borderRadius: "7px" }}>
              <div>
                <img src={noticationcirleimg} alt="" />
              </div>
              <h6 className='mt-1'>Notify As Sold</h6>
            </div>
            <div className='d-flex gap-3 align-items-center py-2 justify-content-center' style={{ border: "2px solid #92C43E", borderRadius: "7px" }}>
              <div>
                <img src={Flag} alt="" />
              </div>
              <h6 className='mt-1'>Report This Ad</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Notificationforadds;
