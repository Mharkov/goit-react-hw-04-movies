import axios from 'axios';
import React, { Component } from 'react';
import * as API from '../services/movie-api';
import MoviesList from '../components/MoviesList/MoviesList';

class HomeView extends Component {
  state = {
    trending: [],
  };

  async componentDidMount() {
    API.getTrending().then(({ results }) =>
      this.setState({ trending: results })
    );
  }
  render() {
    const { trending } = this.state;
    return (
      <>
        <h1
          style={{
            padding: '25px 0px 25px 0px',
            textAlign: 'center',
            color: '#f8640e',
          }}
        >
          Trending today
        </h1>
        <MoviesList movies={trending} />
      </>
    );
  }
}

export default HomeView;
