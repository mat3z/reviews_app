import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { movies } = this.props;
    return (
      <div className='searchBar'>
        <form>
          <input className='queryBox' type="text" placeholder='Find any movie...'/>
          <button type='submit'><i className="fas fa-search"></i></button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps)(SearchBar);