import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.scss';

Program.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.number).isRequired,
};
function Program({ id, name, lang, overview, poster, date, rating, genres, backdrop }) {
  return (
    <li>
      <Link
        to={{
          pathname: `/tv/${id}`,
          state: {
            name,
            overview,
            poster,
            date,
            lang,
            genres,
            backdrop,
          },
        }}
      >
        <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={name} title={name}></img>
        <div className="list__text">
          <h5>{name}</h5>
          <span>★{rating}</span>
          {/* <span>{genres}</span> */}
        </div>
        <h4>{date.slice(0, 4)}</h4>
      </Link>
    </li>
  );
}

export default Program;
