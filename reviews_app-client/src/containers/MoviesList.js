import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from "../store/actions/movies";
import MovieItem from '../components/MovieItem';

class MoviesList extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
    const { movies } = this.props;
    let moviesList = movies.map(movie => (
      <MovieItem
        key={movie._id}
        {...movie}
      />
    ));
    return (
      <div className='moviesList'>
        {moviesList}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}
export default connect(mapStateToProps, { fetchMovies })(MoviesList);