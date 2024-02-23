import React, { useState } from "react";
import "./SkinTone.css";
import LightSkintone from "../../../assets/svg/LightSkintone";
import BrownSkintone from "../../../assets/svg/BrownSkintone";
import DarkSkintone from "../../../assets/svg/DarkSkintone";

const SkinTone = ({ updateSelectedOptions }) => {
  const [selectedSkinTone, setSelectedSkinTone] = useState(null);

  const handleSkinToneSelection = (skinTone) => {
    setSelectedSkinTone(skinTone);
    updateSelectedOptions((prevOptions) => ({
      ...prevOptions,
      skinTone: skinTone,
    }));
  };

  return (
    <div className="genderSelection">
      <h1>and what about your melanin?</h1>
      <form className="genderForm">
        <div
          className={`maleBtn ${selectedSkinTone === "fair" ? "active" : ""}`}
          onClick={() => handleSkinToneSelection("fair")}
        >
          {" "}
          <LightSkintone />
          <button type="button">Milky Bar</button>
        </div>
        <div
          className={`femaleBtn ${
            selectedSkinTone === "brown" ? "active" : ""
          }`}
          onClick={() => handleSkinToneSelection("brown")}
        >
          {" "}
          <BrownSkintone />
          <button type="button">Brown Munda/Kudi</button>
        </div>
        <div
          className={`transBtn ${selectedSkinTone === "dark" ? "active" : ""}`}
          onClick={() => handleSkinToneSelection("dark")}
        >
          {" "}
          <DarkSkintone />
          <button type="button">Dark Chocolate</button>
        </div>
      </form>
    </div>
  );
};

export default SkinTone;
