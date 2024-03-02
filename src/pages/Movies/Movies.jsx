import React from 'react';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import { fetchFilmQuery } from 'helpers/api';
import { useHttp } from 'hooks/useHTTP';

const Movies = () => {
  const [queryStr, setQueryStr] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const query1 = searchParams.get('query') || '';

  const [films] = useHttp(fetchFilmQuery, query1);

  const handleChangeQuery = e => {
    setQueryStr(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams(queryStr ? { query: queryStr } : {});
  };

  const location = useLocation();

  if (!films) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={queryStr}
          name="query"
          type="text"
          onChange={handleChangeQuery}
        />
        <button>Search</button>
      </form>
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
