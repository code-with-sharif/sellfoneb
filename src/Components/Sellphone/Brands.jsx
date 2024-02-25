import React, { Fragment, useEffect, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import "../../Styles/SellerProduct/Brands.css";
import RecommededMobil from "../Home/RecommededMobil";
import productcardimg from "../../Images/Home/RecomendedphoneSection/Rectangle 63 (1).png";
import Pagination from "./Pagination";
 
const Brands = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);
console.log(selectedBrands, 'data is contain or not ')

const [brandshow, setBrandshow] = useState(false);
const [modelshow, setModelshow] = useState(false);

const toggleBrand = () => {
 setBrandshow(!brandshow);
 setModelshow(false);
};

const toggleModel = () => {
 if (selectedBrands.length > 0) {
   setModelshow(!modelshow);
   setBrandshow(false);
 }
};

  const brandList = ["Apple", "Samsung", "Infinix", "Oppo"];
  const modelList = [
    {
      brand: "Apple",
      models: [
        {
          name: "iPhone X",
          variants: [
            {
              imgSrc: productcardimg,
              title: "Apple iPhone X",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Apple iPhone X",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Apple iPhone X",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Apple iPhone X",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Apple iPhone X",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Apple iPhone X",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Apple iPhone X",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Apple iPhone X",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Apple iPhone X",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Apple iPhone X",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Apple iPhone X",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Apple iPhone X",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Apple iPhone X",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Apple iPhone X",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Apple iPhone X",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Apple iPhone X",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Apple iPhone X",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Apple iPhone X",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Apple iPhone X",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Apple iPhone X",
              price: "Rs. 1,23,456",
            },
          ],
        },
        {
          name: "iPhone 11",
          variants: [
            {
              imgSrc: productcardimg,
              title: "Apple iPhone 11",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Apple iPhone 11",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Apple iPhone 11",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Apple iPhone 11",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Apple iPhone 11",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Apple iPhone 11",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Apple iPhone 11",
              price: "Rs. 1,23,456",
            },
          ],
        },
        {
          name: "iPhone 14",
          variants: [
            {
              imgSrc: productcardimg,
              title: "Apple iPhone 14",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Apple iPhone 14",
              price: "Rs. 1,23,456",
            },
          ],
        },
      ],
    },
    {
      brand: "Oppo",
      models: [
        {
          name: "Oppo A5s",
          variants: [
            {
              imgSrc: productcardimg,
              title: "oppo A5s",
              price: "Rs. 1,26,456",
            },
            {
              imgSrc: productcardimg,
              title: "oppo A5s",
              price: "Rs. 1,26,456",
            },
            {
              imgSrc: productcardimg,
              title: "oppo A5s",
              price: "Rs. 1,26,456",
            },
            {
              imgSrc: productcardimg,
              title: "oppo A5s",
              price: "Rs. 1,26,456",
            },
            {
              imgSrc: productcardimg,
              title: "oppo A5s",
              price: "Rs. 1,26,456",
            },
            {
              imgSrc: productcardimg,
              title: "oppo A5s",
              price: "Rs. 1,26,456",
            },
          ],
        },
        {
          name: "Oppo A6s",
          variants: [
            {
              imgSrc: productcardimg,
              title: "Oppo A6s",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Oppo A6s",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Oppo A6s",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Oppo A6s",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Oppo A6s",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Oppo A6s",
              price: "Rs. 1,23,456",
            },
            {
              imgSrc: productcardimg,
              title: "Oppo A6s",
              price: "Rs. 1,23,456",
            },
          ],
        },
      ],
    },

    // samsung
    {
      brand: "Samsung",
      models: [
        {
          name: "Samsung  S21",
          variants: [
            {
              imgSrc: productcardimg,
              title: "Samsung Galaxy S21",
              price: "Rs. 1,26,456",
            },
            {
              imgSrc: productcardimg,
              title: "Samsung Galaxy S21",
              price: "Rs. 1,26,456",
            },
            {
              imgSrc: productcardimg,
              title: "Samsung Galaxy S21",
              price: "Rs. 1,26,456",
            },
            {
              imgSrc: productcardimg,
              title: "Samsung Galaxy S21",
              price: "Rs. 1,26,456",
            },
            {
              imgSrc: productcardimg,
              title: "Samsung Galaxy S21",
              price: "Rs. 1,26,456",
            },
          ],
        },
        {
          name: "Samsung  A52",
          variants: [
            {
              imgSrc: productcardimg,
              title: "Samsung Galaxy A52",
              price: "Rs. 1,23,456",
            },

            {
              imgSrc: productcardimg,
              title: "Samsung Galaxy A52",
              price: "Rs. 1,23,456",
            },

            {
              imgSrc: productcardimg,
              title: "Samsung Galaxy A52",
              price: "Rs. 1,23,456",
            },

            {
              imgSrc: productcardimg,
              title: "Samsung Galaxy A52",
              price: "Rs. 1,23,456",
            },

            {
              imgSrc: productcardimg,
              title: "Samsung Galaxy A52",
              price: "Rs. 1,23,456",
            },

            {
              imgSrc: productcardimg,
              title: "Samsung Galaxy A52",
              price: "Rs. 1,23,456",
            },

            {
              imgSrc: productcardimg,
              title: "Samsung Galaxy A52",
              price: "Rs. 1,23,456",
            },
          ],
        },
      ],
    },
  ];

  const allData = modelList.flatMap(brand => 
    brand.models.flatMap(model =>
      model.variants
    )
  );
  

 
        const variantData = selectedModels.flatMap((model) =>
        modelList
            .find((brand) => brand.models.some((m) => m.name === model))
            .models.find((m) => m.name === model).variants.map((variant) => (variant)
            ))

            console.log(variantData)
 
            const handleBrandChange = (brand) => {
              const updatedBrands = selectedBrands.includes(brand)
                ? selectedBrands.filter((data) => data !== brand)
                : [...selectedBrands, brand];
            
              setSelectedBrands(updatedBrands);
            
              // Toggle selection of models associated with the brand
              const brandModels = modelList.find((data) => data.brand === brand)?.models.map((model) => model.name) || [];
              const updatedModels = selectedModels.filter(model => !brandModels.includes(model)).concat(updatedBrands.includes(brand) ? brandModels : []);
              setSelectedModels(updatedModels);
            };
            
  

  const handleModelChange = (model) => {
    const updatedModels = selectedModels.includes(model)
      ? selectedModels.filter((selectedModel) => selectedModel !== model)
      : [...selectedModels, model];
  
    setSelectedModels(updatedModels);
  };

  return (
 
  <>
   <section
      style={{
        paddingTop: "60px",
        paddingBottom: "0px",
        border: "2px solid red",
      }}
    >
      <div className="d-flex px-3 gap-3 justify-content-lg-center align-items-start">
        <div
          className="brandcard"
          onClick={toggleBrand}
          style={{ cursor: "pointer" }}
        >
          <div className="m-lg-3 mx-1 my-2">
            <div className="d-flex brand-icon justify-content-between align-items-center">
              <span className="inputlable">Brands</span>
              <RiArrowDownSLine
                className="downarrow"
                style={{
                  width: "30px",
                  height: "20px",
                  transform: brandshow ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </div>

            {brandshow && (
              <div className="pt-2" style={{ display: brandshow ? "block" : "none" }}>
                <form action="" className="">
                  <div className="d-flex flex-wrap p-0 gap-2">
                    {brandList.map((brand, index) => (
                      <div className="group labeltitle inputchecklable" key={index}>
                      {console.log(brand, "kkkkkkk")}
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)} 
                          onChange={() => handleBrandChange(brand.name)}
                          className=""
                        />
                        <label htmlFor="">{brand}</label> 
                      </div>
                    ))}
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

        <div
          className="brandcard"
          onClick={toggleModel}
          style={{ cursor: selectedBrands.length === 0 ? "not-allowed" : "pointer" }}
        >
          <div className="m-lg-3 mx-1 my-2">
            <div className="d-flex brand-icon justify-content-between align-items-center">
              <span className="brandtext inputlable">Model</span>
              <RiArrowDownSLine
                className="downarrow"
                style={{
                  width: "30px",
                  height: "20px",
                  transform: modelshow ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </div>

            {modelshow && (
              <div className="pt-2 checkboxitem" style={{ display: modelshow ? "block" : "none" }}>
                <form action="" className="">
                  <div className="d-flex flex-wrap p-0 gap-2">
 
{selectedBrands.length > 0 && (
          <div>
            {selectedBrands.map((brand, index) => (
              <div key={index}>
                {modelList.find((data) => data.name === brand).models.map((model) => (
                  <label key={model.name}>
                  <input
  type="checkbox"
  value={model.name}
  checked={selectedModels.includes(model.name)}
  onChange={() => handleModelChange(model.name)}
/>
                    {model.name}
                  </label>
                  
                ))}
              </div>
            ))}
          </div>
        )}

                </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      <section className="" style={{ paddingTop: "0px", paddingBottom: "60px" }}>
          <RecommededMobil  recomendmobile={variantData.length > 0 ? variantData : allData} />
        </section>

      <section>
        <Pagination />
      </section>
    </section>
  </>
  );
};

export default Brands;
