import {REQUEST_ALL_MOVIES, RECEIVE_ALL_MOVIES, REQUEST_MOVIE, RECEIVE_MOVIE, MOVIE_RATED} from "../actionTypes";

const initialState = {
  chosenMovie: {
    loading: false,
    item: {}
  },
  movies: {
    loading: false,
    items: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_MOVIE:
      return {
        ...state,
        chosenMovie: {
          ...state.chosenMovie,
          loading: true
        }
      };
    case RECEIVE_MOVIE:
      return {
        ...state,
        chosenMovie: {
          loading: false,
          item: { ...action.movie }
        }
      };
    case REQUEST_ALL_MOVIES:
      return {
        ...state,
        movies: {
          ...state.movies,
          loading: true
        }
      };
    case RECEIVE_ALL_MOVIES:
      return {
        ...state,
        movies: {
          loading: false,
          items: [ ...action.movies ]
        }
      };
    case MOVIE_RATED:
      return {
        ...state,
        chosenMovie: {
          ...state.chosenMovie,
          item: {
            ...state.chosenMovie.item,
            alreadyRated: true,
            rateGiven: action.rate
          }
        }
      };
    default:
      return state;
  }
};


//TODO change reducer to be as in redux tutorial alike
//TODO extract presentational components out of containers