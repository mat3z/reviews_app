import React from 'react';
import { connect } from 'react-redux';
import { rateMovie } from "../store/actions/movies";
import StarRatings from 'react-star-ratings';

const RateStars = ({ rateMovie, movieId, rateGiven, alreadyRated }) => {
  const ratingChanged = newRating => {
    rateMovie(newRating, movieId);
  };

  const options = {
    numberOfStars: 10,
    starEmptyColor: '#90AFC5',
    starHoverColor: '#763626',
    starRatedColor: '#763626',
    starDimension: '50px',
    starSpacing: '5px'
  };

  return (
    <div>
      { alreadyRated ?
        <StarRatings
          {...options}
          rating={rateGiven}
        /> :
        <StarRatings
          {...options}
          changeRating={ratingChanged}
        />
      }
    </div>
  )
};

const mapStateToProps = state => ({
  movieId: state.movies.chosenMovie.item._id,
  alreadyRated: state.movies.chosenMovie.item.alreadyRated,
  rateGiven: state.movies.chosenMovie.item.rateGiven
});

export default connect(mapStateToProps, { rateMovie })(RateStars);