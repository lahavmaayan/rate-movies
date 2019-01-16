import React, { Component } from 'react';
import Radio from './Radio';

class RadioGroup extends Component {
    state = {
        currentPick: ''
    };

    handleChange = ({ target }) => {
        console.log(target);
        this.setState({ currentPick: target.value });
    };

    render() {
        return (
            <div>
                {this.props.options.map(option => (
                    <Radio
                        key={option.value}
                        label={option.label}
                        value={option.value}
                        checked={option.value === this.state.currentPick}
                        handlePick={this.handleChange}
                    />
                ))}
            </div>
        );
    }
}

export default RadioGroup;
