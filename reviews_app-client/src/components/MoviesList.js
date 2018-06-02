import React from 'react';
import MovieItem from './MovieItem';

const MoviesList = ({ list }) => {
  const moviesList = list.map(movie => (
    <MovieItem
      key={movie._id}
      {...movie}
    />
  ));

  return (
    <div className='moviesList'>
      {moviesList}
    </div>
  )
};

export default MoviesList;