import React from 'react'
import Uploadphoto from '../SecondpartSelldevice/Uploadphoto';
import Sellerdetail from '../SecondpartSelldevice/Sellerdetail';
import Sellphonesafly from '../Home/Sellphonesafly';
import Needquestion from '../Home/Needquestion';
import Editphonepriceherosection from './Editphonepriceherosection';

const Editphoneprice = () => {
  return (
   <>
    <section>

    <Editphonepriceherosection />
      <Uploadphoto/>
      <Sellerdetail />
      <Sellphonesafly />
      <Needquestion />
      </section>
   </>
  )
}

export default Editphoneprice;