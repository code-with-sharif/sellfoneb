import React, { useState } from 'react';

const Iphonecard = () => {
  const [checkboxes, setCheckboxes] = useState({
    newPhoneCheckbox: false,
    usedPhoneCheckbox: false,
    storage128GBCheckbox: false,
    storage256GBCheckbox: false,
    storage512GBCheckbox: false,
  });

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };

  return (
    <section className="p-0">
      <div className="p-3" style={{ border: "2px solid red" }}>
        <h3>Condition</h3>
        <p style={{ color: "#A5A7A5" }}>Select your mobile condition</p>

        <form>
          <div className="d-flex justify-content-between">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="newPhoneCheckbox"
                name="newPhoneCheckbox"
                checked={checkboxes.newPhoneCheckbox}
                onChange={() => handleCheckboxChange('newPhoneCheckbox')}
              />
              <label className="form-check-label inputchecklable" htmlFor="newPhoneCheckbox">
                New (Device in sealed packaging)
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="usedPhoneCheckbox"
                name="usedPhoneCheckbox"
                checked={checkboxes.usedPhoneCheckbox}
                onChange={() => handleCheckboxChange('usedPhoneCheckbox')}
              />
              <label className="form-check-label inputchecklable" htmlFor="usedPhoneCheckbox">
                Used (Device used out of the package)
              </label>
            </div>
          </div>
          <hr />
          <h3>Storage Capacity</h3>
          <p style={{ color: "#A5A7A5" }}>Select your mobile storage capacity</p>
          <div className="d-flex justify-content-between">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="storage128GBCheckbox"
                name="storage128GBCheckbox"
                checked={checkboxes.storage128GBCheckbox}
                onChange={() => handleCheckboxChange('storage128GBCheckbox')}
              />
              <label className="form-check-label inputchecklable" htmlFor="storage128GBCheckbox">
                128GB
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="storage256GBCheckbox"
                name="storage256GBCheckbox"
                checked={checkboxes.storage256GBCheckbox}
                onChange={() => handleCheckboxChange('storage256GBCheckbox')}
              />
              <label className="form-check-label inputchecklable" htmlFor="storage256GBCheckbox">
                256GB
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="storage512GBCheckbox"
                name="storage512GBCheckbox"
                checked={checkboxes.storage512GBCheckbox}
                onChange={() => handleCheckboxChange('storage512GBCheckbox')}
              />
              <label className="form-check-label inputchecklable" htmlFor="storage512GBCheckbox">
                512GB
              </label>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Iphonecard;
