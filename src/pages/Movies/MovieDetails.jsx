import React, { useRef } from 'react';
import {
  useParams,
  NavLink,
  Outlet,
  Link,
  useLocation,
} from 'react-router-dom';

import { fetchFilmById } from 'helpers/api';
import { useHttp } from 'hooks/useHTTP';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/');

  const [film] = useHttp(fetchFilmById, movieId);

  if (!film) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Link className="btn" to={goBackRef.current}>
        Go back
      </Link>
      <h2>{film.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
        alt={film.title}
        width="400"
      />
      <p>User score: {film.vote_average}</p>
      <p>Genres: {film.genres.map(genre => genre.name)}</p>
      <p>Overview</p>
      <p>{film.overview}</p>
      <section>
        <nav>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </section>
    </div>
  );
};

export default MovieDetails;
