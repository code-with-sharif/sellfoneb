import React, { useState } from 'react';

const TestBrand = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);
console.log(selectedBrands, 'data is contain or not ')
  const brandsData = [
    {
      name: 'Apple',
      models:[
        {
          name: 'iPhone X',
          variants:[
            { color: 'Silver', memory: '64GB', camera: '12MP' },
            { color: 'Space Gray', memory: '128GB', camera: '12MP'},
          ],
        },
        {
          name: 'iPhone 11',
          variants: [
            { color: 'Black', memory: '128GB', camera: '12MP dual-camera' },
            { color: 'Green', memory: '256GB', camera: '12MP dual-camera' },
          ],
        },
        {
          name: 'iPhone 14',
          variants: [
            { color: 'Gold', memory: '128GB', camera: '16MP triple-camera' },
            { color: 'Blue', memory: '256GB', camera: '16MP triple-camera' },
          ],
        },
      ],
    },
    {
      name: 'Oppo',
      models: [
        {
          name: 'Oppo A5s',
          variants: [
            { color: 'Red', memory: '32GB', camera: '13MP dual-camera' },
            { color: 'Blue', memory: '64GB', camera: '13MP dual-camera' },
          ],
        },
        {
          name: 'Oppo A6s',
          variants: [
            { color: 'Black', memory: '64GB', camera: '16MP dual-camera' },
            { color: 'White', memory: '128GB', camera: '16MP dual-camera' },
          ],
        },
      ],
    },
  ];
  const handleBrandChange = (brand) => {
    console.log(brand, "brands");
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((data) => data !== brand)
      : [...selectedBrands, brand];
    
    // Moved console.log inside the function block
    console.log(updatedBrands, "contain data");
  
    setSelectedBrands(updatedBrands);
    setSelectedModels([]);
  };
  

  const handleModelChange = (model) => {
    const updatedModels = selectedModels.includes(model)
      ? selectedModels.filter((selectedModel) => selectedModel !== model)
      : [...selectedModels, model];

    setSelectedModels(updatedModels);
  };

  return (
    <div>
      <div>
        <h2>Box 1</h2>
        {brandsData.map((brand) => (
          <label key={brand.name}>
            <input
              type="checkbox"
              onChange={() => handleBrandChange(brand.name)}
            />
            {brand.name}
          </label>
        ))}
      </div>

      <div>
        <h2>Box 2</h2>
        {selectedBrands.length > 0 && (
          <div>
            {selectedBrands.map((brand) => (
              <div key={brand}>
                {brandsData.find((data) => data.name === brand).models.map((model) => (
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

        {selectedModels.length > 0 && (
          <div>
            <h3>Variants</h3>
            <ul>
              {selectedModels.flatMap((model) =>
                brandsData
                  .find((brand) => brand.models.some((m) => m.name === model))
                  .models.find((m) => m.name === model).variants.map((variant, index) => (
                    <li key={index}>
                      <p>Color: {variant.color}</p>
                      <p>Memory: {variant.memory}</p>
                      <p>Camera: {variant.camera}</p>
                    </li>
                  ))
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestBrand;
