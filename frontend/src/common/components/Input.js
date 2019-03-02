import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
    label,
    className,
    isRequired,
    onChange,
    type,
    selectOptions,
    name,
    value,
    errorMessage,
    selectFirst
}) => {
    return (
        <div className={className + ' inline-flex'}>
            {isRequired && <span className="required">*</span>}
            {type === 'text' && (
                <input
                    autoComplete="off"
                    onChange={onChange}
                    required={isRequired}
                    placeholder={label}
                    name={name}
                    type={type}
                    value={value}
                />
            )}
            {type === 'select' && (
                <select
                    onChange={onChange}
                    name={name}
                    value={value}
                    className={!isRequired ? 'require-align' : ''}
                >
                    {selectFirst && (
                        <option
                            disabled
                            hidden
                            key="firstOption"
                            defaultValue={'firstOption'}
                        >
                            Select...
                        </option>
                    )}
                    {selectOptions &&
                        selectOptions.map((item, index) => (
                            <option key={'option' + index}>{item}</option>
                        ))}
                </select>
            )}
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    isRequired: PropTypes.bool,
    type: PropTypes.string,
    selectOptions: PropTypes.array,
    name: PropTypes.string,
    value: PropTypes.object,
    touched: PropTypes.bool,
    selectFirst: PropTypes.bool
};

export default Input;
