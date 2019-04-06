import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import SearchMovie from './components/searchMovie/SearchMovie';
import Movie from './components/movie/Movie';
import logo from 'resources/images/logo.png';

import 'resources/scss/style.scss';

const Header = () => {
    return (
        <nav className="nav-wrap">
            <ul className="nav">
                <img className="logo" src={logo} />
                <li>
                    <Link to="/movie/">Movie</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>
    );
};

class AppView extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <Switch>
                    <Route path="/" exact component={SearchMovie} />
                    <Route path="/movie/:movieId" exact component={Movie} />
                </Switch>
            </div>
        );
    }
}

export default AppView;
