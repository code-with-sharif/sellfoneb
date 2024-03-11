import React, { useEffect, useState } from "react";
import filterIcon from "../../Images/Buymobilephone/buyphonecard/filterIcon.png";
import "../../Styles/Buyphone/Buyphonecard.css";
import RecommededMobil from "../Home/RecommededMobil"; // Assuming this is not used
import Recomendmobilecard from "../../CommonComponents/Recomendmobilecard";
import productcardimg from "../../Images/Home/RecomendedphoneSection/Rectangle 63 (1).png";
import Customselectoption from "./Customselectoption";
import { RxCross2 } from "react-icons/rx";
import { PropTypes } from "prop-types";
import Doublerangeinput from "./Doublerangeinput";
import MultiRangeSlider from "./Doublerangeinput";
const Buyphonecard = () => {
  const [priceRange, setPriceRange] = useState(500000);
  const [filter, setFilter] = useState(true);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      if (window.innerWidth >= 992) {
        // lg breakpoint
        setFilter(true);
      } else {
        setFilter(false);
      }
    };

    handleWindowSizeChange();

    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const handlePriceChange = (event) => {
    setPriceRange(event.target.value);
  };

  const handlefilter = () => {
    setFilter(!filter);
  };

  const recomendmobile = [
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
      Propty: "Featured",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
      Propty: "Featured",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
      Propty: "Featured",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
      Propty: "Featured",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
      Propty: "Featured",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
      Propty: "Featured",
    },
    {
      imgSrc: productcardimg,
      title: "Apple iPhone 13",
      price: "Rs. 2,46,999",
      buttonLabel: "Quick View",
      Propty: "Featured",
    },
  ];

  return (
    <>
      <section className="maincontainer   " style={{ border: "" }}>
        <div className="filterimg   " onClick={handlefilter}>
          {" "}
          <img className="img-fluid" src={filterIcon} alt="" />
        </div>
        <div className="container-fluid gridcontainer  ">
          {filter && (
            <div
              className="filtercategory px-4 py-3"
              style={{ position: "relative" }}
            >
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
                    <input
                      type="checkbox"
                      id="oppo"
                      name="brand"
                      value="oppo"
                    />
                    <label
                      htmlFor="oppo"
                      className="inputchecklable  checklable"
                    >
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

                <label htmlFor="model" className="pt-4 pb-5 inputlable">
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
                    <label
                      htmlFor="128gb"
                      className="inputchecklable checklable"
                    >
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
                    <label
                      htmlFor="256gb"
                      className="inputchecklable checklable"
                    >
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
                    <label
                      htmlFor="512gb"
                      className="inputchecklable checklable"
                    >
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

               

                <div className=" " style={{border:""}}>
                  <div htmlFor="price-range" className="py-4 inputlable">
                    Price Range
                  </div>
     

     <div className="">
     <MultiRangeSlider
      min={0}
      max={500000}
      onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
    />
     </div>
     
                
    <p className="" style={{ paddingTop: "50px" }}>Upto Rs. {priceRange}</p>
    </div>

         
    

                <div className="" style={{ paddingTop: "74px" }} >
                  <button className="btn w-100">Clear Filter</button>
                </div>
              </form>
              <div
                className="d-lg-none d-block"
                style={{
                  position: "absolute",
                  top: "0px",
                  right: "8px",
                  fontSize: "24px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setFilter(false);
                }}
              >
                <RxCross2 />
              </div>
            </div>
          )}

          <div className="sortedcategory  ">
            <p className="m-0 d-lg-block d-none">Showing 1-8 of 200 results</p>

            <div className=" m-lg-0 m-auto" style={{}}>
              <Customselectoption />
            </div>
          </div>
          <p className="m-lg-0  mt-5 d-lg-none d-block">
            Showing 1-8 of 200 results
          </p>

          <div className="buycardsection ">
            <div className="row row-cols-2 row-cols-lg-4">
              {recomendmobile.map((item, index) => (
                <div key={index} className="col mt-2 mt-lg-4">
                  <Recomendmobilecard
                    imgSrc={item?.imgSrc}
                    title={item?.title}
                    price={item?.price}
                    buttonLabel={item?.buttonLabel}
                    Propty={item?.Propty}
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
