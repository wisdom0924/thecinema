import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.scss';

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.number).isRequired,
  // backdrop: PropTypes.string.isRequired,
};

function Movie({ id, title, lang, overview, poster, date, rating, genres, backdrop }) {
  return (
    <li>
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            title,
            overview,
            poster,
            date,
            lang,
            genres,
            backdrop,
          },
        }}
      >
        <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} title={title}></img>
        <div className="list__text">
          <h5>{title}</h5>
          <span>★{rating}</span>
          {/* <span>{genres}</span> */}
        </div>
        <h4>{date.slice(0, 4)}</h4>
      </Link>
    </li>
  );
}

export default Movie;
