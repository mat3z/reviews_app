import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllMovies } from "../store/actions/movies";
import MoviesList from '../components/MoviesList';

class MoviesListContainer extends Component {
  componentDidMount() {
    this.props.fetchAllMovies();
  }

  render() {
    const { movies, loading } = this.props;

    if (loading) {
      return <div className="loader"></div>;
    }

    return (
      <div>
        <MoviesList list={movies}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies.items,
  loading: state.movies.movies.loading
});

export default connect(mapStateToProps, { fetchAllMovies })(MoviesListContainer);