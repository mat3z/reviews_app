import { apiCall } from "../../services/api";
import { addError } from "./errors";
import {
  REQUEST_ALL_MOVIES,
  RECEIVE_ALL_MOVIES,
  REQUEST_MOVIE,
  RECEIVE_MOVIE,
  REQUEST_RECOMMENDED_MOVIES_BY_REVIEWS,
  RECEIVE_RECOMMENDED_MOVIES_BY_REVIEWS,
  REQUEST_RECOMMENDED_MOVIES_BY_RATES,
  RECEIVE_RECOMMENDED_MOVIES_BY_RATES,
  MOVIE_RATED,
  SET_MOVIE,
  TYPING_MOVIE_TITLE
} from "../actionTypes";

const requestMovie = () => ({
  type: REQUEST_MOVIE
});

const receiveMovie = movie => ({
  type: RECEIVE_MOVIE,
  movie
});

const requestAllMovies = () => ({
  type: REQUEST_ALL_MOVIES
});

const receiveAllMovies = movies => ({
  type: RECEIVE_ALL_MOVIES,
  movies
});

const requestRecommendedMoviesByReviews = () => ({
  type: REQUEST_RECOMMENDED_MOVIES_BY_REVIEWS
});

const receiveRecommendedMoviesByReviews = movies => ({
  type: RECEIVE_RECOMMENDED_MOVIES_BY_REVIEWS,
  movies
});

const requestRecommendedMoviesByRates = () => ({
  type: REQUEST_RECOMMENDED_MOVIES_BY_RATES
});

const receiveRecommendedMoviesByRates = movies => ({
  type: RECEIVE_RECOMMENDED_MOVIES_BY_RATES,
  movies
});

const doRating = rate => ({
  type: MOVIE_RATED,
  rate
});

const setMovie = movie => ({
  type: SET_MOVIE,
  movie
});

const typeTitle = title => ({
  type: TYPING_MOVIE_TITLE,
  title
});

export const fetchMovie = movieId => (dispatch, getState) => {
  let { currentUser }= getState();
  const userId = currentUser.user.id;
  dispatch(requestMovie());
  return apiCall('get', `/api/users/${userId}/movies/${movieId}`)
    .then(res => dispatch(receiveMovie(res)))
    .catch(err => dispatch(addError(err.message)))
};

export const fetchRecommendedMoviesByReviews = userId => {
  return dispatch => {
    dispatch(requestRecommendedMoviesByReviews());
    return apiCall("get", `/api/users/${userId}/movies/recommendedByReviews`)
      .then(res => dispatch(receiveRecommendedMoviesByReviews(res)))
      .catch(err => dispatch(addError(err.message)));
  };
};

export const fetchRecommendedMoviesByRates = userId => {
  return dispatch => {
    dispatch(requestRecommendedMoviesByRates());
    return apiCall("get", `/api/users/${userId}/movies/recommendedByRates`)
      .then(res => dispatch(receiveRecommendedMoviesByRates(res)))
      .catch(err => dispatch(addError(err.message)));
  };
};

export const fetchAllMovies = userId => {
  return dispatch => {
    dispatch(requestAllMovies());
    return apiCall('get', `/api/users/${userId}/movies/all`)
      .then(res => dispatch(receiveAllMovies(res)))
      .catch(err => dispatch(addError(err.message)))
  }
};

export const rateMovie = (rate, movieId) => (dispatch, getState) => {
  let { currentUser } = getState();
  const userId = currentUser.user.id;
  return apiCall('post', `/api/users/${userId}/movies/${movieId}`, { rate })
    .then(res => dispatch(doRating(res.rate)))
    .catch(err => dispatch(addError(err.message)))
};

export const searchForMovie = title => {
  return dispatch => dispatch(typeTitle(title));
};

export const setMovieToWatch = movieId => (dispatch, getState) => {
  dispatch(setMovie(movieId))
};