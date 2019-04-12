import React, { Component } from 'react';
import { tagDisplayName } from 'common/utils/tagDisplayName';

class MultiSelectTags extends Component {
    handleChange(event) {
        this.props.OnSelect(event.target.name, event.target.checked);
    }

    render() {
        return (
            <div>
                {this.props.tags.map((tag, index) => (
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
                            {tagDisplayName(tag)}
                        </label>
                    </span>
                ))}
            </div>
        );
    }
}

export default MultiSelectTags;
