import React from 'react'
import Sellerproductherosection from '../Sellerproduct/Sellerproductherosection'
import heroimg1 from "../../Images/Sellerproduct/Sellerproductherosection/sellerproductheroimg1.png";
import heroimg2 from "../../Images/Sellerproduct/Sellerproductherosection/sellerproductheroimg2.png";
const Selldevice = () => {
    const heroProps = {
        title: "Sell Mobile Phone",
        paragraph:
          "A platform where you can sell sell ​​your phone in a few simple steps. Find your model and calculate the value.",
        img: [heroimg1, heroimg2],
      };
  return (
   
    <>


<Sellerproductherosection {...heroProps} />
    </>
  )
}

export default Selldevice