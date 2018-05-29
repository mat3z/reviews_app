import { LOAD_MOVIES } from "../actionTypes";

export default (state=[], action) => {
  switch (action.type) {
    case LOAD_MOVIES:
      return [...action.movies];
    default:
      return state;
  }
};