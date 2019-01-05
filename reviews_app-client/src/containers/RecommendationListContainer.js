import React, { Component } from "react";
import MoviesList from '../components/MoviesList';

class RecommendationListContainer extends Component {
	render() {
		if (this.props.recommendedMovies.loading) {
			return <div className="loader" />;
		}

		return (
			<div>
				<MoviesList list={this.props.recommendedMovies} origin={'recommendationsList'}/>
			</div>
		);
	}
}

export default RecommendationListContainer;
