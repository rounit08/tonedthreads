import React, { useState } from "react";
import ThinBody from "../../../assets/images/image-removebg-preview (45).png";
import NormalBody from "../../../assets/images/Untitled_design__14_-removebg-preview.png";
import FatBody from "../../../assets/images/Untitled_design__13_-removebg-preview (1).png";

const BodyShape = () => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <div className="genderSelection">
      <h1>and how you look yourself in mirror?</h1>
      <form className="genderForm">
        <div
          className={`maleBtn ${selectedGender === "male" ? "active" : ""}`}
          onClick={() => handleGenderSelection("male")}
        >
          {" "}
          <img src={ThinBody} alt="Thin Body" className="thinbody" />
          <button type="button">Thin</button>
        </div>
        <div
          className={`femaleBtn ${selectedGender === "female" ? "active" : ""}`}
          onClick={() => handleGenderSelection("female")}
        >
          {" "}
          <img src={NormalBody} alt="Normal Body" className="normalbody" />
          <button type="button">Normal</button>
        </div>
        <div
          className={`transBtn ${selectedGender === "trans" ? "active" : ""}`}
          onClick={() => handleGenderSelection("trans")}
        >
          {" "}
          <img src={FatBody} alt="Fat Body" className="fatbody" />
          <button type="button">Fat</button>
        </div>
      </form>
    </div>
  );
};

export default BodyShape;
