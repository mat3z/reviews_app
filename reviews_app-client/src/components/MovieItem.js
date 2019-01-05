import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({title, year, imdbRank, imageUrl, imdbId, _id, rates}) => {
  const url = `http://image.tmdb.org/t/p/w500/${imageUrl}`;
  const link = `/movies/${_id}`;
  return(
    <div className='movieBox'>
      <Link to={link}>
        <img src={url} alt={title} className='imageSize'/>
        <div className='movieDetails'>
          <h3 className='movieTitle'>{imdbRank}: {title}</h3>
          <p>Year of production: {year}</p>
          <p>Rated {rates.length} times</p>
        </div>
      </Link>
    </div>
  )
};

export default MovieItem;