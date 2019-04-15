import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

export default class CustomLoader extends Component {
    render() {
        return (
            <div className="loader">
                <Loader type="Audio" color="#9B9ECE" height="120" width="120" />
            </div>
        );
    }
}
