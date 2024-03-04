import React, { useState } from "react";

import "../../Styles/Buyphone/Buyphonecard.css";
import RecommededMobil from "../Home/RecommededMobil"; // Assuming this is not used
import Recomendmobilecard from "../../CommonComponents/Recomendmobilecard";
import productcardimg from "../../Images/Home/RecomendedphoneSection/Rectangle 63 (1).png";
const Buyphonecard = () => {
  const [priceRange, setPriceRange] = useState(500000); // Initial price range

  const handlePriceChange = (event) => {
    setPriceRange(event.target.value);
  };

  const recomendmobile = [
    {
      firstname: "Recommended",
      lastname: " Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      // firstname:"Recommended",
      // lastname:" Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      // firstname:"Recommended",
      // lastname:" Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      firstname: "Recommended",
      lastname: " Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      firstname: "Recommended",
      lastname: " Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      firstname: "Recommended",
      lastname: " Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      firstname: "Recommended",
      lastname: " Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      firstname: "Recommended",
      lastname: " Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      firstname: "Recommended",
      lastname: " Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      firstname: "Recommended",
      lastname: " Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      firstname: "Recommended",
      lastname: " Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      firstname: "Recommended",
      lastname: " Mobiles Phones ",
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
  ];

  return (
    <>
      <section className="maincontainer   " style={{ border: "" }}>
        <div className="container-fluid gridcontainer  ">
          <div className="filtercategory px-4 pt-3   d-lg-block d-none">
            <form>
              <label htmlFor="brand" className="pb-4 inputlable">
                Brand
              </label>
              <div className="d-flex flex-column gap-2">
                <div className="group p-0 m-0">
                  <input
                    type="checkbox"
                    id="samsung"
                    name="brand"
                    value="samsung"
                  />
                  <label
                    htmlFor="samsung"
                    className="inputchecklable checklable"
                  >
                    Samsung
                  </label>
                </div>
                <div className="group">
                  <input type="checkbox" id="oppo" name="brand" value="oppo" />
                  <label htmlFor="oppo" className="inputchecklable  checklable">
                    Oppo
                  </label>
                </div>
                <div className="group">
                  <input
                    type="checkbox"
                    id="infinix"
                    name="brand"
                    value="infinix"
                  />
                  <label
                    htmlFor="infinix"
                    className="inputchecklable checklable"
                  >
                    Infinix
                  </label>
                </div>
              </div>

              <label htmlFor="model" className="pt-4 pb-4 inputlable">
                Model
              </label>
              <div className="d-flex flex-column gap-2">
                <div className="group">
                  <input
                    type="checkbox"
                    id="iphone11"
                    name="model"
                    value="iphone11"
                  />
                  <label
                    htmlFor="iphone11"
                    className="inputchecklable checklable"
                  >
                    iPhone 11
                  </label>
                </div>
                <div className="group">
                  <input
                    type="checkbox"
                    id="iphone12"
                    name="model"
                    value="iphone12"
                  />
                  <label
                    htmlFor="iphone12"
                    className="inputchecklable checklable"
                  >
                    iPhone 11 Pro Max
                  </label>
                </div>
                <div className="group">
                  <input
                    type="checkbox"
                    id="iphone13"
                    name="model"
                    value="iphone13"
                  />
                  <label
                    htmlFor="iphone13"
                    className="inputchecklable checklable"
                  >
                    iPhone 12
                  </label>
                </div>
                <div className="group">
                  <input
                    type="checkbox"
                    id="iphone13"
                    name="model"
                    value="iphone13"
                  />
                  <label
                    htmlFor="iphone13"
                    className="inputchecklable checklable"
                  >
                    iPhone 12 Pro Max
                  </label>
                </div>
                <div className="group">
                  <input
                    type="checkbox"
                    id="iphone13"
                    name="model"
                    value="iphone13"
                  />
                  <label
                    htmlFor="iphone13"
                    className="inputchecklable checklable"
                  >
                    iPhone 14
                  </label>
                </div>
                <div className="group">
                  <input
                    type="checkbox"
                    id="iphone13"
                    name="model"
                    value="iphone13"
                  />
                  <label
                    htmlFor="iphone13"
                    className="inputchecklable checklable"
                  >
                    iPhone 14 Pro Max
                  </label>
                </div>
                <div className="group">
                  <input
                    type="checkbox"
                    id="iphone13"
                    name="model"
                    value="iphone13"
                  />
                  <label
                    htmlFor="iphone13"
                    className="inputchecklable checklable"
                  >
                    iPhone 15
                  </label>
                </div>
                <div className="group">
                  <input
                    type="checkbox"
                    id="iphone13"
                    name="model"
                    value="iphone13"
                  />
                  <label
                    htmlFor="iphone13"
                    className="inputchecklable checklable"
                  >
                    iPhone 15 Pro Max
                  </label>
                </div>
              </div>

              <label htmlFor="storage" className="py-4 inputlable">
                Storage
              </label>
              <div className="d-flex flex-column gap-2">
                <div className="group">
                  <input
                    type="checkbox"
                    id="128gb"
                    name="storage"
                    value="128gb"
                  />
                  <label htmlFor="128gb" className="inputchecklable checklable">
                    128GB
                  </label>
                </div>
                <div className="group">
                  <input
                    type="checkbox"
                    id="256gb"
                    name="storage"
                    value="256gb"
                  />
                  <label htmlFor="256gb" className="inputchecklable checklable">
                    256GB
                  </label>
                </div>
                <div className="group">
                  <input
                    type="checkbox"
                    id="512gb"
                    name="storage"
                    value="512gb"
                  />
                  <label htmlFor="512gb" className="inputchecklable checklable">
                    512GB
                  </label>
                </div>
              </div>

              <label htmlFor="color" className="py-4 inputlable">
                Color
              </label>
              <div className="d-flex flex-column gap-2">
                <div className="group">
                  <input
                    type="checkbox"
                    id="midnight"
                    name="color"
                    value="midnight"
                  />
                  <label
                    htmlFor="midnight"
                    className="inputchecklable checklable"
                  >
                    Midnight (Black)
                  </label>
                </div>
                <div className="group">
                  <input
                    type="checkbox"
                    id="starlight"
                    name="color"
                    value="starlight"
                  />
                  <label
                    htmlFor="starlight"
                    className="inputchecklable checklable"
                  >
                    Starlight (White-ish)
                  </label>
                </div>
                <div className="group">
                  <input
                    type="checkbox"
                    id="product-red"
                    name="color"
                    value="product-red"
                  />
                  <label
                    htmlFor="product-red"
                    className="inputchecklable checklable"
                  >
                    Product RED
                  </label>
                </div>
                <div className="group">
                  <input
                    type="checkbox"
                    id="rose-gold"
                    name="color"
                    value="rose-gold"
                  />
                  <label
                    htmlFor="rose-gold"
                    className="inputchecklable checklable"
                  >
                    Rose Gold
                  </label>
                </div>
              </div>

              <div className=" ">
                <label htmlFor="price-range" className="pt-3 pb-5 inputlable">
                  Price Range
                </label>
                <input
                  type="range"
                  className="form-range"
                  id="customRange1"
                  value={priceRange}
                  onChange={handlePriceChange}
                  min="0"
                  max="500000" // Maximum price range
                  step="1000" // Increment step
                />
                <p>Upto Rs. {priceRange}</p> {/* Display selected price */}
              </div>

              <div>
                <button className="btn w-100">Clear Filter</button>
              </div>
            </form>
          </div>

          <div className="sortedcategory  ">
            <p className="m-0">Showing 1-8 of 200 results</p>

            <select className="sort-select decorated">
              <option className=" ">Sort By Price: low to high</option>
              <option className=" ">Sort By Price: high to low</option>
              <option className=" ">Sort By Popularity</option>
              <option className=" ">Sort By Latest</option>
            </select>
          </div>

          <div className="buycardsection ">
            <div className="row row-cols-2 row-cols-lg-4">
              {recomendmobile.map((item, index) => (
                <div key={index} className="col mt-4">
                  <Recomendmobilecard
                    imgSrc={item?.imgSrc}
                    title={item?.title}
                    price={item?.price}
                    buttonLabel={item?.buttonLabel}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Buyphonecard;
