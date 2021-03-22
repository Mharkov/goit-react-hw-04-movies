import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFoundView from './views/NotFoundView';
import Nav from './views/Nav/Nav';
import routes from './routes';

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage' /* webpackChunkName: "home-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  )
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */)
);

const App = () => (
  <>
    <Suspense fallback={<p>Loading...</p>}>
      <Nav />
      <Switch>
        <Route exact path={routes.HOME} component={HomePage} />
        <Route exact path={routes.MOVIES} component={MoviesPage} />
        <Route path={routes.MOVIE_DETAILS} component={MovieDetailsPage} />
        <Route component={NotFoundView} />
      </Switch>
    </Suspense>
  </>
);

export default App;
