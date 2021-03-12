import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((value, index) => <MovieCard
		      key={index}
		      title={value.title}
		      IMDBRating={value.IMDBRating}
		      genres={value.genres}
		      poster={value.poster}
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
