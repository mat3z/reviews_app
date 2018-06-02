import React from 'react';
import RateStars from './RateStars';

const WatchMoviePage = ({title, imageUrl, year, imdbRank}) => {
  const url = `http://image.tmdb.org/t/p/w500/${imageUrl}`;



  return (
  <div className="watchMoviePage">
    <div className="movieInfoAndPoster">
      <img src={url} alt={`Poster of ${title}`} className='imageSize imageShadow'/>
      <div className="movieInfo">
        <div className='watchPageMovieTitle'>
          <h1>{title} <span className="productionYear">({year})</span></h1>
        </div>
        <div className="movieScores">
          <div>
            <h1>
              Your score: <RateStars/>
            </h1>
          </div>
          <h1 className='imdbRank'>
            IMDB's rank: <br/>
            <span style={{fontSize: '1.4em', padding: '5px'}}>{imdbRank}</span>
          </h1>
        </div>
      </div>
    </div>
    <hr/>
    <div className="storyline">
      <h2>Storyline:</h2>
      <p>Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against the Joker becomes deeply personal, forcing him to \"confront everything he believes\" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes.</p>
    </div>
  </div>
)};

export default WatchMoviePage;