import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({title, year, imdbRank, imageUrl, imdbId}) => {
  const url = `http://image.tmdb.org/t/p/w500/${imageUrl}`;
  return(
    <div className='movieBox'>
      <img src={url} alt={title} className='image'/>
      <div className='movieDetails'>
        <h3 className='movieTitle'>{imdbRank}: {title}</h3>
        <p>Year of production: {year}</p>
        <p>IMDB link: {imdbId}</p>
      </div>
    </div>
  )
};

export default MovieItem;