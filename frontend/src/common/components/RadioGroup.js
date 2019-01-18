import React, { Component } from 'react';
import Radio from './Radio';

class RadioGroup extends Component {
    render() {
        const { currentPick, handlePick, options, name } = this.props;
        return (
            <div>
                {options.map(option => (
                    <Radio
                        key={option.value}
                        label={option.label}
                        value={option.value}
                        checked={option.value === currentPick}
                        handlePick={handlePick}
                        name={name}
                    />
                ))}
            </div>
        );
    }
}

export default RadioGroup;
