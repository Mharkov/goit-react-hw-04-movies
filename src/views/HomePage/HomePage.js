import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../../services/movie-api';
import styles from './HomePage.module.css';
import routes from '../../routes';

class HomePage extends Component {
  state = {
    trending: [],
  };

  async componentDidMount() {
    API.getTrending().then(({ results }) =>
      this.setState({ trending: results })
    );
  }
  render() {
    const { trending, location } = this.state;
    return (
      <>
        <h1 className={styles.title}>Trending today</h1>
        <ul>
          {trending.map(({ id, title }) => (
            <li key={id}>
              <Link
                to={{
                  pathname: `${routes.MOVIES}/${id}`,
                  state: {
                    from: location,
                  },
                }}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
