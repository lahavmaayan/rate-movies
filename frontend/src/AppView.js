import React, { Component } from 'react';

import 'resources/scss/style.scss';
import Loader from 'common/components/Loader';

class AppView extends Component {
    render() {
        return (
            <div className="app">
                <div className="title">create-react-app-light</div>
                <div className="section">
                    <Loader />
                </div>
                <p>@ powered by yarindeoh</p>
            </div>
        );
    }
}

export default AppView;
