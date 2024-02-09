import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../../Styles/Login/Login.css';
import '../../Styles/Registration/Registration.css';
function Registration() {
    const [show, setShow] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);
  
    const handleClose = () => {
      setShow(false);
      setPassword('');
      setConfirmPassword('');
      setAcceptTerms(false);
      setPasswordVisible(false);
    };
  
    const handleShow = () => setShow(true);
  
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
  
    const handleRegistration = () => {
      // Add your registration logic here.
      // Check if password and confirm password match and terms are accepted.
      if (password === confirmPassword && acceptTerms) {
        // Perform registration actions.
        console.log('Registration successful!');
        handleClose();
      } else {
        // Display an error or handle the mismatch as needed.
        console.error('Password and confirm password do not match or terms are not accepted.');
      }
    };
  
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Registration
      </Button> */}
      <Link to="#" onClick={handleShow}> Registration</Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Modal.Title style={{ textAlign: "center" }} className=' registrationheading'>
            Registration!
          </Modal.Title>
          <Modal.Title style={{ textAlign: "center" }} className=''> 
            <p className='my-1'>
              <span>Already have an account? </span>
              <Link to='/login'>
                <span className='green'>Login </span>
              </Link>
            </p>
          </Modal.Title>
          <Form>
            <Link to='/'>
              <div className='googleIcon mt-4'>
              <span>  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M26.9429 11.5658L15.522 11.5653C15.0177 11.5653 14.6089 11.974 14.6089 12.4783V16.1268C14.6089 16.631 15.0177 17.0399 15.5219 17.0399H21.9535C21.2493 18.8676 19.9348 20.3982 18.2577 21.3708L21.0002 26.1182C25.3993 23.5739 28.0002 19.1098 28.0002 14.1126C28.0002 13.4011 27.9477 12.8924 27.8428 12.3197C27.7631 11.8845 27.3853 11.5658 26.9429 11.5658Z" fill="#167EE6"/>
  <path d="M14 22.5217C10.8525 22.5217 8.10478 20.802 6.62904 18.2573L1.88184 20.9935C4.29766 25.1805 8.82327 28 14 28C16.5395 28 18.9358 27.3162 21 26.1247V26.1182L18.2576 21.3707C17.0031 22.0983 15.5515 22.5217 14 22.5217Z" fill="#12B347"/>
  <path d="M21 26.1247V26.1181L18.2576 21.3707C17.0032 22.0982 15.5516 22.5217 14 22.5217V28C16.5395 28 18.9359 27.3162 21 26.1247Z" fill="#0F993E"/>
  <path d="M5.47827 14C5.47827 12.4486 5.90166 10.9971 6.62906 9.74273L1.88185 7.0065C0.683703 9.06423 0 11.454 0 14C0 16.546 0.683703 18.9358 1.88185 20.9935L6.62906 18.2572C5.90166 17.0029 5.47827 15.5514 5.47827 14Z" fill="#FFD500"/>
  <path d="M14 5.47827C16.0525 5.47827 17.9378 6.20758 19.4103 7.42071C19.7736 7.71996 20.3016 7.69836 20.6344 7.36559L23.2195 4.78051C23.597 4.40295 23.5701 3.78492 23.1668 3.43503C20.6996 1.29462 17.4894 0 14 0C8.82327 0 4.29766 2.81952 1.88184 7.00651L6.62904 9.74274C8.10478 7.19797 10.8525 5.47827 14 5.47827Z" fill="#FF4B26"/>
  <path d="M19.4103 7.42071C19.7736 7.71996 20.3017 7.69836 20.6344 7.36559L23.2195 4.78051C23.597 4.40295 23.5701 3.78492 23.1668 3.43503C20.6996 1.29456 17.4894 0 14 0V5.47827C16.0524 5.47827 17.9378 6.20758 19.4103 7.42071Z" fill="#D93F21"/>
</svg> </span>
<span className='black  '>Login via Google</span> 
              </div>
            </Link>
            <div className='my-3' style={{ display: "flex", alignItems: "center" }}>
              <hr style={{ flex: 1, height: "1px" }} />
              <span style={{ padding: "0 10px" }}>or via Email</span>
              <hr style={{ flex: 1, height: "1px" }} />
            </div>

            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <div className="container">
                <div className="row gap-4 p-0 ">
                  <div className="col-lg-5 col-12 p-0">
                    <Form.Label className='nametext'>First Name</Form.Label>
                    <Form.Control
                      className=' '
                      type="text"
                      placeholder="Enter First Name"
                      autoFocus
                      style={{ caretColor: "#92C43E" }}
                    />
                  </div>
                  <div className="col-lg-6 col-12 p-0" style={{}}>
                    <Form.Label className='nametext'>Last Name</Form.Label>
                    <Form.Control
                      className=' '
                      type="text"
                      placeholder="Enter Last Name"
                      autoFocus
                      style={{ caretColor: "#92C43E" }}
                    />
                  </div>
                </div>
              </div>
            </Form.Group>

            <Form.Group className="mb-2" controlId="exampleForm.ControlInput2">
              <Form.Label className='nametext'>Mobile Number</Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text id=" ">+92</InputGroup.Text>
                <FormControl
                  type="tel"
                  placeholder="XXX XXXXXX X"
                  aria-label="Mobile Number"
                  aria-describedby="mobile-prefix"
                  style={{ caretColor: "#92C43E" }}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-2" controlId="exampleForm.ControlInput3">
              <Form.Label className='nametext'>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                style={{ caretColor: "#92C43E" }}
              />
            </Form.Group>

            <Form.Group className="mb-2 position-relative" controlId="exampleForm.ControlPassword">
              <Form.Label className='nametext'>Password</Form.Label>
              <InputGroup>
                <FormControl
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ caretColor: "#92C43E" }}
                />
                <InputGroup.Text onClick={togglePasswordVisibility}>
                  {passwordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </InputGroup.Text>
              </InputGroup>
 
            </Form.Group>


            <Form.Group className="mb-2 position-relative" controlId="exampleForm.ConfirmPassword">
              <Form.Label className='nametext'>Confirm Password</Form.Label>
              <InputGroup>
                <FormControl
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={{ caretColor: "#92C43E" }}
                />
                <InputGroup.Text onClick={togglePasswordVisibility}>
                  {passwordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>



            <Form.Group className="mb-2 position-relative" controlId="exampleForm.TermsCheckbox">
          <Form.Check
            type="checkbox"
            label={
              <p>
                I agree to all <span className="green">Terms & Conditions</span> and <span className='green'>Privacy Policy</span>
              </p>
            }
            checked={acceptTerms}
            onChange={() => setAcceptTerms(!acceptTerms)}
            // style={{ backgroundColor: acceptTerms ? 'red' : 'transparent' }}
          />
        </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='w-100' onClick={handleClose}>
          Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Registration;
