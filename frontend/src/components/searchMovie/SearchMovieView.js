import React, { Component } from 'react';
import { get } from 'services/restMethods';
import MovieTile from '../movieTile/movieTile';
import Carousel from '../carousel/carousel';

class SearchMovieView extends Component {
    constructor(props) {
        super(props);
        this.state = {carouselItems: []};
    }

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
            <MovieTile movieUrl={url} imageUrl={item.imageUrl}/>
        );
    };

    getItmes = () => {
        const { resultMovies } = this.props;
        return resultMovies.map(item => this.getItemContent(item));
    };

    topRatings = () => {
        get(`/api/getTopRatings`)
            .then(data => this.setState({carouselItems: data.movies}))
            .catch(e => console.log(e));
    }
    
    render() {
        const { resultMovies } = this.props;
        const carouselItems = this.state.carouselItems;
        if (carouselItems.length==0){
            this.topRatings()
        };

        return (
            <div>
                <div style={{display: 'flex'}}>
                <input
                    placeholder="Search for..."
                    ref={input => (this.search = input)}
                />
                <button type="button" onClick={this.handleClick} style={{'font-size': '13.3px', padding: '2px'}}>
                    Search
                </button>
                </div>
                <Carousel carouselMovies={carouselItems}/>
                <div>{this.getItmes()}</div>
            </div>
        );
    }
}

export default SearchMovieView;
