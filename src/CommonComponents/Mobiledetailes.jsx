import React, { useState, useEffect } from 'react';
import '../Styles/Home/Mobiledetailes.css';

const Mobiledetailes = () => {
  // Sample data array of mobile phone details
  const mobileDetails = [
    { id: 1, label: 'Registered In:', value: 'Islamabad' },
    { id: 2, label: 'Operating System:', value: 'iOS 17' },
    { id: 3, label: 'Storage:', value: '512GB' },
    { id: 4, label: 'Advert Ref#:', value: '5783453' },
    { id: 5, label: 'Color:', value: 'Aqua Grey' },
    { id: 6, label: 'Last Updated:', value: 'Dec 29, 2023' },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <section className=''>
        <div className='mobiledetailheader'>
          <h2>Mobile Phone Details</h2>
          <hr />
          <div className='container-fluid  p-0' style={{}}>
            <div className='row row-cols-1 row-cols-lg-2 p-0 m-0'>
              {mobileDetails.map((detail) => (
                <div className='col' key={detail.id}>
                  <div className='d-flex justify-content-between m-0 p-0'>
                    <h6 className='p-0  m-0' style={{}}>{detail.label}</h6>
                    <p className='m-0'>{detail.value}</p>
                  </div>
                  {/* Show <hr /> line based on screen size */}
                  <div  style={{}}>
                    {windowWidth >1024
                      ? detail.id <= 4 && <hr  />
                      : detail.id <= 5 && <hr />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mobiledetailes;
