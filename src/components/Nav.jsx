import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Nav.module.css';

const Nav = () => {
  return (
    <nav>
      <ul className={s.list}>
        <li>
          <NavLink to="/" className="link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className="link">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
