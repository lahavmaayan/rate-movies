import React, { Component } from 'react';

class MultiSelectTags extends Component {
    render() {
        const tags = ['bachdel test', ' minor represenation'];
        return (
            <div>
                {tags.map((tag, index) => (
                    <span key={'span' + index}>
                        <input
                            key={index}
                            id={'input' + index}
                            type="checkbox"
                            className="hide-checkbox"
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
