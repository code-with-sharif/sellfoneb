import React, { useState, useRef } from 'react';
import '../../Styles/Myaccountpage/Accountcard.css';
import userimg from "../../Images/Myaccountpage/Profilecard/userimg.png";
import cameraicon from '../../Images/Myaccountpage/caneraicon.png';

const Accountcard = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '' });
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log("Selected file:", file);
  };

  const handleProfileClick = () => {
    fileInputRef.current.click();
  };
 

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form submission here
    console.log("Form submitted with data:", formData);
  };
  return (
    <>
      <section className=''>
        <div className='account-card'>
          <h1>My Account</h1>
          <hr />
          <h3>General Information</h3>
          <div className="accountprofile position-relative" onClick={handleProfileClick}>
            <img src={selectedFile ? URL.createObjectURL(selectedFile) : userimg} alt="profile Photo" className="img-fluid" />
            <div className='position-absolute' style={{ left: "90px", top: "90px" }}>
              <img src={cameraicon} alt="cameraicon" />
            </div>
            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>

          <div className='mt-3'>
            <form onSubmit={handleSubmit}>
              <div className="row gy-xl-4 gy-3">
                <div className="col-6 col-lg-6 col-12  nameinput">
                  <label htmlFor="firstName" className="form-label contactTitle">
                    First Name
                    <span className="" style={{ color: "#92C43E" }}>*</span>
                  </label>
                  <div className="input-group" style={{ caretColor: "#92C43E" }}>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter First Name"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-12 nameinput">
                  <label htmlFor="lastName" className="form-label contactTitle">
                    Last Name
                    <span className="" style={{ color: "#92C43E" }}>*</span>
                  </label>
                  <div className="input-group" style={{ caretColor: "#92C43E" }}>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter Last Name"
                    />
                  </div>
                </div>
              </div>
              <p className=' my-3' style={{ color: "#A5A7A5" }}>Only the first letter of your surname will be displayed to other users</p>
              <div className='mt-5'>
                <button type="submit" className='btn confirmationbtn'>Confirm Changes</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Accountcard;
