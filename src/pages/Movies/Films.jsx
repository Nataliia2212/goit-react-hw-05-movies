import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { fetchFilms } from '../../helpers/api';
import { useHttp } from 'hooks/useHTTP';

const Films = () => {
  const [films] = useHttp(fetchFilms);
  const location = useLocation();

  return (
    <div>
      <ul>
        {films?.map(film => (
          <li key={film.id}>
            <Link
              state={{ from: location }}
              to={'movies/' + film.id.toString()}
            >
              {film.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Films;
