import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllMovies } from "../store/actions/movies";
import MoviesList from '../components/MoviesList';

class MoviesListContainer extends Component {
  componentDidMount() {
    if(!this.props.movies.length) {
      this.props.fetchAllMovies(this.props.currentUser);
    }
  }

  render() {
    const { movies, loading, filterString } = this.props;

    if (loading) {
      return <div className="loader"></div>;
    }

    return (
      <div>
        <MoviesList list={movies} filterString={filterString}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies.items,
  loading: state.movies.movies.loading,
  currentUser: state.currentUser.user.id,
  filterString: state.movies.filterString
});

export default connect(mapStateToProps, { fetchAllMovies })(MoviesListContainer);