import React, { useState } from "react";
import "./GenderSelection.css";
import MaleSvg from "../../../assets/svg/MaleSvg";
import FemaleSvg from "../../../assets/svg/FemaleSvg";
import TransSvg from "../../../assets/svg/TransSvg";

const GenderSelection = () => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <div className="genderSelection">
      <h1>Tell "tonedGenie"🧞 your Gender</h1>
      <form className="genderForm">
        <div
          className={`maleBtn ${selectedGender === "male" ? "active" : ""}`}
          onClick={() => handleGenderSelection("male")}
        >
          <MaleSvg className="maleSVG" />
          <button type="button">Male</button>
        </div>
        <div
          className={`femaleBtn ${selectedGender === "female" ? "active" : ""}`}
          onClick={() => handleGenderSelection("female")}
        >
          <FemaleSvg className="femaleSVG" />
          <button type="button">Female</button>
        </div>
        <div
          className={`transBtn ${selectedGender === "trans" ? "active" : ""}`}
          onClick={() => handleGenderSelection("trans")}
        >
          <TransSvg className="transSVG" />
          <button type="button">Trans</button>
        </div>
      </form>
    </div>
  );
};

export default GenderSelection;
