import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFoundView from './views/NotFoundView';
import MoviesPage from './components/Searchbar/Searchbar';
import Nav from './views/Nav/Nav';

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage' /* webpackChunkName: "home-page" */)
);
// const MoviesPage = lazy(() =>
//   import('./moviesPage/MoviesPage' /* webpackChunkName: "movies-page" */)
// );
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  )
);
// const NotFoundView = lazy(() =>
//   import('./views/NotFoundView' /* webpackChunkName: "not-found-view */)
// );

const App = () => (
  <>
    <Suspense fallback={<p>Loading...</p>}>
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route component={NotFoundView} />
      </Switch>
    </Suspense>
  </>
);

export default App;
