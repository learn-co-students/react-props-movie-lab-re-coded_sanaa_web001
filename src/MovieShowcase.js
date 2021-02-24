import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {

    return  movieData.map((r,i)=><MovieCard key={i} title={r.title } IMDBRating={r.IMDBRating} genres={r.genres} poster={r.poster} />
    )  ;    // map over your movieData array and return an array of the correct JSX
  }

  render() {
    return (
      <div id="movie-showcase">
      
        {this.generateMovieCards()}
      </div>
    )
  }
}
