import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import MoviesDetailsView from './views/MoviesDetailsView';
import CastView from './views/CastView';
import Reviews from './views/Reviews';
import NotFoundView from './views/NotFoundView';
import MoviesPage from './components/MoviesPage/MoviesPage';
import routes from './routes';

const App = () => (
  <>
    <ul>
      <li>
        <NavLink to={routes.HOME}>Home</NavLink>
      </li>
      <li>
        <NavLink to={routes.MOVIES}> Movies </NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/movies" component={MoviesPage} />
      <Route exact path="/movies/:movieId" component={MoviesDetailsView} />
      <Route path="/movies/:movieId/cast" component={CastView} />
      <Route path="/movies/:movieId/reviews" component={Reviews} />
      <Route component={NotFoundView} />
    </Switch>
  </>
);

export default App;
