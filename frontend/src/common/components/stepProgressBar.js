import React from 'react';
import _ from 'lodash';
const StepProgressBar = ({ stepsCount, currentStep, className }) => {
    const getClassName = step => {
        className = 'step fa ';
        className +=
            step < currentStep
                ? 'fa-check-circle visited'
                : step === currentStep
                ? 'fa-circle active'
                : 'fa-circle';
        return className;
    };
    return (
        <div className="step-progress">
            <div className="steps">
                {_.range(1, stepsCount + 1).map(step => (
                    <div className="wrapper">
                        <div
                            className={getClassName(step)}
                            key={step.toString()}
                        />
                        <div className="title">{'Step ' + step}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StepProgressBar;
