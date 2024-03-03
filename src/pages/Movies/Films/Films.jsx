import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { fetchFilms } from '../../../helpers/api';
import { useHttp } from 'hooks/useHTTP';
import s from './Films.module.css';

const Films = () => {
  const [films] = useHttp(fetchFilms);
  const location = useLocation();

  return (
    <div>
      <ul className={s.list}>
        {films?.map(film => (
          <li key={film.id} className={s.item}>
            <Link
              state={{ from: location }}
              to={'movies/' + film.id.toString()}
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
    </div>
  );
};

export default Films;
