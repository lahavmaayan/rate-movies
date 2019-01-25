import React, { Component } from 'react';
import { get } from "../../services/restMethods";


class SearchMovieView extends Component {
    state = {
        query: "",
        movies: [],
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }

    handleClick = () => {
        get(`/api/search?search_text=${this.state.query}`)
            .then(data => this.setState({
                movies: data.movies
        })).catch(e => console.log(e))
    }

    getItemContent = (item) => {
        const url = `http://localhost:9000/movie/${item.id}`
        return (
        <div>
            <div>
                <a href ={url}>{item.name}</a>
            </div>
            <div>
                <span>Director: </span>
                <span>{item.director}</span>
            </div>
        </div>
        )
    }

    getItmes = () => {
        return (
            this.state.movies.map((item) => this.getItemContent(item)
            )
        )
    }

    render() {
        return (
                <div>
                    <input
                        placeholder="Search for..."
                        ref={input=>this.search=input}
                        onChange={this.handleInputChange}
                    />
                    <button type="button" onClick={this.handleClick}>Search</button>
                    <div>
                        {this.getItmes()}
                    </div>
                </div>
        );
    }
}

export default SearchMovieView;
