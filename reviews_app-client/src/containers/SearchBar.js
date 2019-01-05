import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchForMovie } from "../store/actions/movies";

class SearchBar extends Component {
  handleChange = e => {
    this.props.searchForMovie(e.target.value);
  };

  render() {
    return (
      <div className='searchBar'>
        <form>
          <input
            className='queryBox'
            type="text"
            placeholder='Find any movie...'
            name='filterString'
            onChange={this.handleChange}
          />
          <button type='submit'><i className="fas fa-search"></i></button>
        </form>
      </div>
    )
  }
}

export default connect(null, { searchForMovie })(SearchBar);