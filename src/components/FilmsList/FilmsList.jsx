import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import s from './FilmsList.module.css';

const FilmsList = ({ films, path }) => {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {films?.map(film => (
        <li key={film.id} className={s.item}>
          <Link
            state={{ from: location }}
            to={path ? `${path}+${film.id.toString()}` : film.id.toString()}
            className={s.link}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
              alt={film.title}
              width="200"
            />
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FilmsList;
