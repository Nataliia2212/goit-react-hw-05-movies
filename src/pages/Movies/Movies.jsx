import React from 'react';
import { useState, useEffect } from 'react';
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from 'react-router-dom';

import Films from 'pages/Home/Films';
import FilmsList from 'components/FilmsList';

import { fetchFilmQuery } from 'helpers/api';

const Movies = () => {
  const [queryStr, setQueryStr] = useState('');
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState(null);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query1 = searchParams.get('query') || '';
  console.log('rerender');

  useEffect(() => {
    const getData = async () => {
      try {
        setError(null);
        const films = await fetchFilmQuery(query1);
        setFilms(films);
      } catch (error) {
      } finally {
      }
    };
    getData();
  }, [query1]);

  const handleChangeQuery = e => {
    setQueryStr(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(queryStr);
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
