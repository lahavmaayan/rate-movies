import React from 'react';
import StepProgressBar from './stepProgressBar';
const WizardForm = ({ currentStep, onStepChanged, onSubmit, steps }) => {
    const handelNext = () => {
        event.preventDefault();

        if (currentStep < steps.length) {
            onStepChanged(currentStep + 1);
        }
    };

    const handelPrevious = () => {
        event.preventDefault();
        let step = currentStep;
        if (step !== 1) {
            onStepChanged(currentStep - 1);
        }
    };
    return (
        <div>
            <StepProgressBar
                stepsCount={steps.length}
                currentStep={currentStep}
            />
            <form onSubmit={onSubmit}>
                <div className="title">rate-movie</div>
                {currentStep === 1 && steps[currentStep - 1].component}
                {currentStep === 2 && steps[currentStep - 1].component}
                {currentStep === 3 && steps[currentStep - 1].component}

                {currentStep > 1 && (
                    <button onClick={handelPrevious}>prev</button>
                )}
                {currentStep < steps.length && (
                    <button onClick={handelNext}>next</button>
                )}

                {currentStep === steps.length && (
                    <input type="submit" value="Submit" />
                )}
            </form>
        </div>
    );
};

export default WizardForm;
