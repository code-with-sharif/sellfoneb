// Recomendmobilecard.jsx

import React from 'react';
import PropTypes from 'prop-types';
import '../../src/Styles/Recomendmobilecard.css';

function Recomendmobilecard({ imgSrc, title, price, buttonLabel }) {
  
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className='carddata'>
            <div>
              <img
                className='img-fluid border border-2 border-danger'
                style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "7px" }}
                src={imgSrc}
                alt=""
              /> 
            </div>
            <div className='p-2'>
              <h5 className="cardtitle thirdheading">{title}</h5>
              <p className="cardprice">{price}</p>
              <button className={` btnstyle py-2 ${window.innerWidth >= 992? "px-5":"px-2"}`}   style={{maxWidth:"170px", maxHeight:"50px"}}>{buttonLabel}</button>
            </div>
          </div>
          {/* /// */}
          {/* <div class="card">
    <img src={imgSrc}  class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div> */}
          {/* /// */}
        </div>



      </div>
    </main>
  );
}

Recomendmobilecard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
};

export default Recomendmobilecard;
