import React, { Component } from 'react';
import { get } from 'services/restMethods';
import MovieTile from 'components/movieTile/movieTile';
import Carousel from 'components/carousel/carousel';
import ResultsGrid from 'common/components/ResultsGrid';
import MultiSelectTags from './MultiSelectTags';
import _ from 'lodash';

class SearchMovieView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carouselItems: [],
            resultCount: -1,
            filters: new Set([])
        };
        this.onTagsSelection = this.onTagsSelection.bind(this);
    }

    handleClick = () => {
        const movieName = this.search.value;
        const { setQuery, setMovies } = this.props;
        setQuery(movieName);
        const tags = Array.from(this.state.filters);
        const searchApiURL = `/api/movie/search?movieName=${movieName}&tags=${JSON.stringify(tags)}`;
        get(searchApiURL)
            .then(data => {
                setMovies(data);
                this.setState({ resultCount: data.length });
            })
            .catch(e => console.log(e));
    };

    getItemContent = item => {
        return (
            <MovieTile
                onClick={this.goToMoviePage.bind(this, item._id)}
                id={item._id}
                title={item.title}
                fmScore={item.fmScore || ''}
                imageUrl={item.imageUrl}
            />
        );
    };

    goToMoviePage = id => {
        this.props.history.push(`/movie/${id}`);
    };

    getItems = () => {
        const { resultMovies } = this.props;
        const tiles = [];
        if (_.isEmpty(resultMovies)) return [];
        for (let key in resultMovies) {
            if (resultMovies.hasOwnProperty(key)) {
                tiles.push(this.getItemContent(resultMovies[key]));
            }
        }
        return tiles;
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
                    <MultiSelectTags OnSelect={this.onTagsSelection} />
                </div>
                <ResultsGrid results={this.getItems()} />
            </div>
        );
    }

    onTagsSelection(tag, filterIsOn) {
        const newFilters = this.state.filters;
        if (filterIsOn) newFilters.add(tag);
        else newFilters.delete(tag);

        this.setState({ ...this.state, filters: newFilters });
    }
}

export default SearchMovieView;
