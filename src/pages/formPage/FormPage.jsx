import React from "react";
import "./FormPage.css";
import useMultistepForm from "../../useMultistepform.ts";
import GenderSelection from "./FormStepOne/GenderSelection.jsx";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import SkinTone from "./formStepTwo/SkinTone.jsx";
import BodyShape from "./formStepThree/BodyShape.jsx";
import logo from "../../components/Landingpage/landingimage.png";
import { Link } from "react-router-dom";
function FormPage() {
  const { steps, currentStepIndex, step, next, isFirstStep, isLastStep, back } =
    useMultistepForm([<GenderSelection />, <SkinTone />, <BodyShape />]);

  return (
    <div className="formwrapper">
      <form>
        <Link to="/">
          <img
            src={logo}
            style={{
              height: 100,
              width: 100,
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
          <button type="button" onClick={next}>
            {isLastStep ? "Finish" : "Next"} <ArrowRightIcon />
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormPage;
