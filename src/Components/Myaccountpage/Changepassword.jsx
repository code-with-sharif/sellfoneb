import React, { useState } from "react";
import "../../Styles/Myaccountpage/Changepassword.css";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const Changepassword = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [passwordVisibility, setPasswordVisibility] = useState({
    currentPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = (field) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle password change
    console.log("Current Password:", passwords.currentPassword);
    console.log("New Password:", passwords.newPassword);
    console.log("Confirm New Password:", passwords.confirmNewPassword);
    // Reset form fields
    setPasswords({
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  };

  return (
    <>
      <section className="mt-5">
        <div className="password-cord" style={{ caretColor: "#92C43E" }}>
          <h1>Change Password</h1>
          <hr />
          <form onSubmit={handleSubmit}>
            {Object.keys(passwords).map((field, index) => (
              <div key={index} className="form-group col-lg-6 mb-2">
                <label htmlFor={field} className="contactTitle form-label">
                  {field === "currentPassword"
                    ? "Current Password"
                    : field === "newPassword"
                    ? "New Password"
                    : "Confirm New Password"}
                  <span className="" style={{ color: "#92C43E" }}>
                    *
                  </span>
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    type={passwordVisibility[field] ? "text" : "password"}
                    className="form-control"
                    id={field}
                    name={field}
                    value={passwords[field]}
                    onChange={handleChange}
                    placeholder={
                      field === "currentPassword"
                        ? "Enter current password"
                        : field === "newPassword"
                        ? "Enter new password"
                        : "Confirm new password"
                    }
                    required
                    style={{ border: "1px solid #92c43e" }}
                  />
                  {/* <BsEyeFill
                    style={{ fontSize: "20px", color: "#A5A7A5", position: "absolute", top: "17px", right: "17px" , cursor:"pointer"}}
                    onClick={() => togglePasswordVisibility(field)}
                  /> */}

                  {passwordVisibility[field] ? (
  <BsEyeSlashFill
    style={{
      fontSize: "20px",
      color: "#A5A7A5",
      position: "absolute",
      top: "17px",
      right: "17px",
      cursor: "pointer",
    }}
    onClick={() => togglePasswordVisibility(field)}
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
    onClick={() => togglePasswordVisibility(field)}
  />
)}

                </div>
              </div>
            ))}
            <div className="mt-4">
              <button type="submit" className="btn btnresize">
                Confirm Change
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Changepassword;
