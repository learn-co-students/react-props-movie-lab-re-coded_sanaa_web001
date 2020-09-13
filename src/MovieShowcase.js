import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
   const movies =movieData.map((movie,id) =>
     <MovieCard
          key={this.id}
          title={this.title}
          title={movie.title}
          IMDBRating={movie.IMDBRating}
          genres={movie.genres}
          poster={movie.poster}
    />)
    return movies;
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
// ✓ renders at least one <MovieCard /> component
// ✓ renders 9 <MovieCard /> components
// 1) passes all 4 props to every component
// 2) has generated the correct prop values for the first movie
// 3) has generated the correct prop values for the last movie