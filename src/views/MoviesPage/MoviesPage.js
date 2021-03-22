import React, { Component } from 'react';
import * as API from '../../services/movie-api';
import Searchbar from '../../components/Searchbar/Searchbar';
import routes from '../../routes';
import { Link } from 'react-router-dom';

export default class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
  };

  componentDidMount() {
    const { location } = this.props;
    const getMovies = new URLSearchParams(location.search).get('query');
    if (!getMovies) {
      return;
    }
    this.onSubmit(getMovies);
  }

  componentDidUpdate(prevProps) {
    const prevQuery = new URLSearchParams(prevProps).get('query');
    const nextQuery = new URLSearchParams(this.props).get('query');

    if (prevQuery !== nextQuery) {
      this.onSubmit(nextQuery);
    }
  }

  onSubmit = (query) => {
    const { history } = this.props;
    this.setState({ query });
    API.searchMovies(query).then(({ results }) => {
      this.setState({ movies: results });
    });
    history.push({
      pathname: history.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies } = this.state;

    return (
      <>
        <Searchbar onSearch={this.onSubmit} />
        <ul>
          {movies.map((el) => (
            <li key={el.id}>
              <Link to={`${routes.MOVIES}/${el.id}`}>{el.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
