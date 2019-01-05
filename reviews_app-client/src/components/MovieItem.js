import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { setMovieToWatch} from "../store/actions/movies";
import { connect } from 'react-redux';


// class MovieItem extends Component {
//   handleClick = (e) => {
//     e.preventDefault();
//     console.log('clicked');
//     setMovieToWatch(this.props._id);
//   };
//
//   render() {
//     const {title, year, imdbRank, imageUrl, imdbId, _id, origin} = this.props;
//     const url = `http://image.tmdb.org/t/p/w500/${imageUrl}`;
//     const link = `/movies/${_id}`;
//     console.log(origin);
//
//     const sufix = origin === 'recommendationsList' ? 'Recommendations' : '';
//     const linkStyle = origin === 'recommendationsList' ? {textDecoration: 'none', color: 'white'} : {};
//
//     return(
//       <div className={`movieBox${sufix}`} onClick={this.handleClick}>
//         <img src={url} alt={title} className={`imageSize${sufix}`}/>
//         <div className={`movieDetails${sufix}`}>
//           <h3 className={`movieTitle${sufix}`}>{imdbRank}: {title}</h3>
//           <p>Year of production: {year}</p>
//           {/*<p>IMDB link: {imdbId}</p>*/}
//         </div>
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => ({
// movie: state.movies.
// });


const MovieItem = ({title, year, imdbRank, imageUrl, imdbId, _id, origin, rates}) => {
  const url = `http://image.tmdb.org/t/p/w500/${imageUrl}`;
  const link = `/movies/${_id}`;

  const sufix = origin === 'recommendationsList' ? 'Recommendations' : '';
  const linkStyle = origin === 'recommendationsList' ? {textDecoration: 'none', color: 'white'} : {};

  return(
    <div className={`movieBox${sufix}`}>
      <Link to={link} style={linkStyle}>
        <img src={url} alt={title} className={`imageSize${sufix}`}/>
        <div className={`movieDetails${sufix}`}>
          <h3 className={`movieTitle${sufix}`}>{imdbRank}: {title}</h3>
          {/*<h3 className={`movieTitle${sufix}`}>{imdbRank}: <Link to={link} style={linkStyle}>{title}</Link></h3>*/}
          <p>Year of production: {year}</p>
          <p>Rated {rates.length} times</p>
          {/*<p>IMDB link: {imdbId}</p>*/}
        </div>
      </Link>
    </div>
  )
};

// export default connect(null, { setMovieToWatch })(MovieItem);
export default MovieItem;