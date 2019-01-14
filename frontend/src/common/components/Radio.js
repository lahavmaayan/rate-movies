import React from 'react';

const Radio = ({ label, className, value, checked, handlePick }) => {
    return (
        <div className={className}>
            <label>
                <input
                    type="radio"
                    value={value}
                    checked={checked}
                    onChange={handlePick}
                />
                {label}
            </label>
        </div>
    );
};

export default Radio;
