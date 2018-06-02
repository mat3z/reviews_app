import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { REQUEST_ALL_MOVIES, RECEIVE_ALL_MOVIES, REQUEST_MOVIE, RECEIVE_MOVIE } from "../actionTypes";

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

export const fetchMovie = id => {
  return dispatch => {
    dispatch(requestMovie());
    return apiCall('get', `/api/movies/${id}`)
      .then(res => dispatch(receiveMovie(res)))
      .catch(err => dispatch(addError(err.message)))
  }
};

export const fetchAllMovies = () => {
  return dispatch => {
    dispatch(requestAllMovies());
    return apiCall('get', '/api/movies/all')
      .then(res => dispatch(receiveAllMovies(res)))
      .catch(err => dispatch(addError(err.message)))
  }
};