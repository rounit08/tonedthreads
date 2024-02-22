import React, { useState } from "react";
import "./SkinTone.css";
import LightSkintone from "../../../assets/svg/LightSkintone";
import BrownSkintone from "../../../assets/svg/BrownSkintone";
import DarkSkintone from "../../../assets/svg/DarkSkintone";

const SkinTone = () => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <div className="genderSelection">
      <h1>and what about your melanin?</h1>
      <form className="genderForm">
        <div
          className={`maleBtn ${selectedGender === "male" ? "active" : ""}`}
          onClick={() => handleGenderSelection("male")}
        >
          {" "}
          <LightSkintone />
          <button type="button">Milky Bar</button>
        </div>
        <div
          className={`femaleBtn ${selectedGender === "female" ? "active" : ""}`}
          onClick={() => handleGenderSelection("female")}
        >
          {" "}
          <BrownSkintone />
          <button type="button">Brown Munda/Kudi</button>
        </div>
        <div
          className={`transBtn ${selectedGender === "trans" ? "active" : ""}`}
          onClick={() => handleGenderSelection("trans")}
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
