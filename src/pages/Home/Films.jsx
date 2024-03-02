import React from 'react';

import { fetchFilms } from '../../helpers/api';
import { useHttp } from 'hooks/useHTTP';

import FilmsList from 'components/FilmsList';

const Films = () => {
  const [films] = useHttp(fetchFilms);

  return (
    <div>
      <FilmsList films={films} path={'movies/'} />
    </div>
  );
};

export default Films;
