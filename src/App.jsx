import React from "react";
import Header from "./Components/Home/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Footer from "./Components/Home/Footer";
import Process from "./Components/Process/Process";
import Home from "./Components/Home/Home";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Services from "./Components/Services/Services";
import About from "./Components/AboutUs/About";
import Contact from "./Components/Contact/Contact";
import Support from "./Components/Support/Support";
import Faq from "./Components/FAQs/Faq";
import Sellerproduct from "./Components/Sellerproduct/Sellerproduct";
import SecondpartSelldevice from "./Components/SecondpartSelldevice/SecondpartSelldevice";
import Login from "./Components/Login/Login";
 

const App = () => {
  return (
    <>
      <Header />

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/process" element={<Process />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/services" element={<Services />} />
          <Route path="/sellerproduct" element={<Sellerproduct />} />
          <Route path="/secondpartSelldevice" element={<SecondpartSelldevice />} />

          {/* <Route to="/services/service2">Buy Mobile Phone</Route> */}
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
      </Routes> 
      <Footer />
    </>
  );
};

export default App;
