import React, { useState } from "react";
import "../../Styles/Contact/Contactform.css";

const Contactform = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here using the formData state
    console.log(formData);
  };

  return (
    <section className="" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      <h1 className=" text-center">
         Contact  
        <span className="green"> Us</span>
      </h1>

      <p
        style={{ marginTop: "15px", maxWidth: "500px" }}
        className="text-center mx-auto p-lg-0 px-3"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="container">
        <div className="row justify-content-lg-center">
          <div className="col-12 col-lg-9">
            <form action="#!">
              <div className="row gy-xl-4 gy-3   p-xl-3  ">
                <div className="col-6 nameinput ">
                  <label
                    htmlFor="firstName"
                    className="form-label contactTitle"
                  >
                    First Name
                    <span className=" " style={{ color: "#92C43E" }}>
                      *
                    </span>
                  </label>
                  <div
                    className="input-group"
                    style={{ caretColor: "#92C43E" }}
                  >
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Enter First Name"
                    />
                  </div>
                </div>

                <div className="col-6 nameinput">
                  <label htmlFor="lastName" className="form-label contactTitle">
                    Last Name
                    <span className=" " style={{ color: "#92C43E" }}>
                      *
                    </span>
                  </label>
                  <div
                    className="input-group"
                    style={{ caretColor: "#92C43E" }}
                  >
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Enter Last Name"
                    />
                  </div>
                </div>

                <div className="col-12 col-lg-6">
                  <label htmlFor="email" className="form-label contactTitle">
                    Email Address
                    <span className="" style={{ color: "#92C43E" }}>
                      *
                    </span>
                  </label>
                  <div
                    className="input-group"
                    style={{ caretColor: "#92C43E" }}
                  >
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter Email Address"
                    />
                  </div>
                </div>

                <div className="col-12 col-lg-6">
                  <label htmlFor="phone" className="form-label contactTitle">
                    Phone Number
                    <span className=" " style={{ color: "#92C43E" }}>
                      *
                    </span>
                  </label>
                  <div
                    className="input-group"
                    style={{ caretColor: "#92C43E" }}
                  >
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter Phone Number"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="message" className="form-label contactTitle">
                    Your Message
                    <span className=" " style={{ color: "#92C43E" }}>
                      *
                    </span>
                  </label>
                  <div
                    className="input-group"
                    style={{ caretColor: "#92C43E" }}
                  >
                    <textarea
                      style={{ maxHeight: "250px" }}
                      className="form-control "
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Type Here.."
                    ></textarea>
                  </div>
                </div>

                <div className="col-lg-3 col-12 mx-auto mt-5">
                  <div className="d-grid">
                    <button className="btn" type="submit ">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactform;
