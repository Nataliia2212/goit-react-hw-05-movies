import React from 'react';

import FilmsList from 'components/FilmsList/FilmsList';

import { fetchFilms } from '../../../helpers/api';
import { useHttp } from 'hooks/useHTTP';

const Films = () => {
  const [films] = useHttp(fetchFilms);

  return (
    <div>
      <FilmsList films={films} path={'movies/'} />
    </div>
  );
};

export default Films;
