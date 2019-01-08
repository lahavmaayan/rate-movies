import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import SearchMovieView from './components/searchMovie/SearchMovieView';
import RateMovieView from './components/rateMovie/RateMovieView';
import MovieView from './components/movie/MovieView';

import 'resources/scss/style.scss';

class AppView extends Component {
    render() {
        return (
            <div className="app">
                <nav id="nav-wrap">
                    <ul id="nav" className="nav">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rate">Rate a Movie</Link>
                        </li>
                        <li>
                            <Link to="/movie">Movie</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/" exact component={SearchMovieView} />
                    <Route path="/rate" exact component={RateMovieView} />
                    <Route path="/movie" exact component={MovieView} />
                </Switch>
            </div>
        );
    }
}

export default AppView;
