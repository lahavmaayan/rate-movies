import React from 'react';
import _ from 'lodash';
const StepProgressBar = ({ stepsCount, currentStep, className }) => {
    return (
        <div className="step-progress">
            <div className="steps">
                {_.range(1, stepsCount + 1).map(step => (
                    <div className="wrapper">
                        <div
                            className={
                                currentStep === step
                                    ? 'step active fa fa-check-circle'
                                    : 'step  fa fa-circle'
                            }
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
