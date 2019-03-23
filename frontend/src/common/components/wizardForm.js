import React from "react";
import StepProgressBar from "./stepProgressBar";

const WizardForm = ({ currentStep, onStepChanged, onSubmit, steps }) => {
  const handelNext = e => {
    e.preventDefault();
    if (currentStep < steps.length) {
      onStepChanged(currentStep + 1);
    }
  };

  const handelPrevious = e => {
    e.preventDefault();
    let step = currentStep;
    if (step !== 1) {
      onStepChanged(currentStep - 1);
    }
  };
  return (
    <div className="wizard-container">
      <StepProgressBar
        stepsCount={steps.length - 1}
        currentStep={currentStep}
      />
      <form onSubmit={onSubmit}>
        {currentStep === 1 && steps[currentStep - 1].component}
        {currentStep === 2 && steps[currentStep - 1].component}
        {currentStep === 3 && steps[currentStep - 1].component}
        {currentStep === 4 && steps[currentStep - 1].component}
        {currentStep < steps.length - 1 && (
          <button onClick={handelNext}>Next</button>
        )}
        {currentStep === steps.length - 1 && (
          <input type="submit" value="Submit" />
        )}
        {currentStep > 1 && currentStep === steps.length - 1 && <button onClick={handelPrevious}>Previous</button>}
      </form>
    </div>
  );
};

export default WizardForm;
