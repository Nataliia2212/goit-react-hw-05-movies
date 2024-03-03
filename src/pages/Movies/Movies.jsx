import React from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import Form from './Form';

import { fetchFilmQuery } from 'helpers/api';
import { useHttp } from 'hooks/useHTTP';

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
      <ul>
        {films?.map(film => (
          <li key={film.id}>
            <Link state={{ from: location }} to={film.id.toString()}>
              {film.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
