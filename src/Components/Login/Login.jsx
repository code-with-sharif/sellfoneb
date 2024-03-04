


import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../../Styles/Login/Login.css";
import { Link } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import {  toast } from 'react-toastify';
function Login() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === "password") {
      if (value.length < 8) {
        setError("Password must be at least 8 characters long");
      } 
      else if (!/[A-Z]/.test(value)) {
        setError("Password must contain at least one capital letter");
      }
      else if (!/\d/.test(value)) {
        setError("Password must contain at least one number");
      }
      else if (!/[@#$%^&*!]/.test(value)) {
        setError("Password must contain at least one special characte");
      }
      else {
        setError("");
      }
    }
    
    
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!error) {
      toast.success("Login successfully")
      // alert(`Logging successfully with: ${formData.email}, ${formData.password}`);
      // console.log("Logging in with:", formData.email, formData.password);
      setFormData({ email: "", password: "" });
      handleClose();
    }
    if (error) {
      toast.error("please insert  valid email and password")
      // alert(`Logging successfully with: ${formData.email}, ${formData.password}`);
      // console.log("Logging in with:", formData.email, formData.password);
      setFormData({ email: "", password: "" });
   
    }
  };

  return (
    <>
      <Link to="#" onClick={handleShow} className="logintitle">
        {" "}
        Login
      </Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Modal.Title style={{ textAlign: "center" }} className="loginheading">
            Welcome Back!
          </Modal.Title>
          <Modal.Title style={{ textAlign: "center" }} className="">
            <p className="my-1">
              Don’t have an account yet?
              <Link to="/registration" onClick={handleClose}>
                <span className="green mx-2">Register here</span>
              </Link>
            </p>
          </Modal.Title>
          {/* Main Form */}
          <Form onSubmit={handleLogin}>
          {/* Google Login */}
          <Link>
              <div className="googleIcon mt-4 ">
              <span>
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
                  </svg>
                </span>
                <span className=" black ">Login via Google</span>
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

            {/* Email Input */}
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label className="emailtext">Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="name@example.com"
                autoFocus
                style={{ caretColor: "#92C43E" }}
                required
              />
            </Form.Group>

            {/* Password Input */}
            <Form.Group
              className="mb-3 position-relative"
              controlId="exampleForm.ControlPassword"
            >
              <Form.Label className="passwordtext">Password</Form.Label>
              <div className="" style={{ position: "relative" }}>
                <Form.Control
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  style={{ caretColor: "#92C43E" }}
                  required
                  // maxLength={8}
                />
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
                      // border:"2px solid red"
                    }}
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
              <div className="d-flex justify-content-between">
                <div>  
              <p className="mt-1" style={{ color: "red" }}>{error}</p>
                
                 </div>
                <div className="text-end mt-1">
                  <a
                    href="#"
                    onClick={() => alert("Forgot Password?")}
                    className="forgot-password-link"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
            </Form.Group>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-100 btn"
              style={{ border: "2px solid transparent" }}
            >
              Login
            </Button>
          </Form>
        </Modal.Body>
      
      </Modal>
    </>
  );
}

export default Login;
