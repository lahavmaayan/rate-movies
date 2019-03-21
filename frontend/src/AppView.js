import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import SearchMovie from './components/searchMovie/SearchMovie';
import MovieView from './components/movie/MovieView';
import logo from 'resources/images/logo.png';

import 'resources/scss/style.scss';

const Header = () => {
    return (
        <nav className="nav-wrap">
            <ul className="nav">
                <img className="logo" src={logo} />
                <li>
                    <Link to="/movie/5c7a455a7c16122730915b82">Movie</Link>
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
                    <Route path="/movie/:movieId" exact component={MovieView} />
                </Switch>
            </div>
        );
    }
}

export default AppView;
