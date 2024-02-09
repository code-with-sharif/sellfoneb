import "slick-carousel/slick/slick.css";
import React, { Component } from "react";
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

const PhoneSuccessStoryData = [

  
  {
    image: Phonesuccessstoryimg1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    author: "Rameen Zafar",
    location: "Islamabad",
  },
  // {
  //   image: Phonesuccessstoryimg1,
  //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  //   author: "Rameen Zafar",
  //   location: "Islamabad",
  // },
 
];

const Phonesuccessstory = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Two cards per slide
    slidesToScroll: 1, // Move two cards at a time
    responsive: [
      {
        breakpoint: 768, // Adjust responsive behavior as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {/* Map through your story data, ensuring correct structure */}
      {PhoneSuccessStoryData.map((story, index) => (
        <MDBCard key={index} className="m-5" style={{ paddingBottom: "0px", width: "40%" }}>
          <MDBRow className="g-0">
            <MDBCol md="4">
              <MDBCardImage
                src={story.image}
                alt="..."
                fluid
                style={{ maxWidth: "100%", height: "100%", margin: "0", padding: "0" }}
              />
            </MDBCol>
            <MDBCol md="8">
              <MDBCardBody>
                <MDBCardText>{story.text}</MDBCardText>
                <hr />
                <MDBCardText>
                  <div className="thirdheading d-flex flex-column flex-md-row justify-content-between align-items-md-center">
                    <div>
                      <p>{story.author}</p>
                      <p className="text-muted mt-2">{story.location}</p>
                    </div>
                    <div>
                      <img src={cardimg} alt="" />
                    </div>
                  </div>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      ))}
    </Slider>
  );
};

export default Phonesuccessstory;
