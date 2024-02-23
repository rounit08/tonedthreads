import React, { useState } from "react";
import ThinBody from "../../../assets/images/image-removebg-preview (45).png";
import NormalBody from "../../../assets/images/Untitled_design__14_-removebg-preview.png";
import FatBody from "../../../assets/images/Untitled_design__13_-removebg-preview (1).png";

const BodyShape = ({ updateSelectedOptions }) => {
  const [selectedBodyShape, setSlectedBodyShape] = useState(null);

  const handleBodyShapeSelection = (bodyShape) => {
    setSlectedBodyShape(bodyShape);
    updateSelectedOptions((prevOptions) => ({
      ...prevOptions,
      bodyShape: bodyShape,
    }));
  };

  return (
    <div className="genderSelection">
      <h1>and how you look yourself in mirror?</h1>
      <form className="genderForm">
        <div
          className={`maleBtn ${selectedBodyShape === "thin" ? "active" : ""}`}
          onClick={() => handleBodyShapeSelection("thin")}
        >
          {" "}
          <img src={ThinBody} alt="Thin Body" className="thinbody" />
          <button type="button">Thin</button>
        </div>
        <div
          className={`femaleBtn ${selectedBodyShape === "fit" ? "active" : ""}`}
          onClick={() => handleBodyShapeSelection("fit")}
        >
          {" "}
          <img src={NormalBody} alt="Normal Body" className="normalbody" />
          <button type="button">Normal</button>
        </div>
        <div
          className={`transBtn ${selectedBodyShape === "fat" ? "active" : ""}`}
          onClick={() => handleBodyShapeSelection("fat")}
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
