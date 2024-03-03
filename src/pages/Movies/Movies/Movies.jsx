import React from 'react';
import { useSearchParams } from 'react-router-dom';

import Form from '../../../components/Form/Form';
import FilmsList from 'components/FilmsList/FilmsList';

import { fetchFilmQuery } from 'helpers/api';
import { useHttp } from 'hooks/useHTTP';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query1 = searchParams.get('query') || '';

  const [films] = useHttp(fetchFilmQuery, query1);

  const submit = queryStr => {
    setSearchParams(queryStr ? { query: queryStr } : {});
  };

  if (!films) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Form onSubmit={submit} />
      <FilmsList films={films} />
    </div>
  );
};

export default Movies;
