import "slick-carousel/slick/slick.css";
import React from "react";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Phonesuccessstoryimg1 from "../../Images/Sellerproduct/Phonesuccessstory/Phonesuccessstoryimg1.png";
import cardimg from "../../Images/Home/Herosection/Group 52 (1).svg";
import "../../Styles/SellerProduct/Phonesuccessstory.css";
const PhoneData = [
  {
    image: Phonesuccessstoryimg1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    author: "Rameen Zafar",
    location: "Islamabad",
  },
];

const Phonesuccessstory = () => {
  return (
    <section style={{ width: "97%" , margin:"auto" }}>
      <div className=" ">
        {PhoneData.map((story, index) => (
          <div key={index} className="">
            <MDBCard key={index} className="carouselcard">
              <MDBRow className="g-0">
                <MDBCol className="border"  >
                  <MDBCardImage
                    className="  w-100 h-100"
                    src={story.image}
                    alt="..."
                    fluid
                    
                  />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody>
                    <MDBCardText>{story.text}</MDBCardText>
                    <hr />
                    <MDBCardText>
                      <div className="d-flex   flex-md-row justify-content-between align-items-md-center">
                        <p>{story.author}</p>
                        <div className="">
                          <img
                            className="p-0 m-0"
                            src={cardimg}
                            alt=""
                            style={{}}
                          />
                        </div>
                      </div>
                      <p className="text-muted ">{story.location}</p>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Phonesuccessstory;
