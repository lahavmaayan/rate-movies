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
            filters: new Set([]),
            tags: [
                'femaleLead',
                'LGBTQ',
                'minorityRepresentation',
                'sexualityRate',
                'bechdelTest'
            ]
        };
        this.onTagsSelection = this.onTagsSelection.bind(this);
    }

    handleClick = () => {
        this.searchMovies();
    };

    getItemContent = item => {
        return (
            <MovieTile
                onClick={this.goToMoviePage(item.id)}
                id={item.id}
                title={item.title}
                fmScore={item.fmScore || ''}
                imageUrl={item.imageUrl}
            />
        );
    };

    goToMoviePage = id => {
        return () => this.props.history.push(`/movie/${id}`);
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
        get(`/api/movie/top_n/10`)
            .then(data => this.setState({ carouselItems: data }))
            .catch(e => console.log(e));
    };

    searchMovies() {
        const movieName = this.search.value;
        const { setQuery, setMovies } = this.props;
        setQuery(movieName);
        const tags = Array.from(this.state.filters);
        const searchApiURL = this.generateSearchAPIURL(movieName, tags);
        get(searchApiURL)
            .then(data => {
                setMovies(data);
                this.setState({ resultCount: data.length });
            })
            .catch(e => console.log(e));
    }

    generateSearchAPIURL(movieName, tags) {
        const endpoint = '/api/movie/search?';
        const searchByName = endpoint + `title=${movieName}`;
        let searchApiURL = searchByName;
        tags.forEach(tag => {
            searchApiURL += `&${tag}=1`;
        });
        return searchApiURL;
    }

    render() {
        const carouselItems = this.state.carouselItems;
        if (!carouselItems.length) {
            this.topRatings();
        }

        return (
            <div>
                <Carousel
                    carouselMovies={carouselItems}
                    onClick={this.goToMoviePage}
                />
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
                    <MultiSelectTags
                        tags={this.state.tags}
                        filters={this.state.filters}
                        OnSelect={this.onTagsSelection}
                    />
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
        this.searchMovies();
    }
}

export default SearchMovieView;
