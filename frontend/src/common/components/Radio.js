import React from "react";

const Radio = ({ label, className, value, checked, name, handlePick }) => {
  return (
    <div>
      <label className={className}>
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
