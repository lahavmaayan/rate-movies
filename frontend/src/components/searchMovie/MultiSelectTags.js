import React, { Component } from 'react';

class MultiSelectTags extends Component {
    render() {
        return (
            <div className="btn-group" data-toggle="buttons">
                <label className="btn btn-primary">
                    <input type="checkbox" /> Checkbox 1 (pre-checked)
                </label>
                <label className="btn btn-primary">
                    <input type="checkbox" /> Checkbox 2
                </label>
                <label className="btn btn-primary">
                    <input type="checkbox" /> Checkbox 3
                </label>
            </div>
        );
    }
}

export default MultiSelectTags;
