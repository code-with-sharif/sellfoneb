import React, { useRef, useState } from 'react'
import '../../Styles/Adsphonesection/Phonepicforsale.css'
import Locationicon from '../../Images/Adsphonesection/Phonepicforsale/Locationicon.png'
import Varientpic from './Varientpic'
import Carouselmultipleimg from './Carouselmultipleimg'
const Phonepicforsale = () => {

  return (
 <>
    <section>
<div className='salephone'>
<div className='sellphoneheading'>Apple iPhone 13</div>
<div className='d-flex align-content-center gap-2 mt-3' style={{marginLeft:"20px"}}>
    <div><img className='img-fluid w-100' src={Locationicon} alt="Locationicon not show" /></div>
    <p className='green mt-1'>Islamabad</p>
</div>

<div>
<Carouselmultipleimg/>

</div>

</div>
    </section>
 </>
  )
}

export default Phonepicforsale;