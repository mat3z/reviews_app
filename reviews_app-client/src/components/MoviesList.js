import React from 'react';
import MovieItem from './MovieItem';

const MoviesList = ({ list, filterString, origin }) => {

  const filterMovie = movie => {
    return movie.title.toLowerCase().includes(filterString.toLowerCase())
  };

  const moviesList = list
    .filter(movie => origin === "moviesHomepageList" ? filterMovie(movie) : movie)
    .map(movie => (
      <MovieItem
        key={movie._id}
        origin={origin}
        {...movie}
      />
    ));

  return (
    <div className={origin}>
      {moviesList}
    </div>
  )
};

export default MoviesList;