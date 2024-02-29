import React from "react";
import "./FormPage.css";
import useMultistepForm from "../../useMultistepform.ts";
import GenderSelection from "./FormStepOne/GenderSelection.jsx";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import SkinTone from "./formStepTwo/SkinTone.jsx";
import BodyShape from "./formStepThree/BodyShape.jsx";
import logo from "../../components/Landingpage/landingimage.png";
import { Link } from "react-router-dom";
import { useOptions } from "../../context/OptionContext.js";

function FormPage() {
  const { selectedOptions, updateSelectedOptions } = useOptions();

  const { steps, currentStepIndex, step, next, isFirstStep, isLastStep, back } =
    useMultistepForm([
      <GenderSelection updateSelectedOptions={updateSelectedOptions} />,
      <SkinTone updateSelectedOptions={updateSelectedOptions} />,
      <BodyShape updateSelectedOptions={updateSelectedOptions} />,
    ]);
  const handleNext = () => {
    const { gender, skinTone, bodyShape } = selectedOptions;

    console.log(gender, skinTone, bodyShape);
  };
  return (
    <div className="formwrapper">
      <form>
        <Link to="/">
          <img
            src={logo}
            style={{
              height: 80,
              width: 80,
              top: 0,
              left: 0,
              position: "absolute ",
            }}
            className="formLogo"
          />
        </Link>

        <div className="stepCounter">
          {currentStepIndex + 1}/{steps.length}
        </div>
        <div className="stepSection">{step}</div>
        <div className="stepFlowBtn">
          {!isFirstStep && (
            <button type="button" onClick={back}>
              <ArrowLeftIcon /> Back
            </button>
          )}
          {/* Conditional rendering for button */}
          {isLastStep ? (
            <Link to="/productpage">
              <button type="button" onClick={handleNext}>
                Finish
              </button>
            </Link>
          ) : (
            <button type="button" onClick={next} className="nextBtn">
              Next <ArrowRightIcon />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default FormPage;
