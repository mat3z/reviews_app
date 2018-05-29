import { apiCall} from "../../services/api";
import { addError} from "./errors";
import { LOAD_MOVIES} from "../actionTypes";

export const loadMovies = movies => ({
  type: LOAD_MOVIES,
  movies
});

export const fetchMovies = () => {
  return dispatch => {
    return apiCall('get', '/api/movies/all')
      .then(res => dispatch(loadMovies(res)))
      .catch(err => dispatch(addError(err.message)))
  }
};