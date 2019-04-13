import React, { Component } from 'react';
import _ from 'lodash';

class TagsView extends Component {
    render() {
        return (
            <div>
                {!_.isEmpty(this.props.tags) &&
                    this.props.tags.map((tag, index) => (
                        <a
                            key={tag}
                            href="#" //TBD: link to search of this tag
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
