import React, { useState } from "react";
import '../../Styles/Myaccountpage/Contacdelail.css';

const Contactdetail = () => {
  const [contactInfo, setContactInfo] = useState({
    phone: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission
    console.log("Submitted:", contactInfo);
  };
console.log(contactInfo,"contactInfo")
  return (
    <>
      <section className="mt-5">
        <div className="contact-card">
          <h1>Contact Details</h1>
          <hr />

          <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="col-7 col-lg-6">
                <label htmlFor="phone" className="form-label contactTitle">
                  Phone Number
                  <span className="" style={{ color: "#92C43E" }}>
                    *
                  </span>
                </label>
                <div className="input-group" style={{ caretColor: "#92C43E" }}>
  <input
    type="tel"
    className="form-control"
    id="phone"
    name="phone"
    value={contactInfo.phone}
    onChange={handleChange}
    onKeyPress={(e) => {
      // Allow only numeric input
      const pattern = /^[0-9\b]+$/;
      if (!pattern.test(e.key)) {
        e.preventDefault();
      }
    }}
    required
    placeholder="Enter Phone Number"
    style={{border: "1px solid #92c43e"}}

  />
</div>


              </div>

              <div className="mt-4">
                <button type="submit" className="btn numberbtn" >Change </button>
              </div>
            </div>
          </form>

          <div className="group mt-2 mb-4">
            <input type='checkbox' />
            <label htmlFor="">
              Show number on my profile
            </label>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="col-7 col-lg-6">
                <label htmlFor="email" className="form-label contactTitle">
                  Email Address
                  <span className="" style={{ color: "#92C43E" }}>
                    *
                  </span>
                </label>
                <div className="input-group" style={{ caretColor: "#92C43E" }}>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={contactInfo.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter Email Address"
                    style={{border: "1px solid #92c43e"}}

                  />
                </div>
              </div>

              <div className="mt-4 " style={{ }}>
                <button type="submit" className="btn numberbtn">Change </button>
              </div>
            </div>
          </form>

          <div className="mt-5">
            <button className="btn  confirmationbutton">Confirm Changes</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactdetail;
