import React from 'react';
import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { useRef } from 'react';
import { fetchFilms } from '../../helpers/api';
import FilmsList from 'components/FilmsList';

const Films = () => {
  const [films, setFilms] = useState(null);
  // const [error, setError] = useState(null);

  // const location = useLocation();
  // const goBackRef = useRef(location.state?.from || '/');

  useEffect(() => {
    const getData = async () => {
      try {
        // setError(null);
        const films = await fetchFilms();

        setFilms(films);
      } catch (error) {
      } finally {
      }
    };
    getData();
  }, []);
  return (
    <div>
      <FilmsList films={films} path={'movies/'} />
    </div>
  );
};

export default Films;
