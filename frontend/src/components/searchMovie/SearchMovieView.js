import React, { Component } from 'react';
import { get } from 'services/restMethods';

class SearchMovieView extends Component {
    handleClick = () => {
        const searchQuery = this.search.value;
        const { setQuery, setMovies } = this.props;
        setQuery(searchQuery);
        get(`/api/search?search_text=${searchQuery}`)
            .then(data => setMovies(data.movies))
            .catch(e => console.log(e));
    };

    getItemContent = item => {
        const url = `http://localhost:9000/movie/${item.id}`;
        return (
            <div>
                <div>
                    <a href={url}>{item.name}</a>
                </div>
                <div>
                    <span>Director: </span>
                    <span>{item.director}</span>
                </div>
            </div>
        );
    };

    getItmes = () => {
        const { resultMovies } = this.props;
        return resultMovies.map(item => this.getItemContent(item));
    };

    render() {
        return (
            <div>
                <input
                    placeholder="Search for..."
                    ref={input => (this.search = input)}
                />
                <button type="button" onClick={this.handleClick}>
                    Search
                </button>
                <div>{this.getItmes()}</div>
            </div>
        );
    }
}

export default SearchMovieView;
