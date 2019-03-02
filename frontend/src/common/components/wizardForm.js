import React from 'react';
import StepProgressBar from './stepProgressBar';

const WizardForm = ({ currentStep, onStepChanged, onSubmit, steps }) => {
    const handelNext = () => {
        if (currentStep < steps.length) {
            onStepChanged(currentStep + 1);
        }
    };

    const handelPrevious = () => {
        let step = currentStep;
        if (step !== 1) {
            onStepChanged(currentStep - 1);
        }
    };
    return (
        <div className="wizard-container">
            <StepProgressBar
                stepsCount={steps.length}
                currentStep={currentStep}
            />
            <form onSubmit={onSubmit}>
                {currentStep === 1 && steps[currentStep - 1].component}
                {currentStep === 2 && steps[currentStep - 1].component}
                {currentStep === 3 && steps[currentStep - 1].component}
                {currentStep < steps.length && (
                    <button onClick={handelNext}>Next</button>
                )}
                {currentStep === steps.length && (
                    <input type="submit" value="Submit" />
                )}
                {currentStep > 1 && (
                    <button onClick={handelPrevious}>Previous</button>
                )}
            </form>
        </div>
    );
};

export default WizardForm;
