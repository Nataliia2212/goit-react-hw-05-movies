import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchFilmCast } from 'helpers/api';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        // setError(null);
        const cast = await fetchFilmCast(movieId);
        setCast(cast);
      } catch (error) {
      } finally {
      }
    };
    getData();
  }, [movieId]);

  if (!cast) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {cast.map(actor => (
        <li key={actor.cast_id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            alt=" {actor.name}"
            width="75"
          />

          {actor.name}
        </li>
      ))}
    </div>
  );
};

export default Cast;
