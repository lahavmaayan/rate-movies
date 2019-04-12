import React, { Component } from 'react';

class MultiSelectTags extends Component {
    handleChange(event) {
        this.props.OnSelect(event.target.name, event.target.checked);
    }

    render() {
        const tags = ['bechdelTest', 'minorityRepresentation'];
        return (
            <div>
                {tags.map((tag, index) => (
                    <span key={'span' + index}>
                        <input
                            key={index}
                            id={'input' + index}
                            type="checkbox"
                            className="hide-checkbox"
                            onChange={this.handleChange.bind(this)}
                            name={tag}
                        />
                        <label
                            key={'label' + index}
                            htmlFor={'input' + index}
                            className="badge badge-primary badge-pill capitalize movieTag faded"
                        >
                            {tag}
                        </label>
                    </span>
                ))}
            </div>
        );
    }
}

export default MultiSelectTags;
