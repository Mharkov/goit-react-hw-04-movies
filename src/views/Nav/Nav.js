import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './Nav.module.css';
import routes from '../../routes';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <NavLink
            exact
            to={routes.HOME}
            className={styles.Link}
            activeClassName={styles.linkFocusColor}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navListItem}>
          <NavLink
            to={routes.MOVIES}
            className={styles.Link}
            activeClassName={styles.linkFocusColor}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default withRouter(Nav);
