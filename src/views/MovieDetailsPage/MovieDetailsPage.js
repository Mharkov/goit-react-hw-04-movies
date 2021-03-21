import React, { Component } from 'react';
import * as API from '../../services/movie-api';
import { Route, NavLink, withRouter, Switch } from 'react-router-dom';
import Cast from '../Cast';
import Reviews from '../Reviews';
import routes from '../../routes';
import styles from './MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {
    movie: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    API.getMovieDetales(movieId).then((resData) => {
      this.setState({ movie: resData });
    });
  }
  handelClick = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { movie } = this.state;
    const { match } = this.props;
    const { url } = match;

    return (
      <>
        <button onClick={this.handelClick} type="button" className="btn">
          Go back
        </button>
        <div className={styles.movieCard}>
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              width="300"
              alt={movie.title}
            />
          )}
          <div className="descr">
            <h2>
              {movie.title} ({movie.release_date})
            </h2>
            <p>User score: {movie.vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <ul className={styles.genreList}>
              {/* {movie.genres.map((el) => (
                <li key={el.id}>{movie.genres}</li>
              ))} */}
            </ul>
          </div>
        </div>
        <div className={styles.addInf}>
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink to={`${url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
        </div>

        <Switch>
          <Route exact path={routes.MOVIE_CAST} component={Cast} />
          <Route exact path={routes.MOVIE_REVIEWS} component={Reviews} />
        </Switch>
      </>
    );
  }
}

export default withRouter(MovieDetailsPage);
