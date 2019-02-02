import React from 'react';

const Radio = ({ label, className, value, checked, name, handlePick }) => {
    return (
        <div className={className}>
            <label>
                <input
                    type="radio"
                    value={value}
                    checked={checked}
                    onChange={handlePick}
                    name={name}
                />
                {label}
            </label>
        </div>
    );
};

export default Radio;
