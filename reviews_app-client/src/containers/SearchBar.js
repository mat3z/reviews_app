import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchForMovie } from "../store/actions/movies";

class SearchBar extends Component {
  componentDidMount() {
    this.props.searchForMovie("");
  }

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
            value={this.props.filterString}
            onChange={this.handleChange}
          />
          <button type='submit'><i className="fas fa-search"></i></button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  filterString: state.movies.filterString
});
export default connect(mapStateToProps, { searchForMovie })(SearchBar);