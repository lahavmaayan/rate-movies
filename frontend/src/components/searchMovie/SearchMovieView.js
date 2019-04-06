import React, { Component } from 'react';
import { get } from 'services/restMethods';
import MovieTile from 'components/movieTile/movieTile';
import Carousel from 'components/carousel/carousel';
import ResultsGrid from 'common/components/ResultsGrid';

class SearchMovieView extends Component {
    constructor(props) {
        super(props);
        this.state = { carouselItems: [], resultCount: -1 };
    }

    handleClick = () => {
        const searchQuery = this.search.value;
        const { setQuery, setMovies } = this.props;
        setQuery(searchQuery);
        get(`/api/movie/search?name=${searchQuery}`)
            .then(data => {
                setMovies(data);
                this.setState({ resultCount: data.length });
            })
            .catch(e => console.log(e));
    };

    getItemContent = item => {
        const url = `http://localhost:9000/movie/${item.id}`;
        return (
            <MovieTile
                movieUrl={url}
                title={item.name}
                rating={item.rating}
                imageUrl={item.imageUrl}
            />
        );
    };

    getItmes = () => {
        const { resultMovies } = this.props;
        return resultMovies.map(item => this.getItemContent(item));
    };

    topRatings = () => {
        get(`/api/getTopRatings`)
            .then(data => this.setState({ carouselItems: data.movies }))
            .catch(e => console.log(e));
    };

    render() {
        const carouselItems = this.state.carouselItems;
        if (!carouselItems.length) {
            this.topRatings();
        }

        return (
            <div>
                <h3>Top FMmovies Score</h3>
                <Carousel carouselMovies={carouselItems} />
                {this.state.resultCount >= 0 && (
                    <div>
                        Found {this.state.resultCount} results for
                        {this.search ? ' ' + this.search.value : ''} :
                    </div>
                )}
                <div style={{ display: 'flex' }}>
                    <input
                        placeholder="Search for..."
                        ref={input => (this.search = input)}
                    />
                    <button
                        type="button"
                        onClick={this.handleClick}
                        style={{ fontSize: '13.3px', padding: '2px' }}
                    >
                        Search
                    </button>
                </div>
                <ResultsGrid results={this.getItmes()} />
            </div>
        );
    }
}

export default SearchMovieView;
