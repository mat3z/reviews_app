import React from 'react';
import MovieItem from './MovieItem';

const MoviesList = ({ list, filterString }) => {
  const moviesList = list
    .filter(movie => movie.title.toLowerCase().includes(filterString.toLowerCase()))
    .map(movie => (
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