import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import SearchMovieView from './components/searchMovie/SearchMovieView';
import RateMovie from './components/rateMovie/RateMovie';
import MovieView from './components/movie/MovieView';
import logo from 'resources/images/logo.png';
import ObjectiveMovieView from './components/ObjectiveMovie/ObjectiveMovie';

import 'resources/scss/style.scss';

const Header = () => {
    return (
        <nav className="nav-wrap">
            <ul className="nav">
                <img className="logo" src={logo} />
                <li>
                    <Link to="/rate">Rate a Movie</Link>
                </li>
                <li>
                    <Link to="/movie">Movie</Link>
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
                    <Route path="/" exact component={SearchMovieView} />
                    <Route path="/rate" exact component={RateMovie} />
                    <Route path="/movie" exact component={MovieView} />
                    <Route
                        path="/movie/:movieId"
                        component={ObjectiveMovieView}
                    />
                </Switch>
            </div>
        );
    }
}

export default AppView;
