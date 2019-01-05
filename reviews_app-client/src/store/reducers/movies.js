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
  TYPING_MOVIE_TITLE} from "../actionTypes";

const initialState = {
  filterString: '',
  chosenMovie: {
    loading: false,
    item: {}
  },
  movies: {
    loading: false,
    items: []
  },
  recommendedMoviesByReviews: {
    loading: false,
    items: []
  },
  recommendedMoviesByRates: {
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

    case REQUEST_RECOMMENDED_MOVIES_BY_REVIEWS:
      return {
        ...state,
        recommendedMoviesByReviews: {
          ...state.movies,
          loading: true
        }
      };
    case RECEIVE_RECOMMENDED_MOVIES_BY_REVIEWS:
      return {
        ...state,
        recommendedMoviesByReviews: {
          loading: false,
          items: [...action.movies]
        }
      };

    case REQUEST_RECOMMENDED_MOVIES_BY_RATES:
      return {
        ...state,
        recommendedMoviesByRates: {
          ...state.movies,
          loading: true
        }
      };
    case RECEIVE_RECOMMENDED_MOVIES_BY_RATES:
      return {
        ...state,
        recommendedMoviesByRates: {
          loading: false,
          items: [...action.movies]
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
    case TYPING_MOVIE_TITLE:
      return {
        ...state,
        filterString: action.title
      };
    default:
      return state;
  }
};


//TODO change reducer to be as in redux tutorial alike
//TODO extract presentational components out of containers