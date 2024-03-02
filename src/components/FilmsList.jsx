import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const FilmsList = ({ films, path }) => {
  const location = useLocation();

  return (
    <ul>
      {films?.map(film => (
        <li key={film.id}>
          <Link state={{ from: location }} to={'movies/' + film.id.toString()}>
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FilmsList;
