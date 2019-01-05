import React from 'react';
import MovieItem from './MovieItem';

const MoviesList = ({ list, origin }) => {
  const moviesList = list.map(movie => (
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