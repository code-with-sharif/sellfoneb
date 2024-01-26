import React from "react";
import Header from "./Components/Home/Header";

import Footer from "./Components/Footer";
import Process from "./Components/Process/Process";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./Components/Services/Services";
import About from "./Components/AboutUs/About";
import FAQ from "./Components/Faq/Faq";
import Contact from "./Components/Contact/Contact";
import Support from "./Components/Support/Support";
 

const App = () => {
  return (
    <>
      <Header />

      <BrowserRouter>
      <Routes>
          <Route  path="/"element={<Home />} />
          {/* <Route path="/process" element={<Process />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/fAQ" element={<FAQ />} /> */}
          {/* <Route path="/Contact" element={<Contact />} />
          <Route path="/support" element={<Support />} /> */}
      
      </Routes>
    </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
