import React, { useState } from "react";
import '../../Styles/Buyphone/Customselectoption.css';
import { FaAngleDown } from "react-icons/fa6";

const  Customselectoption = () => {
    const options = ['Sort By Latest', 'Sort By Popularity', 'Sort By Price: high to low', 'Sort By Price: low to high'];
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState("Sort By Latest");

    const handleSelect = (item) => {
        setSelected(item);
        setIsActive(false);
    };

    const toggleDropdown = () => {
        setIsActive(!isActive);
    };

    return (
        <section>
            <div className="dropdown" style={{ position: "relative" }}>
                <div className="dropdownbtn" onClick={toggleDropdown}>{selected}</div>
                {isActive && (
                    <div className="dropdown-content">
                        {options.map((item) => (
                            <div
                                key={item}
                                className="dropdown-items"
                                onClick={() => handleSelect(item)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                )}
                <div style={{ position: "absolute", top: "11px", right: "10px", transform: isActive ? "rotate(180deg)" : "" }}>
                    <FaAngleDown />
                </div>
            </div>
        </section>
    );
};

export default Customselectoption;
