import React from 'react';
import _ from 'lodash';
const StepProgressBar = ({ stepsCount, currentStep }) => {
    return (
        <div>
            <ul>
                {_.range(1, stepsCount + 1).map(step => (
                    <li
                        className={currentStep === step ? 'active' : ''}
                        key={step.toString()}
                    >
                        {step}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StepProgressBar;
