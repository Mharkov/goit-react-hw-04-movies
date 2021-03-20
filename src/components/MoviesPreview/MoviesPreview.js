import React from 'react';
import PropTypes from 'prop-types';
// import s from './MoviesPreview.module.css';

function MoviesPreview({ title, imgUrl }) {
  return (
    <>
      <div>
        <img src={imgUrl} alt={title} />
      </div>
      <div>
        <p>{title}</p>
      </div>
    </>
  );
}

MoviesPreview.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default MoviesPreview;
