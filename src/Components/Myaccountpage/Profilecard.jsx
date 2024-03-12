import React from "react";
import "../../Styles/Myaccountpage/Profilecard.css";
import userimg from "../../Images/Myaccountpage/Profilecard/userimg.png";
import { useNavigate } from "react-router-dom";

const Profilecard = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <section className="  d-none">
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className=""> 
                <div className="profile-card shadow modal-body">
                  <div className="d-flex gap-3">
                    <div className="profile-photo">
                      <img src={userimg} alt="profile Photo" className="img-fluid" />
                    </div>
                    <div>
                      <div>
                        <h6>Welcome Back!</h6>
                        <h3>Rameen Zafar</h3>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div style={{ cursor: "pointer" }}>
                    <h6 className="green">My Account</h6>
                    <h6 onClick={() => navigate("/myadverts")}>My Adverts</h6>
                  </div>

                  <div style={{ marginTop: "130px" }}>
                    <button className="btn w-100">Sign Out</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="profile-card shadow d-none d-lg-block"> {/* Show only on large devices */}
        <div className="d-flex gap-3">
          <div className="profile-photo">
            <img src={userimg} alt="profile Photo" className="img-fluid" />
          </div>
          <div>
            <div>
              <h6>Welcome Back!</h6>
              <h3>Rameen Zafar</h3>
            </div>
          </div>
        </div>
        <hr />
        <div style={{ cursor: "pointer" }}>
          <h6 className="green">My Account</h6>
          <h6 onClick={() => navigate("/myadverts")}>My Adverts</h6>
        </div>

        <div style={{ marginTop: "145px" }}>
          <button className="btn w-100">Sign Out</button>
        </div>
      </section>
    </>
  );
};

export default Profilecard;
