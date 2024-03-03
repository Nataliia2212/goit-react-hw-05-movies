import React from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import Form from '../Form';

import { fetchFilmQuery } from 'helpers/api';
import { useHttp } from 'hooks/useHTTP';
import s from './Movies.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query1 = searchParams.get('query') || '';

  const [films] = useHttp(fetchFilmQuery, query1);

  const submit = queryStr => {
    setSearchParams(queryStr ? { query: queryStr } : {});
  };

  const location = useLocation();

  if (!films) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Form onSubmit={submit} />
      <ul className={s.list}>
        {films?.map(film => (
          <li key={film.id} className={s.item}>
            <Link
              state={{ from: location }}
              to={film.id.toString()}
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

export default Movies;
