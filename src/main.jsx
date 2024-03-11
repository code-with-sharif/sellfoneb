import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import './Styles/Common.css'
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define a custom style for the toast notifications
const customToastStyle = {
  background: "purple", // Customize the background color
  color: "white", // Customize the text color
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        bodyClassName="toastBody"
        transition={Bounce}
        progressClassName="toastProgress" // Change the progress bar color
        
      />
    </BrowserRouter>
  </React.StrictMode>
);
