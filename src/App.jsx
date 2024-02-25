import React from "react";
import Header from "./Components/Home/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Footer from "./Components/Home/Footer";
import Process from "./Components/Sellphone/Sellphone";
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
import Editphoneprice from "./Components/Editphoneprice/Editphoneprice";
import Buyphone from "./Components/Buyphone/Buyphone";
import Adsphonesection from "./Components/Adsphonesection/Adsphonesection";
import Sellphone from "./Components/Sellphone/Sellphone";
import Myaccountpage from "./Components/Myaccountpage/Myaccountpage";
import Myadverts from "./Components/Myaccountpage/Myadverts";
 

const App = () => {
  return (
    <>
      <Header />

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sellerproduct" element={<Sellerproduct />} />
          <Route path="/secondpartSelldevice" element={<SecondpartSelldevice />} />
          <Route path="/editphoneprice" element={<Editphoneprice />} />
          <Route path="/buyphone" element={<Buyphone />} />
          <Route path="/sellphone" element={<Sellphone />} />
          <Route path="/adsphonesection" element={<Adsphonesection />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="/myaccountpage" element={<Myaccountpage />} />
          <Route path="/myadverts" element={<Myadverts />} />
      </Routes> 
      <Footer />
    </>
  );
};

export default App;
