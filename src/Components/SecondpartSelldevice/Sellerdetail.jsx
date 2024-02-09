import React, { useState } from 'react'

const Sellerdetail = () => {
    const [sellerData, setSellerData] = useState({
        sellerName: '',
        emailAddress: '',
        firstMobileNumber: '',
        secondMobileNumber: '',
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setSellerData({ ...sellerData,
             [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
    
        // Implement form validation here before submitting data
        console.log('Form submitted:', sellerData);
    
        // Submit form data or perform appropriate actions
      };
  
  return (
  <>

    <section style={{paddingTop:"60px" ,paddingBottom:"60px"}}>
    <div className="text-center">
          <h1 className="">
         <span className="green px-1">Seller </span>
            Details
          </h1>
          <p className="p-lg-0 px-2 mx-auto" style={{ marginTop: '15px', maxWidth: '500px' }}>
          Enter a genuine 11 digit mobile no. with format 03XXXXXXXXX. All inquires will come on this number.
          </p>
        </div>
        {/* form section */}
        <div className="" style={{ maxWidth: '800px', padding: '0px 30px 0px 30px' ,margin:"auto",   }}>
      

        <form className="row my-4" onSubmit={handleSubmit}>
          <div className="col-lg-6 col-12 mb-4">
            <label htmlFor="sellerName" className="form-label  inputlable">
              Seller Name <span className='green'>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder='Enter Seller Name'
              id="sellerName"
              name="sellerName"
              value={sellerData.sellerName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-lg-6 col-12 mb-4">
            <label htmlFor="emailAddress" className="form-label inputlable">
              Email Address <span className='green'>*</span>
            </label>
            <input
              type="email"
              className="form-control"
              placeholder='Enter Email Address'
              id="emailAddress"
              name="emailAddress"
              value={sellerData.emailAddress}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-lg-6 col-12 mb-4">
            <label htmlFor="firstMobileNumber" className="form-label inputlable">
            Mobile Number   <span className='green'>*</span>
            </label>
            <input
              type="tel"
              className="form-control"
              placeholder='XXX XXXXXX X'
              id="firstMobileNumber"
              name="firstMobileNumber"
              value={sellerData.firstMobileNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-lg-6 col-12 mb-4">
            <label htmlFor="secondMobileNumber" className="form-label inputlable">
            Secondary Number (Optional) <span className='green'>*</span>
            </label>
            <input
              type="tel"
              className="form-control"
              placeholder='XXX XXXXXX X'
              id="secondMobileNumber"
              name="secondMobileNumber"
              value={sellerData.secondMobileNumber}
              onChange={handleChange}
            />
          </div>

          <div className="col-lg-12 text-center my-4">
            <button type="submit" className="btn ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  </>
  )
}

export default Sellerdetail