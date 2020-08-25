import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map((movie, index) => 
    <MovieCard
    key={index}
    title={movie.title}
    IMDBRating={movie.IMDBRating}
    genres={movie.genres}
    poster={movie.poster}
  />)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

// <MovieShowcase />
// 1) renders at least one <MovieCard /> component
// 2) renders 9 <MovieCard /> components
// 3) passes all 4 props to every component
// 4) has generated the correct prop values for the first movie
// 5) has generated the correct prop values for the last movie