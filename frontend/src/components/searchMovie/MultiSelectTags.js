import React, { Component } from 'react';

class MultiSelectTags extends Component {
    render() {
        return (
            <div>
                <input id="toggle" type="checkbox" className="hide-checkbox" />
                <label
                    htmlFor="toggle"
                    className="badge badge-primary badge-pill capitalize movieTag faded"
                >
                    aaa
                </label>
            </div>
        );
    }
}

export default MultiSelectTags;
