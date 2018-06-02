import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({title, year, imdbRank, imageUrl, imdbId, _id}) => {
  const url = `http://image.tmdb.org/t/p/w500/${imageUrl}`;
  const link = `/movies/${_id}`;
  return(
    <div className='movieBox'>
      <img src={url} alt={title} className='imageSize'/>
        <div className='movieDetails'>
          <h3 className='movieTitle'>{imdbRank}: <Link to={link}>{title}</Link></h3>
          <p>Year of production: {year}</p>
          <p>IMDB link: {imdbId}</p>
        </div>
    </div>
  )
};

export default MovieItem;