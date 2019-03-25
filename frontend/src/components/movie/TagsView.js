import React, { Component } from 'react';

class TagsView extends Component {
    render() {
        return (
            <div>
                {this.props.tags.map((tag, index) => (
                    <a
                        href="#"
                        className="badge badge-primary badge-pill capitalize movieTag"
                    >
                        {tag}
                    </a>
                ))}
            </div>
        );
    }
}

export default TagsView;
