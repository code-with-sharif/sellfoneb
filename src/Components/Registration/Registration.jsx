import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs"; // Import eye icons
import "../../Styles/Registration/Registration.css";
import {  toast } from 'react-toastify';

function Registration() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [passwordVisible, setPasswordVisible] = useState(false); // Define password visibility state
  const [confirmpasswordVisible, setConfirmPasswordVisible] = useState(false); // Define password visibility state
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleClose = () => {
    setShow(false);
    setFormData({
      firstName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    });
  };

  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: val,
    });

    
    if (name === "password") {
      if (value.length < 8) {
        setError("Password must be at least 8 characters long");
      } else if (!/[A-Z]/.test(value)) {
        setError("Password must contain at least one capital letter");
      } else if (!/\d/.test(value)) {
        setError("Password must contain at least one number");
      } else if (!/[@#$%^&*!]/.test(value)) {
        setError("Password must contain at least one special characte");
      } else {
        setError("");
      }
    }
    if (name === "email") {
      let validate = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(validate.test(value)) {
        setFormData({
          ...formData,
          [name]: value,
        });
        setEmailError(""); // Clear error if validation succeeds
      } else {
        setEmailError("Please enter a valid email address");
      }
    }
    
  };

  const handleRegistration = (e) => {
    e.preventDefault();

   
    if (formData.password === formData.confirmPassword) {

      toast.success("Registration successful!");
      handleClose();
    } else {
      toast.error(
        "Password and confirm password do not match "
      );
     
    }

    setFormData({
      firstName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    });
    
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle password visibility
  };
  const toggleconfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmpasswordVisible); // Toggle password visibility
  };

  return (
    <>
      <Link to="#" onClick={handleShow} className="registarationtitle">
        {" "}
        Registration
      </Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Modal.Title
            style={{ textAlign: "center" }}
            className="registrationheading"
          >
            Registration!
          </Modal.Title>
          <Modal.Title style={{ textAlign: "center" }} className="">
            <p className="my-1">
              <span>Already have an account? </span>
              <Link to="/login" className="green">
                Login{" "}
              </Link>
            </p>
          </Modal.Title>
          <Form onSubmit={handleRegistration}>
            <Link to="/">
              <div className="googleIcon mt-4">
                <span>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M26.9429 11.5658L15.522 11.5653C15.0177 11.5653 14.6089 11.974 14.6089 12.4783V16.1268C14.6089 16.631 15.0177 17.0399 15.5219 17.0399H21.9535C21.2493 18.8676 19.9348 20.3982 18.2577 21.3708L21.0002 26.1182C25.3993 23.5739 28.0002 19.1098 28.0002 14.1126C28.0002 13.4011 27.9477 12.8924 27.8428 12.3197C27.7631 11.8845 27.3853 11.5658 26.9429 11.5658Z"
                      fill="#167EE6"
                    />
                    <path
                      d="M14 22.5217C10.8525 22.5217 8.10478 20.802 6.62904 18.2573L1.88184 20.9935C4.29766 25.1805 8.82327 28 14 28C16.5395 28 18.9358 27.3162 21 26.1247V26.1182L18.2576 21.3707C17.0031 22.0983 15.5515 22.5217 14 22.5217Z"
                      fill="#12B347"
                    />
                    <path
                      d="M21 26.1247V26.1181L18.2576 21.3707C17.0032 22.0982 15.5516 22.5217 14 22.5217V28C16.5395 28 18.9359 27.3162 21 26.1247Z"
                      fill="#0F993E"
                    />
                    <path
                      d="M5.47827 14C5.47827 12.4486 5.90166 10.9971 6.62906 9.74273L1.88185 7.0065C0.683703 9.06423 0 11.454 0 14C0 16.546 0.683703 18.9358 1.88185 20.9935L6.62906 18.2572C5.90166 17.0029 5.47827 15.5514 5.47827 14Z"
                      fill="#FFD500"
                    />
                    <path
                      d="M14 5.47827C16.0525 5.47827 17.9378 6.20758 19.4103 7.42071C19.7736 7.71996 20.3016 7.69836 20.6344 7.36559L23.2195 4.78051C23.597 4.40295 23.5701 3.78492 23.1668 3.43503C20.6996 1.29462 17.4894 0 14 0C8.82327 0 4.29766 2.81952 1.88184 7.00651L6.62904 9.74274C8.10478 7.19797 10.8525 5.47827 14 5.47827Z"
                      fill="#FF4B26"
                    />
                    <path
                      d="M19.4103 7.42071C19.7736 7.71996 20.3017 7.69836 20.6344 7.36559L23.2195 4.78051C23.597 4.40295 23.5701 3.78492 23.1668 3.43503C20.6996 1.29456 17.4894 0 14 0V5.47827C16.0524 5.47827 17.9378 6.20758 19.4103 7.42071Z"
                      fill="#D93F21"
                    />
                  </svg>{" "}
                </span>
                <span className="black  ">Login via Google</span>
              </div>
            </Link>
            <div
              className="my-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <hr style={{ flex: 1, height: "1px" }} />
              <span style={{ padding: "0 10px" }}>or via Email</span>
              <hr style={{ flex: 1, height: "1px" }} />
            </div>

            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <Form.Label className="nametext">First Name</Form.Label>
                  <Form.Control
                    className=" "
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    placeholder="Enter First Name"
                    style={{ caretColor: "#92C43E" }}
                    onChange={handleInputChange}
                    required // Add required attribute
                  />
                </div>
                <div className="col-lg-6 col-12 m-lg-0 mb-2">
                  <Form.Label className="nametext">Last Name</Form.Label>
                  <Form.Control
                    className=" "
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    placeholder="Enter Last Name"
                    style={{ caretColor: "#92C43E" }}
                    onChange={handleInputChange}
                    required // Add required attribute
                  />
                </div>
              </div>
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput2">
  <Form.Label className="nametext">Mobile Number</Form.Label>
  <InputGroup className="mb-2">
    <InputGroup.Text id=" " className="numberprefix input-group-text">+92</InputGroup.Text>
    <FormControl
      type="number"
      name="mobileNumber"
      value={formData.mobileNumber}
      placeholder="XXX XXXXXX X"
      aria-label="Mobile Number"
      aria-describedby="mobile-prefix"
      style={{ caretColor: "#92C43E" }}
      onChange={handleInputChange}
      required
      pattern="[0-9]*"
     
    />
  </InputGroup>
</Form.Group>


            <Form.Group className="mb-2" controlId="exampleForm.ControlInput3">
              <Form.Label className="nametext">Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                placeholder="name@example.com"
                style={{ caretColor: "#92C43E" }}
                onChange={handleInputChange}
                required // Add required attribute
              />
                <p className="mt-1" style={{ color: "red" }}>
                  {emailError}
                </p>
            </Form.Group>

            <Form.Group
              className="mb-2 position-relative"
              controlId="exampleForm.ControlPassword"
            >
              <Form.Label className="nametext">Password</Form.Label>
              <div style={{ position: "relative" }}>
                <FormControl
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  placeholder="Enter your password"
                  style={{ caretColor: "#92C43E" }}
                  onChange={handleInputChange}
                  required
                  // maxLength={8}
                />
                <p className="mt-1" style={{ color: "red" }}>
                  {error}
                </p>

                {passwordVisible ? (
                  <BsEyeSlashFill
                    style={{
                      fontSize: "20px",
                      color: "#A5A7A5",
                      position: "absolute",
                      top: "17px",
                      right: "17px",
                      cursor: "pointer",
                    }}
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <BsEyeFill
                    style={{
                      fontSize: "20px",
                      color: "#A5A7A5",
                      position: "absolute",
                      top: "17px",
                      right: "17px",
                      cursor: "pointer",
                    }}
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
            </Form.Group>
            <Form.Group
              className="mb-2 position-relative"
              controlId="exampleForm.ConfirmPassword"
            >
              <Form.Label className="nametext">Confirm Password</Form.Label>
              <div style={{ position: "relative" }}>
                <FormControl
                  type={confirmpasswordVisible ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  placeholder="Confirm your password"
                  style={{ caretColor: "#92C43E" }}
                  onChange={handleInputChange}
                  required
                  // maxLength={8}
                />
                {confirmpasswordVisible ? (
                  <BsEyeSlashFill
                    style={{
                      fontSize: "20px",
                      color: "#A5A7A5",
                      position: "absolute",
                      top: "17px",
                      right: "17px",
                      cursor: "pointer",
                    }}
                    onClick={toggleconfirmPasswordVisibility}
                  />
                ) : (
                  <BsEyeFill
                    style={{
                      fontSize: "20px",
                      color: "#A5A7A5",
                      position: "absolute",
                      top: "17px",
                      right: "17px",
                      cursor: "pointer",
                    }}
                    onClick={toggleconfirmPasswordVisibility}
                  />
                )}
              </div>
            </Form.Group>

            <Form.Group
              className="mb-2 position-relative"
              controlId="exampleForm.TermsCheckbox"
            >
              <div className="group">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="" className="">
                  I agree to all{" "}
                  <span className="green">Terms & Conditions</span> and{" "}
                  <span className="green">Privacy Policy</span>
                </label>
              </div>
            </Form.Group>
            <Button
              className="w-100 mt-5"
              type="submit"
              style={{ border: "2px solid transparent" }}
            >
              Register
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Registration;
