import React, { Component } from "react";
import { fetchRecommendedMovies } from "../store/actions/movies";
import { connect } from "react-redux";

class RecommendationListContainer extends Component {
	componentDidMount() {
		this.props.fetchRecommendedMovies(this.props.currentUser);
	}

	render() {
		const { movies, loading } = this.props;

		if (loading) {
			return <div className="loader" />;
		}

		return <div>Lista Filmow</div>;
	}
}

const mapStateToProps = state => ({
	movies: state.movies.movies.items,
	loading: state.movies.movies.loading,
	currentUser: state.currentUser.user.id
});

export default connect(
	mapStateToProps,
	{ fetchRecommendedMovies }
)(RecommendationListContainer);
