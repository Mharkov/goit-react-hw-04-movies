import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import MoviesPreview from '../MoviesPreview/MoviesPreview';
import * as API from '../../services/movie-api';
import routes from '../../routes';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id}>
          <Link to={`${routes.MOVIES}/${id}`}>
            <MoviesPreview
              key={id}
              title={title}
              imgUrl={API.posterImgPath + poster_path}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default withRouter(MoviesList);
