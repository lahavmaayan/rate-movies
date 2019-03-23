import React, { Component } from 'react';
import MovieTile from '../movieTile/movieTile';

const NUMBER_OF_MOVIE = 8

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {activeIndex: 0};
    } 

    onNextClick = () => {
        const { carouselMovies } = this.props
        if (this.state.activeIndex < carouselMovies.length - NUMBER_OF_MOVIE) {
            this.setState({activeIndex: this.state.activeIndex + 1});
        }
    }
      
    onPrevClick = () => {
        if (this.state.activeIndex > 0) {
            this.setState({activeIndex: this.state.activeIndex - 1});
        }
    }
    
    creatMovieTile = item => {
        const url = `http://localhost:9000/movie/${item.id}`;
        return (
            <MovieTile movieUrl={url} imageUrl={item.imageUrl} imageClass='tile-carousel' imageHoveredClass='hovered-tile-carousel'/>
        );
    };
    
    getItmes = () => {
        const { carouselMovies } = this.props
        return(
            carouselMovies.map(item => <li>{this.creatMovieTile(item)}</li>)
        );
    };

    render() {
        let sliderStyle ={
          transform:`translateX(${this.state.activeIndex*-15}%)`,
          transition: '0.2s'
        }
        return (
        <div className='main-carousel'>
            <button className='slide-button' onClick={this.onPrevClick}>◀</button>
            <div className='carousel-container'>  
                <ol className='slide-container' style={sliderStyle}>
                    {this.getItmes()}
                </ol>
            </div>
            <button className='slide-button' onClick={this.onNextClick}>▶</button>
        </div>
        );
      }
}

export default Carousel;