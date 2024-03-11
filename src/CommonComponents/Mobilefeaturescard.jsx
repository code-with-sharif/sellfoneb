import React from 'react';
import '../Styles/Home/Mobilefeaturescard.css';
import displayimg from '../Images/Adsphonesection/Mobilefeaturescard/displayimg.png';
import simcardimg from '../Images/Adsphonesection/Mobilefeaturescard/simcardimg.png';
import Camera from '../Images/Adsphonesection/Mobilefeaturescard/Camera.png';
import chipcardimg from '../Images/Adsphonesection/Mobilefeaturescard/chipcardimg.png';
import FaceIDImg from '../Images/Adsphonesection/Mobilefeaturescard/FaceIDImg.png';
import Applepayimg from '../Images/Adsphonesection/Mobilefeaturescard/Applepayimg.png';
import VideoCamera from '../Images/Adsphonesection/Mobilefeaturescard/VideoCamera.png';
import Weightimg from '../Images/Adsphonesection/Mobilefeaturescard/Weight.png';
import Location from '../Images/Adsphonesection/Mobilefeaturescard/Location.png';

const Mobilefeaturescard = () => {
  // Example array of card data
  const cardData = [
    { id: 1, title: 'Display', imgSrc: displayimg },
    { id: 2, title: 'SIM Card', imgSrc: simcardimg },
    { id: 3, title: 'Chip', imgSrc: chipcardimg },
    { id: 1, title: 'Camera', imgSrc: Camera },
    { id: 2, title: 'Face ID', imgSrc: FaceIDImg },
    { id: 3, title: 'Apple Pay', imgSrc: Applepayimg },
    { id: 1, title: 'Video Recording', imgSrc: VideoCamera },
    { id: 2, title: 'Weight', imgSrc: Weightimg },
    { id: 3, title: 'Location', imgSrc: Location },
 
  ];

  return (
    <>
      <section className=''>
        <div className='mobilefeatureheader ' style={{}}>
          <h2>Mobile Phone Features</h2>
          <hr className='' />
          <div className="container-fluid">
            <div className='row row-cols-2 row-cols-lg-3 row-gap-4 align-items-center'>
              {cardData.map(card => (
                <div className='col p-0' key={card.id}>
                  <div className='d-flex gap-3 p-0'>
                    <div className=''>
                      <img className='img-fluid' src={card.imgSrc} alt='' style={{}} />
                    </div>
                    <h6 className='mt-1'>{card.title}</h6>
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

export default Mobilefeaturescard;
