import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from "../store/actions/movies";
import WatchMoviePage from '../components/WatchMoviePage';

class WatchMoviePageContainer extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchMovie(this.props.match.params.id);
    }
  }

  render() {
    const { movie, loading } = this.props;

    if(loading) {
      return <div className="loader"></div>;
    }

    return (
      <div>
        <WatchMoviePage />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movie: state.movies.chosenMovie.item,
  loading: state.movies.chosenMovie.loading
});

export default connect(mapStateToProps, { fetchMovie })(WatchMoviePageContainer);