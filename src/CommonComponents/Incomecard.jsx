import React from 'react'
import '../Styles/Home/Incomecard.css'
const Incomecard = () => {
  return (

    <>
        <section>
            <div className='icomecardcontainer'>
            <div className='text-center'>
            <h2 className=''>Pkr 12 Lacs</h2>
             <h6 className='py-2 w-50 rounded' style={{background:"#F2F2F2" , width:"30%" , margin:"auto"}}>Managed By Sellfone.pk</h6>
             <div className='d-flex gap-3 justify-content-center mt-3'style={{width:"90%" , margin:"auto"}}>
                <button className='btn w-100'>Call Now</button>
                <button className=' btn btn-white w-100'>Message Now</button>
             </div>
            </div>
            </div>
        </section>
    </>
    )
}

export default Incomecard