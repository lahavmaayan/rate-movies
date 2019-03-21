import React, { Component } from 'react';

class TagsView extends Component {
    render() {
        return (
            <div>
                {this.props.tags.map((tag, index) => (
                    <span key={index} className="movieTag">
                        {tag}
                    </span>
                ))}
            </div>
        );
    }
}

export default TagsView;
