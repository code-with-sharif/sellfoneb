import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

const HomeContent = () => (
  <div className="tab-pane fade active" id="home">
    <p>
      Home content Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Soluta amet quam accusamus hic unde voluptatum exercitationem, ipsa
      inventore numquam earum minima odio rem libero neque dolorem illum fugit
      distinctio incidunt.
    </p>
  </div>
);

const AboutContent = () => (
  <div className="tab-pane fade" id="about">
    <p>
      This is an about data correct this mus hic unde voluptatum exercitationem,
      ipsa inventore numquam earum minima odio rem libero neque dolorem illum
      fugit distinctio incidunt.
    </p>
  </div>
);

const SellmobilePhone = () => {
  return (
    <Router>
      <section style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        <div className="heading text-center">
          <span className="tertiaryColor">Sell </span>
          <span className="seconderyColor"> Your Mobile Phone</span>
        </div>
        <p
          className="border border-2 border-danger text-center"
          style={{ marginTop: "15px" }}
        >
          At Sellfone.pk, our top priority is the safety and welfare of all
          mobile phones <br /> rehomed through our site.
        </p>

        {/* Navigation links */}
        <div className="container">
          <div className="row py-3 justify-content-center">
            <div className="col-md-6">
              <ul className="nav nav-tabs" id="myTabs">
                <li className="nav-item">
                  <Link to="/home" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            {/* Content */}
            <div className="tab-content py-3" id="myTabContent">
              <Routes>
                <Route path="/home" element={<HomeContent />} />
                <Route path="/about" element={<AboutContent />} />
              </Routes>
            </div>
          </div>
        </div>
      </section>
    </Router>
  );
};

export default SellmobilePhone;
