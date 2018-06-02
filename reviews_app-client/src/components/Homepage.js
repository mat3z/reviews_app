import React from 'react';
import { Link } from 'react-router-dom';
import MoviesListContainer from '../containers/MoviesListContainer'
import SearchBar from '../containers/SearchBar';

const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div className="homeHero">
        <h1>What's up?</h1>
        <p>This is a homepage which will be changed later to display a list of movies available to watch.</p>
      </div>
    )
  }
  return (
    <div>
      <SearchBar />
      <MoviesListContainer />
    </div>
  )
};

export default Homepage;